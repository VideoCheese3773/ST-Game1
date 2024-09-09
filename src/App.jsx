import { useEffect, useState } from 'react'
import {Counter} from './counter.jsx';
import './App.css'
import { Toggle } from './Toggle.jsx';

const good = [
  {
    titulo: "Avanza Rápido",
    descripcion: "Avanza 3 casillas y selecciona a otro jugador para que avance 1 casilla."
  },
  {
    titulo: "Intercambio Útil",
    descripcion: "Intercambia posición con cualquier jugador."
  },
  {
    titulo: "Movimiento Estratégico",
    descripcion: "Avanza hasta la próxima casilla de Ayuda."
  },
  {
    titulo: "Solidaridad Veloz",
    descripcion: "Avanza 2 casillas y permite que un jugador de tu elección avance 1 casilla."
  },
  {
    titulo: "Generosidad Compartida",
    descripcion: "Avanza 1 casilla y selecciona a dos jugadores para que avancen 1 casilla cada uno."
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
    descripcion: "Avanza hasta la próxima casilla vacía."
  },
  {
    titulo: "Doble Fuerza",
    descripcion: "Lanza el dado dos veces y avanza según la suma."
  },
  {
    titulo: "Suma de Avances",
    descripcion: "Todos lanzan el dado, avanza según el mayor resultado."
  },
  {
    titulo: "Dado de 8",
    descripcion: "El siguiente turno tira un dado de ocho caras."
  }
];

const bad = [
  {
    titulo: "Viento en Contra",
    descripcion: "Retrocede 2 casillas y selecciona a otro jugador para que retroceda 1."
  },
  {
    titulo: "Intercambio Inesperado",
    descripcion: "Cambia posición con cualquier jugador."
  },
  {
    titulo: "Vuelta Obligada",
    descripcion: "Retrocede hasta la última casilla de Perjudicar."
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
    descripcion: "Retrocede hasta la próxima casilla ocupada."
  },
  {
    titulo: "Retroceso Seguido",
    descripcion: "Todos lanzan el dado, retrocede según el mayor resultado."
  },
  {
    titulo: "Cambios de Marea",
    descripcion: "Cambia posición con el que menos estrellas tienes."
  },
  {
    titulo: "Desafío Inesperado",
    descripcion: "Elige un jugador para lanzar el dado, retrocedes según el resultado."
  },
  {
    titulo: "Revés Implacable",
    descripcion: "Retrocede 4 casillas pero avanza la mitad en el siguiente turno."
  },
  {
    titulo: "Dado de 4",
    descripcion: "El siguiente turno tira un dado de cuatro caras."
  }
];

