'use strict';
/* Práctica de Matemática de 2.º grado: dibujos (SVG en línea, sin internet) y estaciones. */
const S={};
const svg=(w,h,i)=>'<svg viewBox="0 0 '+w+' '+h+'" xmlns="http://www.w3.org/2000/svg" role="img">'+i+'</svg>';
const K='stroke="#17203a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
const em=(ch,x,y,s)=>'<text x="'+x+'" y="'+y+'" font-size="'+(s||40)+'" text-anchor="middle">'+ch+'</text>';

/* ---------- cuerpos geométricos ---------- */
S.cubo=()=>svg(140,120,'<polygon points="20,40 48,16 110,16 82,40" fill="#a9d3ff" '+K+'/><rect x="20" y="40" width="62" height="62" fill="#6fb3ff" '+K+'/><polygon points="82,40 110,16 110,78 82,102" fill="#3f8fe6" '+K+'/>');
S.prisma=()=>svg(140,120,'<polygon points="10,52 34,30 120,30 96,52" fill="#ffd0a0" '+K+'/><rect x="10" y="52" width="86" height="46" fill="#ffab5e" '+K+'/><polygon points="96,52 120,30 120,76 96,98" fill="#e8822a" '+K+'/>');
S.esfera=()=>svg(140,120,'<defs><radialGradient id="gE" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ffe0e0"/><stop offset="1" stop-color="#e5484d"/></radialGradient></defs><circle cx="70" cy="60" r="46" fill="url(#gE)" '+K+'/>');
S.cilindro=()=>svg(140,120,'<path d="M28 34 V88 A42 14 0 0 0 112 88 V34" fill="#7be0a8" '+K+'/><ellipse cx="70" cy="34" rx="42" ry="14" fill="#b6f0cf" '+K+'/>');
S.cono=()=>svg(140,120,'<path d="M26 88 L70 10 L114 88 A44 14 0 0 1 26 88 Z" fill="#ffb86b" '+K+'/>');
S.piramide=()=>svg(140,120,'<polygon points="72,8 18,84 66,106" fill="#ffd27f" '+K+'/><polygon points="72,8 66,106 122,82" fill="#f0a63a" '+K+'/><path d="M18 84 L74 68 L122 82 M74 68 L72 8" fill="none" stroke="#17203a" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>');
/* el mismo cubo con una parte marcada */
S.cuboMarca=k=>svg(140,120,
  '<polygon points="20,40 48,16 110,16 82,40" fill="#a9d3ff" '+K+'/><rect x="20" y="40" width="62" height="62" fill="'+(k==='cara'?'#ffd23f':'#6fb3ff')+'" '+K+'/><polygon points="82,40 110,16 110,78 82,102" fill="#3f8fe6" '+K+'/>'+
  (k==='arista'?'<line x1="20" y1="40" x2="82" y2="40" stroke="#e5484d" stroke-width="8" stroke-linecap="round"/>':'')+
  (k==='vertice'?'<circle cx="82" cy="40" r="9" fill="#e5484d" '+K+'/>':''));
const cb=(k,label)=>'<span class="cb">'+S[k]()+'<span>'+label+'</span></span>';

/* ---------- balanzas ---------- */
S.bal=(l,r,t)=>{                    /* t: 'l' = baja la izquierda, 'r' = baja la derecha, '=' = equilibrio */
  const th=(t==='l'?-14:t==='r'?14:0)*Math.PI/180,px=120,py=44,L=84;
  const lx=px-L*Math.cos(th),ly=py-L*Math.sin(th),rx=px+L*Math.cos(th),ry=py+L*Math.sin(th);
  const pan=(x,y,e)=>{const yy=y+46;return '<line x1="'+x+'" y1="'+y+'" x2="'+(x-30)+'" y2="'+yy+'" '+K+' stroke-width="2"/><line x1="'+x+'" y1="'+y+'" x2="'+(x+30)+'" y2="'+yy+'" '+K+' stroke-width="2"/><path d="M'+(x-34)+' '+yy+' a34 18 0 0 0 68 0 Z" fill="#dfe6f5" '+K+'/>'+em(e,x,yy-4,36);};
  return svg(240,160,'<rect x="112" y="44" width="16" height="96" rx="4" fill="#9aa7c7" '+K+'/><rect x="78" y="136" width="84" height="14" rx="7" fill="#9aa7c7" '+K+'/><line x1="'+lx.toFixed(1)+'" y1="'+ly.toFixed(1)+'" x2="'+rx.toFixed(1)+'" y2="'+ry.toFixed(1)+'" '+K+' stroke-width="6"/>'+pan(lx.toFixed(1)*1,ly.toFixed(1)*1,l)+pan(rx.toFixed(1)*1,ry.toFixed(1)*1,r)+'<circle cx="120" cy="44" r="8" fill="#ffd23f" '+K+'/>');
};
S.digi=()=>svg(220,140,'<rect x="40" y="46" width="140" height="14" rx="6" fill="#fff" '+K+'/><rect x="24" y="60" width="172" height="68" rx="14" fill="#dfe6f5" '+K+'/><rect x="62" y="72" width="96" height="30" rx="6" fill="#10261d" '+K+'/><text x="110" y="95" font-size="22" font-weight="800" text-anchor="middle" fill="#7dffb0" font-family="monospace">500 g</text><circle cx="84" cy="116" r="6" fill="#fff" '+K+'/><circle cx="136" cy="116" r="6" fill="#fff" '+K+'/>');
S.aguja=()=>{let t='';for(let i=0;i<8;i++){const a=i*45*Math.PI/180;t+='<line x1="'+(110+27*Math.sin(a)).toFixed(1)+'" y1="'+(84-27*Math.cos(a)).toFixed(1)+'" x2="'+(110+32*Math.sin(a)).toFixed(1)+'" y2="'+(84-32*Math.cos(a)).toFixed(1)+'" stroke="#17203a" stroke-width="2"/>';}
  return svg(220,140,'<rect x="40" y="16" width="140" height="14" rx="6" fill="#fff" '+K+'/><rect x="24" y="30" width="172" height="104" rx="16" fill="#dfe6f5" '+K+'/><circle cx="110" cy="84" r="36" fill="#fff" '+K+'/>'+t+'<line x1="110" y1="84" x2="128" y2="62" stroke="#e5484d" stroke-width="4" stroke-linecap="round"/><circle cx="110" cy="84" r="5" fill="#17203a"/>');};

