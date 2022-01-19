import Head from "next/head";
import { Fragment } from "react";
import Footer from './../Footer/Footer'
import Header from './../Header/Header'



const Layout = props => {
    return (
        <Fragment>
            <Head>
            <title>NuweAbout</title>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <link href ="/static/css/app.css" rel ="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;300;600;900&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            
            <main>{props.children}</main>
            <Footer/>
        </Fragment>
      );
}
 
export default Layout;