import React, { Component } from 'react'
import Output from './Output';

export default class Length extends Component {
    constructor(){
        super();
        this.state={
            length:"Not yet",
            value:"Meter",
            value2:"Meter",
            distances:{
                Meter: 1,
                Centimeter: 100,
                Kilometer:0.001,
                Milimeter:1000,
                Foot:3.2808398950131,
                Yard:1.0936132983377,
                Micron:1000000,
                Nanometer:1000000000,
                LightYear:1.0570008340246E-16,
                Mile:0.00062137119223733,
                Decimeter:10,
                Inch:39.3701,
            },
        
        }
    }

    componentDidMount(){
        this.getDistance();
    }

    handleValueChange=(event)=> {
       
        (async()=>{
            await this.setState({
            value: event.target.value
        })
        

        this.refs.Output.getDistance();

    })();
      }

    handleValueChange2=(event)=> {

        (async()=>{
            await this.setState({
            value2: event.target.value
        })



        this.refs.Output.getDistance();

    })();
      }

    getDistance=()=>{
        
        
            const inputValue=document.getElementById("inputValue")
            const outputValue=document.getElementById("outputValue")
            
            outputValue.value=(this.state.distances[this.state.value2]/this.state.distances[this.state.value]*inputValue.value).toFixed(4);
            
            
            this.refs.Output.getDistance();

    };

    render() {

        return (
                <div class="inputs">
                    <div className="container">
                        <div className="part1">
                            <select value={this.state.value} onChange={this.handleValueChange}>
                                <option value="Meter">Meter</option>
                                <option value="Mile">Mile</option>
                                <option value="Kilometer">Kilometer</option>
                                <option value="Foot">Foot</option>
                                <option value="Inch">Inch</option>
                                <option value="Centimeter">Centimeter</option>
                                <option value="Milimeter">Milimeter</option>
                                <option value="Decimeter">Decimeter</option>
                                <option value="Nanometer">Nanometer</option>
                                <option value="Micron">Micron</option>
                                <option value="Yard">Yard</option>
                                <option value="Light-Year">Light-year</option>
                            </select>
                            <input id="inputValue" type="number"></input>
                            </div>
                        <div className="part2">
                            <select value={this.state.value2} onChange={this.handleValueChange2}>
                                <option value="Meter">Meter</option>
                                <option value="Mile">Mile</option>
                                <option value="Kilometer">Kilometer</option>
                                <option value="Foot">Foot</option>
                                <option value="Inch">Inch</option>
                                <option value="Centimeter">Centimeter</option>
                                <option value="Milimeter">Milimeter</option>
                                <option value="Decimeter">Decimeter</option>
                                <option value="Nanometer">Nanometer</option>
                                <option value="Micron">Micron</option>
                                <option value="Yard">Yard</option>
                                <option value="LightYear">LightYear</option>
                            </select>
                            <input type="text" id="outputValue"></input>
                        </div>  
                        <button onClick={()=>this.getDistance()}>Get Lenght</button>
                        <Output stateDistance={this.state} getDistance={this.getDistance} ref="Output"/>  
                    </div>
            </div>
            
        )
    }
}