/* ---------- relojes ---------- */
S.clk=(h,m)=>{
  const P=(r,a)=>[60+r*Math.sin(a),60-r*Math.cos(a)];
  let t='<circle cx="60" cy="60" r="56" fill="#fff" '+K+'/>';
  for(let i=0;i<60;i++){const a=i*6*Math.PI/180,r1=i%5?50:46,p=P(r1,a),q=P(53,a);t+='<line x1="'+p[0].toFixed(1)+'" y1="'+p[1].toFixed(1)+'" x2="'+q[0].toFixed(1)+'" y2="'+q[1].toFixed(1)+'" stroke="#17203a" stroke-width="'+(i%5?1:2)+'"/>';}
  for(let n=1;n<=12;n++){const p=P(35,n*30*Math.PI/180);t+='<text x="'+p[0].toFixed(1)+'" y="'+(p[1]+4.5).toFixed(1)+'" font-size="13" font-weight="800" text-anchor="middle" fill="#17203a">'+n+'</text>';}
  const ha=((h%12)+m/60)*30*Math.PI/180,ma=m*6*Math.PI/180,hp=P(24,ha),mp=P(40,ma);
  t+='<line x1="60" y1="60" x2="'+hp[0].toFixed(1)+'" y2="'+hp[1].toFixed(1)+'" stroke="#17203a" stroke-width="6" stroke-linecap="round"/>';
  t+='<line x1="60" y1="60" x2="'+mp[0].toFixed(1)+'" y2="'+mp[1].toFixed(1)+'" stroke="#e23d8f" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#17203a"/>';
  return svg(120,120,t);
};
const tm=(h,m)=>h+':'+(m<10?'0'+m:m);
const dg=t=>'<span class="dig">'+t+'</span>';

/* ---------- grupos de emojis (para ver las sumas repetidas y los repartos) ---------- */
const grupos=(e,n,k)=>'<span class="grp">'+('<span class="g">'+e.repeat(n)+'</span>').repeat(k)+'</span>';
const monton=(e,n)=>'<span class="grp"><span class="g">'+e.repeat(n)+'</span></span>';

const add=(k,name,emoji,c,about,tip,ex)=>TOPICS.push({k,name,emoji,c,about,tip,ex});
const LT='&lt;',GT='&gt;';

/* ================= NÚMEROS ================= */
add('Números','Leo y escribo números','🔢',0,
 'Leemos y escribimos números hasta el 1500. Fijate cómo se dicen los cientos y el mil.',
 '<table><tr><th>Número</th><th>Se lee</th></tr><tr><td>100</td><td>cien</td></tr><tr><td>200</td><td>doscientos</td></tr><tr><td>300</td><td>trescientos</td></tr><tr><td>400</td><td>cuatrocientos</td></tr><tr><td>500</td><td>quinientos</td></tr><tr><td>600</td><td>seiscientos</td></tr><tr><td>700</td><td>setecientos</td></tr><tr><td>800</td><td>ochocientos</td></tr><tr><td>900</td><td>novecientos</td></tr><tr><td>1000</td><td>mil</td></tr><tr><td>1250</td><td>mil doscientos cincuenta</td></tr></table>',
[
 {t:'mc',title:'¿Cómo se escribe con cifras?',keep:false,items:[
  {q:'doscientos cuarenta y cinco',opts:['245','254','2045','425'],a:'245'},
  {q:'setecientos ocho',opts:['780','708','78','870'],a:'708'},
  {q:'quinientos cincuenta',opts:['505','550','5050','515'],a:'550'},
  {q:'mil trescientos',opts:['1003','1030','1300','300'],a:'1300'},
  {q:'mil cuatrocientos cinco',opts:['1405','1450','145','1045'],a:'1405'}]},
 {t:'match',title:'Uní cada número con cómo se lee',pairs:[['186','ciento ochenta y seis'],['340','trescientos cuarenta'],['602','seiscientos dos'],['999','novecientos noventa y nueve'],['1000','mil'],['1250','mil doscientos cincuenta']]},
 {t:'type',title:'Escribí el número con cifras',items:[
  {q:'seiscientos cinco',a:'605',num:true},{q:'novecientos cuarenta',a:'940',num:true},{q:'mil cien',a:'1100',num:true},{q:'mil trescientos cuarenta y uno',a:'1341',num:true}]},
 {t:'type',title:'Escribí el número con letras',items:[
  {q:'318',a:'trescientos dieciocho'},{q:'470',a:'cuatrocientos setenta'},{q:'1020',a:'mil veinte'},{q:'1500',a:'mil quinientos'}]}
]);

