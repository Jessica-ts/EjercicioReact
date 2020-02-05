import React from 'react';

function Students( props ) {
    return (<div>
        {props.lista.map( (student, index) => {
            return (
                <div>
                    <h2> {student.nombre} </h2>
                    <p> {student.matricula} </p>
                </div>
            )   
        })}
    </div>)
}

export default Students;