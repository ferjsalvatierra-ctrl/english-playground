'use strict';
/* Panel para padres (español). Las respuestas resueltas se generan de los mismos datos que los juegos. */
const PAR=[
/*0 Daily Routines*/{q:'Rutinas diarias: verbos de lo que hacemos todos los días. Ojo con los verbos que acompañan: <i>have</i> breakfast, <i>do</i> homework, <i>go</i> to school, <i>brush</i> teeth.',c:'Pedile que cuente su día en voz alta, en orden: "I wake up, I brush my teeth, I have breakfast…". Que lo haga mímica incluida.',e:'Mezclar <i>do</i> y <i>have</i> (“do breakfast”). La combinación es fija: se memoriza, no se deduce.',h:'Cuando haga algo de la rutina, que lo diga en inglés: "Now I brush my teeth".',g:['wake up = despertarse','brush my teeth = cepillarme los dientes','have breakfast = desayunar','go to school = ir al colegio','watch TV = mirar TV','go to bed = ir a dormir','do my homework = hacer la tarea','have lunch / dinner = almorzar / cenar'],x:['Unir dibujo con frase. Tocar uno y luego su pareja, o arrastrar.','Clasificar en mañana / tarde / noche. Algunas actividades valen en dos momentos (la tarea puede ser a la tarde o a la noche): el juego acepta ambas.','Completar con el verbo correcto. Sobra una palabra (<i>play</i>) para que piense.']},
/*1 Actions*/{q:'Verbos de acción: run, swim, jump, dance, sing, read, write, eat, drink, sleep.',c:'Jugar a "Simon says": vos decís "jump" y él salta. Es la forma más rápida de fijarlos.',e:'Escribir mal los verbos largos (<i>drink</i>, <i>write</i>). En el juego de completar tiene pistas con letras.',h:'Mímica: uno actúa, el otro adivina en inglés.',g:['run = correr','swim = nadar','jump = saltar','dance = bailar','sing = cantar','read = leer','write = escribir','eat = comer','drink = beber','sleep = dormir'],x:['Mirar el dibujo y elegir el verbo (<i>He can…</i>).','Completar letras faltantes. Cada renglón tiene su botón ✓; se puede corregir sin perder puntos extra.']},
/*2 Months*/{q:'Meses, días de la semana y estaciones. En inglés van con mayúscula. Ojo: en Argentina las estaciones son las del hemisferio sur (diciembre = verano).',c:'Que recite los meses como una canción. Para estaciones, usar su propia experiencia: "¿En diciembre hace calor? Entonces es summer".',e:'Pensar que diciembre es invierno (como en los dibujos del hemisferio norte). El examen usa la realidad argentina.',h:'Armar un calendario con los cumpleaños de la familia en inglés.',g:['summer = verano (dic–feb)','autumn = otoño (mar–may)','winter = invierno (jun–ago)','spring = primavera (sep–nov)'],x:['Ordenar palabras: enero a junio, julio a diciembre y los días.','Clasificar meses por estación (hemisferio sur).','Preguntas para pensar sobre meses y días.']},
/*3 Clothes*/{q:'Ropa: shorts, T-shirt, sandals, cap, scarf, gloves, jacket, boots… y cuándo se usa cada una.',c:'Preguntarle qué se pone hoy en inglés: "I am wearing…". Conecta con el tema <i>Wearing</i>.',e:'<i>Trousers</i>, <i>jeans</i> y <i>shorts</i> son plurales: "my jeans are blue".',h:'Al vestirse, nombrar cada prenda en inglés.',g:['shorts = short','T-shirt = remera','sandals = ojotas/sandalias','cap = gorra','scarf = bufanda','gloves = guantes','jacket = campera','boots = botas'],x:['Unir dibujo y prenda.','Clasificar: día de calor / día de frío.','¿Qué te ponés? Elegir según la situación.']},
/*4 Body*/{q:'Partes del cuerpo y plurales irregulares: one foot → two <b>feet</b>.',c:'Jugar a "touch your nose": señalar partes mientras las nombra. Remarcar que <i>eyes, ears, hands</i> terminan en -s pero <i>feet</i> no.',e:'Decir "foots". Es el error clásico: <i>foot → feet</i>.',h:'Dibujar un monstruo y rotular cada parte en inglés.',g:['eyes = ojos','ears = orejas','nose = nariz','mouth = boca','hands = manos','feet = pies','arms / legs = brazos / piernas','head = cabeza'],x:['Unir dibujo con palabra.','Elegir la parte del cuerpo según la pista.','Escribir el plural: <i>two eyes, two feet</i>, <i>one nose</i>. Cada línea con su ✓.']},
/*5 School Objects*/{q:'Útiles escolares: pencil, ruler, scissors, backpack, eraser, notebook…',c:'Que nombre en inglés lo que hay en su mochila. Ojo: <i>scissors</i> es plural ("my scissors are new").',e:'Ortografía: <i>pencil, scissors, backpack</i>. El juego da letras como pista.',h:'Etiquetar con papelitos los objetos del escritorio.',g:['pencil = lápiz','ruler = regla','scissors = tijera','backpack = mochila','eraser = goma','notebook = cuaderno'],x:['Unir dibujo y palabra.','Elegir el objeto correcto.','Completar la palabra con letras faltantes (con ✓ en cada línea).']},
/*6 City*/{q:'Lugares de la ciudad: school, bank, hospital, supermarket, bakery, library, pharmacy, park…',c:'Mientras pasean: "Look! A bakery!". Conecta con preposiciones (<i>next to, opposite</i>).',e:'Confundir <i>library</i> (biblioteca) con "librería" (que sería <i>bookshop</i>).',h:'Dibujar el barrio y rotular los lugares.',g:['bakery = panadería','supermarket = supermercado','pharmacy = farmacia','library = biblioteca','hospital = hospital','bank = banco','park = plaza/parque','shoe shop = zapatería'],x:['Unir edificio con su nombre.','¿A dónde vas para…? Pensar la función del lugar.','Clasificar: negocios (shops) / lugares públicos.']},
/*7 Jobs*/{q:'Profesiones y dónde trabajan: A doctor works in a hospital.',c:'Preguntarle qué quiere ser: "I want to be a…". Ojo: <i>works IN</i> un lugar cerrado, <i>works ON</i> una granja.',e:'Olvidar la -s de la tercera persona: "a doctor works" (no "work").',h:'Jugar a las adivinanzas: "I work in a school. I teach children. Who am I?"',g:['doctor = médico/a','teacher = docente','farmer = granjero/a','cook = cocinero/a','pilot = piloto','firefighter = bombero/a','police officer = policía'],x:['Unir persona y profesión.','¿Quién es? Elegir por la pista.','Completar dónde trabaja cada uno (sobran <i>bank</i> y <i>library</i>).']},
/*8 Chores*/{q:'Tareas del hogar: sweep the floor, wash the dishes, make the bed, do the laundry, take out the rubbish, water the plants.',c:'Pedirle que cuente qué tarea hace él en casa. Remarcar los verbos: se dice <i>make</i> the bed (no "do the bed").',e:'<i>Wash the dishes</i> y <i>do the dishes</i> son correctas las dos; el juego acepta ambas.',h:'Dividir las tareas del finde en inglés, con una lista pegada en la heladera.',g:['sweep = barrer','wash the dishes = lavar los platos','make the bed = hacer la cama','do the laundry = lavar la ropa','take out the rubbish = sacar la basura','water the plants = regar'],x:['Unir dibujo con tarea.','Completar con el verbo (sobran <i>do</i> y <i>cook</i> como distractores, salvo <i>do the dishes</i>, que también vale).','Escribir libremente. No se califica solo: se compara con el modelo.']},
/*9 Numbers*/{q:'Números hasta 100 en palabras. Decenas: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety. Los compuestos llevan guion: twenty-<b>seven</b>.',c:'Practicar con precios, patentes, teléfonos. Ojo: <i>thirteen/thirty</i>, <i>fourteen/forty</i> se confunden al escuchar.',e:'Escribir <i>forty</i> como "fourty". Se escribe sin la u.',h:'Sumas rápidas en inglés mientras cenan: "twenty plus ten is…".',g:['13 thirteen / 30 thirty','14 fourteen / 40 forty','15 fifteen / 50 fifty','100 = one hundred'],x:['Unir número con palabra.','Escribir el número con letras. Acepta con o sin guion.','Sumas y restas: acepta número o palabra.']},
/*10 To Be*/{q:'Verbo to be: I <b>am</b>, you/we/they <b>are</b>, he/she/it <b>is</b>. Negativo: <i>am not, isn’t, aren’t</i>. Pregunta: se invierte (<i>Are you…?</i>).',c:'Explicarle que es el verbo "ser/estar". Hacer 5 frases con distintas personas.',e:'Decir "I is" o "she are". Que lo asocie: I → am (único), plural → are.',h:'Presentar a cada miembro de la familia: "My dad is tall. My sisters are…".',x:['Completar con am / is / are. Hay chips repetidos: cualquiera sirve donde corresponda.','Elegir la forma negativa.','Armar preguntas con palabras desordenadas. Si se equivoca, las palabras vuelven a la bandeja.']},
/*11 Simple Present*/{q:'Presente simple: hábitos. Con he/she/it se agrega <b>-s</b> (<i>She likes</i>). Negativo: <b>don’t</b> (I, you, we, they) y <b>doesn’t</b> (he, she, it). Con doesn’t el verbo NO lleva -s.',c:'Regla simple: "doesn’t se come la -s" → <i>He doesn’t like</i> (no "likes").',e:'"He doesn’t likes". Es el error más común del examen.',h:'Contar rutinas de personas: "My mum works… she doesn’t work on Sunday".',x:['Elegir el verbo correcto.','Clasificar sujetos: <i>don’t</i> o <i>doesn’t</i>.','Armar oraciones: preguntas con Do/Does y negativas.']},
/*12 Whose*/{q:'Posesivo con ’s: <i>Tom’s pen</i> = la lapicera de Tom. <i>Whose pen is it?</i> = ¿de quién es?',c:'Mostrar objetos de la casa: "Whose bag is it? It’s mum’s bag".',e:'Escribir "Toms pen" sin apóstrofo, o decir "the pen of Tom" (se entiende pero no es natural en inglés).',h:'Mezclar objetos de la familia y preguntar "Whose…?"',x:['Unir objeto con su dueño.','Elegir la respuesta correcta a <i>Whose…?</i>','Escribir el dueño con ’s: <i>Tom’s, Anna’s, teacher’s</i>. Cada línea con su ✓.']},
/*13 Can*/{q:'<i>Can</i> expresa habilidad: I <b>can</b> swim. Negativo: <b>can’t</b>. Pregunta: <i>Can you…?</i> Después de can, el verbo va sin -s ni to.',c:'Preguntarle "Can a fish swim?" y que responda "Yes, it can" / "No, it can’t".',e:'"He cans swim" o "can to swim". Siempre: can + verbo simple.',h:'Juego de "¿Puede o no puede?" con animales.',x:['Pensar: ¿sí o no? y responder con respuesta corta.','Completar con <i>can / can’t / Can</i>.','Escribir sobre lo que él puede hacer. No se califica solo.']},
/*14 Have got*/{q:'<i>Have got</i> = tener. I/you/we/they <b>have</b> got; he/she/it <b>has</b> got. Negativo: <i>haven’t / hasn’t got</i>. Pregunta: <i>Have you got…?</i>',c:'Mostrar lo que tiene: "I have got a dog". Para él/ella, cambia a <i>has</i>.',e:'"She have got". Con she/he/it siempre <i>has</i>.',h:'Describir a un amigo: "He has got brown hair".',x:['Completar con have / has.','Elegir la forma negativa.','Armar preguntas y negativas con palabras desordenadas.']},
/*15 Prepositions*/{q:'Preposiciones de lugar: on, under, in, behind, in front of, next to, between, opposite.',c:'Con un peluche: lo pone sobre la mesa, abajo, atrás… y dice dónde está.',e:'Confundir <i>in front of</i> con <i>opposite</i>: <i>opposite</i> es "enfrente, del otro lado de la calle".',h:'Esconder un objeto y dar pistas: "It’s under the chair".',x:['Mirar el dibujo del gato y elegir la preposición.','Leer el mapa de la ciudad y elegir.','Completar con la palabra de lugar (sobran <i>in</i> y <i>behind</i>).']},
/*16 There is*/{q:'<i>There is</i> (uno) / <i>There are</i> (varios): hay. Negativo: <i>isn’t / aren’t</i>. Pregunta: <i>Is there…? Are there…?</i> Con <i>any</i> en preguntas y negativos plurales.',c:'Que cuente lo que ve en la habitación: "There is a lamp. There are two chairs".',e:'Usar <i>is</i> con plurales ("There is two cars").',h:'Contar objetos de la casa en inglés.',x:['Elegir <i>is</i> o <i>are</i> según la cantidad en el dibujo.','Completar respuestas, negativos y preguntas. 🚫 = negativo, ✅ = afirmativo.','Contar y escribir el número (cifra o palabra).']},
/*17 Possessives*/{q:'Posesivos: my, your, his, her, its, our, their. <i>His</i> = de él, <i>her</i> = de ella, <i>its</i> = de un animal o cosa.',c:'Ver de quién es cada cosa: "Her doll", "His bike". Que mire quién es el dueño, no el objeto.',e:'Confundir <i>his</i> y <i>her</i>: el posesivo depende del dueño.',h:'Señalar objetos de la familia y decir de quién son.',x:['Completar con el posesivo correcto.','Unir pronombre con su posesivo (I → my).','Elegir la palabra correcta en la frase.']},
/*18 This That*/{q:'<i>This/these</i> = cerca. <i>That/those</i> = lejos. Singular: this/that; plural: these/those.',c:'Mostrar con la mano: lo cercano es <i>this</i>, lo lejano <i>that</i>.',e:'Mezclar singular y plural (<i>this shoes</i> → <i>these shoes</i>).',h:'En el parque: "That tree is big. These leaves are red".',x:['Mirar el dibujo (cerca o lejos) y elegir.','Clasificar frases: cerca / lejos.','Armar oraciones con palabras desordenadas.']},
/*19 Wearing*/{q:'<i>Wearing</i> = llevando puesto. I <b>am</b> wearing…, she <b>is</b> wearing…, they <b>are</b> wearing… Combina ropa con presente continuo.',c:'Mirar una foto de la familia y describir qué lleva cada uno.',e:'Omitir <i>am/is/are</i> ("She wearing").',h:'Describir la ropa de las personas en un café o parque.',x:['Mirar el dibujo y elegir qué lleva puesto.','Completar con am / is / are.','Escribir lo que lleva puesto él. No se califica solo.']},
/*20 Present Continuous*/{q:'Presente continuo: lo que pasa ahora. <b>am/is/are + verbo-ing</b>. Cambios: <i>run → running, swim → swimming, sit → sitting</i> (se duplica la consonante); <i>dance → dancing</i> (se quita la e).',c:'"What are you doing?" Que responda "I am reading". Mirar por la ventana y contar lo que pasa.',e:'No duplicar la consonante en <i>running/swimming/sitting</i>.',h:'Narrar lo que hacen todos en casa en este momento.',x:['Completar con am / is / are.','Elegir la forma negativa.','Agregar -ing al verbo. Cada línea con ✓. Mirar la regla de duplicar consonante y quitar la e.']},
/*21 Reading*/{q:'Comprensión de lectura: texto corto y preguntas. Se busca la respuesta en el texto, no se inventa.',c:'Leer juntos el texto y subrayar con el dedo dónde está cada respuesta. En verdadero/falso, buscar la frase exacta.',e:'Responder de memoria o por lógica en lugar de buscar en el texto.',h:'Leer cuentos cortos en inglés y preguntar "Who? Where? What?"',x:['Leer sobre Lucy y elegir.','Verdadero o falso.']},
/*22 Listening*/{q:'Comprensión auditiva: escuchar y elegir, escribir números y deletrear.',c:'Que toque 🔊 varias veces. Si la tablet no habla, la palabra aparece escrita. Practicar los números y el abecedario.',e:'Confundir <i>thirteen/thirty</i>. Atención a la -teen (más largo) vs -ty.',h:'Dictarle números de teléfono y palabras en inglés.',x:['Escuchar y elegir el dibujo.','Escuchar y escribir el número.','Escuchar y deletrear la palabra (✓ por línea).']},
/*23 Writing*/{q:'Escritura: oraciones completas con mayúscula al inicio y punto final.',c:'Pedirle que lea en voz alta lo que escribió. Revisar: mayúscula, punto, y que no falte el verbo.',e:'Olvidar el verbo (<i>I eight years old</i>) o la mayúscula.',h:'Escribir 3 oraciones por día sobre su día.',x:['Armar oraciones con palabras desordenadas.','Escribir sobre sí mismo. No se califica solo: se compara con el modelo.','Describir un cuarto con las preposiciones aprendidas.']}
];