add('Números','Ordeno números','📊',1,
 'Para comparar, mirá cuántas cifras tiene cada número: el que tiene más cifras es mayor. Si tienen las mismas cifras, comparalas de izquierda a derecha.',
 '<table><tr><th>Signo</th><th>Quiere decir</th><th>Ejemplo</th></tr><tr><td><b>'+LT+'</b></td><td>menor que</td><td>245 '+LT+' 254</td></tr><tr><td><b>'+GT+'</b></td><td>mayor que</td><td>1000 '+GT+' 999</td></tr><tr><td><b>=</b></td><td>igual a</td><td>700 = 700</td></tr></table>',
[
 {t:'mc',title:'Poné el signo: '+LT+', '+GT+' o =',keep:true,items:[
  {q:'<b class="cmp">345 <span class="qm">?</span> 354</b>',opts:[LT,GT,'='],a:LT},
  {q:'<b class="cmp">1200 <span class="qm">?</span> 999</b>',opts:[LT,GT,'='],a:GT},
  {q:'<b class="cmp">508 <span class="qm">?</span> 580</b>',opts:[LT,GT,'='],a:LT},
  {q:'<b class="cmp">700 <span class="qm">?</span> 700</b>',opts:[LT,GT,'='],a:'='},
  {q:'<b class="cmp">1450 <span class="qm">?</span> 1405</b>',opts:[LT,GT,'='],a:GT},
  {q:'<b class="cmp">99 <span class="qm">?</span> 101</b>',opts:[LT,GT,'='],a:LT}]},
 {t:'order',title:'Ordená de menor a mayor',items:['58 85 508','245 254 425 452','199 910 1010 1100','1005 1050 1105 1150 1500']},
 {t:'order',title:'Ordená de mayor a menor',items:['430 340 304 43','1500 1250 1205 1052','905 590 509 95']},
 {t:'type',title:'¿Qué número sigue o falta?',items:[
  {q:'1100, 1200, 1300, ___',a:'1400',num:true},{q:'995, 996, 997, ___',a:'998',num:true},{q:'250, 300, 350, ___',a:'400',num:true},
  {q:'El que viene después de 799',a:'800',num:true},{q:'El que viene antes de 1000',a:'999',num:true},{q:'El que está entre 1299 y 1301',a:'1300',num:true}]}
]);

/* ================= SUMAS, MULTIPLICACIONES Y REPARTOS ================= */
add('Cuentas','Sumas repetidas','➕',2,
 'Una suma repetida suma el mismo número varias veces. Es mucho más rápido que contar de uno en uno.',
 '<p>3 platos con 2 manzanas cada uno:</p><p>'+grupos('🍎',2,3)+'</p><p><b>2 + 2 + 2 = 6</b></p>',
[
 {t:'type',title:'Mirá los grupos y completá la suma',items:[
  {ico:grupos('🍎',2,3),q:'2 + 2 + 2 =',a:'6',num:true},
  {ico:grupos('⭐',5,2),q:'5 + 5 =',a:'10',num:true},
  {ico:grupos('🌸',4,3),q:'4 + 4 + 4 =',a:'12',num:true},
  {ico:grupos('🍪',3,5),q:'3 + 3 + 3 + 3 + 3 =',a:'15',num:true}]},
 {t:'match',title:'Uní cada suma con su resultado',pairs:[['5 + 5 + 5','15'],['2 + 2 + 2 + 2','8'],['10 + 10 + 10','30'],['4 + 4 + 4 + 4 + 4','20'],['3 + 3 + 3 + 3','12']]},
 {t:'fill',title:'Completá con el resultado',items:[{s:'5 + 5 + 5 + 5 = ___',a:'20'},{s:'100 + 100 + 100 = ___',a:'300'},{s:'6 + 6 + 6 = ___',a:'18'}],extra:['15','30']},
 {t:'mc',title:'Resolvé los problemas',keep:false,items:[
  {q:'Compro 4 paquetes con 3 figuritas cada uno. ¿Qué suma repetida resuelve el problema?',opts:['3 + 3 + 3 + 3','4 + 4 + 4','3 + 4','4 + 3 + 3'],a:'3 + 3 + 3 + 3'},
  {q:'En cada caja hay 5 lápices. Tengo 3 cajas. ¿Cuántos lápices hay en total?',opts:['8','15','10','35'],a:'15'},
  {q:'Camino 10 cuadras por día durante 4 días. ¿Cuántas cuadras caminé en total?',opts:['14','40','104','20'],a:'40'}]}
]);

