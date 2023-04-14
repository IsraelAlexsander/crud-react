import React, { Fragment } from "react";
import './Main.css'
import './Header.css'
import Header from "./Header";

export default props =>
    <Fragment>
        <Header {...props}/>
        <main className="content">
            Conteudo            
        </main>
    </Fragment>