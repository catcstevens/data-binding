import React from 'react';

const userStyles = {
    color: 'blue',
    fontSize: '25px'
}

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
            <h3 style={userStyles}> I am {props.name}</h3>
            <input syle={userStyles} type='text' onChange={onChangeName} value={props.name} />
            <button style={userStyles} onClick={onDeleteName}>Delete</button>
        </div>
    )
}



export default Users;
