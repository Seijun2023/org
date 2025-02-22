import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    // const [valor, actualizarValor] = useState("")
    // console.log("Datos: ", props)
    const placeholderModificado = `${props.placeholder}...`

    //destrucuracion
    const { type="text" } = props

    // console.log(type)

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
            {/* antes se ponia required despudes de place, pero que pasa si no queremos que todos los campos sean requiridos? */}
    </div>
}

export default Campo