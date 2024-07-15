// import logo from './logo.svg'; // ya no se esta usando!
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header'; 
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  // let suma = 3 + 8 --> variable y luego abajo {suma} y sale en la web y consola!!
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/genesysrm.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  { id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])  // siempre incluso cuando se recarge, va a estar ahi!
  // [] --> es arreglo vacio!

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },

    { 
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    { 
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    { 
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    { 
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  
  ])

  // console.log(uuid())

  // ternario --> condicion ? Se muestra : NoSeMuestra
  // ? --> si es verdadero --> variable, si no --> : variable
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // spread operator
    actualizarColaboradores([...colaboradores, colaborador]) // ... --> copia el anterior!! esto es para que copie y agrege nuevos datos!
  }

  // eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    console.log(nuevosColaboradores)
  }

  //actualizar color equipo
  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id == id){
        equipo.colorPrimario = color
      }
      return equipo
    }) 

    actualizarEquipos(equiposActualizados)
  }

  // crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }
  

  // Lista de equipos
//   const equipos = [

//     {
//       titulo: "Programacion",
//       colorPrimario: "#57C278 ",
//       colorSecundario: "#D9F7E9"
//     },

//     {
//       titulo: "Front End",
//       colorPrimario: "#82CFFA",
//       colorSecundario: "#E8F8FF"
//     },

//     {
//       titulo: "Data Science",
//       colorPrimario: "#A6D157",
//       colorSecundario: "#F0F8E2"
//     },

//     {
//       titulo: "Devops",
//       colorPrimario: "#E06B69",
//       colorSecundario: "#FDE7E8"
//     },

//     {
//       titulo: "UX y Diseño",
//       colorPrimario: "#DB6EBF",
//       colorSecundario: "#FAE9F5"
//     },

//     {
//       titulo: "Movil",
//       colorPrimario: "#FFBA05",
//       colorSecundario: "#FFF5D9"
//     },

//     {
//       titulo: "Innovacion y Gestion",
//       colorPrimario: "#FF8A29",
//       colorSecundario: "#FFEEDF"
//     }

// ]

  return (
    
    <div>
      {/* <div className="App"> --> ya no se usa en el codigo!
      los tres añaden la imagen a la web! */}
      {/* {Header()} 
      <Header></Header> */}
      <Header/>
      {/* estos tres son lo mismo!! */}
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
      }


      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
          // console.log("Equipo: ", equipo)
      }

      <Footer/>

      {/* Lo borramos!! lo que esta abajo! */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
