import Person from "./Person"
import Wrapper from "./Wrapper"

function MyFirstComponent(props){

    // let content = <div>
    //     <h1>This is from MyFirstComponent</h1>
    //     <h2>This is h2</h2>
    // </div>

    return (
        <Wrapper>
            <h1>{props.myTitle}</h1>
            <h2>This is h2</h2>
            <h3>One + Two = {1 + 2}</h3>
            <p>{Math.random()}</p>
            <Person person={props.person}/>
        </Wrapper>
    )
}

export default MyFirstComponent
