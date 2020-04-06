import React from "react";
import Link from "next/link";
import User from "../components/User";

class IndexPage extends React.Component {
  static getInitialProps(context) {
    console.log(context)
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App"})
      }, 1000)
    })
    return promise
  }
  render() {
    return (
      <div>
        <h1>Main Index Page! {this.props.appName}</h1>
        <p>Go to <Link href={{ pathname: '/auth' }}><a title="Auth">Auth</a></Link></p>
        <User name="Anmol" age={24} />
      </div>
    )
  }
}

export default IndexPage;
