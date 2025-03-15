// amigos es el arreglo donde se almacenan los amigos para hacer el sorte del amigo secreto n-

let amigos = [];

function agregarAmigo() {
    // obtengo el valor del campo amigo en el TEXT DEL HATML 
    let nm = document.getElementById("amigo").value;
    
    nm = nm.toUpperCase();

    function agregarAmigo() {}
    // valdacion de ingresos no permitidos
    if (nm != "") {
        let nmNuevo = document.createElement('li');    
        // almacenamiento del nombre valido de un amigo
        amigos.push(nm);
        // limpio el cambo de texto
        // agrego un amigo a la lista
        nmNuevo.textContent = nm;
        document.getElementById("listaAmigos").appendChild(nmNuevo);
        document.getElementById("amigo").value = "";
        document.getElementById("amigo").focus();
        //alert("AMIGO AGREGADO: " +
    } else {
        // mensaje de alerta si en el ingreso es vacio
        alert("INGRESO NO VALIDO");   
    }
}

function sorteo() {
    if (amigos.length == 0) {
        alert("NO HAY AMIGOS PARA EL SORTEO");
        return;
    } else {
        // calculo la longitud del ARREGLO para generar el aleatorio de los amigos
        let n = amigos.length;
        // alert(n);
        // genero el numero aleatorio
        let i = Math.floor(Math.random() * n);
        // alert(i);
        // obtengo el nombre del amigo secreto
        let amigoSecreto = amigos[i];
        // muestro el nombre del amigo 
        const titulo = document.getElementById("subtitulo");
        titulo.textContent = "EL AMIGO SECRETO ES: " + amigoSecreto;
        //alert("EL AMIGO SECRETO ES: " + amigoSecreto);
        

    // limpio el arreglo de amigos
        amigos = [];
    }
}