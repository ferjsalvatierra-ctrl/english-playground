'use strict';
/* Práctica de Matemática · motor (copia adaptada del English Playground v2; el original no se toca) */
const CFG={lang:'es-AR',slug:'mate2s',
  groups:[['Números','Números hasta el 1500'],['Cuentas','Sumas, multiplicaciones y repartos'],['Cuerpos','Cuerpos geométricos'],['Medidas','Peso y tiempo']]};
const $=(s,r=document)=>r.querySelector(s);
const el=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
/* compara texto sin mirar tildes ni mayúsculas, pero conserva la ñ */
const norm=s=>String(s).toLowerCase().replace(/-/g,' ').replace(/ñ/g,'\u0001').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\u0001/g,'ñ').replace(/[^a-z0-9ñ ]/g,'').replace(/\s+/g,' ').trim();
/* números: acepta 1250, 1.250 y 1 250; coma o punto decimal; respeta el signo */
const toNum=s=>{s=String(s).trim().replace(/[.,]+$/,'').replace(/\s+/g,'').replace(/\.(?=\d{3}(\D|$))/g,'').replace(',','.');return /^-?\d+(\.\d+)?$/.test(s)?String(parseFloat(s)):null;};
/* horas: 3:30, 3.30, 03:30 y 3 30 son la misma respuesta */
const toTime=s=>{const d=String(s).replace(/\D/g,'');return d?String(parseInt(d,10)):null;};
const TOPICS=[];
let uid=0, muted=false;
const TTS='speechSynthesis' in window;
const EMO=/^(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic})*)\s*([\s\S]*)$/u;
const bigE=t=>{t=String(t);if(t[0]==='<')return t;const m=t.match(EMO);return m?'<span class="em">'+m[1]+'</span>'+(m[2]?' '+m[2]:''):t;};
const picOnly=t=>!/[A-Za-z0-9]/.test(String(t))&&String(t)[0]!=='<';

/* ---------- sound ---------- */
let AC;
function tone(f,d,t,v){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.type=t||'sine';o.frequency.value=f;g.gain.value=v||.08;o.connect(g);g.connect(AC.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.stop(AC.currentTime+d);}catch(e){}}
function fx(ok){if(muted)return;if(ok){tone(660,.12);setTimeout(()=>tone(880,.16),90);}else tone(180,.22,'triangle',.1);}
function say(t){if(!TTS||muted)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang=CFG.lang;u.rate=.85;const v=speechSynthesis.getVoices().find(x=>/^es/i.test(x.lang));if(v)u.voice=v;speechSynthesis.speak(u);}catch(e){}}

/* ---------- players and saved progress ----------
   Everything stays in this browser (localStorage). Each player has their own progress.
   r[key] = { b: mistakes in the best attempt, f: mistakes in the first attempt, a: attempts finished }  (key = topic.exercise) */
const KEY_PROFILES='ep-'+CFG.slug+'-profiles', KEY_PIN='ep-'+CFG.slug+'-pin', KEY_PREFIX='ep-'+CFG.slug+'-progress:';
let KEY=null, PROFILE=null, UNLOCK=false, ST={r:{},cur:-1};
const LS={get(k){try{return localStorage.getItem(k);}catch(e){return null;}},set(k,v){try{localStorage.setItem(k,v);}catch(e){}},del(k){try{localStorage.removeItem(k);}catch(e){}}};
const profiles=()=>{try{const p=JSON.parse(LS.get(KEY_PROFILES)||'null');return p&&p.list?p:{list:[],last:null};}catch(e){return {list:[],last:null};}};
const saveProfiles=p=>LS.set(KEY_PROFILES,JSON.stringify(p));
function legacyProgress(){return null;}
function loadProfile(id){
  const P=profiles();PROFILE=P.list.find(x=>x.id===id)||null;if(!PROFILE)return false;
  KEY=KEY_PREFIX+id;ST={r:{},cur:-1};
  try{const raw=LS.get(KEY);if(raw)ST=Object.assign(ST,JSON.parse(raw));}catch(e){}
  P.last=id;saveProfiles(P);UNLOCK=false;$('#who').textContent='👤 '+PROFILE.name;return true;
}
const save=()=>{if(KEY)LS.set(KEY,JSON.stringify(ST));};

