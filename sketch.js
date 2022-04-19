var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,leafImg;
var aleatório;
var folha,folhaImg;
var folhao,folhaoImg;
var apple,appleImg

function preload(){
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png");
orangeImg = loadImage("orangeLeaf.png");
redImg = loadImage("redImage.png"); 
leaf_imagem = loadImage("leaf.png");
folha_imagem = loadImage("redImage.png");
folhao_imagem = loadImage("orangeLeaf.png");
apple_imagem = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
aleatório = Math.round(random(10,70));

  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
 
 
if(frameCount%120===0){
  
  leaf = createSprite(200, aleatório, 20,30);
  leaf.velocityY = 5;
  leaf.addImage("caindo",leaf_imagem);
  leaf.scale = 0.1;
  leaf.lifetime = 150;
} 
if (frameCount%150===0){
folha = createSprite(130,aleatório, 20,30);
folha.velocityY = 5;
folha.addImage("voando",folha_imagem);
folha.scale = 0.1;
folha.lifetime = 150;
}
if (frameCount%200===0){
folhao = createSprite(270,aleatório,20,30);
folhao.velocityY = 5;
folhao.addImage("folha",folhao_imagem);
folhao.scale = 0.1;
folhao.lifetime = 150;
}
if(frameCount%250===0){
apple = createSprite(220,aleatório,20,30);
apple.velocityY = 7;
apple.addImage("maçã",apple_imagem);
apple.scale=0.1;
apple.lifetime = 150;
}
rabbit.x = World.mouseX

}
