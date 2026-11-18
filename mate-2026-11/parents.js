'use strict';
/* Panel para padres (español). Las respuestas resueltas se generan de los mismos datos que los juegos. */
const PAR=[
/*0 Leo y escribo números*/{q:'Leer y escribir números hasta el 1500: los cientos (doscientos, trescientos…), el mil y cómo se arman (mil trescientos cuarenta y uno = 1341).',c:'Jueguen a dictarse números: uno dice "ochocientos siete" y el otro lo escribe con cifras; después al revés. Sirven los precios, las patentes y los números de las casas.',e:'Escribir "mil trescientos" como 10300 o 1003 (escribir tal cual suena). Cada cifra tiene su lugar y el cero ocupa el lugar vacío. Otro error: 708 escrito como 78.',h:'Cada día, un número que vea en la calle o en un envase: que lo lea en voz alta y lo escriba.',g:['100 = cien · 101 a 199 = ciento…','200 = doscientos · 300 = trescientos','400 = cuatrocientos · 500 = quinientos','600 = seiscientos · 700 = setecientos','800 = ochocientos · 900 = novecientos','1000 = mil · 1500 = mil quinientos','Al escribir con letras no se evalúa la tilde (dieciséis = dieciseis).'],x:['Elegir cómo se escribe con cifras lo que se lee.','Unir el número con cómo se lee. Tocar uno y luego su pareja, o arrastrar.','Escribir con cifras. Acepta 1100 y también 1.100.','Escribir con letras, todo en una línea y sin la palabra "y" extra (ciento ochenta y seis).']},
/*1 Ordeno números*/{q:'Comparar y ordenar números: primero se mira cuántas cifras tienen (más cifras, mayor). Si tienen las mismas, se compara de izquierda a derecha. También: anterior, siguiente y series.',c:'Con tarjetas con números: sacan dos y dicen cuál es mayor. Después ordenan 5 tarjetas de menor a mayor. Para las series, contar de 10 en 10 y de 100 en 100 hacia arriba.',e:'Pensar que 99 es mayor que 101 "porque el 9 es más grande". Hay que mirar primero la cantidad de cifras. Otro error: confundir < con >.',h:'Elegir 3 números de la calle y ordenarlos de menor a mayor.',g:['< menor que · > mayor que · = igual a','La "boca" del signo se abre hacia el número mayor.','Más cifras = número mayor.','Mismas cifras: se compara de izquierda a derecha.','Serie de 100 en 100: 1100, 1200, 1300…'],x:['Poner el signo correcto entre dos números.','Ordenar de menor a mayor: tocar o arrastrar las fichas a la línea.','Ordenar de mayor a menor.','Completar series, y encontrar el anterior, el siguiente y el del medio.']},
/*2 Sumas repetidas*/{q:'Una suma repetida suma el mismo número varias veces (3 + 3 + 3 + 3 = 12). Es la puerta de entrada a la multiplicación.',c:'Con garbanzos o botones: armar 4 grupos de 3 y contar de tres en tres. Después escribir la suma que armaron.',e:'Contar de uno en uno y perderse. Contar de a 2, 5 y 10 ayuda mucho.',h:'Contar en voz alta de 2 en 2, de 5 en 5 y de 10 en 10 mientras suben escaleras o caminan.',g:['3 + 3 + 3 + 3 = 12','5 + 5 + 5 = 15','10 + 10 + 10 = 30','Cuantos más grupos, más veces se suma.'],x:['Mirar los grupos del dibujo y completar la suma repetida.','Unir la suma repetida con su resultado.','Completar con el resultado. Sobran fichas para pensar.','Problemas con grupos iguales: elegir la suma o el resultado.']},
/*3 Multiplico*/{q:'Multiplicar es una forma corta de escribir una suma repetida. En el colegio suele leerse "4 × 3" como "4 veces 3" (3 + 3 + 3 + 3 = 12). El resultado es el mismo si se da vuelta (3 × 4 = 12).',c:'Armar la multiplicación con objetos: 4 platos con 3 galletitas cada uno. Contar los grupos y la cantidad de cada grupo. Practicar las tablas del 2, del 5 y del 10.',e:'Sumar en lugar de multiplicar (4 + 3 en vez de 4 × 3). Otro: no saber qué número es "los grupos" y cuál es "cuántos hay en cada uno". Si el colegio enseña el otro orden, vale igual: el resultado no cambia.',h:'Un minuto de tablas: el doble, de 2 en 2, de 5 en 5 y de 10 en 10.',g:['4 × 3 = 3 + 3 + 3 + 3 = 12','2 × 5 = 10','3 × 10 = 30','5 × 4 = 20','Se puede dar vuelta: 3 × 4 = 4 × 3'],x:['Unir cada suma repetida con su multiplicación (el resultado es distinto en cada pareja).','Resolver multiplicaciones escribiendo el resultado.','Problemas de grupos iguales.','Últimos desafíos para pensar y comparar resultados.']},
/*4 Repartos en partes iguales*/{q:'Repartir en partes iguales es dar lo mismo a cada uno. Se puede resolver con dibujos, con sumas repetidas (4 + 4 + 4 = 12) o armando grupos. No hace falta la cuenta de dividir todavía.',c:'Con 12 garbanzos y 3 vasitos: repartir de a uno hasta que se acaben y contar cuántos hay en cada vaso. Después hacerlo con otras cantidades.',e:'Dar más a uno que a otro sin darse cuenta. Verificar siempre que todos tengan lo mismo.',h:'Cuando haya algo para repartir (galletitas, figuritas): que lo reparta él y verifique que sea parejo.',g:['12 entre 2 = 6','12 entre 3 = 4','12 entre 4 = 3','12 entre 6 = 2','Se puede comprobar con una suma repetida: 4 + 4 + 4 = 12.'],x:['Problemas de reparto: elegir cuántos le tocan a cada uno.','Mirar el dibujo y escribir cuántos van en cada lugar.','Unir cada reparto de 12 con lo que recibe cada uno.','Elegir la suma que muestra el reparto.']},
/*5 Repartos desiguales y grupos*/{q:'No siempre se reparte en partes iguales: a veces uno recibe más que otro (reparto no equitativo). También se arman grupos: con 20 caramelos y bolsitas de 5, salen 4 bolsitas (este tipo de problema suele llamarse de partición o agrupamiento).',c:'Con garbanzos: repartir 10 en dos montones desiguales (7 y 3). Después armar grupos de 5 y contar cuántos grupos salen.',e:'Pensar que "repartir" siempre es en partes iguales. Mirar si el problema dice "partes iguales" o no.',h:'Plantearle un problema de la vida diaria: "Hay 12 empanadas y cada mesa se lleva 3, ¿cuántas mesas?".',g:['Partes iguales: 5 y 5.','No son iguales: 7 y 3.','Si uno recibe 7 de 10, al otro le tocan 3 (10 − 7).','20 caramelos en bolsitas de 5: 5 + 5 + 5 + 5, son 4 bolsitas.'],x:['Clasificar los repartos: partes iguales o no.','Uno recibe más: calcular cuánto le toca al otro.','Armar grupos: cuántos grupos salen (partición).']},
/*6 Conozco los cuerpos*/{q:'Los cuerpos geométricos ocupan lugar en el espacio (se pueden tocar). Son seis: cubo, prisma, esfera, cilindro, pirámide y cono. No hay que confundirlos con las figuras planas (cuadrado, círculo, etc.).',c:'Buscar en la casa objetos con esas formas: un dado (cubo), una pelota (esfera), una lata (cilindro), una caja de zapatos (prisma), un cucurucho (cono). Tocarlos y nombrarlos.',e:'Decir "cuadrado" en lugar de "cubo" o "círculo" en lugar de "esfera". El cubo y la esfera son cuerpos, el cuadrado y el círculo son figuras.',h:'Cuando vea un objeto, que diga a qué cuerpo se parece.',g:['cubo: como un dado','prisma: como una caja de zapatos','esfera: como una pelota','cilindro: como una lata','pirámide: como las de Egipto','cono: como un cucurucho'],x:['Unir cada cuerpo dibujado con su nombre.','Reconocer el cuerpo mirando el dibujo.','Reconocer el cuerpo a partir de un objeto cotidiano.']},
/*7 Caras, vértices y aristas*/{q:'Cara: parte plana del cuerpo. Arista: línea donde se juntan dos caras. Vértice: punta donde se juntan las aristas. Los cuerpos redondos (esfera, cilindro, cono) tienen partes curvas y no se cuentan igual.',c:'Con una caja: contar con los dedos las caras, pasar el dedo por las aristas y señalar las puntas. Después con una pirámide de cartulina.',e:'Contar la cara de abajo de la pirámide como parte de las 5 caras. Otro: contar de más las aristas (el cubo tiene 12, no 6).',h:'Con una caja cualquiera: contar caras, aristas y vértices.',g:['Cubo: 6 caras · 12 aristas · 8 vértices','Prisma de caras rectangulares: 6 caras · 12 aristas · 8 vértices','Pirámide de base cuadrada: 5 caras · 8 aristas · 5 vértices','Esfera y cilindro: sin vértices'],x:['Reconocer cara, arista y vértice marcados en un cubo.','Unir cada explicación con su nombre.','Contar caras, vértices y aristas del cubo y de la pirámide.','Clasificar según tenga o no vértices.']},
/*8 Figuras en los cuerpos*/{q:'Las caras planas de los cuerpos tienen forma de figuras: cuadrados, rectángulos, triángulos y círculos. Apoyando una cara sobre una hoja y bordeándola se dibuja la figura.',c:'Con tapas de frascos, cajas y un dado: apoyarlos sobre una hoja, bordear la cara y comparar la figura que sale.',e:'Mezclar el nombre del cuerpo con el de la figura. El cubo tiene caras cuadradas; la pirámide de base cuadrada tiene además triángulos.',h:'Buscar en la casa un objeto con cara circular y otro con cara rectangular.',g:['Cubo: 6 cuadrados','Prisma: rectángulos','Pirámide: 4 triángulos y 1 cuadrado','Cilindro: 2 círculos','Cono: 1 círculo','Esfera: no tiene caras planas'],x:['Unir cada cuerpo con la figura de sus caras.','Elegir qué figura se dibuja al apoyar una cara.','Contar cuántas figuras tiene cada cuerpo.','Clasificar según tenga o no círculos.']},
/*9 Comparo y clasifico*/{q:'Comparar cuerpos: ver en qué se parecen y en qué se diferencian. Se pueden clasificar, por ejemplo, entre los que tienen todas las caras planas (cubo, prisma, pirámide) y los que tienen una parte curva (esfera, cilindro, cono).',c:'Jugar a las adivinanzas: uno describe un cuerpo ("tengo una base redonda y punta") y el otro adivina.',e:'Pensar que "redondo" es lo mismo que "esfera". El cilindro y el cono también tienen partes redondas.',h:'Una adivinanza por día con un objeto de la casa.',g:['Todas las caras planas: cubo, prisma, pirámide','Con una parte curva: esfera, cilindro, cono','Cubo y prisma: 6 caras, 12 aristas, 8 vértices','Pirámide de base cuadrada: 5 caras','Esfera: ni caras planas ni aristas'],x:['Adivinar el cuerpo a partir de sus características.','Clasificar según tenga solo caras planas o una parte curva.','Elegir cuál es la semejanza o la diferencia correcta.']},
/*10 El peso*/{q:'El peso se mide con balanzas (de dos platillos, digitales, de aguja). Las unidades son el kilogramo (kg) y el gramo (g): 1 kg = 1000 g; medio kilo = 500 g. Un kilo de plumas y un kilo de pan pesan lo mismo.',c:'En la cocina: pesar un paquete de 1 kg de azúcar y uno de 500 g. Comparar con una balanza de platillos improvisada (una percha y dos bolsitas).',e:'Creer que lo más grande siempre pesa más. Un globo grande pesa menos que una piedra chica.',h:'En el súper o en la cocina: leer el peso que dice en cada envase.',g:['1 kilo (kg) = 1000 gramos (g)','Medio kilo = 500 g','Gramos: cosas livianas (moneda, lápiz)','Kilos: cosas pesadas (sandía, persona)','Balanza de platillos: baja el platillo que tiene más peso'],x:['Elegir instrumento, unidad y resolver una pregunta para pensar.','Unir el dibujo de cada balanza con su nombre.','Mirar la balanza de platillos y decir qué pesa más (baja el platillo más pesado).','Clasificar objetos según se midan en gramos o kilogramos.','Completar equivalencias entre kilo, medio kilo y gramos.']},
/*11 El reloj de agujas*/{q:'En el reloj de agujas, la aguja corta marca la hora y la larga (rosa) los minutos. Cada número vale 5 minutos para la aguja larga: en el 12 es en punto, en el 3 "y cuarto" (15), en el 6 "y media" (30) y en el 9 "menos cuarto" (45).',c:'Con un reloj de juguete o de cartón: ponerle una hora y que la lea. Después al revés: decir una hora y que la arme.',e:'Confundir las agujas: leer la larga como hora y la corta como minutos. La corta es la de la hora.',h:'Que lea la hora en un reloj de pared dos veces por día.',g:['Aguja corta = hora, aguja larga = minutos','Larga en 12 = en punto (:00)','Larga en 3 = y cuarto (:15)','Larga en 6 = y media (:30)','Larga en 9 = menos cuarto (:45)','Cada número = 5 minutos'],x:['Elegir la hora en punto o y media a partir del reloj de agujas.','Elegir la hora con cuartos y minutos.','Escribir la hora con números. Acepta 3:30, 3.30 y 330.','Preguntas para pensar sobre la aguja larga y los minutos.']},
/*12 El reloj digital*/{q:'El reloj digital muestra la hora con números: antes de los dos puntos las horas y después los minutos. 3:30 se lee "tres y media" (o "tres treinta").',c:'Con el celular o un reloj digital: mirar la hora y decirla en voz alta. Después escribir la hora que dicen ("las ocho y veinte").',e:'Leer 8:20 como "ocho veinte" y escribir 8.2 o 82. Los minutos siempre llevan dos cifras (8:05, no 8:5).',h:'Una vez por día, que diga la hora del reloj digital y la compare con la del reloj de agujas.',g:['9:05 = las nueve y cinco','9:30 = las nueve y media','9:45 = las nueve y cuarenta y cinco (o diez menos cuarto)','Los minutos siempre llevan dos cifras'],x:['Leer el reloj digital y elegir cómo se dice.','Unir cada reloj de agujas con el digital que marca lo mismo.','Mirar el reloj digital y elegir el reloj de agujas que marca lo mismo.','Escribir con números la hora que se dice con palabras. Acepta 5:30, 5.30 y 530.']}
];

