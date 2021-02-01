import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ModalContext = createContext();


const ModalProvider = (props) => {


    //State del Provider
    const [ idReceta, setIdReceta ] = useState(null);
    const [ recetaElegida, setRecetaElegida ] = useState({});


    //Una vez que tenemos una receta, llamamos a la API
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const resultado = await axios.get(url);

            setRecetaElegida(resultado.data.drinks[0]);

        }

        obtenerReceta();

    }, [ idReceta ])

    return ( 
        <ModalContext.Provider
            value={{
                recetaElegida,
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;