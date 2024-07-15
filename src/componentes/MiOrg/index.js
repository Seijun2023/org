import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {
    // Estado - hooks
    //usesState -- usesState()
    // const [nombreVariable, funcionActualiza] = usesState("valorInicial")
    // const [nombre, actualizarNombre] = useState("Harland")
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true) 
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar) // cambia de true a false!
    //     // actualizarMostrar("hola") // aca cambie de Harland a hola
    // }

    return <section className="orgSection">
        {/* nombre estaba aca abajo! revisar notion! */}
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
    
}

export default MiOrg