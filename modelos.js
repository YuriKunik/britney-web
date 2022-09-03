let l1;
let lineas1 = [];
let modelos = [];
function crearModelos() {
     // Cantor
    let lineas1aux = [];
    p1 = createVector(width/2-125, height/2);
    p2 = createVector(width/2 + 175, height/2 );
    let l1aux = new Linea(p1,p2);
    q1 = createVector(width/2-125, height/2 - 50);
    q2 = createVector(width/2- 25 , height/2 - 50);
    l2 = new Linea1(q1,q2,l1aux,false,false);
    lineas1aux.push(l2)
    q1 = createVector(width/2 + 75, height/2 - 50);
    q2 = createVector(width/2 + 175, height/2 - 50);
    l3 = new Linea1(q1,q2,l1aux,false,false);
    lineas1aux.push(l3)

    modelos.push(new Modelo("cantor", 
                            l1aux,
                            lineas1,
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "Cantor"
    ))

    // Sierpienski
    lineas1aux = [];
    p1 = createVector(width/2-150, height/2);
    p2 = createVector(width/2 + 150 , height/2);
    l1aux = new Linea(p1,p2);
    q1 = p5.Vector.sub(p1,p2);
    q1.rotate(PI/3);
    q1.mult(1/2);
    q1.add(p2)
    q2 = createVector(width/2, height/2);
    l2 = new Linea1(q1.copy(),q2.copy(),l1aux,false,false);
    lineas1aux.push(l2)
    q1 = p5.Vector.sub(p1,p2);
    q1.rotate(2*PI/3);
    q1.mult(1/2);
    q1.add(p1)
    q2 = createVector(width/2, height/2);
    l3 = new Linea1(q2,q1,l1aux,false,false);
    lineas1aux.push(l3)
    l3 = new Linea1(q1,lineas1aux[lineas1aux.length-2].p1,l1aux,false,false);
    lineas1aux.push(l3)

    modelos.push(new Modelo("sierpienski", 
                            l1aux,
                            lineas1,
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "The Sierpiński triangle (sometimes spelled Sierpinski), also called the Sierpiński gasket or Sierpiński sieve, is a fractal attractive fixed set with the overall shape of an equilateral triangle, subdivided recursively into smaller equilateral triangles. Originally constructed as a curve, this is one of the basic examples of self-similar sets—that is, it is a mathematically generated pattern that is reproducible at any magnification or reduction. It is named after the Polish mathematician Wacław Sierpiński, but appeared as a decorative pattern many centuries before the work of Sierpiński. "
    ))
   
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
function cantor(){
	lineas1 = [];
	p1 = createVector(width/2-125, height/2);
	p2 = createVector(width/2 + 175, height/2 );
	l1 = new Linea(p1,p2);
	q1 = createVector(width/2-125, height/2 - 50);
	q2 = createVector(width/2- 25 , height/2 - 50);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	q1 = createVector(width/2 + 75, height/2 - 50);
	q2 = createVector(width/2 + 175, height/2 - 50);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
	seleTo.value("#FFFFFF");
	seleFrom.value("#FFFFFF");
	cambiarMax();
}

function cambiarDibuj(nombre){
    let actual;
    window[nombre]();
    console.log(nombre)
    console.log(modelos[0].nombre)
    for (let i = 0, len = modelos.length; i < len; i++) {
        if(modelos[i].nombre == nombre){
            document.getElementById('data').innerHTML = modelos[i].texto
        }
    }
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

function arbol(){
	lineas1 = [];
	p1 = createVector(width/2, height/2+50);
	p2 = createVector(width/2, height/2 - 50 );
	l1 = new Linea(p1,p2);
	q1 = createVector(width/2, height/2 - 50);
	q2 = createVector(width/2+50 , height/2 - 100);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	q1 = createVector(width/2, height/2-50);
	q2 = createVector(width/2-50, height/2 -100);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
	seleTo.value("#219B15")
	seleFrom.value("#D66C1E")
	cambiarMax();
}

class Modelo {
    constructor(nombre, linea0, lineas1, color0, color1, colorI, colorF, texto) {
        this.nombre = nombre
        this.linea0 = linea0
        this.lineas1 = lineas1
        this.color0 = color0
        this.color1 = color1
        this.colorI = colorI
        this.colorF = colorF
        this.texto = texto
    }
    dibujar(){
        l1 = this.linea0
        lineas1 = this.lineas1
        seleTo.value(this.colorI);
        seleFrom.value(this.colorF);
    }
}
