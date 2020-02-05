import React from 'react';

function NuevoHoby( props ){

    function click(event){
        event.preventDefault();
        let nuevoHoby = {
            nombre : event.target.nuevo.value 
        };
        props.agregaHoby( nuevoHoby );
    }

    return (
        <form onSubmit={(event) => click(event)} id="hobyForm">
            <label htmlFor="hobyNuevo"> Nuevo hobby : </label>
            <input name="nuevo" type="text" id="hobyNuevo" />
            <button type="submit">
                Agregar
            </button>
        </form>
    )
}

export default NuevoHoby;