import React from "react";
import Router from "next/router";

const authIndex = (props) => (
    <div>
        <h1>Auth Index Page! {props.appName}</h1>
        <button onClick={( )=> Router.push("/")}>Goto Main Page</button>
    </div>
)

authIndex.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ appName: "Super App (Auth)"})
        }, 1000)
    })
    return promise
}

export default authIndex;