const challenge = [
  {
    titulo: "Carrera de Dibujo",
    descripcion: "Forma un equipo de dos y escoge a tu compañero. Cada equipo tiene 30 segundos para que ambos miembros dibujen un personaje de videojuego. Los otros equipos votan por el mejor dibujo (sin votar por sí mismos). El equipo ganador recibe un reto verde, mientras que los demás obtienen un reto rojo."
  },
  {
    titulo: "Batalla Rítmica",
    descripcion: "Colócate en equipo de dos y escoge a tu compañero. Se pone una canción conocida. Los equipos deben dar palmaditas al ritmo de la música. El último equipo en seguir el ritmo correctamente obtendrá un reto rojo, y el ganador un reto verde."
  },
  {
    titulo: "Reto de Velocidad",
    descripcion: "Selecciona a tu compañero y forma un equipo de dos. Cada equipo escribe tantos nombres de juegos de video como pueda en un minuto. El equipo que tenga más nombres válidos recibe un reto verde, mientras que los demás reciben un reto rojo."
  },
  {
    titulo: "Desafío de Equilibrio",
    descripcion: "Escoge a tu compañero y forma un equipo de dos. Cada equipo coloca un libro sobre la cabeza de un miembro. El equipo que logre mantenerlo más tiempo sin que caiga recibe un reto verde. Los otros equipos enfrentan un reto rojo."
  },
  {
    titulo: "Reto de Reflejos",
    descripcion: "Elige a tu compañero para formar un equipo de dos. Cada equipo, excepto uno, pone sus manos en la mesa. Un miembro del equipo restante da una señal y los demás deben reaccionar rápidamente. El equipo que reaccione más lento obtendrá un reto rojo; el más rápido gana un reto verde."
  },
  {
    titulo: "Adivinanza de Sinónimos",
    descripcion: "Forma un equipo de dos escogiendo a tu compañero. Un jugador dice una palabra y el compañero debe decir un sinónimo. El equipo que use más sinónimos correctos recibe un reto verde; los demás, un reto rojo."
  },
  {
    titulo: "Juego de Sinónimos",
    descripcion: "Colócate en equipo de dos y elige a tu compañero. Un jugador dice una palabra y el compañero debe dar un sinónimo. El primer equipo en fallar enfrenta un reto rojo, y el último en pie gana un reto verde."
  },
  {
    titulo: "Competencia de Emojis",
    descripcion: "Selecciona a tu compañero y forma un equipo de dos. Cada equipo describe una película famosa usando solo emojis. El primer equipo en adivinar de qué película se trata obtiene un reto verde, y los demás reciben un reto rojo."
  }
]

const generarNumeroAleatorio = (list) => {
  const indice = Math.floor(Math.random() * list.length);
  return indice;
};


function App() {
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [backgroundColor, setBackgroundColor] = useState('');
  const [background, setBackground] = useState('/imgs/inn.jpg');
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
    setBackground('/imgs/forest.jpg')
  };

  const handleBadButtonClick = () => {
    let rand = generarNumeroAleatorio(bad)
    setTitle(bad[rand].titulo)
    setText(bad[rand].descripcion)
    setBackgroundColor('red')
    setBackground('/imgs/hell.jpg')
  };

  const handleChallengeButtonClick = () => {
    let rand = generarNumeroAleatorio(challenge)
    setTitle(challenge[rand].titulo)
    setText(challenge[rand].descripcion)
    setBackgroundColor('purple')
    setBackground('/imgs/nether.jpg')
  };

  const handleIntroDisplay = () => {
    setIntro(intro => !intro)
  }

  return (
    <>
      {
        intro
        ?<Toggle clickAction={handleIntroDisplay} textContent={'A Jugar!'}></Toggle>
        :<Toggle clickAction={handleIntroDisplay} textContent={'Volver a instrucciones'}></Toggle>
      }
      {intro
        ? (<div className='game' style={{ backgroundColor, backgroundImage: 'url(/imgs/inn.jpg)', backgroundSize: 'cover' }}>
          <h1>Instrucciones</h1>
          <h3>Insert instructions here</h3>
        </div>)
        : (<div className='game' style={{ backgroundColor, backgroundImage: `url(${background})`, backgroundSize: 'cover'  }}>
          <h1>{title}</h1>
          <h3 className='textDisplay'>{text}</h3>
          <div className='buttonContainer'>
            <button className='textButton' onClick={handleGoodButtonClick}><h3>Verde</h3></button>
            <button className='textButton' onClick={handleBadButtonClick}><h3>Rojo</h3></button>
            <button className='textButton' onClick={handleChallengeButtonClick}><h3>Morado</h3></button>
          </div>
          <div className='counters'>
            <Counter count={count1} setCount={setCount1} label={label1} setLabel={setLabel1}/>
            <Counter count={count2} setCount={setCount2} label={label2} setLabel={setLabel2}/>
            <Counter count={count3} setCount={setCount3} label={label3} setLabel={setLabel3}/>
            <Counter count={count4} setCount={setCount4} label={label4} setLabel={setLabel4}/>
          </div>
        </div>)
      }

    </>
  )
}

export default App