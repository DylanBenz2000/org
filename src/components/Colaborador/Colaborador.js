import './Colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart,FaRegHeart } from "react-icons/fa";


const Colaborador = (props) =>{

    const {nombre,puesto,foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return(
        <div className="colaborador">
            {/* Al colocar la arrow function, evitas que al ponerle los parentesis a la función eliminarColaborador, esta se ejecuta cada ves que se renderice la página o el componente, con el arrow function entonces cuando hagamos clic en el icono de eliminar solamente se ejecutará la funcion eliminarColaborador() cuando se haga click en el icono */}
            <IoIosCloseCircle onClick={ () => eliminarColaborador(id) } className='eliminar'/>
            <div className='encabezado' style={{backgroundColor:colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
 
                {fav === true ? <FaHeart color='red' onClick={ () => like(id) }/> : <FaRegHeart onClick={ () => like(id) }/> }
                
               
            </div>
        </div>
    )

}

export default Colaborador