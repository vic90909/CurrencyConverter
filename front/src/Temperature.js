import React, { Component } from 'react'
import Output from './Output';

export default class Length extends Component {
    constructor(){
        super();
        this.state={
            length:"Not yet",
            value:"Celsius",
            value2:"Celsius",
            output:0
        
        }
    }
    
    handleValueChange=(event)=> {
       
        console.log(event.target.value)
        this.setState({
            value: event.target.value
        });
      }

    handleValueChange2=(event)=> {

        console.log(event.target.value)
        this.setState({
            value2: event.target.value
        });
      }

    getTemp=()=>{
        
        
            const inputValue=document.getElementById("inputValue")
            const outputValue=document.getElementById("outputValue")
                console.log(this.state.value2+this.state.value);
            
                if(this.state.value.toString()==="Celsius"&&this.state.value2.toString()==="Fahrenheit")
                    outputValue.value=(inputValue.value*9/5)+32;
                else
                    if(this.state.value2.toString()==="Celsius"&&this.state.value.toString()==="Fahrenheit")
                        outputValue.value=(inputValue.value-32)*5/9;
                    else
                        if(this.state.value.toString()==="Celsius"&&this.state.value2.toString()==="Kelvin")
                            outputValue.value=(parseFloat(inputValue.value)+parseFloat(273.15))
                        else  
                            if(this.state.value.toString()==="Kelvin"&&this.state.value2.toString()==="Celsius")
                                outputValue.value=parseFloat(inputValue.value)-parseFloat(273.15)
                                else  
                                    if(this.state.value.toString()==="Kelvin"&&this.state.value2.toString()==="Fahrenheit")
                                        outputValue.value=(inputValue.value-273.15)*9/5+32
                                    else
                                        if(this.state.value.toString()===this.state.value2.toString())
                                            outputValue.value=inputValue.value;
                                                else
                                                    outputValue.value=(inputValue.value-32)*5/9+273.15;
    
                    
                (async ()=>{
                    await this.setState({
                        output:outputValue.value

                    
                })
                this.refs.Output.getTemp();
            })();     
       
            
            
            

    };

    render() {

        return (
                <div class="inputs">
                    <div className="container">
                        <div className="part1">
                            <select value={this.state.value} onChange={this.handleValueChange}>
                                <option value="Celsius">Celsius</option>
                                <option value="Kelvin">Kelvin</option>
                                <option value="Fahrenheit">Fahrenheit</option>
                            </select>
                            <input id="inputValue" type="number"></input>
                            </div>
                        <div className="part2">
                            <select value={this.state.value2} onChange={this.handleValueChange2}>
                                <option value="Celsius">Celsius</option>
                                <option value="Kelvin">Kelvin</option>
                                <option value="Fahrenheit">Fahrenheit</option>
                            </select>
                            <input type="text" id="outputValue"></input>
                        </div>  
                        <button onClick={()=>this.getTemp()}>Get Temperature</button>
                        <Output stateTemp={this.state} getTemp={this.getTemp} ref="Output"/>  
                    </div>
            </div>
            
        )
    }
}