/* ---------- scoring ---------- */
const sizeOf=ex=>ex.t==='mc'?ex.items.length:ex.t==='match'?ex.pairs.length:ex.t==='sort'?ex.items.length:ex.t==='order'?ex.items.length:ex.t==='type'?ex.items.length
  :ex.t==='fill'?ex.items.reduce((a,x)=>a+x.s.split('___').length-1,0):1;
const graded=ex=>ex.t!=='write';
const score=(n,m)=>Math.max(1,Math.round(100*n/(n+m))/10);          /* 10 = no mistakes. 6 items + 1 mistake = 8.6 */
const starsOf=b=>b===0?3:b<=2?2:1;
const fmt=x=>(Math.round(x*10)/10).toFixed(1).replace(/\.0$/,'').replace('.',',');
const LIVE={};                                                      /* attempts in progress on the screen */
function gradeStats(){
  let sb=0,sf=0,k=0,live=0;
  TOPICS.forEach((T,ti)=>T.ex.forEach((ex,ei)=>{
    if(!graded(ex))return;const key=ti+'.'+ei,R=ST.r[key],n=sizeOf(ex);
    if(R){sb+=score(n,R.b);sf+=score(n,R.f);k++;}
    else if(LIVE[key]&&!LIVE[key].fin&&LIVE[key].m>0){sb+=score(n,LIVE[key].m);sf+=score(n,LIVE[key].m);k++;live++;}
  }));
  return {best:k?sb/k:0,first:k?sf/k:0,k,live};
}
const topicGrade=ti=>{let s=0,k=0;TOPICS[ti].ex.forEach((ex,ei)=>{const R=ST.r[ti+'.'+ei];if(R&&graded(ex)){s+=score(sizeOf(ex),R.b);k++;}});return k?s/k:0;};
const gradeFace=g=>g>=9?'🤩':g>=7.5?'😀':g>=6?'🙂':'💪';
const gradeCls=g=>g>=8?'g-hi':g>=6?'g-mid':'g-lo';
const skipped=()=>{const out=[];TOPICS.forEach((T,ti)=>{const seen=ST.seen&&ST.seen[ti],any=T.ex.some((e,ei)=>ST.r[ti+'.'+ei]);if(!seen&&!any)return;T.ex.forEach((e,ei)=>{if(!ST.r[ti+'.'+ei])out.push([ti,ei]);});});return out;};
const imperfect=()=>{const out=[];TOPICS.forEach((T,ti)=>T.ex.forEach((ex,ei)=>{const R=ST.r[ti+'.'+ei];if(R&&R.b>0&&graded(ex))out.push([ti,ei]);}));return out;};

/* ---------- drag and tap ---------- */
function dragify(chip,onDrop,onTap){
  chip.addEventListener('pointerdown',e=>{
    if(['locked','used','placed','done'].some(k=>chip.classList.contains(k)))return;
    if(e.button>0)return;
    e.preventDefault();
    const sx=e.clientX,sy=e.clientY,r=chip.getBoundingClientRect(),ox=sx-r.left,oy=sy-r.top;
    let ghost=null,moved=false,hot=null;
    try{chip.setPointerCapture(e.pointerId);}catch(_){}
    const mv=ev=>{
      if(!moved&&Math.hypot(ev.clientX-sx,ev.clientY-sy)>10){
        moved=true;ghost=chip.cloneNode(true);ghost.classList.add('ghost');ghost.style.width=r.width+'px';
        document.body.append(ghost);chip.classList.add('dragging');
      }
      if(!moved)return;
      ghost.style.transform='translate('+(ev.clientX-ox)+'px,'+(ev.clientY-oy)+'px) rotate(-3deg)';
      const t=document.elementFromPoint(ev.clientX,ev.clientY),dz=t&&t.closest('.dz');
      if(hot&&hot!==dz)hot.classList.remove('hot');
      if(dz)dz.classList.add('hot');
      hot=dz;
      if(ev.clientY<90)scrollBy(0,-18);else if(ev.clientY>innerHeight-90)scrollBy(0,18);
    };
    const end=ev=>{
      chip.removeEventListener('pointermove',mv);chip.removeEventListener('pointerup',end);chip.removeEventListener('pointercancel',end);
      if(hot)hot.classList.remove('hot');
      if(moved){ghost.remove();chip.classList.remove('dragging');if(hot&&ev.type==='pointerup')onDrop(hot);}
      else if(ev.type==='pointerup')onTap();
    };
    chip.addEventListener('pointermove',mv);chip.addEventListener('pointerup',end);chip.addEventListener('pointercancel',end);
  });
}
const flash=(e,cls)=>{e.classList.add(cls);setTimeout(()=>e.classList.remove(cls),450);};

