import React, { Fragment, useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';


const Receta = ({ receta }) => {

    //State del Modal
    const [ showModal, setShowModal ] = useState(false);

    //Context extraccion de ModalContext
    const { recetaElegida, setIdReceta } = useContext(ModalContext);

    //Destruction
    const { idDrink, strDrink, strDrinkThumb} = receta;


    //Modal func show & close modal
    const openModal = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return ( 
        <Fragment>
            <div className="col-md-4 mb-3">
                <div className="card">
                    <img src={strDrinkThumb} alt={strDrink} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{strDrink}</h5>
                        <button 
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={() => {
                            setIdReceta(idDrink) 
                            openModal();
                            }}
                            
                        >Ver</button>
                    </div>               
                </div>
            </div>
        </Fragment>
        
        
     );
}
 
export default Receta;