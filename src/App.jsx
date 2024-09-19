import { useEffect, useState } from 'react'
import { Counter } from './counter.jsx';
import './App.css'
import { Toggle } from './Toggle.jsx';
import inn from './imgs/inn.jpg'
import forest from './imgs/forest.jpg'
import hell from './imgs/hell.jpg'
import nether from './imgs/nether.jpg'

const good = [
  {
    titulo: "Avanza Rápido",
    descripcion: "Avanza 3 casillas y elige a otro jugador para que avance 1 casilla."
  },
  {
    titulo: "Intercambio Útil",
    descripcion: "Intercambia posición con cualquier jugador."
  },
  {
    titulo: "Movimiento Estratégico",
    descripcion: "Avanza hasta la próxima casilla Verde."
  },
  {
    titulo: "Solidaridad Veloz",
    descripcion: "Avanza 2 casillas y elige un jugador para que avance 1 casilla."
  },
  {
    titulo: "Generosidad Compartida",
    descripcion: "Avanza 1 casilla, elige a dos jugadores para que avancen 1 casilla cada uno."
  },
  {
    titulo: "Impulso Colectivo",
    descripcion: "Todos los jugadores avanzan 1 casilla."
  },
  {
    titulo: "Sorteo de Suerte",
    descripcion: "Avanza 5 casillas."
  },
  {
    titulo: "Salto Brillante",
    descripcion: "Avanza hasta la próxima casilla vacía, saltando los jugadores en frente tuyo."
  },
  {
    titulo: "Doble Fuerza",
    descripcion: "Lanza el dado dos veces y avanza la suma."
  },
  {
    titulo: "Suma de Avances",
    descripcion: "Todos lanzan el dado, avanza según el mayor resultado."
  },
  {
    titulo: "Dado de 8",
    descripcion: "El siguiente turno tira un dado de ocho caras."
  },
  {
    titulo: "Roba una estrella",
    descripcion: "Tu y la persona con más estrellas tiran un dado de 8 caras, quien saque el mayor número se queda con una estrella de la persona con más estrellas"
  }
];

const bad = [
  {
    titulo: "Viento en Contra",
    descripcion: "Retrocede 2 casillas y selecciona a otro jugador para que retroceda 1."
  },
  {
    titulo: "Vuelta Obligada",
    descripcion: "Retrocede hasta la última casilla Roja, o por defecto, el inicio."
  },
  {
    titulo: "Retraso Colectivo",
    descripcion: "Todos los jugadores retroceden 1 casilla."
  },
  {
    titulo: "Caída en Picada",
    descripcion: "Retrocede 3 casillas."
  },
  {
    titulo: "Destino Desfavorable",
    descripcion: "Retrocede hasta la próxima casilla ocupada, o por defecto, el inicio."
  },
  {
    titulo: "Retroceso Seguido",
    descripcion: "Todos lanzan el dado, retrocede según el mayor resultado."
  },
  {
    titulo: "Cambios de Marea",
    descripcion: "Cambia posición con el jugador que menos estrellas tiene."
  },
  {
    titulo: "Desafío Inesperado",
    descripcion: "Elige un jugador para lanzar el dado, retrocedes según el resultado."
  },
  {
    titulo: "Revés Implacable",
    descripcion: "Retrocede 4 casillas, avanza la mitad de tu dado redondeando hacia abajo en el siguiente turno."
  },
  {
    titulo: "Dado de 4",
    descripcion: "El siguiente turno tira un dado de cuatro caras."
  },
  {
    titulo: "Robo de estrella",
    descripcion: "Todos tiran un dado de 8 caras, el jugador con el número más alto se queda con una de tus estrellas, si no tienes estrellas, usa el botón rojo."
  }
];

const challenge = [
  {
    titulo: "Cadena de palabras",
    descripcion: "En parejas, una persona dice una palabra, otra persona del otro equipo debe decir otra palabra que esté relacionada con la anterior."
  },
  {
    titulo: "Última letra",
    descripcion: "En parejas, una persona dice una palabra, otra persona del otro equipo debe decir otra palabra que comience por la última letra de la palabra anterior. Las palabras no necesitan estar relacionadas."
  },
  {
    titulo: "Conteo por categoria",
    descripcion: "En parejas, cada pareja tiene 1 minuto para decir la mayor cantidad de objetos segun su categoria, el equipo que diga la mayor cantidad de objetos gana. Los jugadores pueden escoger la categoría"
  },
  {
    titulo: "Manotazo",
    descripcion: "En parejas, una persona de cada equipo espera la señal de un juez, al recibir la señal deben golpear la carta en la mitad, el primero en tener la carta bajo su mano gana. El primer equipo en llegar a 3 gana."
  },
  {
    titulo: "Piedra, Papel, Tijeras",
    descripcion: "En parejas, uno de cada equipo juega una ronda de piedra, papel o tijera, luego cambian los jugadores, el primer grupo en llegar a 3 gana."
  },
  {
    titulo: "Pelea de piropos",
    descripcion: "En parejas, los jugadores escogen un tema y por turnos deben decir un piropo al otro grupo relacionado con el tema, el primer grupo que se quede sin ideas pierde."
  },
  {
    titulo: "Dos verdades, una mentira",
    descripcion: "En parejas, un jugador de cada pareja debe decir dos verdades y una mentira de ellos mismos, la otra pareja debe identificar la mentira, las parejas se van turnando para dar sus dos verdades y su mentira, el primer grupo en no identificar la mentira pierde pierde."
  },
  {
    titulo: "History Buff!",
    descripcion: "En parejas, un jugador de cada pareja le pregunta a la otra pareja algo referente a la historia mundial, las preguntas deben ser de conocimiento genreal y no super específicas, cualquier integrante de la otra pareja puede responder, las parejas se van turnando quién pregunta, la primer pareja en fallar una respuesta pierde."
  },
]