/* ---------- exercise types ----------
   Every type calls c.ok() once per item solved and c.mistake() once per wrong try. */
const TYPES={};

TYPES.mc=(ex,c,body)=>{
  if(ex.pre)body.append(el('div','passage',ex.pre));
  ex.items.forEach(it=>{
    const card=el('div','qcard');
    if(it.img)card.append(el('div','qimg',it.img));
    const q=el('div','qtext',it.q||'');
    if(it.say){
      const b=el('button','spk','🔊 Escuchar');b.onclick=()=>say(it.say);q.prepend(b);
      if(!TTS)q.append(el('div','hint','(La tablet no puede hablar. Leé: '+it.say+')'));
    }
    card.append(q);
    const row=el('div','opts');
    (ex.keep?it.opts:shuffle(it.opts)).forEach(o=>{
      const b=el('button','opt',bigE(o));
      b.onclick=()=>{
        if(card.classList.contains('ok'))return;
        if(o===it.a){b.classList.add('good');card.classList.add('ok');fx(true);c.ok();}
        else{b.classList.add('bad');b.disabled=true;c.mistake();fx(false);}
      };
      row.append(b);
    });
    card.append(row);body.append(card);
  });
};

TYPES.match=(ex,c,body)=>{
  const wrap=el('div','match'),L=el('div','mcol'),R=el('div','mcol');
  let sel=null,k=0;
  const mk=(txt,cls,i)=>{const e=el('div',cls+(picOnly(txt)?' pic':''),txt);e.dataset.i=i;return e;};
  const lefts=ex.pairs.map((p,i)=>mk(p[0],'chip big',i));
  const rights=shuffle(ex.pairs.map((p,i)=>mk(p[1],'slot dz big',i)));
  const clear=()=>{[...lefts,...rights].forEach(x=>x.classList.remove('sel'));sel=null;};
  const pair=(le,re)=>{
    if(le.classList.contains('done')||re.classList.contains('done'))return;
    if(le.dataset.i===re.dataset.i){
      const cc='p'+(k++%6);[le,re].forEach(x=>{x.classList.remove('sel','dz');x.classList.add('done',cc);});
      sel=null;fx(true);c.ok();
    }else{
      [le,re].forEach(x=>flash(x,'shake'));clear();c.mistake();fx(false);
    }
  };
  lefts.forEach(le=>dragify(le,dz=>{if(rights.includes(dz))pair(le,dz);},()=>{
    if(le.classList.contains('done'))return;
    if(sel&&sel.side==='R'){const r=sel.e;clear();pair(le,r);}
    else{clear();sel={side:'L',e:le};le.classList.add('sel');}
  }));
  rights.forEach(re=>re.addEventListener('click',()=>{
    if(re.classList.contains('done'))return;
    if(sel&&sel.side==='L'){const l=sel.e;clear();pair(l,re);}
    else{clear();sel={side:'R',e:re};re.classList.add('sel');}
  }));
  lefts.forEach(x=>L.append(x));rights.forEach(x=>R.append(x));
  wrap.append(L,R);body.append(wrap);
  body.append(el('div','hint','Arrastrá una tarjeta hasta su pareja, o tocá una y después la otra.'));
};

TYPES.sort=(ex,c,body)=>{
  let sel=null;
  const bx=el('div','buckets'),tray=el('div','tray');
  const place=(chip,bk)=>{
    if(chip.dataset.b.split('|').includes(bk.dataset.id)){      /* some cards fit in more than one box */
      chip.classList.remove('sel');chip.classList.add('placed');bk.querySelector('.bin').append(chip);
      sel=null;fx(true);c.ok();
    }else{flash(chip,'shake');chip.classList.remove('sel');sel=null;c.mistake();fx(false);}
  };
  ex.buckets.forEach(b=>{
    const d=el('div','bucket dz','<h4>'+bigE(b.label)+'</h4><div class="bin"></div>');d.dataset.id=b.id;
    d.addEventListener('click',()=>{if(sel)place(sel,d);});bx.append(d);
  });
  shuffle(ex.items).forEach(it=>{
    const ch=el('div','chip',bigE(it.t));ch.dataset.b=it.b;
    dragify(ch,dz=>{if(dz.classList.contains('bucket'))place(ch,dz);},()=>{
      if(sel===ch){ch.classList.remove('sel');sel=null;return;}
      if(sel)sel.classList.remove('sel');sel=ch;ch.classList.add('sel');
    });
    tray.append(ch);
  });
  body.append(bx,tray,el('div','hint','Arrastrá cada tarjeta a la caja correcta, o tocá la tarjeta y después la caja.'));
};

