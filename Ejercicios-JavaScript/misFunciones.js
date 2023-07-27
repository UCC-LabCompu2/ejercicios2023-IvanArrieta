/**
 * Conversor de unidades de metros, pies, yardas y pulgadas
 * @method cambiar unidades
 * @param (string)id - El id de lo metros, pies, yardas o pulgadas
 * @param (number)valor - El valor de los metros, pies, yardas o pulgadas
 * return
 */

function cambiarUnidades(id,valor){
    if (valor.includes(",")){
        valor=valor.replace(",",".");
    }
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.cambiarUnidades.unid_metro.value = "";
        document.cambiarUnidades.unid_pulgada.value = "";
        document.cambiarUnidades.unid_pie.value = "";
        document.cambiarUnidades.unid_yarda.value = "";
    }else if(id=="metro"){
        metro= value;
        document.lasUnidades.unid_pulgada.value= 39.3701*valor;
        document.lasUnidades.unid_pie.value= 3.28084*valor;
        document.lasUnidades.unid_yarda.value= 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada= value
        document.lasUnidades.unid_pulgada.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.0833333*valor;
        document.lasUnidades.unid_yarda.value= 0.0277778*valor;
    }else if(id=="pie"){
        pie=valor;
        document.lasUnidades.unid_pulgada.value = 12*valor;
        document.lasUnidades.unid_pie.value = 0.6*valor;
        document.lasUnidades.unid_pulgada.value = 0.3048*valor;

    }else if(id=="yarda"){
        yarda=valor;
        document.lasUnidades.unid_pulgada.value = 36*valor;
        document.lasUnidades.unid_pie.value = 3*valor;
        document.lasUnidades.unid_yarda.value = 0.9144*valor;
    }
}

function convertirGR (id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180
    }else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}
function calcularsuma(){
    var num1,num2;
    num1=Number(document.getElementsByName ("sum_num1")[0].value);
    num2=document.getElementsByName ("sum_num2")[0].value;
    document.getElementsByName("sub_total")[0].value= num1 + Number(num2);
}
function calcularresta(){
    var num1,num2;
    num1=Number(document.getElementsByName ("res_num1")[0].value);
    num2=document.getElementsByName ("res_num2")[0].value;
    document.getElementsByName ("res_total")[0].value= num1 - Number(num2);
}
function calcularmul(){
    var num1,num2;
    num1=Number(document.getElementsByName ("mul_num1")[0].value);
    num2=document.getElementsByName ("mul_num2")[0].value;
    document.getElementsByName ("mul_total")[0].value= num1 * Number(num2);
}
function calculardiv(){
    var num1,num2;
    num1=Number(document.getElementsByName ("div_num1")[0].value);
    num2=document.getElementsByName ("div_num2")[0].value;
    document.getElementsByName ("div_total")[0].value= num1 / Number(num2);
}
function cargarWeb(){
    var cant, unidad, urlcomp;
    cant= document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    urlcomp= "segundaWeb.html#" +cant + "#" + unidad;
    window.open(urlcomp);
}
function cargarResultado(){
    var urlcomp, can, un;
    urlcomp= window.location.href.split("/")[5];
    can= urlcomp.split("#")[1];
    un= urlcomp.split("#")[2];
    document.getElementById("dist").value= can + " " + un;
    consul.log(urlcomp);
}
function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}
function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = cant + " " + un;
}

x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, x, 100)
    }
    x+=dx;
}

function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        ctx.drawImage(img, posX, posY)
    }
}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333888";
    ctx.fillRect(0+margen,yMax-40-margen,40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#214144"
    ctx.fill();
}

var bandera;
function dibujar(event){
    var  canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function LimpiarCanvas(){
    var  canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var anchoMax = canvas.width;
    var alturaMax = canvas.height;
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#952e2e";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    ctx.beginPath();
    for(var i=0; i<anchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#952e2e";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#312e95";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#312e95";
    ctx.stroke();
    ctx.closePath();

}