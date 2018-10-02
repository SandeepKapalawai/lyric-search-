import React, { Component } from 'react'


const Person =(props)=>{
 return(
    <div>
         <p> I am Person {props.name} with {props.age}</p>
        <input type ="text" onChanged={props.change} value={props.name} />
    </div>
    )
 };


