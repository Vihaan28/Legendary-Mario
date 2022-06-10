function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	coin_sound = loadSound("coin.wav");
	gameover_sound = loadSound("gameover.wav");
	jump_sound = loadSound("jump.wav");
	kick_sound = loadSound("kick.wav");
	die_sound = loadSound("mariodie.wav");

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas_div");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console_div");

	posenet = ml5.poseNet( video , modalLoaded);
	posenet.on("pose" , gotposes);
}

function modalLoaded(){
 
	console.log("Modal Loaded");
}

function gotposes(results){
	if(results.length>0){

		console.log(results);

		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

		console.log(" noseX = " + noseX + " noseY= " +noseY);
	}
}

function draw() {
	game()
}






