let p1;
let p2;
let l1;
let l2;
let cnv;
let p1_act;
let lvl = 0;
let lineas1 = [];
let lineas = [];
let modelos = ["sierpienski","cantor","arbol"];
let checkerPant = false;
let checkerZoom = false;
let primer = true;
let banderaFor = false;
let cambLinea = false;
let cambBorrar = false;
let selectL1P2 = false;
let selectL1P1 = false;
let selectL2P1 = false;
let selectL2P2 = false;
let moviendo = false;
let moviendoMenu = false;
let agregandoLinea = false;
let primerPunto = false;
let limite = 20000;
let maxNivel = 200;
let escala = 1;
let transl;
let mousex;
let mousey;
let offX = 0;
let offY = 0;
let xAct = 0;
let yAct = 0; let xAnt = 0;
let yAnt = 0;

let inc = 0;
let incs = [];
let velocidad = 20;
let espera = 100;
let incLvlActual = 1;

let cursorActual = "default";
let cnvElt;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	cnv.mousePressed(checkPant);
	cnvElt = document.getElementById(cnv.id());
	cnv.mouseWheel(checkZoom);
	transl = createVector(0,0);
    frameRate(30)
	setupDom();
	inicio();
	// arbol();
	// sierpienski();
	cambiarMax();
	incs = []
	for (let i = 0, len = lvl; i < len; i++) {
		incs.push(0);	
	}
}

function reset(){
	incs = []
	for (let i = 0, len = lvl; i < len; i++) {
		incs.push(0);	
	}
	incLvlActual = 1;
}

function checkZoom(){
	checkerZoom = true;
}

function cambiarMaxSlider(){
	encontrarMaxLvlSlider();
	if(lineas1.length == 2) lvl -= 1;
	cambiarGradiente();
	sliderLvl.value(lvl);
	reset();
}

function cambiarMax(){
	encontrarMaxLvl();
	if(lineas1.length == 2) lvl -= 1;
	cambiarGradiente();
	sliderLvl.value(lvl);
	reset();
}

function encontrarMaxLvlSlider(){
	for(let i = 0; i < sliderLvl.value() && lineas1.length ** i< limite; i++){
		lvl = i;
    }
}


function encontrarMaxLvl(){
	for(let i = 0;  lineas1.length > 1 && lineas1.length ** i< limite; i++){
		lvl = i;
    }
}

function cambiarGradiente(){
	for (let i = 2; i < lvl; i++) {
		let c = lerpColor(color(seleFrom.value()), color(seleTo.value()), i/lvl);
		colores[i] = c
	}
}

function guardarDibujo(){
	saveCanvas(cnv, 'mifractal', 'jpg');
}

function setColor(){
	colores[seleLvl.value()] =  seleColor.value();
}

function actSeleColor(){
	seleColor.value(colores[seleLvl.value()].toString());
}

function toggleBorrar(){
	if(!cambLinea){
		cambBorrar =! cambBorrar;
		if(cambBorrar){
			botones[1].html("Borrando")
			document.getElementById("borrLinea").style.backgroundColor = "#C43BFF";
		}
		else{
			botones[1].html("Borrar Linea")
			document.getElementById("borrLinea").style.backgroundColor= "#9C2ECC";
		}
	}
}

function borrarLineas(){
	if(lineas1[lineas1.length-1].select) {
		lineas1.splice(lineas1.length-1,1)
		cambiarMax();
	}
	else{
		for (let i = 0, len = lineas1.length-1; i < len; i++) {
			if(lineas1[i].select){
				lineas1.splice(i,1)
				cambiarMax();
			}
		}
	}
}

