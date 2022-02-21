function cargar() {
    fetch('http://www.raydelto.org/agenda.php')
        .then(function (resultado) {
            return resultado.json();
        }).then(function (resultado) {

            const lista = document.getElementById("tbl-datos")

            resultado.map(function (data) {
                var columnanombre = document.createElement("tr")
                var tr1 = document.createElement("td")
                var tr2 = document.createElement("td")
                var tr3 = document.createElement("td")

                tr1.innerHTML = data.nombre;
                tr2.innerHTML = data.apellido;
                tr3.innerHTML = data.telefono;

                columnanombre.appendChild(tr1)
                columnanombre.appendChild(tr2)
                columnanombre.appendChild(tr3)

                lista.appendChild(columnanombre)
            })

        })

}

function enviar() {
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const telefono = document.getElementById("telefono")

    var senddata = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value
    }
    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(senddata)
    }).then(function () {
        const lista = document.getElementById("tbl-datos")
        var columnanombre = document.createElement("tr")
        var tr1 = document.createElement("td")
        var tr2 = document.createElement("td")
        var tr3 = document.createElement("td")

        tr1.innerHTML = nombre.value;
        tr2.innerHTML = apellido.value;
        tr3.innerHTML = telefono.value;

        columnanombre.appendChild(tr1)
        columnanombre.appendChild(tr2)
        columnanombre.appendChild(tr3)

        lista.appendChild(columnanombre)
    })
}