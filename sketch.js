var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var TATU;
var forest;
var buracoimg;
var cloud;
var grupburacos;
var apareceu = 0;
var sumiu = 1;
var gameState = 0;

function preload(){
buracoimg=loadImage("buraco de tatu.png")
forest=loadImage("forest.png")
TATU= loadImage("TATU.png")
}

function setup(){
  
  createCanvas(1200,800);

  path=createSprite(600,400)
  path.addImage(forest);
  path.velocityX = -4;
  grupburacos = new Group();

//crie um sprite de menino
boy=createSprite(250,540);
boy.addImage(TATU)
//adicione uma animação de corrida para ele
boy.scale=0.15;
contato = createSprite(300,565,0.1,0.1);

}

function draw() {
  background(0);
  path.velocityX = -4;
  
  // mover o menino com o mous-e usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.x <250 ){
    path.x = path.width/2;
  }
  buracos();

  if(gameState === 0){
    contato.overlap(grupburacos, function(collector, collected){
    collected.remove();
    boy.visible = false;
    gameState = 1;
  })
  }

  if(gameState === 1){
    contato.overlap(grupburacos, function(collector, collected){
      collected.remove();
      boy.visible = true;
      gameState = 0;
    })
  }

  drawSprites();
}

function buracos() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 250 === 0) {
    var cloud = createSprite(1200,600,40,10);
    //cloud.debug = true;
    cloud.setCollider("circle",80,-120,20);
    cloud.addImage(buracoimg);
    cloud.scale = 0.3;
    cloud.velocityX = -3;
    grupburacos.add(cloud)
   
    //ajustar a profundidade
    cloud.depth = boy.depth;
    boy.depth = boy.depth + 1;    
  }
}