import './Equipo.css'
import Colaborador from '../Colaborador/Colaborador.js'
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) =>{

    //Destructuración
    const {colorPrimario, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario}
    // const estiloEquipo = { backgroundColor: colorSecundario}

    return ( 
    <>
        { 
        //se utiliza para verificar si hay algún elemento en el array colaboradores y, si es así, se renderiza el componente section con la lista de colaboradores.
            colaboradores.length > 0 &&  
            <section className="equipo" style={obj}>
                <input 
                    type="color"
                    className='input-color'
                    value={colorPrimario}
                    onChange={(event) => (actualizarColor(event.target.value, id))}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador} 
                            like={like}
                        />
                        )
                    }
                </div>
            </section>
        }
    </>

    )
}

export default Equipo