import { useState } from 'react';
import './Formulario.css'
import Campo from '../Campo/Campo.js';
import ListaOpciones from '../ListaOpciones/ListaOpciones.js';
import Boton from '../Boton/Boton.js';

const Formulario = (props) =>{
    // Estados Formulario Colaborador
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    // Estados Formulario Equipo
    const [titulo, actulizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    // Destructuración
    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) =>{
        event.preventDefault();
        // console.log("Formulario enviado");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (event) =>{
        event.preventDefault();
        crearEquipo({titulo: titulo, colorPrimario: color})
    }

    return(
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required={true} 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
                />

                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresa el puesto" 
                    required 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />

                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar la URL de la foto" 
                    required 
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />

                <ListaOpciones 
                    valor={equipo} 
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                
                <Boton>Crear</Boton>

            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar titulo" 
                    required={true} 
                    valor={titulo} 
                    actualizarValor={actulizarTitulo}
                />

                <Campo 
                    titulo="Color" 
                    placeholder="Ingresa el color en Hex" 
                    required 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
                />

                <Boton>Registrar Equipo</Boton>

                </form>

        </section>
    )
}

export default Formulario;