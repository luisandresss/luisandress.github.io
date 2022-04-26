//stars
var stars = [];
//images
var pear;
var hpp;
var sign;
var bk;
var mn;
var ahh;
var peach;
var ag;
var txt;


let mode= 0

//game
let charX = 180;
let charY = 180;

let charX1 = 50;
let charY1= 180;

let side1;
let front1;

let side2;
let front2;


function setup() {
  createCanvas(600, 500);
  	nStars = random(40, 80);
	//stars on screen
	for (var i=0; i<nStars; i++) {
    stars.push(new Star());
  }
  
   side1=true;
  front1=true;
  
  side2=true;
  front2=true;

}

function preload(){
    // load images
  pear = loadImage("pera.png");
  hpp = loadImage("pearhappy.png");
  bk = loadImage("pearback.png");
  sign = loadImage("sign.png");
  mn = loadImage("money.png");
  ahh = loadImage("ahh.png");
  peach = loadImage("peach.png");
  ag = loadImage("angrypear.png");
  txt = loadImage("sonss.png");
}

function draw() {
  
   switch (mode) {
    case 0:
  //dark purple sky
  noStroke();
  background(126, 62, 235);
    //light purple
  fill(172, 131, 242);
  rect(0,55,width,100);


  //stars
  stroke(255);
  strokeWeight(3);
  point(15,25);
  point(39,39);
  point(75,15);
  point(69,32);
  point(85,39);
  point(119,8);
  point(129,48);
  point(135,5);
  point(149,30);
  point(175,21);
  point(199,12);
  point(209,44);
  point(215,25);
  point(242,13);
  point(255,15);
  point(269,38);
  point(329,41);
  point(330,19);
  point(349,34);
  point(345,17);
  point(359,12);
  point(399,44);
  point(442,43);
  point(455,35);
  point(469,18);
  point(429,21);
  point(437,9);
  point(509,14);
  point(545,17);
  point(559,42);
  point(599,44);
  point(459,36);
  point(480,49);
  point(379,24);
  point(245,47);
  point(550,39);
  point(589,30);
  //Two tone sun
  stroke(230, 192, 0);
  strokeWeight(8);
  fill(255, 192, 0);
  ellipse(75,245,70);
  //Green grass
  //fill(50,205,50);
  fill(	119, 153, 136);
  noStroke();
  quad(0,500,0,400,600,250,600,500);
  stroke(45,185,45);
  strokeWeight(6);
  line(0,400,600,250)
  //Mountain 2.0
  noStroke();
  fill(199,199,199);
  triangle(390,240,520,160,600,245);
  //Mountain 2.1
  noStroke();
  fill(199,199,199);
  triangle(210,240,320,110,400,260);
  //Mountain 2.2
  noStroke();
  fill(199,199,199);
  triangle(300,240,420,140,490,260);
  //Mountain 2.3
  noStroke();
  fill(199,199,199);
  triangle(95,340,220,120,350,260);
  //Mountain 1.1 - Rightmost -
  noStroke();
  fill(169);
  triangle(458,282,565,180,650,235);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(546,200,565,180,580,192,558,207);
  // Mountain 1.2 - Second from Right -
  noStroke();
  fill(169);
  triangle(358,308,480,140,550,260);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(460,170,480,140,501,180,475,168);
  // Mountain 1.3 - Third from Right -
  noStroke();
  fill(169);
  triangle(320,315,380,110,450,285);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(2);
    fill(240, 248, 255);
    quad(376,125,380,112,383,120,381,118);
  //Mountain 1.4
  noStroke();
  fill(169);
  triangle(200,347,280,90,390,300);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(271,125,280,92,292,116,281,111);
  //Mountain 1.5
  noStroke(200,200,200);
  fill(169,169,169);
  triangle(100,371,200,190,260,332);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(190,212,200,188,208,210,200,205);
  //Mountain 1.6
  noStroke(200,200,200);
  fill(169,169,169);
  triangle(50,385,120,140,210,345);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(110,180,120,140,133,172,118,188);
    
       
    image(pear, 10, 255,90,130);  
   image(sign, 200, 255,90,130);   

  break;
    
  case 1:
    scene1();
   break; 
  
  case 2:
    scene2();
  break;
  
  case 3:
    scene3();   
  break;
    
  case 4:
      scene4();   
  break;
    case 5:
      scene5();   
  break;

  
  default:

   }
}
function mousePressed() {
  mode++;
}

