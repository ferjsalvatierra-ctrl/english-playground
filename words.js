/* ---------- pictures (inline SVG, no internet needed) ---------- */
const S={};
const svg=(w,h,i)=>'<svg viewBox="0 0 '+w+' '+h+'" xmlns="http://www.w3.org/2000/svg" role="img">'+i+'</svg>';
const em=(ch,x,y,s)=>'<text x="'+x+'" y="'+y+'" font-size="'+(s||44)+'" text-anchor="middle">'+ch+'</text>';
const lbl=(t,x,y,s)=>'<text x="'+x+'" y="'+y+'" font-size="'+(s||15)+'" font-weight="800" text-anchor="middle" fill="#17203a">'+t+'</text>';

S.prep=k=>{
  const bg='<rect width="220" height="140" rx="12" fill="#eaf6ff"/><rect y="118" width="220" height="22" fill="#cfe9c5"/>';
  const box=(x,y,w,h,o)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="5" fill="#d9a066" fill-opacity="'+(o||1)+'" stroke="#7a4a1d" stroke-width="4"/>';
  const table='<rect x="45" y="62" width="130" height="12" rx="4" fill="#b97a3e" stroke="#7a4a1d" stroke-width="3"/><rect x="55" y="74" width="10" height="46" fill="#b97a3e" stroke="#7a4a1d" stroke-width="3"/><rect x="155" y="74" width="10" height="46" fill="#b97a3e" stroke="#7a4a1d" stroke-width="3"/>';
  const m={
    'on':table+em('🐱',110,60),
    'under':table+em('🐱',110,116),
    'next to':box(40,66,60,54)+em('🐱',160,116),
    'behind':em('🐱',112,100)+box(55,70,62,50),
    'in front of':box(70,56,80,64)+em('🐱',110,128,50),
    'in':box(60,48,100,72,.25)+em('🐱',110,110),
    'between':box(12,70,52,50)+box(156,70,52,50)+em('🐱',110,116)
  };
  return svg(220,140,bg+m[k]);
};
S.city=()=>{
  const b=(x,y,e,t,col)=>'<rect x="'+(x-52)+'" y="'+y+'" width="104" height="84" rx="10" fill="'+col+'" stroke="#17203a" stroke-width="3"/>'+em(e,x,y+50,42)+lbl(t,x,y+74);
  return svg(420,252,'<rect width="420" height="252" rx="14" fill="#e6f5e0"/><rect y="106" width="420" height="44" fill="#6b7285"/><path d="M0 128H420" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>'
    +b(75,10,'🏫','School','#ffe29a')+b(210,10,'🏦','Bank','#ffc9d9')+b(345,10,'🏥','Hospital','#cfe3ff')
    +b(75,156,'🛒','Supermarket','#d4f5dd')+b(210,156,'🥖','Bakery','#ffe0c2')+b(345,156,'📚','Library','#e5d9ff')
    +em('🚗',130,136,30)+em('🚌',300,138,32));
};
S.dem=(near,pl,o)=>{
  const x=near?[110,150]:[270,300],s=near?42:26,y=near?100:88;
  return svg(360,130,'<rect width="360" height="130" rx="12" fill="#fff7dd"/><rect y="104" width="360" height="26" fill="#cfe9c5"/>'+em('🧒',44,110,56)
    +em(o,x[0],y,s)+(pl?em(o,x[1],y,s):'')+'<text x="180" y="22" font-size="14" font-weight="800" text-anchor="middle" fill="#5a6788">'+(near?'here, near me':'there, far from me')+'</text>');
};
S.room=()=>svg(420,240,'<rect width="420" height="240" rx="14" fill="#ffeccf"/><rect y="190" width="420" height="50" fill="#d9b27c"/>'
  +'<rect x="290" y="30" width="90" height="80" rx="8" fill="#bfe6ff" stroke="#17203a" stroke-width="4"/><path d="M335 30V110M290 70H380" stroke="#17203a" stroke-width="3"/>'
  +em('🛏️',80,200,86)+em('🧸',62,146,30)
  +'<rect x="170" y="140" width="110" height="12" rx="4" fill="#b97a3e" stroke="#7a4a1d" stroke-width="3"/><rect x="180" y="152" width="9" height="46" fill="#b97a3e" stroke="#7a4a1d" stroke-width="3"/><rect x="262" y="152" width="9" height="46" fill="#b97a3e" stroke="#7a4a1d" stroke-width="3"/>'
  +em('📚',225,138,34)+em('🐱',225,196,40)+em('🪴',345,200,52));