const TYPE_ES={mc:'Opción múltiple',match:'Unir',sort:'Clasificar',fill:'Completar',order:'Ordenar palabras',type:'Escribir',write:'Escritura libre'};

function solveHTML(ex){
  const a=x=>'<span class="ans">'+x+'</span>',svgish=s=>String(s).trim().startsWith('<svg');
  let h='<ul>';
  if(ex.t==='mc'){
    if(ex.pre)h='<p><i>'+ex.pre+'</i></p><ul>';
    ex.items.forEach(it=>{
      const q=(it.q||it.say||'').replace('___',a(svgish(it.a)?'…':it.a));
      h+='<li>'+(it.img?'<span class="mini">'+it.img+'</span> ':'')+q+' → '+(svgish(it.a)?'<span class="ans">'+it.a+'</span>':a(it.a))+'</li>';
    });
  }else if(ex.t==='match'){ex.pairs.forEach(p=>{h+='<li>'+p[0]+' → '+a(p[1])+'</li>';});}
  else if(ex.t==='sort'){
    ex.buckets.forEach(b=>{
      const names=ex.items.filter(it=>it.b.split('|').includes(b.id)).map(it=>it.t.replace(/<svg[\s\S]*?<\/svg>/g,'').replace(/<[^>]+>/g,'').replace(/^\P{L}+/u,'').trim()||it.t);
      h+='<li><b>'+b.label+':</b> '+a(names.join(', '))+'</li>';
    });
  }else if(ex.t==='fill'){
    ex.items.forEach(it=>{let i=0;const A=[].concat(it.a);h+='<li>'+it.s.replace(/___/g,()=>a(A[i++].split('|').join(' / ')))+'</li>';});
    if(ex.extra&&ex.extra.length)h+='<li><i>Sobran (fichas de más):</i> '+ex.extra.join(', ')+'</li>';
  }else if(ex.t==='order'){ex.items.forEach(s=>{h+='<li>'+a(typeof s==='string'?s:s.s)+'</li>';});}
  else if(ex.t==='type'){ex.items.forEach(it=>{h+='<li>'+(it.ico||'')+' '+(it.q||'')+' → '+a([].concat(it.a).join(' / '))+'</li>';});}
  else if(ex.t==='write'){h='<p><i>Consigna:</i> '+ex.prompt+'</p><p>Ejemplo de respuesta: '+a(ex.model)+'</p><ul>';}
  return h+'</ul>';
}

const pinHash=s=>btoa(unescape(encodeURIComponent('ep:'+CFG.slug+':'+s+':v1')));
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
    let h='<div class="pbody"><h5>Cómo funciona</h5><ul><li>Son '+TOPICS.length+' estaciones de 3 a 5 juegos cada una. No hace falta hacerlas en orden ni de una vez.</li><li><b>Nota (1 a 10) en vivo:</b> promedio de los juegos terminados. Cada juego vale 10 × aciertos / (aciertos + errores). Ejemplo: 6 ítems con 1 error = 8,6.</li><li><b>Estrellas:</b> 3 = sin errores, 2 = 1 o 2 errores, 1 = más. Con <b>🔁 Intentar de nuevo</b> repite el juego y se queda con el mejor intento.</li><li><b>⏭ Jugar los salteados:</b> los juegos que se saltea quedan pendientes y se pueden resolver después desde la pantalla principal.</li><li>El avance se guarda en esta tablet y navegador (no se envía a ningún lado). Si cambia de dirección web, usar “copiar / pegar progreso”.</li></ul>';
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