add('Cuentas','Multiplico','✖️',3,
 'Multiplicar es una forma corta de escribir una suma repetida. 4 × 3 quiere decir 4 veces 3: 3 + 3 + 3 + 3 = 12.',
 '<table><tr><th>Suma repetida</th><th>Multiplicación</th></tr><tr><td>2 + 2 + 2 + 2 + 2 = 10</td><td>5 × 2 = 10</td></tr><tr><td>10 + 10 + 10 = 30</td><td>3 × 10 = 30</td></tr></table>',
[
 {t:'match',title:'Uní cada suma con su multiplicación',pairs:[['3 + 3 + 3 + 3','4 × 3'],['5 + 5','2 × 5'],['10 + 10 + 10','3 × 10'],['4 + 4 + 4 + 4 + 4','5 × 4']]},
 {t:'type',title:'Resolvé las multiplicaciones',items:[
  {q:'2 × 5 =',a:'10',num:true},{q:'3 × 4 =',a:'12',num:true},{q:'5 × 3 =',a:'15',num:true},{q:'4 × 10 =',a:'40',num:true},{q:'2 × 8 =',a:'16',num:true}]},
 {t:'mc',title:'Resolvé los problemas',keep:false,items:[
  {q:'Hay 6 mesas con 2 sillas en cada una. ¿Cuántas sillas hay?',opts:['8','12','26','10'],a:'12'},
  {q:'Un paquete trae 5 galletitas. ¿Cuántas galletitas hay en 4 paquetes?',opts:['9','20','45','10'],a:'20'},
  {q:'Cada bolsa tiene 10 caramelos. ¿Cuántos caramelos hay en 3 bolsas?',opts:['13','30','103','300'],a:'30'}]},
 {t:'mc',title:'Pensá un poquito',keep:false,items:[
  {q:'¿Qué cuenta da lo mismo que 4 × 5?',opts:['5 + 5 + 5 + 5','4 + 4 + 4','5 + 4','5 × 5'],a:'5 + 5 + 5 + 5'},
  {q:'¿Cuál da más?',opts:['3 × 5','4 × 4','Dan lo mismo'],a:'4 × 4'}]}
]);

add('Cuentas','Repartos en partes iguales','🍪',4,
 'Repartir en partes iguales es darle lo mismo a cada uno. Podés dibujar, usar sumas repetidas o armar grupos.',
 '<p>12 caramelos entre 3 chicos:</p><p>'+grupos('🍬',4,3)+'</p><p>A cada uno le tocan <b>4</b>, porque 4 + 4 + 4 = 12.</p>',
[
 {t:'mc',title:'Cuántos le tocan a cada uno',keep:false,items:[
  {q:'12 caramelos se reparten en partes iguales entre 3 chicos. ¿Cuántos recibe cada uno?',opts:['3','4','6','9'],a:'4'},
  {q:'10 figuritas se reparten en partes iguales entre 2 amigos. ¿Cuántas recibe cada uno?',opts:['2','5','8','20'],a:'5'},
  {q:'20 galletitas se ponen en 4 platos iguales. ¿Cuántas van en cada plato?',opts:['4','5','6','16'],a:'5'},
  {q:'18 globos se reparten en partes iguales entre 3 chicos. ¿Cuántos recibe cada uno?',opts:['3','6','9','15'],a:'6'}]},
 {t:'type',title:'Mirá el dibujo y escribí cuántos van en cada lugar',items:[
  {ico:monton('🍎',12),q:'12 manzanas en 4 canastas iguales. ¿Cuántas van en cada canasta?',a:'3',num:true},
  {ico:monton('🎈',15),q:'15 globos en 5 bolsas iguales. ¿Cuántos van en cada bolsa?',a:'3',num:true},
  {ico:monton('⭐',16),q:'16 estrellas entre 4 chicos en partes iguales. ¿Cuántas recibe cada uno?',a:'4',num:true},
  {ico:monton('🍪',8),q:'8 galletitas entre 2 chicos en partes iguales. ¿Cuántas recibe cada uno?',a:'4',num:true}]},
 {t:'match',title:'Repartí 12 caramelos: uní cada reparto con lo que recibe cada uno',pairs:[['12 entre 2','6'],['12 entre 3','4'],['12 entre 4','3'],['12 entre 6','2']]},
 {t:'mc',title:'¿Qué suma muestra el reparto?',keep:false,items:[
  {q:'Se reparten 12 caramelos entre 3 chicos y a cada uno le tocan 4. ¿Qué cuenta lo muestra?',opts:['4 + 4 + 4 = 12','4 + 3 = 7','12 + 3 = 15','12 − 3 = 9'],a:'4 + 4 + 4 = 12'},
  {q:'Se reparten 15 caramelos entre 3 chicos y a cada uno le tocan 5. ¿Qué cuenta lo muestra?',opts:['5 + 3 = 8','15 + 3 = 18','5 + 5 + 5 = 15','3 + 3 + 3 = 9'],a:'5 + 5 + 5 = 15'},
  {q:'Se reparten 20 caramelos entre 4 chicos y a cada uno le tocan 5. ¿Qué cuenta lo muestra?',opts:['5 + 5 + 5 + 5 = 20','4 + 5 = 9','5 + 5 = 10','20 + 4 = 24'],a:'5 + 5 + 5 + 5 = 20'}]}
]);

