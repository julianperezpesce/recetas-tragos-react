import React, { useContext, useState } from 'react';
import { Categorias } from '../context/Categorias';
import { RecetasContext } from '../context/RecetasContext';
import PropTypes from 'prop-types';


const Formulario = () => {


    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''        
    });

    const { categorias } = useContext(Categorias);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);


    // Funcion para leer los inputs
    const obtenerDatosRecetas = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Buscar Cocteles</legend>
            </fieldset>

            <div className="row mt-5">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        name="nombre"
                        className="form-control" 
                        placeholder="Buscar por ingredientes"   
                        onChange={obtenerDatosRecetas}
                    />
                </div>
            

                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        className="form-control"
                        onChange={obtenerDatosRecetas}
                    >
                        <option value="">Seleccionar categoria</option>
                        { categorias.map(categoria => (
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            
                            </option>
                        ))}
                    </select>                
                </div>

                <div className="col-md-4">
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Buscar"
                        />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;