TYPES.fill=(ex,c,body)=>{
  let sel=null;const answers=[];
  const put=(ch,b)=>{
    if(b.classList.contains('ok'))return;
    if(b.dataset.a.split('|').includes(ch.textContent)){
      b.textContent=ch.textContent;b.classList.add('ok');b.classList.remove('hot');
      ch.classList.add('used');ch.classList.remove('sel');if(sel===ch)sel=null;
      fx(true);c.ok();
    }else{flash(b,'shake');ch.classList.remove('sel');sel=null;c.mistake();fx(false);}
  };
  ex.items.forEach(it=>{
    const line=el('div','fline');
    if(it.ico)line.append(el('span','ico',it.ico));
    const A=[].concat(it.a),parts=it.s.split('___');
    parts.forEach((p,i)=>{
      line.append(document.createTextNode(p));
      if(i<parts.length-1){
        const b=el('span','slot dz blank');b.dataset.a=A[i];
        b.onclick=()=>{if(sel)put(sel,b);};line.append(b);answers.push(A[i].split('|')[0]);
      }
    });
    body.append(line);
  });
  const bank=el('div','tray');
  shuffle(answers.concat(ex.extra||[])).forEach(w=>{
    const ch=el('div','chip',w);
    dragify(ch,dz=>{if(dz.classList.contains('blank'))put(ch,dz);},()=>{
      if(sel===ch){ch.classList.remove('sel');sel=null;return;}
      if(sel)sel.classList.remove('sel');sel=ch;ch.classList.add('sel');
    });
    bank.append(ch);
  });
  body.append(bank,el('div','hint','Arrastrá una ficha al lugar vacío, o tocá la ficha y después el lugar.'));
};

TYPES.order=(ex,c,body)=>{
  ex.items.forEach(s=>{
    const sent=typeof s==='string'?s:s.s;
    const q=el('div','ordq'),line=el('div','line dz'),tray=el('div','tray dz');
    if(s.ico)q.append(el('div','qimg',s.ico));
    let words=sent.split(' ');
    for(let n=0;n<6;n++){const w=shuffle(words);if(w.join(' ')!==sent){words=w;break;}}
    let done=false;
    const check=()=>{
      if(done||tray.children.length)return;
      const got=[...line.children].map(x=>x.textContent).join(' ');
      if(got===sent){done=true;line.classList.add('ok');[...line.children].forEach(x=>x.classList.add('locked'));fx(true);c.ok();}
      else{flash(line,'shake');c.mistake();fx(false);setTimeout(()=>{[...line.children].forEach(x=>tray.append(x));},700);}
    };
    const move=(ch,to)=>{if(done)return;to.append(ch);check();};
    words.forEach(w=>{
      const ch=el('div','chip',w);
      dragify(ch,dz=>{if(dz===line||dz===tray)move(ch,dz);},()=>move(ch,ch.parentNode===tray?line:tray));
      tray.append(ch);
    });
    q.append(line,tray);body.append(q);
  });
  body.append(el('div','hint','Poné las fichas en orden. Tocalas o arrastralas a la línea.'));
};

