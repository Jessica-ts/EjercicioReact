import React from 'react';

function DeleteStudents( props ) {
    return (<div>
        {props.lista.splice( (index, student) => { 
        })}
    </div>)
}

export default DeleteStudents;