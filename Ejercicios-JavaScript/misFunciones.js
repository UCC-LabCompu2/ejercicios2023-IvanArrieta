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
        pulgada= 39.3701*valor;
        pie= 3.28084*valor;
        yarda= 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada= value
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda= 0.0277778*valor;
    }else if(id=="pie"){
        pie=valor;
        pulgada= 12*valor;
        yarda= 0.6*valor;
        metro = 0.3048*valor;

    }else if(id=="yarda"){
        yarda=valor;
        pulgada= 36*valor;
        pie= 3*valor;
        metro = 0.9144*valor;
    }
}
document.cambiarUnidades.unid_pulgada.value = Math.round(metro*100)/100;
document.cambiarUnidades.unid_pulgada.value = Math.round(pulgada);
document.cambiarUnidades.unid_pulgada.value = Math.round(pie);
document.cambiarUnidades.unid_pulgada.value = Math.round(yarda);

function convertirGR (id){
    var grad;
    var rad;
    if(id=="grados"){
        rad = (grad*Math.PI)/180
        grad = document.getElementById("grados").value;
    }else if (id=="radianes"){
        grad = (grad*Math.PI)/180
        rad = document.getElementById("radianes").value;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostar_ocultar(valorMO){
    document.getElementById("divMO").style.display = 'block';
    if(valorMO==val_ocultar){
        document.getElementById("divMO").style.display = 'none';
    }
}
function calcularsuma(){
    var num1,num2;
    num1=number (document.getElementById ("sum_num1")[0].value);
    num2=document.getElementById ("sum_num2")[0].value;
    document.getElementById ("sub_total")[0].innerHTML= num1+ number(num2);
}
function calcularresta(){
    var num1,num2;
    num1=number (document.getElementById ("res_num1")[0].value);
    num2=document.getElementById ("res_num2")[0].value;
    document.getElementById ("res_total")[0].innerHTML= num1- number(num2);
}
function calcularmul(){
    var num1,num2;
    num1=number (document.getElementById ("mul_num1")[0].value);
    num2=document.getElementById ("mul_num2")[0].value;
    document.getElementById ("mul_total")[0].innerHTML= num1* number(num2);
}
function calculardiv(){
    var num1,num2;
    num1=number (document.getElementById ("div_num1")[0].value);
    num2=document.getElementById ("div_num2")[0].value;
    document.getElementById ("div_total")[0].innerHTML= num1/ number(num2);
}
function cargarWeb(){
    var cant, unidad, urlcomp;
    cant= document.getElementById("distancia").value;
    unidad= document.getElementById("unidades")[0].value;
    urlcomp= "segundaWeb. #" +cant + "#" + unidad;
    window.open(urlcomp);
}
function cargarResultado(){
    var urlcomp, can, un;
    urlcomp= window.location.href.split("/")[5];
    can= urlcomp.split("#")[1];
    un= urlcomp.split("#")[2];
    document.getElementById("dist").value= can +" " + un;

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
