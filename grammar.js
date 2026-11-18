/* ===== GRAMMAR ===== */
add('Grammar','Verb To Be','🙋',4,
 'The verb to be tells who or what someone is, how old they are and where they are. It changes with each pronoun.',
 `<table><tr><th>+</th><td>I <b>am</b> · he/she/it <b>is</b> · you/we/they <b>are</b></td></tr><tr><th>−</th><td>I <b>am not</b> · she <b>isn't</b> · they <b>aren't</b></td></tr><tr><th>?</th><td><b>Am</b> I…? · <b>Is</b> she…? · <b>Are</b> they…?</td></tr></table>`,[
 {t:'fill',title:'Choose am, is or are',items:[{s:'I ___ eight years old.',a:'am'},{s:'She ___ my friend.',a:'is'},{s:'They ___ in the park.',a:'are'},{s:'We ___ happy.',a:'are'},{s:'It ___ a big dog.',a:'is'},{s:'You ___ my teacher.',a:'are'}]},
 {t:'mc',keep:true,title:'Make it negative',items:[
  {q:'I ___ hungry.',opts:['am not',"isn't","aren't"],a:'am not'},
  {q:'She ___ tall.',opts:['am not',"isn't","aren't"],a:"isn't"},
  {q:'They ___ at school.',opts:['am not',"isn't","aren't"],a:"aren't"},
  {q:'It ___ big.',opts:['am not',"isn't","aren't"],a:"isn't"},
  {q:'We ___ late.',opts:['am not',"isn't","aren't"],a:"aren't"}]},
 {t:'order',title:'Build the questions',items:['Are you a student?','Is she your mother?','Am I late?','Are they at home?']}
]);

add('Grammar','Simple Present','🕘',0,
 'We use the simple present for things we do every day and things that are always true. Careful with he, she and it: the verb takes an -s.',
 `<table><tr><th>+</th><td>I/you/we/they <b>play</b> · he/she/it <b>plays</b></td></tr><tr><th>−</th><td>I <b>don't</b> play · she <b>doesn't</b> play</td></tr><tr><th>?</th><td><b>Do</b> you play? · <b>Does</b> he play?</td></tr></table>`,[
 {t:'mc',title:'Choose the right verb',items:[
  {q:'She ___ tennis.',opts:['plays','play'],a:'plays'},{q:'I ___ pizza.',opts:['like','likes'],a:'like'},
  {q:'My dad ___ at a bank.',opts:['works','work'],a:'works'},{q:'They ___ to school.',opts:['go','goes'],a:'go'},{q:'The cat ___ milk.',opts:['drinks','drink'],a:'drinks'}]},
 {t:'sort',title:`Don't or doesn't? Sort the subjects`,buckets:[{id:'d',label:`don't`},{id:'x',label:`doesn't`}],
  items:[{t:'I',b:'d'},{t:'you',b:'d'},{t:'we',b:'d'},{t:'they',b:'d'},{t:'he',b:'x'},{t:'she',b:'x'},{t:'it',b:'x'},{t:'my mum',b:'x'}]},
 {t:'order',title:'Build the sentences',items:['Does she like pizza?','Do you play football?',"He doesn't eat fish.","I don't watch TV at night."]}
]);

add('Grammar','Whose? and ’s','🧸',1,
 'We ask Whose…? to find out who owns something. We answer with a name and ’s.',
 `<b>Whose</b> ball is this? → It's <b>Mia's</b> ball.<br>Add <b>'s</b> to a name: <b>Tom's</b> bike, the <b>teacher's</b> book.`,[
 {t:'match',title:'Who owns it?',pairs:[['⚽ Mia',"It's Mia's ball."],['🎒 Leo',"It's Leo's backpack."],['🐶 Sam',"It's Sam's dog."],['📘 the teacher',"It's the teacher's book."]]},
 {t:'mc',title:'Choose the right answer',items:[
  {q:`___ bag is this? It's Ben's.`,opts:['Whose',"Who's",'What'],a:'Whose'},
  {q:'Anna___ cat is black.',opts:["'s",'s','is'],a:"'s"},
  {q:`___ shoes are these? They're Dad's.`,opts:['Whose',"Who's",'Where'],a:'Whose'},
  {q:'This is my sister___ doll.',opts:["'s",'s','are'],a:"'s"}]},
 {t:'type',title:`Write the owner with 's`,items:[{q:'the pen of Tom → ___ pen',a:"Tom's"},{q:'the dog of Anna → ___ dog',a:"Anna's"},{q:'the book of the teacher → the ___ book',a:"teacher's"},{q:'the toys of my brother → my ___ toys',a:"brother's"}]}
]);

