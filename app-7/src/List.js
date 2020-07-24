import React from 'react';

function List(props) {
    return(
        <div>
            {props.taskList.map((e) => {
                return <h2>{e}</h2>
            } )}
        </div>
    )
}

export default List