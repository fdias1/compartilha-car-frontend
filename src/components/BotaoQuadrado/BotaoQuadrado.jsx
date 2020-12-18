import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Botão padrão do sistema
 * @param {String} props.label
 * @param {String} props.id
 * @param {Boolean} props.toggle
 * @param {String} props.default
 * @param {React.Component} props.icone
 */
const BotaoQuadrado = (props) => {
    let classe = 'btn-quadrado'

    if (props.labelOnly) {
        classe = 'btn-quadrado label-only'
    }

    return ( 
    <div className="container">
        <div className={classe} id={props.id} onClick={event => {if (props.onClick) props.onClick(event)}}>
            <div className="icon-container">
                <FontAwesomeIcon icon={props.icon} />
            </div>
            {props.label}
        </div>
    </div> );
}

export default BotaoQuadrado;