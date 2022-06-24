let p1;
let p2;
let l1;
let l2;
let cnv;
let p1_act;
let lvl = 0;
let lineas1 = [];
let lineas = [];
let listaSelectP1 = []
let listaSelectP2 = []
let checkerPant = false;
let primer = true;
let banderaFor = false;
let cambLinea = false;
let cambBorrar = false;
let selectL1P2 = false;
let selectL1P1 = false;
let selectL2P1 = false;
let selectL2P2 = false;
let moviendo = false;
let limite = 20000;
let maxNivel = 200;
let escala = 1;
let transl;
let mousex;
let mousey;
let mouseOffx= 0;
let mouseOffy= 0;
let offX = 0;
let offY = 0;
let xAct = 0;
let yAct = 0;
let xAnt = 0;
let yAnt = 0;

function mundoAPantalla(p1){
	return createVector(p1.x - offX , p1.y - offY); 
}

function pantallaAMundo(p1){
	return createVector(p1.x + offX , p1.y + offY); 
}

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	cnv.mousePressed(checkPant);
	transl = createVector(0,0);
    frameRate(30)
	// scale(1/2);
	inicio();
	setupDom();
	cambiarMax();
	xAct = 0;
	yAct = 0;
}

function cambiarMax(){
	encontrarMaxLvl();
	cambiarGradiente();
	sliderLvl.value(lvl);
}

function encontrarMaxLvl(){
	for(let i = 0; i <= sliderLvl.value() && lineas1.length ** i< limite; i++){
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
	cambBorrar =! cambBorrar;
	if(cambBorrar) botones[1].html("Borrando")
	else botones[1].html("Borrar Linea")
}

function borrarLineas(){
	if(lineas1[lineas1.length-1].select) lineas1.splice(lineas1.length-1,1)
	else{
		for (let i = 0, len = lineas1.length-1; i < len; i++) {
			if(lineas1[i].select) lineas1.splice(i,1)
		}
	}
    cambiarMax();
}

function checkearSelect(){
	  strokeWeight(25);
  if((mousex-l1.p1.x)**2 + (mousey-l1.p1.y)**2 < 625){
			stroke(colores[1]);
			point(l1.p1.x, l1.p1.y);
			selectL1P1 = true;
		}else if((mousex-l1.p2.x)**2 + (mousey-l1.p2.y)**2 < 625){
			stroke(colores[1]);
			point(l1.p2.x, l1.p2.y);
			selectL1P2 = true;
		}else{
			selectL1P2 = false;
			selectL1P1 = false;
		}
		for (var i = 0; i < lineas1.length; i++) {
			if((mousex-lineas1[i].p1.x)**2 + (mousey-lineas1[i].p1.y)**2 < 625){
				stroke(colores[2]);
				point(lineas1[i].p1.x, lineas1[i].p1.y)
				for(var j = 0; j< lineas1.length; j++){
					lineas1[j].selectP1 = i == j;
					lineas1[j].selectP2 = false;
				}
			}else if((mousex-lineas1[i].p2.x)**2 + (mousey-lineas1[i].p2.y)**2 < 625){
				stroke(colores[2]);
				point(lineas1[i].p2.x, lineas1[i].p2.y)
				for(var j = 0; j< lineas1.length; j++){
					lineas1[j].selectP2 = i == j;
					lineas1[j].selectP1 = false;
				}
			}else {
				lineas1[i].selectP1 = false;
				lineas1[i].selectP2 = false;
			}
		}
}

function actualizarLineas(){
	if(selectL1P1){
		l1 = new Linea(createVector(mousex,mousey),l1.p2)
		for (var i = 0; i < lineas1.length; i++) {
			lineas1[i] = new Linea1(lineas1[i].p1, lineas1[i].p2,l1, lineas1[i].selectP1,lineas1[i].selectP2)
			strokeWeight(25)
			point(mousex,mousey)
		}
		cambLinea=true;
	}
	else if(selectL1P2){
		l1 = new Linea(l1.p1, createVector(mousex,mousey))
		for (var i = 0; i < lineas1.length; i++) {
			lineas1[i] = new Linea1(lineas1[i].p1,lineas1[i].p2,l1, lineas1[i].selectP1,lineas1[i].selectP2)
			strokeWeight(25)
			point(mousex,mousey)
		}
		cambLinea=true;
	}else{
		banderaFor = false
		for (var i = 0; i < lineas1.length; i++) {
			if(lineas1[i].selectP1){
				lineas1[i] = new Linea1(createVector(mousex,mousey),lineas1[i].p2,l1, lineas1[i].selectP1, lineas1[i].selectP2);
				banderaFor = true;
				stroke(colores[2])
				strokeWeight(25)
				point(mousex,mousey)
				
			}else if(lineas1[i].selectP2){
				lineas1[i] = new Linea1(lineas1[i].p1,createVector(mousex,mousey),l1, lineas1[i].selectP1, lineas1[i].selectP2)
				banderaFor = true;
				stroke(colores[2])
				strokeWeight(25)
				point(mousex,mousey)
			}
		}
		if(banderaFor) cambLinea= true;
	}
}

function checkPant(){
	checkerPant = true;
}

function agregarLinea(){
	q1 = createVector(width/2, height/2);
	q2 = createVector(width/2-50, height/2 -200);
	let l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
    cambiarMax();
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

function draw() { 
    background(colores[0]);
	mousex = mouseX - xAnt + xAct - offX
	mousey = mouseY - yAnt + yAct -offY
	translate(xAnt + xAct - offX,yAnt + yAct -offY);
	// point(mouseX/escala, mouseY/escala)
	// mousey = mouseY;
	// print(l1.p1o, l1.p2o)
	// l1 = new Linea(l1.p1o, l1.p2o)

	if(checkerPant && mouseIsPressed){
		if(!moviendo){
			actualizarLineas();
		}
		if(!cambLinea){
			panMundo();
		}
	}
	
    strokeWeight(1);
  
	stroke(colores[1])
	l1.dibujar();
	
    for (var i = 0; i < lineas1.length; i++) {
	  stroke(colores[2]);
	  // lineas1[i] = new Linea1(lineas1[i].p1o, lineas1[i].p2o, l1, false, false);
      lineas1[i].dibujar1();
	}
  	
    lineas.push(lineas1);
	
    
	for (let i = 1, len = sliderLvl.value()-2;i < len; i++) {
		lineas.push([])
		stroke(colores[i+2])
		for (var j = 0; j < lineas[0].length; j++) {
			for (var k = 0; k < lineas1.length; k++) {
					s1 = lineas1[k].desp.copy()
					s1.rotate(lineas[0][j].o)
					s1.mult(lineas[0][j].r)
					s1.add(lineas[0][j].p1);
					let v1 =  lineas[0][j].v.copy()
					v1.rotate(lineas1[k].o)
					v1.mult(lineas1[k].r)
					let s2 = p5.Vector.add(s1,v1);
					let l3 = new LineaN(s1,s2,lineas[0][j]);
					l3.dibujar()
					lineas[1].push(l3)
		  }
		}
      
        lineas = [lineas[1]]
        
	}

	lineas = [];
	
    if(!cambLinea && !moviendo) checkearSelect();	
	if(cambBorrar) selectLinea();
}
