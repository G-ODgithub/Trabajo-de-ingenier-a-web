fetch("/json/noticias.json")
    .then(response => response.json())
    .then(json => {

        json.forEach(elemento => {

            res.innerHTML += `
                <tr>
                    <td>${elemento.estado}</td>
                    <td>${elemento.asunto}</td>
                    <td>${elemento.detalles}</td>
                    <td>${elemento.fecha}</td>
                </tr>                
                `            
            
        });

    });