const TYPE_ES={mc:'Opción múltiple',match:'Unir',sort:'Clasificar',fill:'Completar',order:'Ordenar palabras',type:'Escribir',write:'Escritura libre'};

function solveHTML(ex){
  const a=x=>'<span class="ans">'+x+'</span>',svgish=s=>String(s).trim().startsWith('<svg');
  let h='<ul>';
  if(ex.t==='mc'){
    if(ex.pre)h='<p><i>'+ex.pre+'</i></p><ul>';
    ex.items.forEach(it=>{
      const q=(it.q||it.say||'').replace('___',a(svgish(it.a)?'…':it.a));
      h+='<li>'+q+' → '+(svgish(it.a)?'<span class="ans">'+it.a+'</span>':a(it.a))+'</li>';
    });
  }else if(ex.t==='match'){ex.pairs.forEach(p=>{h+='<li>'+p[0]+' → '+a(p[1])+'</li>';});}
  else if(ex.t==='sort'){
    ex.buckets.forEach(b=>{
      const names=ex.items.filter(it=>it.b.split('|').includes(b.id)).map(it=>it.t.replace(/^\P{L}+/u,'').trim()||it.t);
      h+='<li><b>'+b.label+':</b> '+a(names.join(', '))+'</li>';
    });
  }else if(ex.t==='fill'){
    ex.items.forEach(it=>{let i=0;const A=[].concat(it.a);h+='<li>'+it.s.replace(/___/g,()=>a(A[i++].split('|').join(' / ')))+'</li>';});
    if(ex.extra&&ex.extra.length)h+='<li><i>Sobran (distractores):</i> '+ex.extra.join(', ')+'</li>';
  }else if(ex.t==='order'){ex.items.forEach(s=>{h+='<li>'+a(typeof s==='string'?s:s.s)+'</li>';});}
  else if(ex.t==='type'){ex.items.forEach(it=>{h+='<li>'+(it.q||'')+' → '+a([].concat(it.a).join(' / '))+'</li>';});}
  else if(ex.t==='write'){h='<p><i>Consigna:</i> '+ex.prompt+'</p><p>Ejemplo de respuesta: '+a(ex.model)+'</p><ul>';}
  return h+'</ul>';
}

