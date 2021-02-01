import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear el Context
export const Categorias = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear el state
    const [ categorias, guardarCategorias ] = useState([]);

    //Ejecutar el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const urlCateg = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

            const categorias = await axios(urlCateg);

            guardarCategorias(categorias.data.drinks);
        }

        obtenerCategorias();

    }, []);

    return (
        <Categorias.Provider
            value={{

                categorias
            }}
        >
            {props.children}
        </Categorias.Provider>
    );

}

export default CategoriasProvider;
