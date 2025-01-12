async function loadData(){
    const loadingElement = document.getElementById("loading");
    loadingElement.style.display = "block";

    loadTitle();

    try{
        const data = await getData();
        showdata(data);
    }catch(e){
        console.error("Error al cargar los datos:", e);
        return;
    }
    finally{
        loadingElement.style.display = "none";
    }
}

async function getData(){
    let price1 = await getPrice1();
    let price2 = await getPrice2();
    let price3 = await getPrice3();

    return [price1, price2, price3];
}

async function getPrice1(){
    try {
        let respuesta = await fetch("https://open.er-api.com/v6/latest/USD");
        let data = await respuesta.json();    
        return data.rates.USD;
    }catch (e) {
        console.error("Error al obtener el precio 1:", e);
        return 0;
    }
}

async function getPrice2(){
    return new Promise(function(resolve, reject){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            resolve(data.bpi.USD.rate_float);
        })
        .catch(function(error){
            console.error("Error al obtener el precio 2:", error);
            reject(0);
        });
    });
}

async function getPrice3(){
    return new Promise(function(resolve, reject) { 
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://open.er-api.com/v6/latest/ARS");
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.responseText).rates.USD);
            }else{
                reject("Error al precio3");
            }
        }
        xhr.send();
    })
}

function loadTitle(){
    let titleElement = document.getElementById("title");
    titleElement.innerText = "Quotations page";
}

function showdata(data){
    let price1Element = document.getElementById("price1");
    let price2Element = document.getElementById("price2");
    let price3Element = document.getElementById("price3");

    price1Element.innerText = JSON.stringify(data[0]);
    price2Element.innerText = JSON.stringify(data[1]);
    price3Element.innerText = JSON.stringify(data[2]);
}