/* type the answer: every line has its own ✓ button, so one wrong line is never counted twice */
TYPES.type=(ex,c,body)=>{
  ex.items.forEach(it=>{
    const row=el('div','trow');
    if(it.ico)row.append(el('div','ico',it.ico));
    const q=el('div','q',it.q||'');
    if(it.say){const b=el('button','spk','🔊');b.setAttribute('aria-label','Escuchar');b.onclick=()=>say(it.say);q.prepend(b);if(!TTS)q.append(el('span','hint',' ('+it.say+')'));}
    const inp=el('input');inp.type='text';inp.id='t'+(++uid);inp.autocomplete='off';inp.spellcheck=false;
    inp.setAttribute('autocapitalize','off');inp.setAttribute('autocorrect','off');inp.setAttribute('enterkeyhint','done');inp.setAttribute('aria-label','Tu respuesta');if(it.num)inp.inputMode='numeric';
    const btn=el('button','rowchk','✓');btn.setAttribute('aria-label','Revisar esta respuesta');
    const hint=el('div','hint');
    row.append(q,inp,btn,hint);body.append(row);
    const st={tries:0,done:false,last:null};
    const key=it.tm?toTime:it.num?toNum:norm;
    const go=()=>{
      if(st.done)return;const v=key(inp.value);
      if(!v){flash(inp,'shake');if(inp.value.trim()&&(it.num||it.tm))hint.textContent=it.tm?'Escribilo con números, por ejemplo 3:30.':'Escribí solo números.';return;}
      if(v===st.last){flash(inp,'shake');return;}               /* same wrong answer again: not counted twice */
      const A=[].concat(it.a);
      if(A.map(key).includes(v)){st.done=true;row.classList.add('ok');inp.disabled=true;btn.disabled=true;fx(true);c.ok();}
      else{
        st.last=v;st.tries++;c.mistake();flash(row,'shake');fx(false);
        if(st.tries>=3){st.done=true;row.classList.add('reveal');inp.value=A[0];inp.disabled=true;btn.disabled=true;hint.textContent='Te mostramos la respuesta. ¡La próxima te sale!';c.ok();}
        else if(st.tries>=2)hint.textContent=(it.num||it.tm)?'Pensalo de nuevo, vos podés.':'Pista: empieza con “'+A[0][0]+'”';
      }
    };
    btn.onclick=go;inp.addEventListener('keydown',e=>{if(e.key==='Enter')go();});
  });
};

TYPES.write=(ex,c,body)=>{
  if(ex.ico)body.append(el('div','qimg',ex.ico));
  body.append(el('div','qtext',ex.prompt));
  const ta=el('textarea');ta.id='w'+(++uid);ta.placeholder='Escribí acá…';ta.setAttribute('aria-label','Tu texto');
  body.append(ta,el('div','hint','Marcá cada uno cuando lo hagas:'));
  const ch=el('div','checks');
  (ex.tips||[]).forEach(t=>{const b=el('button','chk',t);b.onclick=()=>b.classList.toggle('on');ch.append(b);});
  const btn=el('button','btn go','Terminé ✓'),out=el('div');
  btn.onclick=()=>{
    if(ta.value.trim().length<8){flash(ta,'shake');return;}
    out.innerHTML='<div class="model"><b>Un ejemplo:</b><br>'+ex.model+'</div>';btn.disabled=true;fx(true);c.ok();
  };
  body.append(ch,btn,out);
};

/* ---------- exercise wrapper: check row, score, redo ---------- */
function burst(card){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const b=card.querySelector('.exb'),em=['⭐','🎉','✨','🌟'];
  for(let i=0;i<12;i++){
    const s=el('span','confetti',em[i%4]);
    s.style.setProperty('--dx',(Math.random()*520-260)+'px');s.style.setProperty('--dy',(Math.random()*-260-20)+'px');s.style.setProperty('--r',(Math.random()*360)+'deg');
    b.append(s);setTimeout(()=>s.remove(),1200);
  }
}
const starHTML=n=>'<span class="st'+(n>=1?' on':'')+'">★</span><span class="st'+(n>=2?' on':'')+'">★</span><span class="st'+(n>=3?' on':'')+'">★</span>';