const generarNumeroAleatorio = (list) => {
  const indice = Math.floor(Math.random() * list.length);
  return indice;
};


function App() {
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [backgroundColor, setBackgroundColor] = useState('');
  const [background, setBackground] = useState(inn);
  const [intro, setIntro] = useState(true)
  const [count1, setCount1] = useState(0);
  const [label1, setLabel1] = useState('Jugador 1')
  const [count2, setCount2] = useState(0);
  const [label2, setLabel2] = useState('Jugador 2')
  const [count3, setCount3] = useState(0);
  const [label3, setLabel3] = useState('Jugador 3')
  const [count4, setCount4] = useState(0);
  const [label4, setLabel4] = useState('Jugador 4')


  useEffect(() => {
    setTitle('Listo para jugar!')
    setText('Presiona el botón correspondiente a tu casilla')
  }, []);

  const handleGoodButtonClick = () => {
    let rand = generarNumeroAleatorio(good)
    setTitle(good[rand].titulo)
    setText(good[rand].descripcion)
    setBackgroundColor('green')
    setBackground(forest)
  };

  const handleBadButtonClick = () => {
    let rand = generarNumeroAleatorio(bad)
    setTitle(bad[rand].titulo)
    setText(bad[rand].descripcion)
    setBackgroundColor('red')
    setBackground(hell)
  };

  const handleChallengeButtonClick = () => {
    let rand = generarNumeroAleatorio(challenge)
    setTitle(challenge[rand].titulo)
    setText(challenge[rand].descripcion)
    setBackgroundColor('purple')
    setBackground(nether)
  };

  const handleIntroDisplay = () => {
    setIntro(intro => !intro)
  }

  return (
    <>
      {
        intro
          ? <Toggle clickAction={handleIntroDisplay} textContent={'A Jugar!'}></Toggle>
          : <Toggle clickAction={handleIntroDisplay} textContent={'Volver a instrucciones'}></Toggle>
      }
      {intro
        ? (<div className='game' style={{ backgroundColor, backgroundImage: `url(${inn})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Instrucciones</h1>
          <h3 className='rules'>
            ¡Bienvenidos a esta gran aventura!<br />
            Esta aventura está diseñada para cuatro jugadores, y cada uno deberá escoger un personaje para iniciar el desafío escogiendo una carta de personaje al azar. En la página del juego, encontrarás un apartado donde cada jugador podrá anotar su nombre y llevar la puntuación durante el transcurso de la partida. El orden de los jugadores es el número de su carta de personaje.<p />

            Para tener éxito, tendrás que ser estratégico. A veces, la mejor opción será aliarte con otro jugador para superar desafíos y enfrentarte a enemigos poderosos. ¡Pero no bajes la guardia, porque solo uno podrá ser el vencedor al final!<p />

            Cómo comenzar la aventura:<br />
            <ol>
              <li>Todos los jugadores inician en la casilla marcada como &quot;Start&quot;.</li>
              <li>No pueden haber dos jugadores en una misma casilla, deben tirar un dado de 6 caras, el jugador con el menor número retrocede una casilla</li>
              <li>A lo largo del tablero, encontrarás diferentes tipos de casillas:</li>
              <ul>
                <li>Casillas verdes: Te otorgarán comodines que te darán una ventaja estratégica.</li>
                <li>Casillas rojas: Estas casillas pueden perjudicarte, ¡así que ten cuidado!</li>
                <li>Casillas moradas: Son casillas de retos en pareja. Cada jugador deberá hacer equipo con otro. La pareja ganadora obtendrá una estrella, mientras que la pareja perdedora deberá sacar una tarjeta roja, que puede tener consecuencias negativas. Un representante de cada pareja lanza un dado de 6 lados, la pareja con el número más alto empieza el reto.</li>
              </ul>
              <li>Si un jugador cae en algún tipo de casilla especial, sea verde, roja o morada, se debe cumplir con lo que diga el resultado en la página web.</li>
              <li>Cada vez que un jugador vuelva a pasar por la casilla &quot;Start&quot;, ganará una estrella adicional.<br />
              El jugador que logre recolectar primero 8 estrellas será el vencedor de la aventura.</li>
            </ol>
          </h3>
        </div>)
        : (<div className='game' style={{ backgroundColor, backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>{title}</h1>
          <h3 className='textDisplay'>{text}</h3>
          <div className='buttonContainer'>
            <button className='textButton' onClick={handleGoodButtonClick}><h3>Verde</h3></button>
            <button className='textButton' onClick={handleBadButtonClick}><h3>Rojo</h3></button>
            <button className='textButton' onClick={handleChallengeButtonClick}><h3>Morado</h3></button>
          </div>
          <div className='counters'>
            <Counter count={count1} setCount={setCount1} label={label1} setLabel={setLabel1} />
            <Counter count={count2} setCount={setCount2} label={label2} setLabel={setLabel2} />
            <Counter count={count3} setCount={setCount3} label={label3} setLabel={setLabel3} />
            <Counter count={count4} setCount={setCount4} label={label4} setLabel={setLabel4} />
          </div>
        </div>)
      }

    </>
  )
}

export default App