/* ---------- topic builder ---------- */
const add=(k,name,emoji,c,about,tip,ex)=>TOPICS.push({k,name,emoji,c,about,tip,ex});

/* ===== VOCABULARY ===== */
add('Vocabulary','Daily Routines','⏰',0,
 'Routines are the things we do every day, from the morning to the night. We use them to tell what our day is like.',
 'I <b>wake up</b> at seven. I <b>brush my teeth</b>. I <b>have</b> breakfast. I <b>go</b> to school. I <b>do</b> my homework. I <b>go</b> to bed.',[
 {t:'match',title:'Match the picture with the routine',pairs:[['⏰','wake up'],['🪥','brush my teeth'],['🍳','have breakfast'],['🎒','go to school'],['📺','watch TV'],['😴','go to bed']]},
 {t:'sort',title:'When do you do it?',buckets:[{id:'m',label:'🌅 Morning'},{id:'a',label:'☀️ Afternoon'},{id:'n',label:'🌙 Night'}],
  items:[{t:'wake up',b:'m'},{t:'have breakfast',b:'m'},{t:'go to school',b:'m'},{t:'do my homework',b:'a|n'},{t:'play in the park',b:'m|a'},{t:'have lunch',b:'a'},{t:'have dinner',b:'n'},{t:'go to bed',b:'n'}]},
 {t:'fill',title:'Fill in the gaps',items:[{s:'I ___ up at seven.',a:'wake'},{s:'I ___ my teeth.',a:'brush'},{s:'I ___ breakfast.',a:'have'},{s:'I ___ to school.',a:'go'},{s:'I ___ my homework.',a:'do'}],extra:['play']}
]);

add('Vocabulary','Actions','🏃',1,
 'Action words tell us what people and animals do. We can run, swim, jump, dance, sing, read, write, eat, drink and sleep.',
 '<b>run</b> · <b>swim</b> · <b>jump</b> · <b>dance</b> · <b>sing</b> · <b>read</b> · <b>write</b> · <b>eat</b> · <b>drink</b> · <b>sleep</b>',[
 {t:'mc',title:'What can they do?',items:[
  {img:'🏃',q:'He can…',opts:['run','swim','sing','sleep'],a:'run'},
  {img:'💃',q:'She can…',opts:['dance','read','eat','jump'],a:'dance'},
  {img:'🎤',q:'He can…',opts:['sing','swim','drink','write'],a:'sing'},
  {img:'📖',q:'She can…',opts:['read','run','dance','jump'],a:'read'},
  {img:'😴',q:'The baby can…',opts:['sleep','eat','sing','walk'],a:'sleep'}]},
 {t:'type',title:'Look and write the action word',items:[
  {ico:'🍽️',q:'e _ _',a:'eat'},{ico:'🥤',q:'d _ _ _ k',a:'drink'},{ico:'✍️',q:'w _ _ _ e',a:'write'},{ico:'🏊',q:'s _ _ m',a:'swim'},{ico:'🤸',q:'j _ _ p',a:'jump'}]}
]);