const pinHash=s=>btoa(unescape(encodeURIComponent('ep:'+s+':v2')));
/* Adults-only gate (a simple 4-digit code kept on this device; it keeps kids out, it is not real security). */
function gate(d,build){
  d.addEventListener('toggle',()=>{
    if(!d.open)return;
    if(UNLOCK){build();return;}
    if(d.querySelector('.pgate'))return;
    const has=!!LS.get(KEY_PIN);
    const g=el('div','pgate','<p>🔒 <b>Zona de adultos.</b> '+(has?'Ingresá tu clave de 4 números.':'Creá una clave de 4 números para abrir este panel. Solo la vas a necesitar vos; los chicos no deberían ver las respuestas.')+'</p><div class="pbtns"><input type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="off" placeholder="••••"><button class="btn alt">'+(has?'Entrar':'Crear clave')+'</button></div><div class="hint"></div>');
    d.append(g);
    const inp=g.querySelector('input'),msg=g.querySelector('.hint');
    const ok=()=>{const v=inp.value.trim();
      if(!/^\d{4}$/.test(v)){msg.textContent='Son 4 números.';return;}
      if(!has){LS.set(KEY_PIN,pinHash(v));}
      else if(LS.get(KEY_PIN)!==pinHash(v)){msg.textContent='Esa clave no es correcta.';inp.value='';return;}
      UNLOCK=true;g.remove();build();
    };
    g.querySelector('button').onclick=ok;inp.addEventListener('keydown',e=>{if(e.key==='Enter')ok();});
  });
}

