import React, {Component} from 'react';
import './Home.css'
import Navbar from "./Navbar";

class Home extends Component{

    render(){
        return(
            <div className={'Home'}>
                <Navbar/>
                Home
            </div>
        )
    }
}

export default Home;