add('Vocabulary','Months, Days and Seasons','📅',2,
 'The calendar tells us when things happen. There are 12 months, 7 days in a week and 4 seasons. Remember: in Argentina, summer starts in December.',
 '<b>Days:</b> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.<br><b>Seasons:</b> summer ☀️ · autumn 🍂 · winter ❄️ · spring 🌸',[
 {t:'order',title:'Put them in order',items:['January February March April May June','July August September October November December','Monday Tuesday Wednesday Thursday Friday Saturday Sunday']},
 {t:'sort',title:'Which season is it in Argentina?',buckets:[{id:'s',label:'☀️ Summer'},{id:'a',label:'🍂 Autumn'},{id:'w',label:'❄️ Winter'},{id:'p',label:'🌸 Spring'}],
  items:[{t:'December',b:'s'},{t:'February',b:'s'},{t:'March',b:'a'},{t:'May',b:'a'},{t:'June',b:'w'},{t:'August',b:'w'},{t:'September',b:'p'},{t:'November',b:'p'}]},
 {t:'mc',title:'Think and choose',items:[
  {q:'Today is Monday. Tomorrow is…',opts:['Tuesday','Sunday','Friday','Wednesday'],a:'Tuesday'},
  {q:'The day after Friday is…',opts:['Saturday','Thursday','Sunday','Monday'],a:'Saturday'},
  {q:'The month before April is…',opts:['March','May','June','February'],a:'March'},
  {q:'Christmas is in…',opts:['December','June','March','October'],a:'December'},
  {q:'We do not have school on…',opts:['Saturday and Sunday','Monday and Tuesday','Wednesday','Friday'],a:'Saturday and Sunday'}]}
]);

add('Vocabulary','Clothes','👕',3,
 'Clothes are the things we wear. We choose them for the weather: hot days, cold days and rainy days.',
 'a <b>T-shirt</b> · <b>jeans</b> · a <b>dress</b> · a <b>jacket</b> · <b>socks</b> · <b>shoes</b> · a <b>cap</b> · a <b>scarf</b> · <b>gloves</b> · <b>shorts</b>',[
 {t:'match',title:'Match the picture with the clothes',pairs:[['👕','T-shirt'],['👖','jeans'],['👗','dress'],['🧦','socks'],['🧢','cap'],['🧣','scarf']]},
 {t:'sort',title:'Hot day or cold day?',buckets:[{id:'h',label:'☀️ Hot day'},{id:'k',label:'❄️ Cold day'}],
  items:[{t:'🩳 shorts',b:'h'},{t:'👕 T-shirt',b:'h'},{t:'🩴 sandals',b:'h'},{t:'🧢 cap',b:'h'},{t:'🧣 scarf',b:'k'},{t:'🧤 gloves',b:'k'},{t:'🧥 jacket',b:'k'},{t:'🥾 boots',b:'k'}]},
 {t:'mc',title:'What do you wear?',items:[
  {img:'❄️',q:'It is snowing. I wear…',opts:['gloves','shorts','sandals','a swimsuit'],a:'gloves'},
  {img:'☀️',q:'It is very hot. I wear…',opts:['shorts','a scarf','gloves','boots'],a:'shorts'},
  {img:'🌧️',q:'It is raining. I wear…',opts:['a raincoat','shorts','sandals','a cap'],a:'a raincoat'},
  {img:'🌙',q:'It is bedtime. I wear…',opts:['pyjamas','a dress','boots','a jacket'],a:'pyjamas'}]}
]);

add('Vocabulary','Parts of the Body','🧍',4,
 'These are the parts of our body. We use them to see, hear, smell, eat, walk and write.',
 'head · <b>eyes</b> · <b>ears</b> · <b>nose</b> · <b>mouth</b> · teeth · arms · <b>hands</b> · fingers · legs · <b>feet</b><br>Careful: one foot, two <b>feet</b>.',[
 {t:'match',title:'Match the picture with the word',pairs:[['👁️','eye'],['👂','ear'],['👃','nose'],['👄','mouth'],['🖐️','hand'],['🦶','foot']]},
 {t:'mc',title:'Which part of the body?',items:[
  {q:'I see with my…',opts:['eyes','ears','nose','hands'],a:'eyes'},
  {q:'I hear with my…',opts:['ears','eyes','feet','mouth'],a:'ears'},
  {q:'I smell with my…',opts:['nose','hands','legs','ears'],a:'nose'},
  {q:'I walk with my…',opts:['legs','hands','ears','eyes'],a:'legs'},
  {q:'I write with my…',opts:['hand','foot','nose','ear'],a:'hand'}]},
 {t:'type',title:'Look and write the word',items:[{ico:'👁️👁️',q:'two …',a:'eyes'},{ico:'👂👂',q:'two …',a:'ears'},{ico:'🖐️🖐️',q:'two …',a:'hands'},{ico:'🦶🦶',q:'two …',a:'feet'},{ico:'👃',q:'one …',a:'nose'}]}
]);

