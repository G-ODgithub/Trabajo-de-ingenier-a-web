fetch("/json/materiales.json")
    .then(response => response.json())
    .then(json => {

        json.forEach(elemento => {

            res.innerHTML += `
                <tr>
                    <td>${elemento.estado}</td>
                    <td>${elemento.asignatura}</td>
                    <td>${elemento.docente}</td>
                    <td>${elemento.proyecto}</td>
                    <td>${elemento.publicacion}</td>
                    <td>${elemento.detalles}</td>
                    <td>${elemento.fecha}</td>
                </tr>                
                `            
            
        });

    });