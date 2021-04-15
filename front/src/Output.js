import React, { Component } from 'react'
import Currency from "./Currency"

export default class Output extends Component {

    getRon=()=>{
        let h1=document.getElementById("h1");
        
        h1.innerText="1 " + this.props.state.value +" = " + (this.props.state.rates[this.props.state.value2]/this.props.state.rates[this.props.state.value]).toFixed(4)+" "+this.props.state.value2
    }

    getDistance(){
        let h1=document.getElementById("h1");
        
        h1.innerText="1 " + this.props.stateDistance.value +" = " + (this.props.stateDistance.distances[this.props.stateDistance.value2]/this.props.stateDistance.distances[this.props.stateDistance.value]).toFixed(4)+" "+this.props.stateDistance.value2
    
    }

    getWeight(){
        let h1=document.getElementById("h1");
        
        h1.innerText="1 " + this.props.stateWeight.value +" = " + (this.props.stateWeight.weights[this.props.stateWeight.value2]/this.props.stateWeight.weights[this.props.stateWeight.value]).toFixed(4)+" "+this.props.stateWeight.value2;
    
    }

    getTemp=()=>{
        // let h1=document.getElementById("h1");
        
        // h1.innerText="Temperature: " + this.props.stateTemp.output;
    
    }
    
    render() {
        return (
            <div>
                <h3 id="h1"></h3>
            </div>
        )
    }
}