add('Grammar','Can','🦸',2,
 'We use can to say what we are able to do. Can does not change: it is the same for all pronouns.',
 `<table><tr><th>+</th><td>I <b>can</b> swim.</td></tr><tr><th>−</th><td>A cat <b>can't</b> fly.</td></tr><tr><th>?</th><td><b>Can</b> you run? Yes, I <b>can</b>. / No, I <b>can't</b>.</td></tr></table>`,[
 {t:'mc',keep:true,title:'Yes or no? Think about it',items:[
  {img:'🐟',q:'Can a fish swim?',opts:['Yes, it can.',"No, it can't."],a:'Yes, it can.'},
  {img:'🐦',q:'Can a bird fly?',opts:['Yes, it can.',"No, it can't."],a:'Yes, it can.'},
  {img:'🐶',q:'Can a dog read?',opts:['Yes, it can.',"No, it can't."],a:"No, it can't."},
  {img:'🐢',q:'Can a turtle run fast?',opts:['Yes, it can.',"No, it can't."],a:"No, it can't."},
  {img:'🐒',q:'Can a monkey climb?',opts:['Yes, it can.',"No, it can't."],a:'Yes, it can.'}]},
 {t:'fill',title:`Choose can, can't or Can`,items:[{s:'I ___ swim.',ico:'🏊',a:'can'},{s:'A cat ___ fly.',ico:'🐱',a:"can't"},{s:'___ you run fast?',a:'Can'},{s:'Birds ___ fly.',ico:'🐦',a:'can'},{s:'Fish ___ walk.',ico:'🐟',a:"can't"}]},
 {t:'write',title:'Think and write',prompt:`Think! 🤔 Write 2 things you can do and 1 thing you can't do.`,tips:['I use “I can”',`I use “I can't”`,'Capital letters and full stops'],model:`I can swim. I can ride a bike. I can't fly.`}
]);

add('Grammar','Have Got','🎁',3,
 'We use have got to say what we own or what we look like. With he, she and it we say has got.',
 `<table><tr><th>+</th><td>I/you/we/they <b>have got</b> · he/she/it <b>has got</b></td></tr><tr><th>−</th><td>I <b>haven't got</b> · she <b>hasn't got</b></td></tr><tr><th>?</th><td><b>Have</b> you got…? · <b>Has</b> she got…?</td></tr></table>`,[
 {t:'fill',title:'Choose have or has',items:[{s:'I ___ got a dog.',ico:'🐶',a:'have'},{s:'She ___ got blue eyes.',ico:'👁️',a:'has'},{s:'They ___ got a big house.',ico:'🏠',a:'have'},{s:'He ___ got a new bike.',ico:'🚲',a:'has'},{s:'We ___ got two cats.',ico:'🐱',a:'have'}]},
 {t:'mc',keep:true,title:'Make it negative',items:[
  {q:'She ___ got a car.',opts:["hasn't","haven't"],a:"hasn't"},{q:'We ___ got homework.',opts:["hasn't","haven't"],a:"haven't"},
  {q:'He ___ got a pet.',opts:["hasn't","haven't"],a:"hasn't"},{q:'I ___ got a sister.',opts:["hasn't","haven't"],a:"haven't"}]},
 {t:'order',title:'Build the sentences',items:['Have you got a pet?','Has she got a brother?',"I haven't got a bike.",'He has got green eyes.']}
]);

