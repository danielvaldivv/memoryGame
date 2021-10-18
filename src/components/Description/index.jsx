import React from 'react'

import './Description.styl'

const Description = () => (
    <div className="Description">
      <h2>¿Cómo jugar?</h2>
      <p>- En el siguiente juego de memoria aparecerá una palabra en el recuadro azul, esta palabra tendras que recordarla e ingresarla en la caja de abajo.</p>
      <p>- Cada vez que aciertes ganarás un punto. Cuando obtengas 3 puntos subiras de nivel.</p>
      <p>- Cuando obtengas 3 puntos en el nivel 3, ganaras el juego.</p>
      <p>- Cada vez que te equivoques perderas un punto, si tienes 0 puntos esto hara que bajes de nivel.</p>
      <p>- Si estas en el nivel 1 y te equivocas, esto provocará un strike. Tienes 3 strikes antes de perder el juego.</p>
    </div>
  )


export default Description