function scene1() {
   //dark purple sky
  noStroke();
  background(126, 62, 235);
    //light purple
  fill(172, 131, 242);
  rect(0,55,width,100);


  //stars
  stroke(255);
  strokeWeight(3);
  point(15,25);
  point(39,39);
  point(75,15);
  point(69,32);
  point(85,39);
  point(119,8);
  point(129,48);
  point(135,5);
  point(149,30);
  point(175,21);
  point(199,12);
  point(209,44);
  point(215,25);
  point(242,13);
  point(255,15);
  point(269,38);
  point(329,41);
  point(330,19);
  point(349,34);
  point(345,17);
  point(359,12);
  point(399,44);
  point(442,43);
  point(455,35);
  point(469,18);
  point(429,21);
  point(437,9);
  point(509,14);
  point(545,17);
  point(559,42);
  point(599,44);
  point(459,36);
  point(480,49);
  point(379,24);
  point(245,47);
  point(550,39);
  point(589,30);
  //Two tone sun
  stroke(230, 192, 0);
  strokeWeight(8);
  fill(255, 192, 0);
  ellipse(75,245,70);
  //Green grass
  //fill(50,205,50);
  fill(	119, 153, 136);
  noStroke();
  quad(0,500,0,400,600,250,600,500);
  stroke(45,185,45);
  strokeWeight(6);
  line(0,400,600,250)
  //Mountain 2.0
  noStroke();
  fill(199,199,199);
  triangle(390,240,520,160,600,245);
  //Mountain 2.1
  noStroke();
  fill(199,199,199);
  triangle(210,240,320,110,400,260);
  //Mountain 2.2
  noStroke();
  fill(199,199,199);
  triangle(300,240,420,140,490,260);
  //Mountain 2.3
  noStroke();
  fill(199,199,199);
  triangle(95,340,220,120,350,260);
  //Mountain 1.1 - Rightmost -
  noStroke();
  fill(169);
  triangle(458,282,565,180,650,235);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(546,200,565,180,580,192,558,207);
  // Mountain 1.2 - Second from Right -
  noStroke();
  fill(169);
  triangle(358,308,480,140,550,260);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(460,170,480,140,501,180,475,168);
  // Mountain 1.3 - Third from Right -
  noStroke();
  fill(169);
  triangle(320,315,380,110,450,285);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(2);
    fill(240, 248, 255);
    quad(376,125,380,112,383,120,381,118);
  //Mountain 1.4
  noStroke();
  fill(169);
  triangle(200,347,280,90,390,300);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(271,125,280,92,292,116,281,111);
  //Mountain 1.5
  noStroke(200,200,200);
  fill(169,169,169);
  triangle(100,371,200,190,260,332);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(190,212,200,188,208,210,200,205);
  //Mountain 1.6
  noStroke(200,200,200);
  fill(169,169,169);
  triangle(50,385,120,140,210,345);
    //ice cap
    stroke(189, 224, 255);
    strokeWeight(4);
    fill(240, 248, 255);
    quad(110,180,120,140,133,172,118,188);
    
  image(hpp, 500, 130,90,130);
  image(sign, 200, 255,90,130);   


}

function scene2() {
  background(21, 24, 54);
	//stars
		for (var i =0; i<stars.length; i++) {
		stars[i].display();
		stars[i].twinkle();
		}
  //Green grass
  fill(	119, 153, 136);
  noStroke();
  quad(0,500,0,400,600,400,600,500);
  stroke(45,185,45);
  strokeWeight(6);
  line(0,400,600,400)
  
  image(bk, 140, 170,230,230); 
  image(mn, 340, 225,110,180);  

 


}

// star
function Star() {
	this.x = random(5, width);
	this.y = random(5, 690);
	this.r = random(2,5);
	
	this.display = function() {
		stroke(142, 208, 252);
		fill(255);
		this.rad = random(0, 7);
    ellipse(this.x, this.y, this.rad, this.rad);
  }

	this.twinkle = function() {
		if (this.r < 3) {
			this.r += random(-0.5,1.5);
		} else if (this.r >= 3 && this.r < 6) {
			this.r += random(-1,1);
		} else if (this.r >=6 && this.r <=9) {
			this.r += random(-1.5,3);
		}
	}

  
}

function scene3() {
  background(21, 24, 54);
	//stars
		for (var i =0; i<stars.length; i++) {
		stars[i].display();
		stars[i].twinkle();
		}
  //Green grass
  fill(	119, 153, 136);
  noStroke();
  quad(0,500,0,400,600,400,600,500);
  stroke(45,185,45);
  strokeWeight(6);
  line(0,400,600,400)
  
    image(ahh, 10, 155,250,200);
    image(peach, 360, 290,200,200);  


  

}