add('Grammar','Prepositions of Place','📍',4,
 'Prepositions tell us where something is. Look at the pictures and think about where the cat is.',
 '<b>on</b> · <b>under</b> · <b>next to</b> · <b>behind</b> · <b>in front of</b> · <b>in</b> · <b>between</b> · <b>opposite</b> (face to face, across the street)',[
 {t:'mc',title:'Where is the cat?',items:[
  {img:S.prep('on'),q:'The cat is ___ the table.',opts:['on','under','in','behind'],a:'on'},
  {img:S.prep('under'),q:'The cat is ___ the table.',opts:['under','on','between','next to'],a:'under'},
  {img:S.prep('next to'),q:'The cat is ___ the box.',opts:['next to','in','on','between'],a:'next to'},
  {img:S.prep('behind'),q:'The cat is ___ the box.',opts:['behind','in front of','in','on'],a:'behind'},
  {img:S.prep('in front of'),q:'The cat is ___ the box.',opts:['in front of','behind','in','under'],a:'in front of'},
  {img:S.prep('in'),q:'The cat is ___ the box.',opts:['in','on','behind','next to'],a:'in'},
  {img:S.prep('between'),q:'The cat is ___ the two boxes.',opts:['between','next to','in','on'],a:'between'}]},
 {t:'mc',title:'Look at the city map',pre:'<div style="text-align:center">'+S.city()+'</div>',items:[
  {q:'The bank is opposite the…',opts:['bakery','school','hospital','library'],a:'bakery'},
  {q:'The school is next to the…',opts:['bank','library','bakery','supermarket'],a:'bank'},
  {q:'The bank is ___ the school and the hospital.',opts:['between','opposite','behind','under'],a:'between'},
  {q:'The supermarket is opposite the…',opts:['school','bank','hospital','library'],a:'school'},
  {q:'The library is next to the…',opts:['bakery','hospital','school','bank'],a:'bakery'}]},
 {t:'fill',title:'Complete with a place word',items:[{s:'My shoes are ___ the bed, on the floor.',ico:'🛏️',a:'under'},{s:'The cat sleeps ___ the sofa, on a soft cushion.',ico:'🛋️',a:'on'},{s:'I sit ___ Tom and Ana.',a:'between'},{s:'The bank is ___ the bakery, across the street.',a:'opposite'},{s:'The girl is ___ the TV.',ico:'📺',a:'in front of'}],extra:['in','behind']}
]);

add('Grammar','There Is / There Are','👀',5,
 'We use there is for one thing and there are for many things. It tells us what we can find in a place.',
 `<b>There is</b> a cat. · <b>There are</b> three birds.<br><b>There isn't</b> a dog. · <b>There aren't</b> any cars.<br><b>Is there</b> a cat? · <b>Are there</b> any apples?`,[
 {t:'mc',keep:true,title:'Is or are?',items:[
  {img:'🍎',q:'There ___ an apple.',opts:['is','are'],a:'is'},{img:'🐦🐦🐦',q:'There ___ three birds.',opts:['is','are'],a:'are'},
  {img:'⭐⭐⭐⭐⭐',q:'There ___ five stars.',opts:['is','are'],a:'are'},{img:'🐱',q:'There ___ a cat.',opts:['is','are'],a:'is'},{img:'🚗🚗',q:'There ___ two cars.',opts:['is','are'],a:'are'}]},
 {t:'fill',title:'Yes, no and questions',items:[{s:'___ there a cat? Yes, there is.',a:'Is'},{s:'___ there any apples? No, there aren’t.',a:'Are'},{s:'There ___ a TV in my room. 🚫',a:"isn't"},{s:'There ___ cars in the garage. 🚫',a:"aren't"},{s:'There ___ a lamp on the desk. ✅',a:'is'}]},
 {t:'type',title:'Look and count',items:[{ico:'🐶🐶🐱🐱🐱🐦',q:'How many cats are there?',a:['3','three']},{ico:'🍎🍎🍌🍌🍌🍌',q:'How many bananas are there?',a:['4','four']},{ico:'⚽🏀🏀',q:'How many basketballs are there?',a:['2','two']}]}
]);

