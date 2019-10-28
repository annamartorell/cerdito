let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //noStroke es sense contorn
    noStroke();


    //per fer audio interactiu
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
        background("#481525");

    //audio, per saber num d volum
    micLevel = mic.getLevel();

    //map - qué, desde on, fins on va, on vols que comensi, on vols que acabi. - fa que un rang el fagi de mes gran a mes petit o al reves
    mov = map(micLevel, 0, 1, 10, 500);
    col = map(micLevel, 0, 1, 0, 255);


    var boca_w = width / 1.75;
    noStroke();
    // oreja izquierda
    fill("#F3A4B3");
    ellipse(width / 2 -350, height / 7, 230, 230  + mov);
    // oreja dentro izquierda
    fill("#F7BBCF");
    ellipse(width / 2 -350, height / 7, 150 + mov);

    // oreja derecha
    fill("#F3A4B3");
    ellipse(width / 2 + 350, height / 7, 230, 230 + mov);
    // oreja dentro derecha
    fill("#F7BBCF");
    ellipse(width / 2 + 350, height / 7, 150 + mov);

    //cara
    fill('#F3A4B3');
    ellipse(windowWidth / 2, windowHeight / 2, width, height);


    //moflete dret
    noStroke();
    fill("#FFB4CE");
    ellipse(width /2 +300, height / 2, 60 + mov);
    //moflete esquerre
    noStroke();
    fill("#FFB4CE");
    ellipse(width /2 -300, height / 2, 60 + mov);

    //ull esquerre ojera
    fill("#F98BB2");
    ellipse(width /2 -250, height / 2.6, 150 + mov);
    fill(255);
    ellipse(width /2 -250, height / 2.7, 15 + mov);

    //ull esquerre
    fill("black");
    ellipse(width /2 -250, height / 2.5, 100 + mov);
    fill(255);
    ellipse(width /2 -250, height / 2.7, 15 + mov);


    //ull dret
    fill("black");
    ellipse(width /2 +250, height / 2.5, 100 + mov);
    noStroke();
    fill(255);
    ellipse(width /2 +250, height / 2.7, 15 + mov);




    //boca
    noStroke();
    fill("#F08A9E");
    ellipse(width * 0.5, height / 1.70, 80 + mov);

    //nas
    noFill();
    stroke("#ED7189");
    strokeWeight(80 + mov);
    arc(width * 0.5, height / 1.60, 150, 150, radians(230), radians(310));

    //forat nas dret
    noStroke();
    fill("#FCEEF1");
    ellipse(width /2 +50, height / 1.8, 15 + mov);

    //forat nas esquerre
    noStroke();
    fill("#FCEEF1");
    ellipse(width /2 -50, height / 1.8, 15 + mov);



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
    getAudioContext().resume();
}
