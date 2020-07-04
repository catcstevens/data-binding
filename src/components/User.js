import React from 'react';

const Users = props => {
    function onChangeName(event) {
        props.changeEvent(props.id, event.target.value)
    }
    function onDeleteName() {
        props.deleteEvent(props.id)
    }
    //user function returns all the User specific UI components
    return (
        <div>
            <h3>I am {props.name}</h3>
            <input type='text' onChange={onChangeName} value={props.name} />
            <button onClick={onDeleteName}>Delete</button>
        </div>
    )
}



export default Users;