function checkearSelect(){
	let select1 = false;
	strokeWeight(25);
	if((mousex-l1.p1.x)**2 + (mousey-l1.p1.y)**2 < 625){
		stroke(colores[1]);
		point(l1.p1.x, l1.p1.y);
		selectL1P1 = true;
		select1 = true
	}else if((mousex-l1.p2.x)**2 + (mousey-l1.p2.y)**2 < 625){
		stroke(colores[1]);
		point(l1.p2.x, l1.p2.y);
		selectL1P2 = true;
		select1 = true
	}else{
		selectL1P2 = false;
		selectL1P1 = false;
		document.getElementById(cnv.id()).style.cursor = "default";
	}
	for (var i = 0; i < lineas1.length; i++) {
		if((mousex-lineas1[i].p1.x)**2 + (mousey-lineas1[i].p1.y)**2 < 625){
			stroke(colores[2]);
			point(lineas1[i].p1.x, lineas1[i].p1.y)
			for(var j = 0; j< lineas1.length; j++){
				lineas1[j].selectP1 = i == j;
				lineas1[j].selectP2 = false;
			}
			select1 = true
		}else if((mousex-lineas1[i].p2.x)**2 + (mousey-lineas1[i].p2.y)**2 < 625){
			stroke(colores[2]);
			point(lineas1[i].p2.x, lineas1[i].p2.y)
			for(var j = 0; j< lineas1.length; j++){
				lineas1[j].selectP2 = i == j;
				lineas1[j].selectP1 = false;
			}
			select1 = true
		}else {
			lineas1[i].selectP1 = false;
			lineas1[i].selectP2 = false;
		}
	}
	if(select1) {
		document.getElementById(cnv.id()).style.cursor = "grab";
		select1 = false;
	}else{
		document.getElementById(cnv.id()).style.cursor = "default";
	}
}

function actualizarLineas(){
	if(selectL1P1){
		l1 = new Linea(createVector(mousex,mousey),l1.p2)
		for (var i = 0; i < lineas1.length; i++) {
			lineas1[i] = new Linea1(lineas1[i].p1, lineas1[i].p2,l1, lineas1[i].selectP1,lineas1[i].selectP2)
		}
		stroke(colores[1]);
		strokeWeight(25)
		point(mousex,mousey)
		cambLinea=true;
		document.getElementById(cnv.id()).style.cursor = "move";
	}
	else if(selectL1P2){
		l1 = new Linea(l1.p1, createVector(mousex,mousey))
		stroke(colores[1]);
		strokeWeight(25)
		point(mousex,mousey)
		for (var i = 0; i < lineas1.length; i++) {
			lineas1[i] = new Linea1(lineas1[i].p1,lineas1[i].p2,l1, lineas1[i].selectP1,lineas1[i].selectP2)
		}
		cambLinea=true;
		document.getElementById(cnv.id()).style.cursor = "move";
	}else{
		banderaFor = false
		for (var i = 0; i < lineas1.length; i++) {
			if(lineas1[i].selectP1){
				lineas1[i] = new Linea1(createVector(mousex,mousey),lineas1[i].p2,l1, lineas1[i].selectP1, lineas1[i].selectP2);
				banderaFor = true;
				stroke(colores[2])
				strokeWeight(25)
				point(mousex,mousey)
				document.getElementById(cnv.id()).style.cursor = "move";
			}else if(lineas1[i].selectP2){
				lineas1[i] = new Linea1(lineas1[i].p1,createVector(mousex,mousey),l1, lineas1[i].selectP1, lineas1[i].selectP2)
				banderaFor = true;
				stroke(colores[2])
				strokeWeight(25)
				point(mousex,mousey)
				document.getElementById(cnv.id()).style.cursor = "move";
			}
		}
		if(banderaFor) cambLinea= true;
	}
}

function checkPant(){
	checkerPant = true;
}

function agregarLinea(){
	if(!cambBorrar){
		agregandoLinea = true;
		primerPunto = true;
	}
}

function nuevaLinea(){
	if(primerPunto){
		q1 = createVector(mousex, mousey);
		q2 = createVector(mousex, mousey);
		let l3 = new Linea1(q1,q2,l1,false,false);
		lineas1.push(l3);
		cambiarMax();
		primerPunto = false;
	}else{
		q2 = createVector(mousex, mousey);
		lineas1[lineas1.length-1] = new Linea1(q1,q2,l1,false,false);
	}
	cnvElt.style.cursor = "move";
}

function distPL(linea){
	let pm1 = mousex - linea.p1.x;
	let pm2 = mousey - linea.p1.y;
	let mouseVect = createVector(pm1,pm2);
	let o = mouseVect.angleBetween(linea.v);
	let a = mouseVect.mag();
	let s = linea.v.copy();
	s.normalize();
	let factor = a*cos(o)
	if(factor < 0) factor = 0;
	if(factor > linea.v.mag()) factor = linea.v.mag();
	s.mult(factor);
	return p5.Vector.sub(s,mouseVect).mag()
}

function selectLinea(){
	let index = true;
	for (let i = 0, len = lineas1.length; i < len && index; i++) {
		if(distPL(lineas1[i]) < 5) {
			lineas1[i].select = true;
			index = false;
		}
		else lineas1[i].select = false;
	}
}

