import './style.css'

const MenuHome = (props) => {
    return ( 
        <div className="container">
            <h2 className="menu-title">{props.titulo}</h2>
            <div className="menu-container">
                {props.children}
            </div>
        </div>
     );
}
 
export default MenuHome;
