import React ,{ Component} from "react";
import './test.component.style.css';

export class Test extends Component{
    constructor(){
        super()
        console.log('hi Myself Tets Component constructor');

    }
   
    render(){

        console.log('Test App Render');
        
        return (
            <div className="test">
            <h1> hiiii</h1>

            <button> click me Here </button>

            </div>
        )
    }




}