add('Cuentas','Repartos desiguales y grupos','🎒',5,
 'No siempre se reparte en partes iguales: a veces uno recibe más que otro. También podemos armar grupos: con 20 caramelos y bolsitas de 5 armamos 4 bolsitas.',
 '<p><b>Partes iguales:</b> 10 caramelos → 5 y 5.</p><p><b>No iguales:</b> 10 caramelos → 7 y 3.</p><p><b>Armar grupos:</b> 20 caramelos en bolsitas de 5 → 5 + 5 + 5 + 5 → <b>4 bolsitas</b>.</p>',
[
 {t:'sort',title:'¿El reparto es en partes iguales?',buckets:[{id:'i',label:'Partes iguales'},{id:'n',label:'No son iguales'}],items:[
  {t:'10 caramelos: 5 y 5',b:'i'},{t:'8 caramelos: 6 y 2',b:'n'},{t:'12 lápices: 4, 4 y 4',b:'i'},{t:'9 figuritas: 7 y 2',b:'n'},{t:'15 globos: 10 y 5',b:'n'},{t:'6 galletitas: 2, 2 y 2',b:'i'}]},
 {t:'type',title:'Uno recibe más: ¿cuántos le tocan al otro?',items:[
  {q:'10 figuritas para dos amigos. Uno recibe 7. ¿Cuántas recibe el otro?',a:'3',num:true},
  {q:'12 caramelos para dos chicos. Uno recibe 8. ¿Cuántos recibe el otro?',a:'4',num:true},
  {q:'15 globos para dos chicos. Uno recibe 10. ¿Cuántos recibe el otro?',a:'5',num:true},
  {q:'20 lápices para dos cajas. En una hay 14. ¿Cuántos hay en la otra?',a:'6',num:true}]},
 {t:'mc',title:'Armá los grupos',keep:false,items:[
  {q:'Hay 12 caramelos y armo bolsitas de 3. ¿Cuántas bolsitas armo?',opts:['3','4','9','15'],a:'4'},
  {q:'Hay 20 figuritas y las pongo en sobres de 5. ¿Cuántos sobres armo?',opts:['4','5','15','25'],a:'4'},
  {q:'Hay 18 flores y armo ramos de 6. ¿Cuántos ramos armo?',opts:['3','6','12','24'],a:'3'}]}
]);

/* ================= CUERPOS GEOMÉTRICOS ================= */
add('Cuerpos','Conozco los cuerpos','🧊',0,
 'Los cuerpos geométricos ocupan lugar en el espacio. Vamos a conocer seis: cubo, prisma, esfera, cilindro, pirámide y cono.',
 '<table><tr><td>'+cb('cubo','cubo')+'</td><td>'+cb('prisma','prisma')+'</td><td>'+cb('esfera','esfera')+'</td></tr><tr><td>'+cb('cilindro','cilindro')+'</td><td>'+cb('piramide','pirámide')+'</td><td>'+cb('cono','cono')+'</td></tr></table>',
[
 {t:'match',title:'Uní cada cuerpo con su nombre',pairs:[[S.cubo(),'cubo'],[S.prisma(),'prisma'],[S.esfera(),'esfera'],[S.cilindro(),'cilindro'],[S.piramide(),'pirámide'],[S.cono(),'cono']]},
 {t:'mc',title:'¿Qué cuerpo es?',keep:false,items:[
  {img:S.piramide(),q:'Este cuerpo es una…',opts:['pirámide','cono','cubo','prisma'],a:'pirámide'},
  {img:S.cilindro(),q:'Este cuerpo es un…',opts:['cono','cilindro','prisma','cubo'],a:'cilindro'},
  {img:S.prisma(),q:'Este cuerpo es un…',opts:['cubo','prisma','cilindro','cono'],a:'prisma'},
  {img:S.cono(),q:'Este cuerpo es un…',opts:['cono','cilindro','pirámide','esfera'],a:'cono'},
  {img:S.esfera(),q:'Este cuerpo es una…',opts:['esfera','cubo','pirámide','cilindro'],a:'esfera'}]},
 {t:'mc',title:'¿A qué cuerpo se parece?',keep:false,items:[
  {img:'🎲',q:'Un dado',opts:['cubo','esfera','cilindro','cono'],a:'cubo'},
  {img:'⚽',q:'Una pelota',opts:['cubo','esfera','prisma','cono'],a:'esfera'},
  {img:'🥫',q:'Una lata',opts:['cilindro','cubo','esfera','pirámide'],a:'cilindro'},
  {img:'📦',q:'Una caja de zapatos',opts:['esfera','cono','prisma','cilindro'],a:'prisma'}]}
]);

add('Cuerpos','Caras, vértices y aristas','📐',1,
 'La <b>cara</b> es una parte plana. La <b>arista</b> es la línea donde se juntan dos caras. El <b>vértice</b> es la punta donde se juntan las aristas.',
 '<table><tr><td><span class="cb">'+S.cuboMarca('cara')+'<span><b>cara</b></span></span></td><td><span class="cb">'+S.cuboMarca('arista')+'<span><b>arista</b></span></span></td><td><span class="cb">'+S.cuboMarca('vertice')+'<span><b>vértice</b></span></span></td></tr></table>',
[
 {t:'mc',title:'¿Qué está marcado?',keep:false,items:[
  {img:S.cuboMarca('cara'),q:'La parte amarilla es una…',opts:['cara','arista','vértice'],a:'cara'},
  {img:S.cuboMarca('arista'),q:'La línea roja es una…',opts:['cara','arista','vértice'],a:'arista'},
  {img:S.cuboMarca('vertice'),q:'El punto rojo es un…',opts:['cara','arista','vértice'],a:'vértice'}]},
 {t:'match',title:'Uní cada explicación con su nombre',pairs:[['parte plana del cuerpo','cara'],['línea donde se juntan dos caras','arista'],['punta donde se juntan las aristas','vértice']]},
 {t:'type',title:'Contá y escribí cuántos hay',items:[
  {ico:S.cubo(),q:'¿Cuántas caras tiene el cubo?',a:'6',num:true},
  {ico:S.cubo(),q:'¿Cuántos vértices tiene el cubo?',a:'8',num:true},
  {ico:S.cubo(),q:'¿Cuántas aristas tiene el cubo?',a:'12',num:true},
  {ico:S.piramide(),q:'¿Cuántas caras tiene la pirámide? (contá también la de abajo)',a:'5',num:true},
  {ico:S.piramide(),q:'¿Cuántos vértices tiene la pirámide?',a:'5',num:true},
  {ico:S.piramide(),q:'¿Cuántas aristas tiene la pirámide?',a:'8',num:true}]},
 {t:'sort',title:'¿Tiene vértices?',buckets:[{id:'s',label:'Tiene vértices'},{id:'n',label:'No tiene vértices'}],items:[
  {t:cb('cubo','cubo'),b:'s'},{t:cb('prisma','prisma'),b:'s'},{t:cb('piramide','pirámide'),b:'s'},{t:cb('esfera','esfera'),b:'n'},{t:cb('cilindro','cilindro'),b:'n'}]}
]);

