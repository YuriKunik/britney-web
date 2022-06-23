function inicio(){
	p1 = createVector(width/2, height/2);
	p2 = createVector(width/2 + 300, height/2 );
	l1 = new Linea(p1,p2);
    q1 = createVector(width/2+20, height/2+20);
	q2 = createVector(width/2 + 300, height/2 +20);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2);
}
function cantor(){
	p1 = createVector(width/2, height/2);
	// p2 = createVector(width/2 + 150 , height/2);
	p2 = createVector(width/2 + 300, height/2 );
	l1 = new Linea(p1,p2);
	//q1 = createVector(width/2, height/2-50);
	q1 = createVector(width/2, height/2 - 50);
	q2 = createVector(width/2+ 100 , height/2 - 50);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	//
	//q1 = createVector(width/2+100, height/2 - 50);
	q1 = createVector(width/2 + 200, height/2 - 50);
	q2 = createVector(width/2 + 300, height/2 - 50);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
}

function arbol(){
	p1 = createVector(width/2, height/2);
	// p2 = createVector(width/2 + 150 , height/2);
	p2 = createVector(width/2, height/2 - 150 );
	l1 = new Linea(p1,p2);
	//q1 = createVector(width/2, height/2-50);
	q1 = createVector(width/2, height/2 - 150);
	q2 = createVector(width/2+50 , height/2 - 200);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	//
	//q1 = createVector(width/2+100, height/2 - 50);
	q1 = createVector(width/2, height/2-150);
	q2 = createVector(width/2-50, height/2 -200);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
}

function serpientsky(){
	p1 = createVector(width/2-150, height/2);
	// p2 = createVector(width/2 + 150 , height/2); p2 = createVector(width/2+150, height/2);
	l1 = new Linea(p1,p2);
	//q1 = createVector(width/2, height/2-50);
	q2 = createVector(width/2, height/2);
	q1 = createVector(width/2+50 , height/2 - 200);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	//
	//q1 = createVector(width/2+100, height/2 - 50);
	q1 = createVector(width/2, height/2);
	q2 = createVector(width/2-50, height/2 -200);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)

	q2 = createVector(width/2+50 , height/2 - 200);
	q1 = createVector(width/2-50, height/2 -200);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)

}