function panMundo(){
	if(!moviendo){
		moviendo = true;
		offX = mouseX;
		offY = mouseY;
	}
	xAct = mouseX
	yAct = mouseY
}

function mouseReleased(){
	cambLinea = false;
	moviendoMenu = false;
	checkerPant = false;
	document.getElementById("agregLinea").style.backgroundColor= "#9C2ECC";
	if(! primerPunto) agregandoLinea = false;
	if(moviendo){
		moviendo = false;
		xAnt += xAct- offX;
		yAnt += yAct - offY;
		offX = 0;
		offY = 0;
		xAct = 0;
		yAct = 0;
	}
	if(cambBorrar && lineas1.length > 0) borrarLineas();
}

let sf = 1, tx = 0, ty = 0;

function applyScale(s) {
	if(checkerZoom){
		sf = sf * s;
		tx = mouseX * (1-s) + tx * s;
		ty = mouseY * (1-s) + ty * s;
		checkerZoom = false;
	}
}

window.addEventListener("wheel", function(e) {
    applyScale(e.deltaY > 0 ? 0.95 : 1.05);
} );

function keyPressed() {
    if (key == '-') {
        applyScale(0.95);
    } else if (key == '+') {
        applyScale(1.05);
    }
}

function draw() { 
    background(colores[0]);
	mousex = (mouseX  - tx - xAnt - xAct + offX)/sf
	mousey = (mouseY - ty - yAnt - yAct +offY)/sf
	translate(tx, ty);
	scale(sf);
	translate((xAnt + xAct - offX)/sf,(yAnt + yAct -offY)/sf);
    if(!cambLinea && !moviendo) checkearSelect();	
	if(cambBorrar) {
		selectLinea();		
		document.getElementById("borrLinea").style.backgroundColor = "#C43BFF";
	}
	if(agregandoLinea){
		cnvElt.style.cursor = "copy";
		document.getElementById("agregLinea").style.backgroundColor= "#C43BFF"

	}
	if(checkerPant && mouseIsPressed){
		if(agregandoLinea){
			nuevaLinea();
		}
		if(!moviendo && !agregandoLinea){
			actualizarLineas();
		}
		if(!cambLinea && !moviendoMenu && !agregandoLinea){
			panMundo();
		}
	}
    strokeWeight(1);
	stroke(colores[1])
	l1.dibujar();
    for (var i = 0; i < lineas1.length; i++) {
	  stroke(colores[2]);
      lineas1[i].dibujar1();
	}
    lineas.push(lineas1);
	// for (let i = 1, len = sliderLvl.value()-2;i < len; i++) {
	for (let i = 1, len = incLvlActual;i < len; i++) {
		lineas.push([])
		stroke(colores[i+2])
		for (var j = 0; j < lineas[0].length; j++) {
			for (var k = 0; k < lineas1.length; k++) {
					s1 = lineas1[k].desp.copy()
					// s1.rotate(map(inc, 0,velocidad,0,lineas[0][j].o))
					s1.rotate(lineas[0][j].o)
					s1.mult(lineas[0][j].r)
					// s1.mult(map(inc,0,velocidad,0,lineas[0][j].r))
					s1.add(lineas[0][j].p1);
					let v1 =  lineas[0][j].v.copy()
					v1.rotate(lineas1[k].o)
					// v1.rotate(map(inc,0,velocidad,0,lineas1[k].o))
					v1.mult(map(incs[i+1],0,velocidad,0,lineas1[k].r))
					// v1.mult(lineas1[k].r)
					let s2 = p5.Vector.add(s1,v1);
					let l3 = new LineaN(s1,s2,lineas[0][j]);
					l3.dibujar()
					lineas[1].push(l3)
		  }
		}
        lineas = [lineas[1]]
	}
	lineas = [];
	if(incs[incLvlActual] < velocidad){ incs[incLvlActual] = (incs[incLvlActual] + 1) }
	else{
		// inc = 0;
		// espera = 0;
		if(incLvlActual >= sliderLvl.value()-2){
			
			if(espera < 700){
				espera++;
			}else{espera = 0;
			incLvlActual=2;
			for (let i = 0, len = lvl; i < len; i++) {
				incs[i] = 0;
			}
			}
		}
		else{
			incLvlActual++;
		}
	}
}