add('Cuerpos','Figuras en los cuerpos','🔷',2,
 'Las caras planas de los cuerpos tienen forma de figuras: cuadrados, rectángulos, triángulos y círculos. Si apoyás una cara sobre una hoja y la dibujás, aparece la figura.',
 '<table><tr><th>Cuerpo</th><th>Sus caras</th></tr><tr><td>cubo</td><td>6 cuadrados</td></tr><tr><td>prisma</td><td>rectángulos</td></tr><tr><td>pirámide</td><td>triángulos (y 1 cuadrado abajo)</td></tr><tr><td>cilindro</td><td>2 círculos</td></tr><tr><td>cono</td><td>1 círculo</td></tr></table>',
[
 {t:'match',title:'Uní cada cuerpo con la figura de sus caras',pairs:[[S.cubo(),'cuadrados'],[S.prisma(),'rectángulos'],[S.cilindro(),'círculos'],[S.piramide(),'triángulos en los costados']]},
 {t:'mc',title:'¿Qué figura dibujo si apoyo una cara?',keep:false,items:[
  {img:S.cubo(),q:'Apoyo una cara del cubo. Dibujo un…',opts:['cuadrado','círculo','triángulo'],a:'cuadrado'},
  {img:S.cilindro(),q:'Apoyo la tapa del cilindro. Dibujo un…',opts:['cuadrado','círculo','triángulo'],a:'círculo'},
  {img:S.prisma(),q:'Apoyo una cara del prisma. Dibujo un…',opts:['rectángulo','círculo','triángulo'],a:'rectángulo'},
  {img:S.cono(),q:'Apoyo la base del cono. Dibujo un…',opts:['cuadrado','círculo','triángulo'],a:'círculo'},
  {img:S.piramide(),q:'Apoyo una cara de costado de la pirámide. Dibujo un…',opts:['cuadrado','círculo','triángulo'],a:'triángulo'}]},
 {t:'type',title:'Contá las figuras',items:[
  {ico:S.cubo(),q:'¿Cuántos cuadrados tiene el cubo?',a:'6',num:true},
  {ico:S.piramide(),q:'¿Cuántos triángulos tiene esta pirámide?',a:'4',num:true},
  {ico:S.cilindro(),q:'¿Cuántos círculos tiene el cilindro?',a:'2',num:true},
  {ico:S.cono(),q:'¿Cuántos círculos tiene el cono?',a:'1',num:true}]},
 {t:'sort',title:'¿Tiene círculos?',buckets:[{id:'s',label:'Tiene círculos'},{id:'n',label:'No tiene círculos'}],items:[
  {t:cb('cilindro','cilindro'),b:'s'},{t:cb('cono','cono'),b:'s'},{t:cb('cubo','cubo'),b:'n'},{t:cb('prisma','prisma'),b:'n'},{t:cb('piramide','pirámide'),b:'n'}]}
]);

add('Cuerpos','Comparo y clasifico','🔍',3,
 'Podemos comparar los cuerpos: ¿en qué se parecen? ¿En qué se diferencian? Algunos tienen todas las caras planas; otros tienen una parte curva (redondeada).',
 '<p><b>Todas las caras planas:</b> cubo, prisma, pirámide.</p><p><b>Con una parte curva:</b> esfera, cilindro, cono.</p>',
[
 {t:'mc',title:'¿Qué cuerpo es?',keep:false,items:[
  {q:'Tengo 6 caras cuadradas iguales.',opts:['cubo','cono','esfera','cilindro'],a:'cubo'},
  {q:'Tengo una base redonda y termino en punta.',opts:['cilindro','cono','cubo','prisma'],a:'cono'},
  {q:'No tengo caras planas ni aristas.',opts:['esfera','cubo','pirámide','prisma'],a:'esfera'},
  {q:'Tengo dos bases redondas y una parte curva.',opts:['cono','esfera','cilindro','pirámide'],a:'cilindro'}]},
 {t:'sort',title:'Clasificá los cuerpos',buckets:[{id:'p',label:'Todas las caras son planas'},{id:'c',label:'Tiene una parte curva'}],items:[
  {t:cb('cubo','cubo'),b:'p'},{t:cb('prisma','prisma'),b:'p'},{t:cb('piramide','pirámide'),b:'p'},{t:cb('esfera','esfera'),b:'c'},{t:cb('cilindro','cilindro'),b:'c'},{t:cb('cono','cono'),b:'c'}]},
 {t:'mc',title:'Parecidos y diferencias',keep:false,items:[
  {img:S.cubo()+S.prisma(),q:'¿En qué se parecen el cubo y el prisma?',opts:['Los dos tienen 6 caras planas','Los dos tienen una parte curva','Los dos tienen 8 caras','Ninguno tiene vértices'],a:'Los dos tienen 6 caras planas'},
  {img:S.cilindro()+S.cono(),q:'¿En qué se parecen el cilindro y el cono?',opts:['Los dos tienen caras cuadradas','Los dos tienen un círculo en la base','Los dos tienen 12 aristas','Los dos tienen 6 caras'],a:'Los dos tienen un círculo en la base'},
  {img:S.cubo()+S.piramide(),q:'¿En qué se diferencian el cubo y la pirámide?',opts:['El cubo tiene 6 caras y la pirámide 5','El cubo tiene 5 caras y la pirámide 6','Los dos tienen 6 caras','Los dos tienen 5 caras'],a:'El cubo tiene 6 caras y la pirámide 5'},
  {img:S.esfera()+S.cubo(),q:'¿En qué se diferencian la esfera y el cubo?',opts:['La esfera no tiene caras planas ni aristas','La esfera tiene 6 caras','El cubo no tiene aristas','Los dos son redondos'],a:'La esfera no tiene caras planas ni aristas'}]}
]);

