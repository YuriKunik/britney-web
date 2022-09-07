let l1;
let lineas1 = [];
let modelos = [];
let nombre_act;
function crearModelos() {
    // Esta función y la clase por ahora no tienen un uso justificable.
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
                            lineas1aux,
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "El conjunto de Cantor es uno de los casos más simples de un conjunto similar a si mismo. Sin embargo, dentro de la matemática es famoso por su gran número de propiedades anti intuitivas"
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
                            lineas1aux,
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "#FFFFFF",
                            "El triángulo de Sierpinski es un fractal con la forma de un triángulo equilátero subdividido recursivamente en triangulitos equiláteros más pequeños. Si bien su nombre se debe al matemático polaco Waclaw Sierpinski, el triángulo apareció mucho antes como un patron decorativo."
    ))
 	lineas1aux = [];
	p1 = createVector(width/2, height/2+50);
	p2 = createVector(width/2, height/2 - 50 );
	l1aux = new Linea(p1,p2);
	q1 = createVector(width/2, height/2 - 50);
	q2 = createVector(width/2+50 , height/2 - 100);
	l2 = new Linea1(q1,q2,l1aux,false,false);
	lineas1aux.push(l2)
	q1 = createVector(width/2, height/2-50);
	q2 = createVector(width/2-50, height/2 -100);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1aux.push(l3)
	seleTo.value("#219B15")
	seleFrom.value("#D66C1E")
	cambiarMax();
    modelos.push(new Modelo("arbol", 
                            l1aux,
                            lineas1aux,
                            "#FFFFFF",
                            "#FFFFFF",
                            "#219B14",
                            "#D66C1E",
                            "En geometría, un dosel fractal, también denominado árbol fractal, es uno de los tipos de fractal más sencillos de generar. Consiste en tomar un segmento, bifurcarlo en uno de sus extremos uniéndolo con dos segmentos más pequeños, bifurcar a su vez estos dos segmentos más pequeños y así indefinidamente."
    ))
    modelos.push(new Modelo("rama", 111,11,1,1,1,1,"En la naturaleza se pueden encontrar muchos ejemplos de recursión ya que, de esta forma, se pueden generar estructuras complejos a partir de muy poca información."))
}

function rama(){
	lineas1 = [];
    xoff = 50
    yoff = -100
	p1 = createVector(width/2-xoff, height/2+175-yoff);
	p2 = createVector(width/2-xoff, height/2 - 50 -yoff);
	l1 = new Linea(p1,p2);
	q1 = createVector(width/2-xoff, height/2 - 50-yoff);
	q2 = createVector(width/2+50-xoff , height/2 - 100-yoff);
	l2 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l2)
	q1 = createVector(width/2-xoff, height/2-50-yoff);
	q2 = createVector(width/2-50-xoff, height/2 -100-yoff);
	l3 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l3)
	q1 = createVector(width/2-xoff, height/2-50-yoff);
	q2 = createVector(width/2+20-xoff, height/2 -200-yoff);
	l4 = new Linea1(q1,q2,l1,false,false);
	lineas1.push(l4)
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
    // window[nombre]();
    nombre_act = nombre;
    console.log(nombre)
    console.log(modelos[0].nombre)
    for (let i = 0, len = modelos.length; i < len; i++) {
        if(modelos[i].nombre == nombre){
            document.getElementById('data').innerHTML = modelos[i].texto
        }
    }
}

function seleccionar(){
    window[nombre_act]();
    var modal = document.getElementById("Galeria");
    modal.style.display = "none";
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
