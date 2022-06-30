var canvas = new fabric.Canvas('myCanvas');
playerx =10;
playery =10;
blockwidth = 30;
blockheight = 30;
var playerobject = "";
var blockobject = "";
function player(){
    fabric.Image.fromURL("player.png", function(Img) {
        playerobject=Img;
        playerobject.scaleToWidth(150);
         playerobject.scaleToHeight(150);
         playerobject.set({
            top:playery,
            left:playerx
         });
        canvas.add(playerobject); 
    });     
}
function block(getimage){
    fabric.Image.fromURL(getimage, function(Img) {
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
         blockobject.scaleToHeight(blockheight);
         blockobject.set({
            top:playery,
            left:playerx
         });
        canvas.add(blockobject); 
    });     
}
window.addEventListener("keydown",a);
function a(e){
y=e.keyCode;
console.log(y);
if(e.shiftKey == true && y == '80'){
console.log("p and shift pressed together");
blockwidth=blockwidth+10;
blockheight=blockheight+10;
document.getElementById("a").innerHTML=blockwidth;
document.getElementById("b").innerHTML=blockheight;
}

if(e.shiftKey == true && y == '77'){
    console.log("m and shift pressed together");
    blockwidth=blockwidth-10;
    blockheight=blockheight-10;
    document.getElementById("a").innerHTML=blockwidth;
    document.getElementById("b").innerHTML=blockheight;
    }

if(y == '38'){
up();
console.log("up");
}
if(y == '37'){
left();
console.log("left");
}
if(y == '39'){
right();
console.log("right");
}
if(y == '40'){
down();
console.log("down");
}
if(y == '87'){
block('wall.jpg');
console.log("w");
}
if(y == '71'){
block('ground.png');
console.log("g");
}
if(y == '76'){
block('light_green.png');
console.log("l");
}
if(y == '84'){
block('trunk.jpg');
console.log("t");
}
if(y == '82'){
block('roof.jpg');
console.log("r");
}
if(y == '89'){
block('yellow_wall.png');
console.log("y");
}
if(y == '68'){
block('dark_green.png');
console.log("d");
}
if(y == '85'){
block('unique.png');
console.log("u");
}
if(y == '67'){
block('cloud.jpg');
console.log("c");
}
}
function up(){
    if(playery>=0){
        playery= playery-blockheight;
        canvas.remove(playerobject);
        player();
    }
}
function down(){
    if(playery<=500){
        playery= playery+blockheight;
        canvas.remove(playerobject);
        player();
    }
}
function left(){
    if(playerx>=0){
       playerx= playerx-blockwidth;
        canvas.remove(playerobject);
        player();
    }
}
function right(){
    if(playerx<=850){
        playerx= playerx+blockwidth;
        canvas.remove(playerobject);
        player();
    }
}