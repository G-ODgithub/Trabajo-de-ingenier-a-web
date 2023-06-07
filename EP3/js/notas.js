fetch("/json/notas.json")
    .then(response => response.json())
    .then(json => {

        json.forEach(elemento => {

            res.innerHTML += `
                <tr>
                    <td>${elemento.evaluacion}</td>
                    <td>${elemento.nota}</td>
                    <td>${elemento.promedio}</td>
                    <td>${elemento.mejor}</td>
                    <td>${elemento.peor}</td>
                    <td>${elemento.fecha}</td>
                </tr>                
                `            
            
        });

    });
