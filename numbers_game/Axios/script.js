function obtenerInformacion(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        let listaInformacion = document.getElementById('listaInformacion');
        for(let i=0; i<response.data.length; i++){
            let itemLista = document.createElement('li');
            itemLista.innerText = response.data[i].title;
            listaInformacion.appendChild(itemLista);
        }
    })
    .catch(function(error) {
        console.log(error); 
    });
}