function mkEx(ex,ti,ei){
  const key=ti+'.'+ei,card=el('section','ex'),n=sizeOf(ex),isG=graded(ex);
  const head=el('header','exh','<span class="num">'+(ei+1)+'</span><h3>'+ex.title+'</h3><span class="stars"></span>');
  const body=el('div','exb'),foot=el('footer','exf');
  card.append(head,body,foot);
  let att=null;
  const showStars=()=>{const R=ST.r[key];head.querySelector('.stars').innerHTML=R?starHTML(isG?starsOf(R.b):3):'';card.classList.toggle('complete',!!R);};
  const renderFoot=()=>{
    const R=ST.r[key];let h='<div class="dots" aria-label="'+att.solved+' de '+n+' hechos">';
    for(let i=0;i<n;i++)h+='<span class="dot'+(i<att.solved?' on':'')+'">'+(i<att.solved?'✔':'')+'</span>';
    h+='</div>';
    h+='<div class="fmid">'+(att.fin?'<b>✔ ¡Listo!</b>':'<span>'+att.solved+' de '+n+' hechos</span>')+(att.m?'<span class="mis">✗ '+att.m+' error'+(att.m>1?'es':'')+'</span>':'')+'</div>';
    if(att.fin&&isG)h+='<div class="sc '+gradeCls(score(n,att.m))+'">Nota '+fmt(score(n,att.m))+'</div>';
    else if(R&&isG&&!att.fin)h+='<div class="best">Mejor nota '+fmt(score(n,R.b))+'</div>';
    foot.innerHTML=h;
    if(att.fin&&att.m>0){const b=el('button','btn redo','🔁 Intentar de nuevo');b.onclick=()=>start();foot.append(b);}
    else if(att.fin&&R&&R.a>1){foot.append(el('div','best','Jugado '+R.a+(R.a>1?' veces':' vez')));}
  };
  const c={
    ok(){if(att.fin)return;att.solved++;if(att.solved>=n)finish();renderFoot();updateTop();},
    mistake(){if(att.fin)return;att.m++;renderFoot();updateTop();}
  };
  function finish(){
    att.fin=true;const R=ST.r[key];
    const m=isG?att.m:0;
    if(!R)ST.r[key]={b:m,f:m,a:1};else{R.a=(R.a||0)+1;if(m<R.b)R.b=m;delete R.v1;}
    save();showStars();burst(card);
  }
  function start(){
    att=LIVE[key]={m:0,solved:0,fin:false};
    body.innerHTML='';TYPES[ex.t](ex,c,body);renderFoot();updateTop();
    if(ei>=0)card.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  showStars();
  att=LIVE[key]={m:0,solved:0,fin:false};TYPES[ex.t](ex,c,body);renderFoot();
  return card;
}

/* ---------- screens ---------- */
function updateTop(){
  let n=0,tot=0,st=0;
  TOPICS.forEach((T,ti)=>T.ex.forEach((ex,ei)=>{tot++;const R=ST.r[ti+'.'+ei];if(R){n++;st+=graded(ex)?starsOf(R.b):3;}}));
  $('#prog').style.width=(100*n/tot)+'%';
  $('#starTotal').textContent='★ '+st+' / '+tot*3;
  const g=gradeStats(),p=$('#gradePill');
  p.className='pill grade '+(g.k?gradeCls(g.best):'');
  p.innerHTML='<small>Nota</small> <b>'+(g.k?fmt(g.best):'–')+'</b><small>/10</small>';
}
const topicDone=ti=>TOPICS[ti].ex.every((e,ei)=>ST.r[ti+'.'+ei]);
const topicStars=ti=>TOPICS[ti].ex.reduce((a,e,ei)=>{const R=ST.r[ti+'.'+ei];return a+(R?(graded(e)?starsOf(R.b):3):0);},0);
const nextTodo=()=>TOPICS.findIndex((T,ti)=>!topicDone(ti));
const leaveScreen=()=>{Object.keys(LIVE).forEach(k=>delete LIVE[k]);updateTop();};

function showWho(){
  leaveScreen();const v=$('#view');v.innerHTML='';v.className='';UNLOCK=false;
  const P=profiles();
  v.insertAdjacentHTML('beforeend','<section class="card hero"><div><h1>¿Quién juega?</h1><p>Elegí tu nombre o agregá un jugador nuevo. Tus estrellas y tu nota se guardan solo para vos, en este dispositivo.</p></div><div class="big">🦉</div></section>');
  if(P.list.length){
    const row=el('div','who-list');
    P.list.forEach(p=>{const b=el('button','btn who-btn');b.textContent='👤 '+p.name;b.onclick=()=>{loadProfile(p.id);showHome();};row.append(b);});
    v.append(row);
  }
  const f=el('div','card who-new','<h3>➕ Jugador nuevo</h3><p class="hint">Usá un apodo, no el nombre completo.</p><div class="pbtns"><input id="wn" type="text" maxlength="14" placeholder="Apodo" autocomplete="off" autocapitalize="words" spellcheck="false"><button class="btn go" id="wgo">¡Empezar! ➜</button></div><div class="hint" id="wmsg"></div>');
  v.append(f);
  const go=()=>{
    const name=$('#wn').value.trim().replace(/\s+/g,' ');
    if(!name){$('#wmsg').textContent='Escribí primero un apodo.';return;}
    if(P.list.some(p=>p.name.toLowerCase()===name.toLowerCase())){$('#wmsg').textContent='Ese apodo ya está. Probá con otro.';return;}
    const id=Date.now().toString(36)+Math.random().toString(36).slice(2,5);
    P.list.push({id,name});saveProfiles(P);
    loadProfile(id);showHome();
  };
  $('#wgo').onclick=go;$('#wn').addEventListener('keydown',e=>{if(e.key==='Enter')go();});
  scrollTo(0,0);
}
function bootProfiles(){
  const P=profiles();
  if(P.list.length===1&&loadProfile(P.list[0].id))showHome();
  else showWho();
}

function showHome(){
  leaveScreen();ST.cur=-1;const v=$('#view');v.innerHTML='';v.className='';
  const total=TOPICS.reduce((a,T)=>a+T.ex.length,0),started=Object.keys(ST.r).length>0,bad=imperfect().length,skp=skipped().length,g=gradeStats();
  v.insertAdjacentHTML('beforeend','<section class="card hero"><div><h1>¡Hola! ¿Practicamos Matemática?</h1><p>Esta es tu práctica para el cierre de Matemática de 2.º grado. Cada estación empieza con una explicación cortita y sigue con juegos: arrastrá, tocá, uní, ordená y escribí.</p><ul class="facts"><li>'+TOPICS.length+' estaciones</li><li>'+total+' juegos</li><li>podés parar y seguir otro día</li></ul><button class="btn" id="start">'+(started?'Seguir':'¡Vamos!')+' ➜</button> '+(skp?'<button class="btn go" id="skp">⏭ Jugar los salteados ('+skp+')</button> ':'')+(bad?'<button class="btn alt" id="fix">🔁 Corregir mis errores ('+bad+')</button>':'')+'</div><div class="big">🦉</div></section>');
  if(skp)$('#skp').onclick=()=>showRedo('skip');
  $('#start').onclick=()=>{const n=nextTodo();if(n<0)showEnd();else showTopic(n);};
  if(bad)$('#fix').onclick=()=>showRedo('fix');
  if(g.k)v.insertAdjacentHTML('beforeend','<section class="scorebox '+gradeCls(g.best)+'"><div class="face">'+gradeFace(g.best)+'</div><div><div class="big">Tu nota: <b>'+fmt(g.best)+'</b> / 10</div><div class="sm">'+(g.best>=9?'¡Qué bien! ¡Trabajo bárbaro!':g.best>=7.5?'¡Muy bien! ¡Seguí así!':g.best>=6?'¡Bien! Jugá de nuevo los juegos 🔁 para subir la nota.':'¡Vos podés! Jugá de nuevo los juegos 🔁.')+'</div></div></section>');
  v.append(el('div','parents-slot'));
  v.querySelector('.parents-slot').replaceWith(parentsHome());
  CFG.groups.forEach(gp=>{
    const n=TOPICS.filter(T=>T.k===gp[0]).length;
    v.append(el('div','sec',gp[1]+' <small>'+n+' estaciones</small>'));
    const m=el('div','map');
    TOPICS.forEach((T,ti)=>{
      if(T.k!==gp[0])return;
      const tg=topicGrade(ti);
      const t=el('button','tile c'+(T.c%6)+(topicDone(ti)?' done':''),'<div class="e">'+T.emoji+'</div><div class="n">'+(ti+1)+'. '+T.name+'</div><div class="s">★ '+topicStars(ti)+' / '+T.ex.length*3+(tg?' · '+fmt(tg):'')+'</div>'+(()=>{const l=T.ex.filter((e,ei)=>!ST.r[ti+'.'+ei]).length;return l&&l<T.ex.length?'<div class="left">faltan '+l+'</div>':'';})());
      t.onclick=()=>showTopic(ti);m.append(t);
    });
    v.append(m);
  });
  v.append(el('div','nav','<button class="btn alt" id="toEnd">Ver mis estrellas 🏆</button>'));
  v.append(el('div','foot','Práctica casera de Matemática, no es material oficial del colegio. No se guarda ni se envía ningún dato personal: todo queda en este dispositivo.'));
  $('#toEnd').onclick=showEnd;scrollTo(0,0);
}

function showTopic(i){
  leaveScreen();ST.cur=i;(ST.seen=ST.seen||{})[i]=1;save();const T=TOPICS[i],v=$('#view');v.innerHTML='';v.className='c'+(T.c%6);
  v.insertAdjacentHTML('beforeend','<section class="card thero"><div><div class="tk">'+(CFG.groups.find(g=>g[0]===T.k)||[0,T.k])[1]+' · '+(i+1)+' de '+TOPICS.length+'</div><h2>'+T.name+'</h2></div><div class="temo">'+T.emoji+'</div></section><aside class="about"><h4>¿De qué se trata?</h4><p>'+T.about+'</p>'+(T.tip?'<div class="tip">'+T.tip+'</div>':'')+'</aside>');
  v.append(parentsTopic(i));
  T.ex.forEach((e,ei)=>v.append(mkEx(e,i,ei)));
  const nav=el('div','nav'),prev=el('button','btn alt','⬅ Atrás'),next=el('button','btn go',i===TOPICS.length-1?'Terminar 🏁':'Siguiente estación ➜');
  if(i===0)prev.disabled=true;
  prev.onclick=()=>showTopic(i-1);next.onclick=()=>i===TOPICS.length-1?showEnd():showTopic(i+1);
  nav.append(prev,next);v.append(nav);scrollTo(0,0);updateTop();
}

function showRedo(kind){
  leaveScreen();const v=$('#view');v.innerHTML='';v.className='';
  const sk=kind==='skip',list=sk?skipped():imperfect();
  v.insertAdjacentHTML('beforeend','<section class="card hero"><div><h1>'+(sk?'⏭ Juegos salteados':'🔁 Corregir mis errores')+'</h1><p>'+(sk?'Dejaste estos juegos para después. ¡Es el momento de jugarlos!':'En estos juegos tuviste algunos errores. ¡Jugalos de nuevo y ganá más estrellas!')+'</p><button class="btn alt" id="bk">⬅ Volver al mapa</button></div><div class="big">💪</div></section>');
  $('#bk').onclick=showHome;
  if(!list.length)v.append(el('div','sec',(sk?'No saltaste ninguno. ¡Genial! 🏆':'No hay nada para corregir. ¡Sos un campeón! 🏆')));
  list.slice(0,6).forEach(([ti,ei])=>{
    v.append(el('div','sec','<span class="rt">'+TOPICS[ti].emoji+' '+TOPICS[ti].name+'</span>'));
    v.append(mkEx(TOPICS[ti].ex[ei],ti,ei));
  });
  if(list.length>6)v.append(el('div','hint','Jugá estos primero. Después volvé por '+(list.length-6)+' más.'));
  scrollTo(0,0);updateTop();
}

function showEnd(){
  leaveScreen();const v=$('#view');v.innerHTML='';v.className='';
  let st=0,tot=0;TOPICS.forEach((T,ti)=>{st+=topicStars(ti);tot+=T.ex.length*3;});
  const g=gradeStats(),left=TOPICS.filter((T,ti)=>!topicDone(ti)).length,bad=imperfect().length;
  const msg=left?('Todavía te '+(left>1?'faltan '+left+' estaciones':'falta '+left+' estación')+' por jugar. Tocá el mapa para encontrarlas.'):g.best>=8.5?'¡Increíble! Ya practicaste todo para el cierre.':g.best>=6.5?'¡Muy buen trabajo! Jugá de nuevo los juegos 🔁 para subir más.':'¡Buen trabajo! Probá de nuevo para ganar más estrellas.';
  v.insertAdjacentHTML('beforeend','<section class="card hero"><div><h1>★ '+st+' de '+tot+' · Nota '+(g.k?fmt(g.best):'–')+'</h1><p>'+msg+'</p><button class="btn" id="m2">Volver al mapa 🗺️</button> '+(skipped().length?'<button class="btn go" id="sk2">⏭ Jugar los salteados ('+skipped().length+')</button> ':'')+(bad?'<button class="btn alt" id="fx2">🔁 Corregir mis errores ('+bad+')</button> ':'')+'<button class="btn alt" id="rs">Empezar de nuevo</button></div><div class="big">🏆</div></section><div class="sec">Tus estrellas</div>');
  const gr=el('div','endgrid');
  TOPICS.forEach((T,ti)=>{const tg=topicGrade(ti);gr.append(el('div','',T.emoji+' '+T.name+'<br>'+'★'.repeat(Math.round(topicStars(ti)/T.ex.length))+' ('+topicStars(ti)+'/'+T.ex.length*3+')'+(tg?' · <b>'+fmt(tg)+'</b>':'')));});
  v.append(gr);
  $('#m2').onclick=showHome;if(bad)$('#fx2').onclick=()=>showRedo('fix');if($('#sk2'))$('#sk2').onclick=()=>showRedo('skip');
  let armed=false;
  $('#rs').onclick=function(){if(!armed){armed=true;this.textContent='Tocá de nuevo para borrar todo';return;}ST.r={};ST.seen={};save();updateTop();showHome();};
  scrollTo(0,0);
}