// star
function Star() {
	this.x = random(5, width);
	this.y = random(5, 690);
	this.r = random(2,5);
	
	this.display = function() {
		stroke(142, 208, 252);
		fill(255);
		this.rad = random(0, 7);
    ellipse(this.x, this.y, this.rad, this.rad);
  }

	this.twinkle = function() {
		if (this.r < 3) {
			this.r += random(-0.5,1.5);
		} else if (this.r >= 3 && this.r < 6) {
			this.r += random(-1,1);
		} else if (this.r >=6 && this.r <=9) {
			this.r += random(-1.5,3);
		}
	}
  
}



function scene4() {
   background(21, 24, 54);
	//stars
		for (var i =0; i<stars.length; i++) {
		stars[i].display();
		stars[i].twinkle();
		}
  //Green grass
  fill(	119, 153, 136);
  noStroke();
  quad(0,500,0,400,600,400,600,500);
  stroke(45,185,45);
  strokeWeight(6);
  line(0,400,600,400)
  
  image(ag, 400, 270,90,130);
  image(txt, 400, 70,200,200);



  

}

// star
function Star() {
	this.x = random(5, width);
	this.y = random(5, 690);
	this.r = random(2,5);
	
	this.display = function() {
		stroke(142, 208, 252);
		fill(255);
		this.rad = random(0, 7);
    ellipse(this.x, this.y, this.rad, this.rad);
  }

	this.twinkle = function() {
		if (this.r < 3) {
			this.r += random(-0.5,1.5);
		} else if (this.r >= 3 && this.r < 6) {
			this.r += random(-1,1);
		} else if (this.r >=6 && this.r <=9) {
			this.r += random(-1.5,3);
		}
	}
  
		}














///GAMEEEEEE



function scene5() {
   background(135, 206, 235);
  text(mouseX, 200, 30)
  text(mouseY, 260, 30)

  //Ground
  noStroke()
  fill(0, 128, 0)
  rect(0, 200, width, height / 2)

      text("Catch the thief!!!",130,100)

  //character
  
  if(side1 == true){
  //side
  fill("#BD160D");
  ellipse(charX, charY, 30, 30)

  fill("#5FA400")
  rect(charX - 15, charY, 30, 30)

  //wheel
  fill(0)
  ellipse(charX, charY + 30, 15, 15)
  fill(255)
  ellipse(charX, charY + 30, 8, 8)

  }else if(front1 ==true){
  //front
  fill("#BD160D");
  ellipse(charX, charY, 30, 30)

  fill("#5FA400")
  rect(charX - 15, charY, 30, 30)


  //feet
  fill(0)
  ellipse(charX-14, charY + 30, 8, 15)
  ellipse(charX+14, charY + 30, 8, 15)
 }
  
  //character2
   
  if(side2 == true){
  //side
    fill("#DAD6CF");
  ellipse(charX1, charY1, 30, 30)

  fill("#FFE9B3");
  rect(charX1 - 15, charY1, 30, 30)

  //wheel
  fill(0)
  ellipse(charX1, charY1 + 30, 15, 15)
  fill(255)
  ellipse(charX1, charY1 + 30, 8, 8)

  }else if(front2 ==true){
  //front
  fill("#DAD6CF");
  ellipse(charX1, charY1, 30, 30)

  fill("#FFE9B3");
  rect(charX1 - 15, charY1, 30, 30)

  //feet
  fill(0)
  ellipse(charX1-14, charY1 + 30, 8, 15)
  ellipse(charX1+14, charY1+ 30, 8, 15)
 }
  
  
  if(dist(charX,charY,charX1,charY1)<30){
  
      textSize(20)
      text("TAG",230,200)
  }
  
  
}

function keyPressed() { if (keyCode == RIGHT_ARROW) {
    charX += 10;
    side1=true;

  }

  if (keyCode == LEFT_ARROW) {
    charX -= 10;
    side1=true;
  }

  if (keyCode == UP_ARROW) {
    charY -= 10;
    side1=false;
    front1=true;

  }

  if (keyCode == DOWN_ARROW) {
    charY += 10;
    side1=false;
    front1=true;

  }
  
  //character2
  //D
  if (keyCode == 68) {
    charX1 += 10;
    side2=true;

  }
//A
  if (keyCode == 65) {
    charX1 -= 10;
    side2=true;
  }
//w
  if (keyCode == 87) {
    charY1 -= 10;
    side2=false;
    front2=true;

  }
//s
  if (keyCode == 83) {
    charY1 += 10;
    side2=false;
    front2=true;

  }
  

                       

}