add('Grammar','My, Your, His, Her…','👫',0,
 'These little words show who something belongs to. Each pronoun has its own partner.',
 '<table><tr><th>I → <b>my</b></th><th>you → <b>your</b></th><th>he → <b>his</b></th><th>she → <b>her</b></th></tr><tr><th>it → <b>its</b></th><th>we → <b>our</b></th><th>they → <b>their</b></th><th></th></tr></table>',[
 {t:'fill',title:'Complete with the right word',items:[{s:'I have a cat. ___ cat is black.',a:'My'},{s:'You have a pen. ___ pen is blue.',a:'Your'},{s:'Tom has a bike. ___ bike is red.',a:'His'},{s:'Anna has a doll. ___ doll is nice.',a:'Her'},{s:'The dog has a bone. ___ bone is big.',a:'Its'},{s:'We have a house. ___ house is big.',a:'Our'},{s:'They have a car. ___ car is new.',a:'Their'}]},
 {t:'match',title:'Match the pronoun with its partner',pairs:[['I','my'],['you','your'],['he','his'],['she','her'],['we','our'],['they','their']]},
 {t:'mc',title:'Choose the right word',items:[
  {q:'Sara loves ___ mum.',opts:['her','his','their','its'],a:'her'},{q:'The boys play with ___ ball.',opts:['their','his','our','my'],a:'their'},
  {q:'My brother and I clean ___ room.',opts:['our','their','your','its'],a:'our'},{q:'Look at the dog! ___ ears are big.',opts:['Its','His','Her','Our'],a:'Its'},{q:'Leo has a bike. ___ bike is fast.',opts:['His','Her','Their','My'],a:'His'}]}
]);

add('Grammar','This, That, These, Those','👉',1,
 'We use these words to point at things. Near us we say this and these. Far from us we say that and those.',
 '<table><tr><th></th><th>one</th><th>many</th></tr><tr><th>near 👇</th><td><b>this</b></td><td><b>these</b></td></tr><tr><th>far 🔭</th><td><b>that</b></td><td><b>those</b></td></tr></table>',[
 {t:'mc',keep:true,title:'Look at the picture',items:[
  {img:S.dem(true,false,'🍎'),q:'___ is an apple.',opts:['This','That','These','Those'],a:'This'},
  {img:S.dem(false,false,'✈️'),q:'___ is a plane.',opts:['This','That','These','Those'],a:'That'},
  {img:S.dem(true,true,'🍪'),q:'___ are cookies.',opts:['This','That','These','Those'],a:'These'},
  {img:S.dem(false,true,'🌳'),q:'___ are trees.',opts:['This','That','These','Those'],a:'Those'}]},
 {t:'sort',title:'Near or far?',buckets:[{id:'n',label:'👇 Near (here)'},{id:'f',label:'🔭 Far (there)'}],
  items:[{t:'this pen',b:'n'},{t:'these shoes',b:'n'},{t:'this cat',b:'n'},{t:'that house',b:'f'},{t:'those birds',b:'f'},{t:'that star',b:'f'}]},
 {t:'order',title:'Build the sentences',items:['These are my shoes.','Those are your books.','That is a big dog.','Is this your bag?']}
]);

