function loadData(data){
    let bank = document.getElementById("Bank");
    let address = document.getElementById("Address");
    let name = document.getElementById("Nombre");
    let numeroCuenta = document.getElementById("NumeroCuenta");
    let saldoDol = document.getElementById("SaldoDol");
    let saldoEur = document.getElementById("SaldoEur");
    let cbu = document.getElementById("CBU");

    bank.textContent = data.banco;
    address.textContent = data.sucursal;
    name.textContent = data.titular;
    numeroCuenta.textContent = data.nro_cuenta;
    saldoDol.textContent = data.saldo.find(s => s.moneda === "USD").monto;
    saldoEur.textContent = data.saldo.find(s => s.moneda === "EUR").monto;
    cbu.textContent = data.cbu;
}

function readJson(){
    fetch('resumen.json')
    .then(res=>res.json())
    .then(data=>{
        loadData(data);
    })
    .catch(err=>console.log(err));
}