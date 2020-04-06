import React from "react";
import Link from "next/link";

const indexPage = () => (
  <div>
    <h1>Oops, Something Went Wrong!</h1>
    <p>try,<Link href="/">goto back</Link></p>
  </div>
)

export default indexPage;
