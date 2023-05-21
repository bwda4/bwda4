//FUNCION QUE APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LA PREVIAMENTE SELECCIONADA

function seleccionar(link){
  var opciones = document.querySelectorAll('#links a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

//DESAPARECER EL MENU UNA VEZ QUE SE HA SELECCIONADO UNA OPCION EN EL MODO RESPONSIVE
var x = document.getElementById("nav");
x.className = "";

}
//FUNCION QUE MUESTRA EL MENU RESPONSIVE

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scroll para aplicar la animcacion de la barra de habilidades
window.onscroll = function(){
  efectoHabilidades();
}

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills")
  var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
  if(distancia_skills >=300){
    document.getElementById("html").classList.add("barra-progreso1")
    document.getElementById("css").classList.add("barra-progreso2")
    document.getElementById("js").classList.add("barra-progreso3")
    document.getElementById("ecma").classList.add("barra-progreso4")
    document.getElementById("ps").classList.add("barra-progreso5")
  }
}