import React from "react"
import './Button.css'



const botao = (props) => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (

        <button 
            onClick={e => props.click && props.click(props.label)} /*pega o conteudo do botao e apresenta */ 
            className={classes}>
            {props.label}
        </button>
    )

}

export default botao