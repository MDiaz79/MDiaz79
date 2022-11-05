// Función para resolver costo de Ticket

function valorEntrada(){
    validaEntrada()
    const inputCat= document.getElementById('inputCat').value;
    console.log(inputCat);
    validarSeleccion(inputCat);
    calculaEntrada(inputCat);
}
function validaEntrada(){
    const nombre=document.getElementById('Nombre').value;
    validarCampo(nombre);
    const apellido=document.getElementById('inputApellido').value;
    validarCampo(apellido);
    const correo=document.getElementById('inputCorreo').value;
    validarCampo(correo);
    const cantidad=document.getElementById('inputCantidad').value;
    validarCampo(cantidad);
    return;
}
function validarCampo(unCampo){
    if (unCampo===''){
        alert('Debe completar todos los campos');
        return;
    }   
}
function validarSeleccion(cadena){
    if (cadena==='' || cadena==='Selecciona'){
        alert('Debe completar la categoría');
        return;
    }   
}

function calculaEntrada(categoria){
    document.getElementById('total').innerHTML='';
    let valor;
    switch(categoria) {
        case "Estudiante":
          valor= (200*85)/100;
          break;
        case "Trainee":
            valor= (200*50)/100;
          break;
        case "Junior":
            valor= (200*15)/100;
          break;
        default:
          valor=200;
    }
        document.getElementById('total').innerHTML ='Total a pagar : ' + valor;
    };