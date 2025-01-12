import React from 'react';

function Main(props) {
    const [num, setNum] = React.useState(0);
    const [numSystem, setNumSystem] = React.useState(Math.floor(Math.random() * props.limit) + 1);

    function updateValue(event) {
      setNum(Number(event.target.value));      
    }

    function compareValues() {
      if (num === numSystem) {
        alert('Los números son iguales');
      } else {
        alert('Los numeros no son iguales, el del usuario es:'+ num + ", y el numero del sistema es: " + numSystem);
      }
      setNumSystem(Math.floor(Math.random() * props.limit) + 1);
    }

  return (
    <div>
       <input 
        id='num' 
        type='number'
        onChange={updateValue}
        min={1}
        max={props.limit}
        placeholder='Ingrese un número'
        ></input>
       <button onClick={compareValues}>Comparar</button>
    </div>
  );
}

export default Main;