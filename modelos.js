function cambiarDibuj(nombre){
	for (let i = 0, len = modelos.length; i < len; i++) {
		if(nombre == modelos[i]){
			window[nombre]();
		}
	}	
	modal.style.display="none";
}

function inicio(){
	lineas1 = [];
	p1 = createVector(width/2, height/2);
	p2 = createVector(width/2 + 300, height/2 );
	l1 = new Linea(p1,p2);
    q1 = createVector(width/2+20, height/2+20);
	q2 = createVector(width/2 + 300, height/2 +20);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2);
	cambiarMax();
}

function cantor(){
	lineas1 = [];
	p1 = createVector(width/2-125, height/2);
	// p2 = createVector(width/2 + 150 , height/2);
	p2 = createVector(width/2 + 175, height/2 );
	l1 = new Linea(p1,p2);
	//q1 = createVector(width/2, height/2-50);
	q1 = createVector(width/2-125, height/2 - 50);
	q2 = createVector(width/2- 25 , height/2 - 50);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	//
	//q1 = createVector(width/2+100, height/2 - 50);
	q1 = createVector(width/2 + 75, height/2 - 50);
	q2 = createVector(width/2 + 175, height/2 - 50);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
	seleTo.value("#FFFFFF");
	seleFrom.value("#FFFFFF");
	cambiarMax();
}

function arbol(){
	lineas1 = [];
	p1 = createVector(width/2, height/2+50);
	p2 = createVector(width/2, height/2 - 50 );
	l1 = new Linea(p1,p2);
	q1 = createVector(width/2, height/2 - 50);
	q2 = createVector(width/2+50 , height/2 - 100);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	//
	//q1 = createVector(width/2+100, height/2 - 50);
	q1 = createVector(width/2, height/2-50);
	q2 = createVector(width/2-50, height/2 -100);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
	seleTo.value("#219B15")
	seleFrom.value("#D66C1E")
	cambiarMax();
}

function sierpienski(){
	lineas1 = [];
	p1 = createVector(width/2-150, height/2);
	 p2 = createVector(width/2 + 150 , height/2);
	l1 = new Linea(p1,p2);
	q1 = p5.Vector.sub(p1,p2);
	q1.rotate(PI/3);
	q1.mult(1/2);
	q1.add(p2)
	q2 = createVector(width/2, height/2);
	l2 = new Linea1(q1.copy(),q2.copy(),l1,false,false);
	lineas1.push(l2)
	//
	//q1 = createVector(width/2+100, height/2 - 50);
	q1 = p5.Vector.sub(p1,p2);
	q1.rotate(2*PI/3);
	q1.mult(1/2);
	q1.add(p1)
	q2 = createVector(width/2, height/2);
	l3 = new Linea1(q2,q1,l1,false,false);
	lineas1.push(l3)

	l3 = new Linea1(q1,lineas1[lineas1.length-2].p1,l1,false,false);
	lineas1.push(l3)
	seleTo.value("#FFFFFF");
	seleFrom.value("#FFFFFF");
	cambiarMax();
}
