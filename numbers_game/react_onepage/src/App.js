import React from 'react';
import Saludo from './saludo';
import Mensaje from './mensaje';

function app(){
  return(
    <div>
      <Saludo nombre="Juan" apellido="Pérez" />
      <Mensaje mensaje="Bienvenido a mi app" />
    </div>
  );
}

export default app;