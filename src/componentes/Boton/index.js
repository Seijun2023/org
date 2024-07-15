import "./Boton.css"

const Boton = (props) => {
    // en vez de usar texto se usa el hijo porque es como html!
    return <button className="boton">{props.children}</button>
}

export default Boton