add('Vocabulary','School Objects','🎒',5,
 'These are the things we use at school. They are in our backpack, our pencil case and our classroom.',
 'a <b>pencil</b> · a <b>pen</b> · a <b>ruler</b> · <b>scissors</b> · a <b>notebook</b> · a <b>book</b> · a <b>backpack</b> · <b>crayons</b>',[
 {t:'match',title:'Match the picture with the word',pairs:[['✏️','pencil'],['🖊️','pen'],['📏','ruler'],['✂️','scissors'],['📓','notebook'],['🎒','backpack']]},
 {t:'mc',title:'Which school object?',items:[
  {q:'I cut paper with…',opts:['scissors','a ruler','a book','a pen'],a:'scissors'},
  {q:'I draw a straight line with…',opts:['a ruler','scissors','crayons','a backpack'],a:'a ruler'},
  {q:'I carry my books in my…',opts:['backpack','pen','ruler','scissors'],a:'backpack'},
  {q:'I write my homework in my…',opts:['notebook','scissors','backpack','ruler'],a:'notebook'}]},
 {t:'type',title:'Look and spell the word',items:[{ico:'✏️',q:'p _ _ _ _ l',a:'pencil'},{ico:'📏',q:'r _ _ _ r',a:'ruler'},{ico:'✂️',q:'s _ _ _ _ _ _ s',a:'scissors'},{ico:'🎒',q:'b _ _ _ _ _ _ k',a:'backpack'}]}
]);

add('Vocabulary','The City','🏙️',0,
 'A city has many shops and buildings. Some are shops where we buy things. Others are public places where we get help or have fun.',
 'a <b>school</b> · a <b>hospital</b> · a <b>bank</b> · a <b>bakery</b> · a <b>supermarket</b> · a <b>library</b> · a <b>cinema</b> · a <b>park</b> · a <b>pharmacy</b>',[
 {t:'match',title:'Match the building with its name',pairs:[['🏫','school'],['🏥','hospital'],['🏦','bank'],['🥖','bakery'],['🛒','supermarket'],['📚','library']]},
 {t:'mc',title:'Where do you go?',items:[
  {q:'You buy bread at the…',opts:['bakery','bank','library','school'],a:'bakery'},
  {q:'You see a doctor at the…',opts:['hospital','cinema','bakery','park'],a:'hospital'},
  {q:'You borrow books at the…',opts:['library','bank','supermarket','hospital'],a:'library'},
  {q:'You watch a film at the…',opts:['cinema','school','bakery','bank'],a:'cinema'},
  {q:'You buy medicine at the…',opts:['pharmacy','bakery','school','cinema'],a:'pharmacy'}]},
 {t:'sort',title:'Shop or public place?',buckets:[{id:'s',label:'🛍️ Shops'},{id:'p',label:'🏛️ Public places'}],
  items:[{t:'bakery',b:'s'},{t:'supermarket',b:'s'},{t:'pharmacy',b:'s'},{t:'shoe shop',b:'s'},{t:'school',b:'p'},{t:'hospital',b:'p'},{t:'library',b:'p'},{t:'park',b:'p'}]}
]);