function parentsTopic(ti){
  const T=TOPICS[ti],P=PAR[ti]||{},d=el('details','parents');
  d.innerHTML='<summary>👨‍👩‍👦 Para padres: explicación y ejercicios resueltos (tocar para abrir)</summary>';
  let built=false;
  gate(d,()=>{
    if(built)return;built=true;
    let h='<h5>De qué trata</h5><p>'+(P.q||'')+'</p><h5>Cómo explicárselo</h5><p>'+(P.c||'')+'</p><h5>Error típico</h5><p>'+(P.e||'')+'</p><h5>Para practicar sin pantalla</h5><p>'+(P.h||'')+'</p>';
    if(P.g)h+='<h5>Vocabulario</h5><ul>'+P.g.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
    h+='<h5>Ejercicios resueltos</h5>';
    d.insertAdjacentHTML('beforeend',h);
    T.ex.forEach((ex,ei)=>{
      const s=el('details','',''),R=ST.r[ti+'.'+ei];
      s.innerHTML='<summary>Ejercicio '+(ei+1)+' · '+TYPE_ES[ex.t]+' · <i>'+ex.title+'</i>'+(R?(R.b?' · hizo '+R.b+' error'+(R.b>1?'es':''):' · sin errores'):'')+'</summary><div class="sol">'+(P.x&&P.x[ei]?'<span class="note">'+P.x[ei]+'</span>':'')+solveHTML(ex)+'</div>';
      d.append(s);
    });
  });
  return d;
}

