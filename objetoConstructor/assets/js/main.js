var array=[];
   var nombre=document.getElementById("nombre");
    var apellido=document.getElementById("apellido");
    var edad=document.getElementById("edad");
    var genero=document.getElementById("genero");
    var ciudad=document.getElementById("ciudad");
    var pais=document.getElementById("pais");

function Formulario(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.mostrar=function(){
  var resultado= "<div><p>Nombre: " + this.nombre+" "+ this.apellido+"</br>"+"Edad:" + this.edad +  "</br>"+ "País:" + this.pais + "</div></p>";
  return resultado;
  };
}
var boton=document.getElementById("registrar");

boton.addEventListener("click",function(e){
  e.preventDefault();
    var paciente= new Formulario(nombre.value,apellido.value,edad.value,genero.value,ciudad.value,pais.value);
    array.push(paciente);
    document.getElementById("nuevoPaciente").innerHTML+=paciente.mostrar();
    document.getElementById("formulario").reset();
  });
