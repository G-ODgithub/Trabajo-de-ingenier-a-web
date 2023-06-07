fetch("/json/anotaciones.json")
    .then(response => response.json())
    .then(json => {

        json.forEach(elemento => {

            res.innerHTML += `
                <tr>
                    <td>${elemento.estado}</td>
                    <td>${elemento.profesor}</td>
                    <td>${elemento.asignatura}</td>
                    <td>${elemento.tipo}</td>
                    <td>${elemento.fecha}</td>
                    <td>${elemento.detalles}</td>
                </tr>                
                `            
            
        });

    });

