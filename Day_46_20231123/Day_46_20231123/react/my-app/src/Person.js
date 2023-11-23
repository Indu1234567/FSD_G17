import { useState } from "react"
import Wrapper from "./Wrapper"

function Person(props){

    const [title, setTitle] = useState('Initial Title')

    function clickHandler(){
        console.log(props.person.name)
        setTitle('Title is changed')
    }

    let divisible = props.person.age % 3 == 0
    let status = ''
    if(divisible){
        status = 'Age is divisible by 3'
    } else{
        status = 'Age is not divisible by 3'
    }
    return(
        <>
            <h3>{title}</h3>
            <p><strong>Name: </strong>{props.person.name}</p>
            <p><strong>Age: </strong>{props.person.age}</p>
            <p><strong>Status: </strong>{status}</p>
            <button onClick={clickHandler}>Click here</button>
        </>
    )
}

export default Person