/* ================= MEDIDAS ================= */
add('Medidas','El peso','⚖️',4,
 'El peso dice qué tan pesado es algo. Se mide con balanzas. Las unidades son el <b>kilogramo</b> (kg) y el <b>gramo</b> (g). 1 kilo tiene 1000 gramos y medio kilo tiene 500 gramos.',
 '<table><tr><th>Unidad</th><th>Se usa para</th></tr><tr><td>gramo (g)</td><td>cosas livianas: una moneda, un lápiz</td></tr><tr><td>kilogramo (kg)</td><td>cosas más pesadas: una sandía, una persona</td></tr></table><p>1 kg = 1000 g &nbsp;·&nbsp; medio kilo = 500 g</p>',
[
 {t:'mc',title:'Medir el peso',keep:false,items:[
  {q:'¿Con qué se mide el peso?',opts:['una balanza','una regla','un reloj','una jarra medidora'],a:'una balanza'},
  {q:'¿Qué unidad se usa para el peso?',opts:['el kilogramo','el metro','el litro','el minuto'],a:'el kilogramo'},
  {q:'¿Qué pesa más?',opts:['un kilo de pan','un kilo de plumas','pesan lo mismo'],a:'pesan lo mismo'}]},
 {t:'match',title:'Uní cada balanza con su nombre',pairs:[[S.bal('🍎','🍓','l'),'balanza de dos platillos'],[S.digi(),'balanza digital'],[S.aguja(),'balanza de aguja']]},
 {t:'mc',title:'¿Cuál pesa más?',keep:false,items:[
  {img:S.bal('🍉','🍎','l'),q:'El platillo de la sandía baja. ¿Qué pesa más?',opts:['la sandía','la manzana','pesan lo mismo'],a:'la sandía'},
  {img:S.bal('🍓','🎒','r'),q:'¿Qué pesa más?',opts:['la frutilla','la mochila','pesan lo mismo'],a:'la mochila'},
  {img:S.bal('🍎','🍎','='),q:'La balanza está en equilibrio. ¿Qué pesa más?',opts:['la manzana de la izquierda','la manzana de la derecha','pesan lo mismo'],a:'pesan lo mismo'}]},
 {t:'sort',title:'¿En gramos o en kilogramos?',buckets:[{id:'g',label:'Gramos (g)'},{id:'k',label:'Kilogramos (kg)'}],items:[
  {t:'🪙 una moneda',b:'g'},{t:'✏️ un lápiz',b:'g'},{t:'🍬 un caramelo',b:'g'},{t:'🥚 un huevo',b:'g'},{t:'🧍 una persona',b:'k'},{t:'🍉 una sandía',b:'k'},{t:'🥔 una bolsa de papas',b:'k'},{t:'🚲 una bicicleta',b:'k'}]},
 {t:'type',title:'Completá con números',items:[
  {q:'1 kilo = ___ gramos',a:'1000',num:true},{q:'Medio kilo = ___ gramos',a:'500',num:true},
  {q:'Dos paquetes de 500 g pesan juntos ___ g',a:'1000',num:true},{q:'¿Cuántos paquetes de medio kilo hacen 1 kilo?',a:'2',num:true}]}
]);

