let botones;
let sliderLvl;
let seleFrom;
let seleTo;
let seleLvl;
let seleColor;
let colores = [];
let color1;
let color2;

function setupDom(){
	botones = selectAll('button');
	botones[0].mousePressed(agregarLinea);
	botones[1].mousePressed(toggleBorrar);
	botones[2].mousePressed(guardarDibujo);
	colores.push(color(20));
	colores.push("#EB316B");
	colores.push("#F5EF63");
	color1 = color("#D66C1E")
	color2 = color("#219B15")
	for (let i = 0; i < maxNivel-2; i++) {
	//	seleLvl.option("Color nivel " + str(i+2), i+3);	
		let c = lerpColor(color1, color2, i/maxNivel);
		colores.push(c)
	}
	sliderLvl = select('#sliderLvl');
	sliderLvl.input(cambiarMax)
	seleFrom = select("#seleFrom");
	seleFrom.input(cambiarGradiente);
	seleTo = select("#seleTo");
	seleTo.input(cambiarGradiente); 

	seleLvl = select('#seleLvl');
	seleLvl.option("Fondo",0);
	seleLvl.option("Color nivel 0",1);
	seleLvl.option("Color nivel 1",2);  
	seleLvl.changed(actSeleColor);

	seleColor = select("#seleColor");
	seleColor.input(setColor);
}