add('Vocabulary','Jobs','👩‍⚕️',1,
 'Jobs are the work that people do. Each job has a name and a place where people do it.',
 'a <b>doctor</b> · a <b>teacher</b> · a <b>cook</b> · a <b>firefighter</b> · a <b>police officer</b> · a <b>farmer</b> · a <b>pilot</b>',[
 {t:'match',title:'Match the person with the job',pairs:[['👩‍⚕️','doctor'],['🧑‍🏫','teacher'],['👨‍🍳','cook'],['👩‍🚒','firefighter'],['👮','police officer'],['👨‍🌾','farmer']]},
 {t:'mc',title:'Who is it?',items:[
  {q:'Who helps sick people?',opts:['doctor','farmer','pilot','cook'],a:'doctor'},
  {q:'Who teaches children at school?',opts:['teacher','doctor','cook','pilot'],a:'teacher'},
  {q:'Who puts out fires?',opts:['firefighter','farmer','teacher','cook'],a:'firefighter'},
  {q:'Who cooks food in a restaurant?',opts:['cook','police officer','doctor','farmer'],a:'cook'},
  {q:'Who grows vegetables on a farm?',opts:['farmer','teacher','pilot','doctor'],a:'farmer'}]},
 {t:'fill',title:'Where do they work?',items:[{s:'A doctor works in a ___.',a:'hospital'},{s:'A teacher works in a ___.',a:'school'},{s:'A farmer works on a ___.',a:'farm'},{s:'A cook works in a ___.',a:'restaurant'},{s:'A pilot flies a ___.',a:'plane'}],extra:['bank','library']}
]);

add('Vocabulary','Household Chores','🧹',2,
 'Chores are the jobs we do at home to help the family. Which ones do you do?',
 '<b>sweep</b> the floor · <b>wash</b> the dishes · <b>make</b> the bed · <b>do</b> the laundry · <b>take out</b> the rubbish · <b>water</b> the plants',[
 {t:'match',title:'Match the picture with the chore',pairs:[['🧹','sweep the floor'],['🧽','wash the dishes'],['🛏️','make the bed'],['🧺','do the laundry'],['🗑️','take out the rubbish'],['🪴','water the plants']]},
 {t:'fill',title:'Complete the chores',items:[{s:'I ___ my bed every morning.',a:'make'},{s:'I ___ the dishes after dinner.',a:'wash|do'},{s:'I ___ the floor with a broom.',a:'sweep'},{s:'I ___ out the rubbish.',a:'take'},{s:'I ___ the plants.',a:'water'}],extra:['do','cook']},
 {t:'write',title:'Think and write',ico:'🏠',prompt:'Think! 🤔 Which chores do you do at home? Write 2 sentences.',tips:['I start with a capital letter','I use a chore word','I finish with a full stop (.)'],model:'I make my bed. I water the plants.'}
]);

add('Vocabulary','Numbers 0 to 100','🔢',3,
 'Numbers help us count, tell our age and do sums. Numbers from 13 to 19 end in -teen. Tens like 20, 30 and 40 end in -ty.',
 '<b>13–19</b> end in <b>-teen</b>: thirteen, fourteen, fifteen…<br><b>20, 30…90</b> end in <b>-ty</b>: twenty, thirty, forty, fifty…<br>We join them with a dash: <b>twenty-one</b>, <b>sixty-five</b>. And 100 is <b>one hundred</b>.',[
 {t:'match',title:'Match the number with the word',pairs:[['13','thirteen'],['15','fifteen'],['20','twenty'],['40','forty'],['70','seventy'],['100','one hundred']]},
 {t:'type',title:'Write the number in words',items:[{ico:'27',a:'twenty-seven'},{ico:'45',a:'forty-five'},{ico:'68',a:'sixty-eight'},{ico:'99',a:'ninety-nine'},{ico:'12',a:'twelve'}]},
 {t:'type',title:'Do the sums (numbers or words)',items:[{q:'30 + 20 = ?',a:['50','fifty']},{q:'40 + 40 = ?',a:['80','eighty']},{q:'100 − 50 = ?',a:['50','fifty']},{q:'15 + 5 = ?',a:['20','twenty']}]}
]);