function parentsHome(){
  const d=el('details','parents');
  d.innerHTML='<summary>👨‍👩‍👦 Para padres: cómo funciona y avance (tocar para abrir)</summary>';
  gate(d,()=>{
    const old=d.querySelector('.pbody');if(old)old.remove();
    const g=gradeStats();
    let h='<div class="pbody"><h5>Cómo funciona</h5><ul><li>Son '+TOPICS.length+' estaciones de unos 3 juegos cada una. No hace falta hacerlas en orden ni de una vez.</li><li><b>Nota (1 a 10) en vivo:</b> promedio de los juegos terminados. Cada juego vale 10 × aciertos / (aciertos + errores). Ejemplo: 6 ítems con 1 error = 8,6. Los juegos de escritura libre no entran en la nota.</li><li><b>Estrellas:</b> 3 = sin errores, 2 = 1 o 2 errores, 1 = más. Con <b>🔁 Try again</b> repite el juego y se queda con el mejor intento.</li><li><b>⏭ Skipped:</b> los juegos que se saltea quedan pendientes y se pueden resolver después desde la pantalla principal.</li><li>El avance se guarda en esta tablet y navegador (no se envía a ningún lado). Si cambia de dirección web, usar “copiar / pegar progreso”.</li></ul>';
    h+='<h5>Avance</h5><p>Nota actual: <b>'+(g.k?fmt(g.best).replace('.',','):'–')+'</b>/10 · primer intento (sin repetir): <b>'+(g.k?fmt(g.first).replace('.',','):'–')+'</b>/10 · juegos hechos: <b>'+Object.keys(ST.r).length+'</b> de '+TOPICS.reduce((a,T)=>a+T.ex.length,0)+'</p>';
    h+='<table class="ptab"><tr><th>Estación</th><th>Nota</th><th>Hechos</th><th>Con errores</th></tr>';
    TOPICS.forEach((T,ti)=>{
      const done=T.ex.filter((e,ei)=>ST.r[ti+'.'+ei]).length,bad=T.ex.filter((e,ei)=>ST.r[ti+'.'+ei]&&ST.r[ti+'.'+ei].b>0&&graded(e)).length,tg=topicGrade(ti);
      h+='<tr><td>'+(ti+1)+'. '+T.name+'</td><td>'+(tg?fmt(tg).replace('.',','):'–')+'</td><td>'+done+'/'+T.ex.length+'</td><td>'+(bad||'')+'</td></tr>';
    });
    h+='</table><h5>Pasar el progreso a otra tablet o dirección</h5><div class="pbtns"><button class="btn alt" id="pExp">Copiar progreso</button><button class="btn alt" id="pImp">Pegar progreso</button></div><textarea id="pBox" placeholder="Acá aparece el código al copiar. Para pegar, pegarlo acá y tocar Pegar progreso."></textarea><div class="hint" id="pMsg"></div><h5>Privacidad y jugador</h5><ul><li>Jugador actual: <b id="pWho"></b>. Todo queda guardado solo en este dispositivo y navegador; la página no envía ni recibe datos personales.</li><li>Es una práctica casera, no es material oficial del colegio. Las respuestas del panel son una guía; las del examen real pueden variar.</li></ul><div class="pbtns"><button class="btn alt" id="pDel">Borrar este jugador y su avance</button></div></div>';
    d.insertAdjacentHTML('beforeend',h);
    $('#pWho').textContent=PROFILE?PROFILE.name:'';
    let armed=false;$('#pDel').onclick=function(){if(!armed){armed=true;this.textContent='Tocá de nuevo para confirmar';return;}const P=profiles();P.list=P.list.filter(x=>!PROFILE||x.id!==PROFILE.id);P.last=null;saveProfiles(P);if(KEY)LS.del(KEY);PROFILE=null;KEY=null;UNLOCK=false;$('#who').textContent='👤';showWho();};
    $('#pExp').onclick=()=>{const code=btoa(JSON.stringify({r:ST.r,seen:ST.seen||{}}));$('#pBox').value=code;try{navigator.clipboard.writeText(code);}catch(e){}$('#pMsg').textContent='Código listo. Guardalo y pegalo en la otra dirección.';};
    $('#pImp').onclick=()=>{
      try{
        const o=JSON.parse(atob($('#pBox').value.trim()));
        Object.keys(o.r||{}).forEach(k=>{const n=o.r[k],c=ST.r[k];if(!c)ST.r[k]=n;else{c.b=Math.min(c.b,n.b);c.a=Math.max(c.a||0,n.a||0);}});
        ST.seen=Object.assign(ST.seen||{},o.seen||{});save();updateTop();$('#pMsg').textContent='Listo, progreso combinado. Volvé al mapa para verlo.';
      }catch(e){$('#pMsg').textContent='Ese código no es válido.';}
    };
  });
  return d;
}