add('Medidas','El reloj de agujas','⏰',5,
 'La aguja <b>corta</b> marca la hora. La aguja <b>larga</b> (rosa) marca los minutos. Cuando la larga está en el 12 es <b>en punto</b>; en el 6, <b>y media</b>; en el 3, <b>y cuarto</b>; en el 9, <b>menos cuarto</b>.',
 '<table><tr><th>La larga está en…</th><th>Pasaron…</th></tr><tr><td>12</td><td>0 minutos (en punto)</td></tr><tr><td>1</td><td>5 minutos</td></tr><tr><td>2</td><td>10 minutos</td></tr><tr><td>3</td><td>15 minutos (y cuarto)</td></tr><tr><td>6</td><td>30 minutos (y media)</td></tr><tr><td>9</td><td>45 minutos (menos cuarto)</td></tr></table>'+S.clk(3,0),
[
 {t:'mc',title:'¿Qué hora es? (en punto y media)',keep:false,items:[
  {img:S.clk(3,0),q:'¿Qué hora marca?',opts:['3:00','12:15','3:30','6:00'],a:'3:00'},
  {img:S.clk(7,30),q:'¿Qué hora marca?',opts:['7:30','6:35','7:00','5:30'],a:'7:30'},
  {img:S.clk(11,0),q:'¿Qué hora marca?',opts:['11:00','12:55','1:00','11:30'],a:'11:00'},
  {img:S.clk(5,30),q:'¿Qué hora marca?',opts:['5:30','6:25','5:00','6:30'],a:'5:30'}]},
 {t:'mc',title:'¿Qué hora es? (cuartos y minutos)',keep:false,items:[
  {img:S.clk(2,15),q:'¿Qué hora marca?',opts:['2:15','3:10','2:45','3:15'],a:'2:15'},
  {img:S.clk(6,45),q:'¿Qué hora marca?',opts:['6:45','9:30','6:15','7:45'],a:'6:45'},
  {img:S.clk(9,10),q:'¿Qué hora marca?',opts:['9:10','2:45','10:09','9:50'],a:'9:10'},
  {img:S.clk(4,20),q:'¿Qué hora marca?',opts:['4:20','8:20','4:04','5:20'],a:'4:20'},
  {img:S.clk(1,35),q:'¿Qué hora marca?',opts:['1:35','7:05','1:07','2:35'],a:'1:35'}]},
 {t:'type',title:'Escribí la hora con números (por ejemplo 3:30)',items:[
  {ico:S.clk(8,0),q:'¿Qué hora marca?',a:['8:00','8'],tm:true},
  {ico:S.clk(4,30),q:'¿Qué hora marca?',a:'4:30',tm:true},
  {ico:S.clk(10,15),q:'¿Qué hora marca?',a:'10:15',tm:true},
  {ico:S.clk(12,45),q:'¿Qué hora marca?',a:'12:45',tm:true}]},
 {t:'mc',title:'Pensá un poquito',keep:false,items:[
  {q:'La aguja larga está en el 6. ¿Cuántos minutos pasaron de la hora?',opts:['30','6','15','60'],a:'30'},
  {q:'La aguja larga está en el 3. ¿Cuántos minutos pasaron de la hora?',opts:['3','15','30','45'],a:'15'},
  {q:'Son las 5 en punto. ¿Dónde está la aguja larga?',opts:['en el 12','en el 5','en el 6','en el 3'],a:'en el 12'}]}
]);

add('Medidas','El reloj digital','🕒',0,
 'El reloj digital muestra la hora con números. Antes de los dos puntos están las <b>horas</b> y después los <b>minutos</b>.',
 '<p>'+dg('3:30')+' son las tres y media.</p><p>'+dg('9:05')+' son las nueve y cinco.</p><p>'+dg('9:50')+' son las nueve y cincuenta.</p>',
[
 {t:'mc',title:'¿Cómo se lee?',keep:false,items:[
  {q:dg('4:15')+'<br>¿Qué hora es?',opts:['las cuatro y cuarto','las cuatro y media','las tres y cuarto','las cinco menos cuarto'],a:'las cuatro y cuarto'},
  {q:dg('7:30')+'<br>¿Qué hora es?',opts:['las siete y media','las seis y media','las siete en punto','las ocho y media'],a:'las siete y media'},
  {q:dg('9:00')+'<br>¿Qué hora es?',opts:['las nueve en punto','las nueve y media','las diez en punto','las seis en punto'],a:'las nueve en punto'},
  {q:dg('8:20')+'<br>¿Qué hora es?',opts:['las ocho y veinte','las cuatro y ocho','las ocho y dos','las dos y ocho'],a:'las ocho y veinte'}]},
 {t:'match',title:'Uní cada reloj de agujas con su reloj digital',pairs:[[S.clk(1,0),dg('1:00')],[S.clk(5,30),dg('5:30')],[S.clk(8,15),dg('8:15')],[S.clk(10,40),dg('10:40')]]},
 {t:'mc',title:'Mirá el reloj digital y elegí el de agujas',keep:true,items:[
  {q:dg('3:30'),opts:[S.clk(3,30),S.clk(6,15),S.clk(3,0),S.clk(12,15)],a:S.clk(3,30)},
  {q:dg('8:45'),opts:[S.clk(8,45),S.clk(9,40),S.clk(8,15),S.clk(9,45)],a:S.clk(8,45)},
  {q:dg('11:10'),opts:[S.clk(11,10),S.clk(2,55),S.clk(10,55),S.clk(11,50)],a:S.clk(11,10)}]},
 {t:'type',title:'Escribí la hora con números',items:[
  {q:'Son las 5 y media',a:'5:30',tm:true},{q:'Son las 9 en punto',a:['9:00','9'],tm:true},{q:'Son las 2 y cuarto',a:'2:15',tm:true},{q:'Son las 10 y veinte',a:'10:20',tm:true}]}
]);

/* ---------- arranque ---------- */
$('#homeBtn').onclick=()=>PROFILE?showHome():showWho();
$('#who').onclick=showWho;
$('#sndBtn').onclick=function(){muted=!muted;this.textContent=muted?'🔇':'🔊';if(muted&&TTS){try{speechSynthesis.cancel();}catch(e){}}};
updateTop();
bootProfiles();
