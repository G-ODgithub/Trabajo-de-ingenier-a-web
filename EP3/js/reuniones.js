document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/json/reuniones.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);

            let res = document.querySelector('#res')
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.estado}</td>
                    <td>${item.asunto}</td>
                    <td>${item.detalles}</td>
                    <td>${item.fecha}</td>
                </tr>                
                `
            }

        }

    }

}