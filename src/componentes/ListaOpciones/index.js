import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // metodo map --> arreglo ( (equipo, index) => {
    //     return <option></option> 
    // })


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selectionar equipo</option>
            {/* key es unica y es para react!, tambien ponemos todo en una sola linea y le quitamos {}! */}
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;