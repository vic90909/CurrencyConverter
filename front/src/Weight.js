import React, { Component } from 'react'
import Output from './Output';

export default class Length extends Component {
    constructor(){
        super();
        this.state={
            length:"Not yet",
            value:"Kilogram",
            value2:"Kilogram",
            weights:{
                Kilogram:1,
                Gram:1000,
                Pound:2.20462,
                Ounce:35.274,
                Tonne:0.001
            },
        
        }
    }

    componentDidMount(){
        this.getWeight();
    }

    handleValueChange=(event)=> {
       
        (async()=>{
            await this.setState({
            value: event.target.value
        })

        this.refs.Output.getWeight();

    })();
      }

    handleValueChange2=(event)=> {

        (async()=>{
            await this.setState({
            value: event.target.value
        })

        this.refs.Output.getWeight();

    })();
      }

    getWeight=()=>{
        
        
            const inputValue=document.getElementById("inputValue")
            const outputValue=document.getElementById("outputValue")
            
            outputValue.value=(this.state.weights[this.state.value2]/this.state.weights[this.state.value]*inputValue.value).toFixed(4);
            
            
            this.refs.Output.getWeight();

    };

    render() {

        return (
                <div class="inputs">
                    <div className="container">
                        <div className="part1">
                            <select value={this.state.value} onChange={this.handleValueChange}>
                                <option value="Kilogram">Kilogram</option>
                                <option value="Gram">Gram</option>
                                <option value="Pound">Pound</option>
                                <option value="Ounce">Ounce</option>
                                <option value="Tonne">Tonne</option>
                            </select>
                            <input id="inputValue" type="number"></input>
                            </div>
                        <div className="part2">
                            <select value={this.state.value2} onChange={this.handleValueChange2}>
                                <option value="Kilogram">Kilogram</option>
                                <option value="Gram">Gram</option>
                                <option value="Pound">Pound</option>
                                <option value="Ounce">Ounce</option>
                                <option value="Tonne">Tonne</option>
                            </select>
                            <input type="text" id="outputValue"></input>
                        </div>  
                        <button onClick={()=>this.getWeight()}>Get Weight</button>
                        <Output stateWeight={this.state} getWeight={this.getWeight} ref="Output"/>  
                    </div>
            </div>
            
        )
    }
}
