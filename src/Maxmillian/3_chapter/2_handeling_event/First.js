import React from "react";

class First extends React.Component{
    
    switchNameHandler = () => {
        console.log("was Clicked");
    }

    render(){
        return(
            <div>
                <h1>This is First React App</h1>
                <button onClick = {this.switchNameHandler}>Click me</button>
            </div>
        )
    }
}
export default First;