fetch("/json/clases.json")
    .then(response => response.json())
    .then(json => {

        json.forEach(elemento => {

            res.innerHTML += `
                <tr>
                    <td>${elemento.estado}</td>
                    <td>${elemento.titulo}</td>
                    <td>${elemento.publicacion}</td>
                    <td>${elemento.detalles}</td>
                    <td>${elemento.fechas}</td>
                </tr>                
                `           

        })


    });
