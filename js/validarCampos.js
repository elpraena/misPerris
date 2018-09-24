//seleccionar el formulario a travez de la id
var formulario = document.getElementById("form1");


//asociar funcion validar al hacer click

window.onload=iniciar;//sin parentesis

//funcion iniciar 
function iniciar(){

    document.getElementById("enviar").addEventListener('click',validar,false);
}

//seleccion de elementos 

function validaNombre(){

    var nombre=document.getElementById("nombre");
    if(nombre.value == ""){
        alert("el nombre  no puede ser vacio");
        return false;
    }else if(!nombre.checkValidity()){

        alert("nombre tiene que ser solo letras");
    }
    return true;
}


function validarCorreo(){

var correo=document.getElementById("correo").value;
var expresion = /\w+@\w+\.+[a-z]/;
if(correo.value ==""){

    alert("el correo esta vacio");
    return false;
}else if (!expresion.test(correo)) {

    alert("formato de correo invalido");
    return false;


}
return true;
}

function validarRut(){

var correo= document.getElementById("rut");
if (!correo.checkValidity()){

    alert("el rut es invalido");
    return false;
}
return true;
}



//funcion que valida elementos 
function validar(e){

    if(validaNombre()&&validarCorreo()&&validarRut()&&confirm("pulsa si si dedeas enciar formulario")){
        alert("registro realizado");
        return true;
       
    }else{
        alert("registro no  realizado");
        e.preventDefault();
        
        return false;
    }
}