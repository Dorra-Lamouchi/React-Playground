import React from 'react'

const person = (props) => {
    return (
        <div>
            <h1> I'm {props.name}, my age {props.age} </h1>
            <p> {props.children} </p>
        </div>
    )
}

export default person
