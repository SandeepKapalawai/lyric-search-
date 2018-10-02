import React, { Component } from 'react'


class Counter extends Component {
    state={
        count : 0,
        imgURL : "https://goo.gl/images/oHxv8d",
        tags: ['tag1', 'tag2', 'tag3']
        
    };

   
    render() { 

        
        return (
        <React.Fragment>
            <span  className={this.badgeMethod()}> {this.formatCount()}</span>
            <button className="badge btn-secondary btn-sm" >Increment</button>
            <img src={this.state.imgURL} />
        </React.Fragment>
        );
    }

    badgeMethod() {
        let classes = "badge badge-primary m-2";
        classes += this.state.count === 0 ? "warning " : "primary";
        return classes;
    }

    formatCount(){
        const{
            count} = this.state;
        
        return count === 0 ? <h1>Zero</h1> : count;
    <ul>
        {this.state.tags.map(tag => <li>{tag} </li>)}
    </ul>

    }
}
 
export default Counter ;