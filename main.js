//Acortamos el código para tener todo acortado
const gamezone = document.getElementById("gamezone");
const points = document.getElementById("pointstxt");
const addball = document.getElementById("addball");
const lesstime = document.getElementById("lesstime");
const addballprice = document.getElementById("addballprice");
const lesstimeprice = document.getElementById("lesstimeprice");
const fondo = document.getElementById("fondo");

//Variables
var pts = 0;
var timer = null;
const timeTimerDef = 3000;
var timeTimer = 3000;
const ballGenDef = 1;
var ballGen = 1;
    //Posiciones X y Y
    var posLeft = 0;
    var posTop = 0;
    var posRight = 0;
    var posBottom = 0;
var balls = 0;
const maxBalls = 35;

//Cargamos un default
window.onload = def();

function def(){
    pts = 0;
    clearInterval(timer);
    timeTimer = timeTimerDef;
    ballGen = ballGenDef;
    points.innerHTML = "Points: "+pts;
    addball.addEventListener("click", addballShopFunc);
    lesstime.addEventListener("click", lesstimeShopFunc);
    addballprice.innerHTML = "100 "+"points";
    lesstimeprice.innerHTML = "125 "+"points";
    game();
}

//Juego
function game() {
    clearInterval(timer);
    timer = setInterval(addballFunc, timeTimer);
    function addballFunc() {
            var rect = gamezone.getBoundingClientRect();
            var posX = rect.right - rect.left;
            var posY = rect.bottom - rect.top;
            posY = posY -60;
            posX = posX -60;
            console.log(posX+" "+posY)
            if(balls <= maxBalls){
            for (i = 0;i <= ballGen-1;i++){
                var a = Math.random()*1000;
                if (a >= 100){
                    posLeft = Math.random()*posX;//Número aleatorio para posLeft
                    posTop = Math.random()*posY;//Número aleatorio para posTop
                    console.log(posLeft+" "+posTop)
                    var temp = document.createElement("div");
                    gamezone.appendChild(temp);
                    var lastch = gamezone.lastChild;
                    lastch.setAttribute("id","point1");
                    lastch.style.right = posLeft+"px";
                    lastch.style.top = posTop+"px";
                    lastch.addEventListener("click", function(){earse(this,1)});
                    balls++;
                }else if(a <= 99){
                    posLeft = Math.random()*posX;//Número aleatorio para posLeft
                    posTop = Math.random()*posY;//Número aleatorio para posTop
                    var temp = document.createElement("div");
                    gamezone.appendChild(temp);
                    var lastch = gamezone.lastChild;
                    lastch.setAttribute("id","point2");
                    lastch.style.right = posLeft+"px";
                    lastch.style.top = posTop+"px";
                    lastch.addEventListener("click", function(){earse(this,5)});
                    balls++;
                }else{
                    console.log("Can't generate more balls")
                }
            }
            console.log("Ball generated");
        }
    }
}
    //Borrar el punto y añadirlo
    function earse(y, x) {
        y.removeEventListener("click", earse);
        y.remove(y);
        pts = pts+x;
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
        balls--;
    }

//Tienda
function addballShopFunc() { 
    if(ballGen==2 && pts >=500){
        //Desactivar función permanentemente
        addball.removeEventListener("click", addballShopFunc);
        pts = pts - 500;
        ballGen = 3;
        addballprice.innerHTML = "max "+"level";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
    }else if(ballGen==1 && pts >=100){
        pts = pts - 100;
        ballGen = 2;
        addballprice.innerHTML = "500 "+"points";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
    }
}
function lesstimeShopFunc() {
    if(timeTimer == 1000 && pts >= 1000){
        lesstime.removeEventListener("Click", lesstimeShopFunc);
        pts = pts-1000;
        timeTimer = 500;
        lesstimeprice.innerHTML = "max "+"level";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
        game();
    }else if(timeTimer == 1500 && pts >= 750){
        pts = pts-750;
        timeTimer = 1000;
        lesstimeprice.innerHTML = "1000 "+"points";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
        game();
    }else if(timeTimer == 2000 && pts >= 500){
        pts = pts-500;
        timeTimer = 1500;
        lesstimeprice.innerHTML = "750 "+"points";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
        game();
    }else if(timeTimer == 2500 && pts>=250){
        pts = pts-250;
        timeTimer = 2000;
        lesstimeprice.innerHTML = "500 "+"points";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
        game();
    }else if(timeTimer == 3000 && pts>=125){
        pts = pts-125;
        timeTimer = 2500;
        lesstimeprice.innerHTML = "250 "+"points";
        points.innerHTML = "Points: "+pts;
        fondo.innerHTML = pts;
        game();
        animShop();
    }
}