fetch("/json/evaluaciones.json")
    .then(response => response.json())
    .then(json => {

        json.forEach(elemento => {

            res.innerHTML += `
                <tr>
                    <td>${elemento.estado}</td>
                    <td>${elemento.asignatura}</td>
                    <td>${elemento.evaluacion}</td>
                    <td>${elemento.temario}</td>
                    <td>${elemento.fecha}</td>
                </tr>                
                `            
            
        });

    });