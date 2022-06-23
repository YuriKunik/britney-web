class Linea{
	constructor(p1, p2){
		this.p1 = p1;
		this.p2 = p2;
		this.v = p5.Vector.sub(p2,p1)
		this.o = 0;
		this.r = 1;
	}
	dibujar(){
		strokeWeight(1)
		line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
	}
}

class LineaN extends Linea{
	constructor(p1,p2,ln){
		super(p1,p2);
    	this.ln = ln;
		this.o = ln.v.angleBetween(this.v) + ln.o;
		this.r = ln.r * this.v.mag()/ln.v.mag()
		this.desp = p5.Vector.sub(this.p1, this.ln.p1)
	}
}

class Linea1 extends Linea{
	constructor(p1,p2,ln,selectP1, selectP2){
		super(p1,p2);
		this.ln = ln
		this.o = ln.v.angleBetween(this.v);
		this.r = this.v.mag()/l1.v.mag();
		this.desp = p5.Vector.sub(this.p1,this.ln.p1)
		this.selectP1 = selectP1
		this.selectP2 = selectP2
		this.select = false;
	}
	dibujar1(){
		if(this.select) strokeWeight(10)
		else strokeWeight(1)
		line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
	}
}
