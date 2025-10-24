function irLogin(){
    const correo = document.getElementById("correo").value;
    const password =document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    let iniciar = true;

    if (correo =="" || password == "" || password2 ==""){
        iniciar = false;
        Swal.fire({
            icon: "error",
            title: "Algo salio mal",
            text: "Hay campos sin rellenar"
        });
    } 
    

    if(password != password2){
        iniciar = false;
        Swal.fire({
            icon: "error",
            title: "Uy",
            text: "Los password no coinciden"
        })
    }


    const passwordRegex= /^[a-zA-Z0-9@#*$-]{6,12}$/;
    const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!passwordRegex.test(password)){
        iniciar=false;
        Swal.fire({
            icon:"error",
            title: "Oh...",
            text:"La contraseña no cumple con el formato solicitado",
            footer: "Debe incluir de 6 a 12 caracteres, letras, numeros y simbolos especiales"
        });
    
    }
    if (!emailRegex.test(correo)){
        iniciar=false;
        Swal.fire({
            icon: "error",
            title: "Oops",
            text: "El correo no cumple con el formato indicado",
        })
        
    }

    if(iniciar){
        Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: "El registro fue exitoso",
        }).then(() => {
            window.location.href = "inicio.html";  
        });
    }
}

function irregist(){
    window.location.href="registrar.html"
}

function irIndex(){
    const correo = document.getElementById("correo").value;
    const password =document.getElementById("contra").value;
    let iniciar = true
    if (correo =="" || password == ""){
        iniciar = false;
        Swal.fire({
            icon: "error",
            title: "Algo salio mal",
            text: "Hay campos sin rellenar"
        });
    } 
    
    if(correo != password){
        iniciar = false;
        Swal.fire({
            icon: "error",
            title: "Uy",
            text: "La info no coincide"
        })
    }

    if(iniciar){
        Swal.fire({
            icon: "success",
            title: "Bienvenido"
        }).then(() => {
            window.location.href = "index.html"; 
        });
    }
}