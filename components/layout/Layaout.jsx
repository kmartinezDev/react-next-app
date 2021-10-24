import { Fragment } from "react";
import Header from "./Header";
import { Global,  css } from "@emotion/react";
import Head from 'next/head'


const Layaout = props => {
    return (
        <Fragment>
            <Global 
                styles={css`
                    :root {
                        --gris: #3d3d3d;
                        --gris2: #6F6F6F;
                        --naranja: #DA552F;
                        --gris3: #e1e1e1;
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *,*:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto Slab', serif;
                        font-weight: 700;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                    }

                `}
            />

            <Head>
                {/* <html lang="es" /> */}
                <title>React/Next</title>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerPolicy="no-referrer" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
                <link href='/app.css' rel="stylesheet" />
            </Head>

            <Header/>
            
            <main>
                {props.children}
            </main>
        </Fragment>
    );
}
 
export default Layaout;