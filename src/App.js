import React, { Component } from 'react';
import Task from './Task';
import Footer from './Footer';
import Topo from './Topo';
import Titulo from './Titulo';


class App extends Component {
    render() {

        return (
            <div>
                <Topo/>
                <Titulo/>
                <Task/>
                <Footer/>
               
               
            </div>
            
        )

    }


}


export default App;


