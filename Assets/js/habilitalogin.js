function activarcaja(){
    var checkbox = document.getElementById('flexCheckDefault');
    if(checkbox.checked){
        document.getElementById("contrasenitecnicomaster").disabled=false;
    }else{
        document.getElementById("contrasenitecnicomaster").disabled=true;
    }
    
    
}