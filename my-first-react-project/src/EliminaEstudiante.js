import React from 'react';

function DeleteEstudiante( props ){

    function click(event){
        event.preventDefault();
        let deleteEstudiante = {
            matricula : event.target.value 
        };
        props.eliminaEstudiante( deleteEstudiante );
    }

    return (
        <form onSubmit={(event) => click(event)} id="estudianteForm">
            <label htmlFor="estudianteDelete"> matricula : </label>
            <input name="matricula" type="text" id="estudianteDelete" />
            <button type="submit">
                Eliminar
            </button>
        </form>
    )

}
export default DeleteEstudiante;