add('Grammar','Wearing…','👚',2,
 'We use wearing to say what clothes someone has on right now. It goes with am, is or are.',
 '<b>I am wearing</b> jeans. · <b>She is wearing</b> a red dress. · <b>We are wearing</b> shoes.<br>Question: What <b>are</b> you <b>wearing</b>?',[
 {t:'mc',title:'What is he or she wearing?',items:[
  {img:'👦🧢',q:'What is he wearing?',opts:['a cap','a dress','gloves','a scarf'],a:'a cap'},
  {img:'👧👗',q:'What is she wearing?',opts:['a dress','a cap','shorts','boots'],a:'a dress'},
  {img:'🧑🧥',q:'What is he wearing?',opts:['a jacket','a dress','sandals','a cap'],a:'a jacket'},
  {img:'👧🧣',q:'What is she wearing?',opts:['a scarf','shorts','a cap','socks'],a:'a scarf'},
  {img:'👦🧦',q:'What is he wearing?',opts:['socks','a dress','gloves','a scarf'],a:'socks'}]},
 {t:'fill',title:'Choose am, is or are',items:[{s:'I ___ wearing jeans.',a:'am'},{s:'She ___ wearing a hat.',a:'is'},{s:'We ___ wearing shoes.',a:'are'},{s:'The boy ___ wearing a T-shirt.',a:'is'},{s:'The girls ___ wearing dresses.',a:'are'},{s:'You ___ wearing a jacket.',a:'are'}]},
 {t:'write',title:'Think and write',ico:'👕',prompt:'Look at yourself! 🤔 What are you wearing today? Write 2 sentences.',tips:['I use “I am wearing”','I say the colour','Capital letter and full stop'],model:'I am wearing a blue T-shirt and black shorts. I am wearing white shoes.'}
]);

add('Grammar','Present Continuous','🎬',3,
 'We use the present continuous for things that are happening right now. We use am, is or are and a verb with -ing.',
 `<b>I am running.</b> · <b>She is swimming.</b> · <b>They are dancing.</b><br>Negative: He <b>isn't</b> sleeping. · I <b>am not</b> sleeping.<br>Spelling: run → run<b>ning</b> · swim → swim<b>ming</b> · dance → danc<b>ing</b>`,[
 {t:'fill',title:'Choose am, is or are',items:[{ico:'🏃',s:'I ___ running.',a:'am'},{ico:'🏊',s:'She ___ swimming.',a:'is'},{ico:'💃',s:'They ___ dancing.',a:'are'},{ico:'📖',s:'We ___ reading.',a:'are'},{ico:'🍽️',s:'He ___ eating.',a:'is'}]},
 {t:'mc',keep:true,title:'Make it negative',items:[
  {q:'I ___ watching TV. I am reading.',opts:['am not',"isn't","aren't"],a:'am not'},
  {q:'They ___ running. They are walking.',opts:['am not',"isn't","aren't"],a:"aren't"},
  {q:'She ___ eating. She is drinking.',opts:['am not',"isn't","aren't"],a:"isn't"},
  {q:'We ___ singing. We are dancing.',opts:['am not',"isn't","aren't"],a:"aren't"}]},
 {t:'type',title:'Add -ing to the verb',items:[{q:'run → ',a:'running'},{q:'swim → ',a:'swimming'},{q:'dance → ',a:'dancing'},{q:'play → ',a:'playing'},{q:'sit → ',a:'sitting'}]}
]);

/* ===== SKILLS ===== */
add('Skills','Reading','📖',4,
 'In the reading part you read a short text and answer questions about it. Read slowly, then look for the answer in the text.',
 'Tip: read the question first, then find the same words in the text. Look at <b>numbers</b>, <b>names</b> and <b>colours</b>.',[
 {t:'mc',title:'Read about Lucy and choose',pre:'<b>Hi! My name is Lucy.</b> I am eight years old. I live in a big city. There is a park next to my house. Every morning, I wake up at seven o’clock. I brush my teeth and I have breakfast. I go to school with my brother Tom. He is ten. I have got a red backpack and a blue pencil case. I like English and Art. After school, I do my homework and I play in the park with my dog, Bobby. Today it is Saturday. I am not at school. I am wearing shorts and a yellow T-shirt. I am playing with Bobby.',items:[
  {q:'How old is Lucy?',opts:['eight','ten','seven','nine'],a:'eight'},
  {q:'Who does she go to school with?',opts:['her brother Tom','her dog','her mum','her teacher'],a:'her brother Tom'},
  {q:'What colour is her backpack?',opts:['red','blue','yellow','green'],a:'red'},
  {q:`What is her dog's name?`,opts:['Bobby','Tom','Max','Lucy'],a:'Bobby'},
  {q:'Where is the park?',opts:['next to her house','in front of the school','behind the bank','opposite the hospital'],a:'next to her house'}]},
 {t:'mc',keep:true,title:'True or false?',pre:'Think about Lucy’s text. Is each sentence true or false?',items:[
  {q:'Lucy is ten years old.',opts:['True','False'],a:'False'},
  {q:'Lucy has got a dog.',opts:['True','False'],a:'True'},
  {q:'Today is Monday.',opts:['True','False'],a:'False'},
  {q:'Lucy is wearing shorts today.',opts:['True','False'],a:'True'},
  {q:'Tom is Lucy’s brother.',opts:['True','False'],a:'True'}]}
]);

