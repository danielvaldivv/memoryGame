import React from 'react'

const App = () => (
  <>
    <header>
      <h1>Memory Game</h1>
    </header>

    <main>
      <section>
        <h3>Descripción</h3>
        <p>En el siguiente juego de memoria aparecerá una palabra en el recuadro azul, esta palabra tendras que recordarla e ingresarla en la caja de abajo.</p>
        <p>Cada vez que aciertes ganarás un punto. Cuando obtengas 3 puntos subiras de nivel.</p>
        <p>Cuando obtengas 3 puntos en el nivel 3, ganaras el juego.</p>
        <p>Cada vez que te equivoques perderas un punto, si tienes 0 puntos esto hara que bajes de nivel.</p>
        <p>Si estas en el nivel 1 y te equivocas, esto provocará un strike. Tienes 3 strikes antes de perder el juego.</p>
        <p>¿Estás preparado?</p>
        <button type="button">start!</button>
      </section>

      <section>
        <h3>Word</h3>
        <form>
          <input type="text" id="word" placeholder="Ingresa el texto del recuadro azúl" />
        </form>
      </section>
    </main>
  </>
  )


export default App
