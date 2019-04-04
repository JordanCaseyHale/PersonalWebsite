/** JavaScript of program to make a little bird to interact with on a web page
	*	@author Jordan Hale
*/

//Function for the animation loop
function nextFrame() {
	reqID = requestAnimationFrame(nextFrame);
	update();
	draw();
}

//Draws certain parts of the bird depending on the state of  bird
function draw() {
	//flapCycle < 20 means the wings should be up
	//following is flapCycle<40 means wings down
	//food<100 means beck open
	//following is if food<150 then the beck should be closed
	if (flapCycle < 20 && food<100) {
		clear();
		drawBody();
		drawBeck();
		drawWingsUp();
	}
	else if (flapCycle < 40 && food<100) {
		clear();
		drawBody();
		drawBeck();
		drawWingsDown();
	}
	else if (flapCycle < 20 && food<150) {
		clear();
		drawBody();
		drawCloseBeck();
		drawWingsUp();
	}
	else if (flapCycle < 40 && food<150) {
		clear();
		drawBody();
		drawCloseBeck();
		drawWingsDown();
	}
	//If the button to feed the bird has been pressed the food will be drawn
	if (feed && food<100) {
		drawFood();
	}
	drawBackground();
}

function drawBeck() {
	context.beginPath();
		//Beak of bird
		context.moveTo(xCor+10, yCor-25);
		context.lineTo(xCor-10, yCor-35);
		context.lineTo(xCor+5, yCor-10);
		context.lineTo(xCor-15, yCor-20);
		context.lineTo(xCor, yCor);
	context.stroke();
}

function drawCloseBeck() {
	//Draws the beck of the bird closed
	context.beginPath();
		context.moveTo(xCor+10, yCor-25);
		context.lineTo(xCor-10, yCor-35);
		context.lineTo(xCor, yCor);
	context.stroke();
}

function drawFood() {
	//Draws food when the bird is being fed
	context.beginPath();
			context.arc(xCor-5, yCor-20, 3, 0, Math.PI*2, true);
	context.stroke();
}

function drawBody() {
	//Draws bird in new position
	context.beginPath();
		context.arc(xCor+30, yCor-10, 5, 0, Math.PI*2, true); //Eye of bird
		context.moveTo(xCor+130, yCor+105);
		context.bezierCurveTo(xCor+145, yCor+103, xCor+155, yCor+100, xCor+180, yCor+85); //Bottom half of tail
		context.bezierCurveTo(xCor+160, yCor+95, xCor+135, yCor+85, xCor+130, yCor+75); //Top half of tail
		context.moveTo(xCor+90, yCor+5); //Move to space after wings
		context.bezierCurveTo(xCor+70, yCor-25, xCor+30, yCor-45, xCor+10, yCor-25); //Head of bird
	context.stroke();
}

function drawWingsUp() {
	context.beginPath();
		context.moveTo(xCor+130, yCor+75); //Move to bottom of wings
		context.bezierCurveTo(xCor+170, yCor+40, xCor+170, yCor+40, xCor+140, yCor+45); //Lower feather of wing
		context.bezierCurveTo(xCor+175, yCor+5, xCor+175, yCor+5, xCor+145, yCor+15); //Middle feather of wing
		context.bezierCurveTo(xCor+160, yCor+5, xCor+170, yCor-5, xCor+170, yCor-25); //Lower half of top wing
		context.bezierCurveTo(xCor+150, yCor-15, xCor+140, yCor, xCor+90, yCor+5); //Top half of top wing
		context.moveTo(xCor, yCor);
		context.bezierCurveTo(xCor, yCor+65, xCor+60, yCor+115, xCor+130, yCor+105); //Belly of bird
	context.stroke();
}

function drawNoWings() {
	context.beginPath();
		context.moveTo(xCor+130, yCor+75);
		context.bezierCurveTo(xCor+120, yCor+55, xCor+120, yCor+35, xCor+90, yCor+5); //Back of bird
		context.moveTo(xCor, yCor);
		context.bezierCurveTo(xCor, yCor+65, xCor+60, yCor+115, xCor+130, yCor+105); //Belly of bird
	context.stroke();
}

