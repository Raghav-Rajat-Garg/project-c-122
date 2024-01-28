function setup(){
	canvas = createCanvas(500,500);
	canvas.center();
	video = createCapture(VIDEO);
	video.position(800,150)
	video.size(300,550);
}
function draw(){
	fill('lightblue');	
	circle(50, 80, 60);
	noStroke();

	fill('lightgreen');
	circle(420, 80, 60);
	noStroke();

	fill('orange');
	circle(420, 400, 60);
	noStroke();


	fill('pink');
	circle(50, 400, 60);
	noStroke();

	fill('pink');
	rect(85, 62, 300, 32, 20);

	fill('lightblue')
	rect(405, 115, 32, 250, 20);

	fill('orange')
	rect(35, 115, 32, 250, 20);

	fill('lightgreen');
	rect(85, 382, 300, 32, 20);
}
function take_snapshot(){
	save('snapshot.png')
}