add('Skills','Listening','🎧',5,
 'In the listening part you hear a word or a sentence and you choose or write what you heard. Tap the speaker as many times as you need.',
 'Tip: listen for the key words, like <b>numbers</b>, <b>clothes</b> and <b>places</b>. Use headphones or turn the volume up. 🔊',[
 {t:'mc',keep:true,title:'Listen and choose the picture',items:[
  {say:'She is swimming.',q:'',opts:['🏊','🏃','💃','📖'],a:'🏊'},
  {say:'I have got two dogs.',q:'',opts:['🐶','🐶🐶','🐱🐱','🐶🐶🐶'],a:'🐶🐶'},
  {say:'It is winter. I wear a scarf and gloves.',q:'',opts:['🩳👕','👗','🧣🧤','🧢'],a:'🧣🧤'},
  {say:'The cat is under the table.',q:'',opts:[S.prep('on'),S.prep('under'),S.prep('in'),S.prep('next to')],a:S.prep('under')}]},
 {t:'type',title:'Listen and write the number',items:[{say:'seventy-three',q:'Number:',a:'73'},{say:'fifty-eight',q:'Number:',a:'58'},{say:'ninety-two',q:'Number:',a:'92'},{say:'sixteen',q:'Number:',a:'16'}]},
 {t:'type',title:'Listen and spell the word',items:[{say:'pencil',q:'Word:',a:'pencil'},{say:'school',q:'Word:',a:'school'},{say:'orange',q:'Word:',a:'orange'},{say:'Monday',q:'Word:',a:'Monday'},{say:'bakery',q:'Word:',a:'bakery'}]}
]);

add('Skills','Writing','✍️',0,
 'In the writing part you write short sentences. Start with a capital letter, finish with a full stop, and use the words you practised.',
 'Remember: <b>I am</b> eight. · <b>I have got</b> a dog. · <b>I can</b> swim. · <b>There is</b> a park. · <b>She is wearing</b> a dress.',[
 {t:'order',title:'Build the sentences',items:['I have got a red bike.','There is a park next to my house.','She is wearing a yellow dress.','They are playing in the park.']},
 {t:'write',title:'Write about you',ico:'🙋',prompt:'Write 3 sentences about you: your name, your age, and something you like.',tips:['I wrote my name','I wrote my age','I wrote something I like','Capital letters and full stops'],model:'My name is Ana. I am eight years old. I like football and pizza.'},
 {t:'write',title:'Describe the room',ico:S.room(),prompt:'Look at the room. Write 2 sentences. Use “There is…” and a place word like on, under or next to.',tips:['I use “There is”','I use on, under or next to','Capital letters and full stops'],model:'There is a bed in the room. The cat is under the table.'}
]);

/* ---------- start ---------- */
$('#homeBtn').onclick=()=>PROFILE?showHome():showWho();
$('#who').onclick=showWho;
$('#sndBtn').onclick=function(){muted=!muted;this.textContent=muted?'🔇':'🔊';if(muted&&TTS){try{speechSynthesis.cancel();}catch(e){}}};
updateTop();
bootProfiles();