function drawWingsDown() {
	context.beginPath();
		context.moveTo(xCor+130, yCor+105);
		context.bezierCurveTo(xCor+120, yCor+105, xCor+100, yCor+110, xCor+75, yCor+100); //Bottom of belly
		context.bezierCurveTo(xCor+30, yCor+105, xCor+30, yCor+105, xCor+50, yCor+90); //Lower wing
		context.bezierCurveTo(xCor, yCor+90, xCor, yCor+90, xCor+30, yCor+70); //Middle wing
		context.bezierCurveTo(xCor, yCor+70, xCor, yCor+75, xCor-30, yCor+65); //Lower half of top wing
		context.bezierCurveTo(xCor, yCor+55, xCor+10, yCor+50, xCor+8, yCor+40); //Top half of top wing
		context.bezierCurveTo(xCor+5, yCor+30, xCor, yCor+10, xCor, yCor); //Top of belly
		context.moveTo(xCor+130, yCor+75);
		context.bezierCurveTo(xCor+120, yCor+55, xCor+120, yCor+35, xCor+90, yCor+5); //Back of bird
	context.stroke();
}

function drawBackground() {
	context.beginPath();
		context.moveTo(xStart, yStart+10);
		context.bezierCurveTo(xStart-2, yStart+2, xStart-3, yStart+3, xStart-10, yStart);
		context.lineTo(xStart-100, yStart);
		context.lineTo(xStart-140, yStart+40);
		context.lineTo(xStart-120, yStart);
		context.lineTo(xStart-150, yStart+10);
		context.lineTo(xStart-130, yStart-10);
		context.lineTo(xStart-140, yStart-20);
		context.lineTo(xStart-115, yStart-15);
		context.lineTo(xStart-100, yStart-20);
		context.lineTo(xStart-85, yStart-15);
		context.lineTo(xStart-10, yStart-15);
		context.bezierCurveTo(xStart-3, yStart-16, xStart-2, yStart-17, xStart, yStart-30);
		context.rect(0,0,800,750);
	context.stroke();
}

function drawFeet() {
	context.beginPath();
		//Left foot
		context.moveTo(xStart-100, yStart-20);
		context.lineTo(xStart-100, yStart-30);
		context.lineTo(xStart-108, yStart-19);
		context.moveTo(xStart-100, yStart-30);
		context.lineTo(xStart-92, yStart-19);
		//right foot
		context.moveTo(xStart-85, yStart-16);
		context.lineTo(xStart-85, yStart-28);
		context.lineTo(xStart-93, yStart-17);
		context.moveTo(xStart-85, yStart-28);
		context.lineTo(xStart-77, yStart-16);
	context.stroke();
}

function sitOnBranch() {
	//If the bird is flying then cancel the animation
	if (flying) {
		cancelAnimationFrame(reqID);
	}
	flying = false;
	hvrDwn = false;
	sitting = true;
	sitUpdate();
}


function swoop() {
	swoopPos = 0;
	//If the bird is not flying then its starts to
	hvrDwn = false;
	sitting = false;
	if (!flying) {
		flying = true;
		nextFrame();
	}
	swoopUpdate();
}
	
function swoopUpdate() {
	//Swoops down 
	if ((yCor>40)&&(xCor > 30)&&(swoopPos<100)) {
		xCor-= 1;
		yCor += 2;
		swoopPos += 1;
		if (yCor > Height-110) {
			swoopPos = 100;
		}
	}
	//Swoops up
	else if ((yCor>35)&&(xCor > 25)&&(swoopPos<200)) {
		xCor -= 1;
		yCor -= 2;
		swoopPos += 1;
	}
	else {
		swoopPos = 200;
	}
	if (swoopPos < 200) {
		setTimeout(swoopUpdate, 15);
	}
}



function update() {
	//Updates the variables after each frame
	if (flapCycle<40) {
		flapCycle++;
	}
	else {
		flapCycle = 0;
	}
	if (feed && food<150) {
		food++;
	}
	else {
		feed = false;
		food = 0;
	}
}

function sitUpdate() {
	//Redraw bird in sitting position
	clear();
	drawBackground();
	drawBody();
	drawNoWings();
	drawFeet();
	//Checks what beck to draw
	if (feed && food<100) {
		drawFood();
		drawBeck();
		food++;
	}
	else if (feed && food<150) {
		drawCloseBeck();
		food++;
	}
	else {
		drawBeck();
	}
	if (sitting) {
		//Delays the next call of sitUpdate by 20 frames
		setTimeout(sitUpdate, 20);
	}
}

