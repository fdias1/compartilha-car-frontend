import './style.css'

/**
 * Botão padrão do sistema
 * @param {String} props.label
 * @param {String} props.id
 * @param {Boolean} props.toggle
 * @param {String} props.default
 */
const BotaoPadrao = (props) => {
    let classe = 'btn-padrao'

    if (props.toggle)  {
        classe += ' ' + props.default || ' disabled'
    }

    if (props.labelOnly) {
        classe = 'btn-padrao label-only'
    }

    return ( 
    <div className="container">
        <div className={classe} id={props.id} onClick={event => {if (props.onClick) props.onClick(event)}}>
            {props.label}
        </div>
    </div> );
}

export default BotaoPadrao;