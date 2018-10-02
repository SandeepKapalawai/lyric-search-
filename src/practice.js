import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class App extends React{
    state={
        persons: 
        [
            {name:'Sandeep', age: 23},
            {name:'d', age: 24},
            {name:'d', age: 25},
        ],
        otherState:'xyz'
    }
}

switchHandler=(newName)=>{
   this.setState(
       {
        persons: 
        [
            {name:newName, age: 23},
            {name:'d', age: 24},
            {name:'d', age: 25},
        ]
       }
   )
}

nameChangeHandler=(event)=>{
    this.setState(
        {
         persons: 
         [
             {name:'Sandeep', age: 23},
             {name:event.target.value, age: 24},
             {name:'d', age: 25},
         ]
        }
    )
}
render(){
    <button name="press" onClick={()=>this.switchHandler("Sannnnnn")}> ddd </button>
    return(
        <Person name={this.state.name[0]} age={this.state.age[0]} />
        <Person name={this.state.name[1]} age={this.state.age[1]} 
        click={this.switchHandler.bind(this,"Max")} changed={this.nameChangeHandler}/>
        <Person name={this.state.name[2]} age={this.state.age[2]} />
    )
}

export default App;