function hoverUpdate() {
	clear();
	//Keeps the bird from going below the canvas
	if ((yCor < Height-110) && (hvrDwn)) {
		yCor += 1;
	}
	else if (hvrDwn){
		yCor = Height-110;
	}
	//lets the bird feed while hovering down
	if (feed && food<100) {
		drawFood();
		drawBeck();
		food++;
	}
	else if (feed && food<150) {
		drawCloseBeck();
		food++;
	}
	else {
		drawBeck();
	}
	drawBody();
	drawWingsUp();
	drawBackground();
	if (hvrDwn) {
		setTimeout(hoverUpdate,20);
	}
}

function clear() {
	//Clears the canvas of the current drawing
	context.clearRect(0, 0, Width, Height);
}

function moveBird(evt) {
	//Moves the bird to the position of the mouse
	var mousePos = findMousePos(evt);
	//If the click is in the area of the eye then the colour used will change
	if ((mousePos.x > xCor+22)&&(mousePos.x < xCor+38)&&(mousePos.y > yCor-18)&&(mousePos.y < yCor-2)) {
		ranR = Math.round(Math.random()*255);
		ranG = Math.round(Math.random()*255);
		ranB = Math.round(Math.random()*255);
		context.strokeStyle = "rgb("+ranR+","+ranG+","+ranB+")";
	}
	//If the click is in the area of the branch then the bird will sit on the branch
	else if ((mousePos.x > (Width-150)) && (mousePos.x < Width) &&(mousePos.y > (Height-80)) && (mousePos.y < Height)) {
		xCor = Width - 170;
		yCor = Height - 190;
		sitOnBranch();
	}
	else {
		xCor = mousePos.x + 12;
		yCor = mousePos.y + 25;
		if (sitting) {
			flying = true;
			sitting = false;
			nextFrame();
		}
	}
}

function hoverDown() {
	//If the bird is flying then cancel the animation for the flying
	if (flying) {
		cancelAnimationFrame(reqID);
	}
	//Starts the bird to hover down if it isn't sitting on the branch
	if (!sitting) {
		flying = false;
		clear();
		drawBody();
		drawWingsUp();
		hvrDwn = true;
		hoverUpdate();
	}
}

function feedBird() {
	//Sets values so that the bird can be fed
	feed = true;
	food = 0;
}

function resetBird() {
	//Reset the birds variables so it stops what it is doing and moves to a random position
	if (!flying) {
		reqID = requestAnimationFrame(nextFrame);
		flying = true;
	}
	swoopPos = 200;
	hvrDwn = false;
	sitting = false;
	feed = false;
	xCor = Math.round(Math.random()*Width);
	yCor = Math.round(Math.random()*Height);
}

function findMousePos(evt) { //GetMouseXY function lecture 15
	var canvasBorder = canvas.getBoundingClientRect();
	var offX = canvasBorder.left;
	var offY = canvasBorder.top;
	var width = (canvasBorder.width-canvas.width)/2;
	var height = (canvasBorder.width-canvas.width)/2;
	offX += width;
	offY += height;
	var mouseX = Math.round(evt.clientX-offX);
	var mouseY = Math.round(evt.clientY-offY);
	return { x:mouseX, y:mouseY };
}

//declaring variables
var canvas = document.getElementById('canvas');
var resetBtn = document.getElementById('reset');
var feedBtn = document.getElementById('feed');
var hoverBtn = document.getElementById('hover');
var swoopBtn = document.getElementById('swoop');
var context = canvas.getContext("2d");
var reqID;
var xCor, yCor, xStart, yStart;
var flapCycle, flying, hvrDwn, food, sitting, swoopPos;
var ranR, ranG, ranB;
const Width = canvas.width;
const Height = canvas.height;

//Sets starting values for variables
yStart = Height-60;
xStart = Width;
sitting = false;
hvrDwn = false;
flying = true;
feed = false;
reqID = requestAnimationFrame(nextFrame);
flapCycle = 0;
food = 0;
xCor = 200;
yCor = 200;

//Adds an event listener for clicking on the canvas
canvas.addEventListener('click', moveBird);
//Adds the event listener for the the buttons
hoverBtn.addEventListener('click', hoverDown);
swoopBtn.addEventListener('click', swoop);
feedBtn.addEventListener('click', feedBird);
resetBtn.addEventListener('click', resetBird);
//Sets colour to grey
context.strokeStyle = "rgb(100, 60, 60)";
