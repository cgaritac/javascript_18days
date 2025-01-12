let usuario = "Federico"
let password = "1234"

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    headers: {
        "Authorization": "Basic " + btoa(usuario + ":" + password),
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

let token = "miToken"

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "default", //Sigue las reglas definidas por el navegador y el cliente
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "no-cache", //No se almacena en la cache
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "no-store", //No se almacena en la cache y no se usa la cache
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "reload", //Se recarga la cache 
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "force-cache", // Se usa la cache si esta disponible
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "only-if-cache", //Se usa la cache si esta disponible
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    redirect: "follow", //Sigue la redireccion  
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));




fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    redirect: "error", //No sigue la redireccion    
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "no-cache",
    redirect: "manual", //No sigue la redireccion, solo devuelve la información
    headers: {
        "Authorization": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => {
    if(response.type === "opaqueredirect"){
        let nuevaURL = response.headers.get("Location");
        console.log("Redireccionando a: ", nuevaURL);
    }else{
        return response.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error("Error:", error));