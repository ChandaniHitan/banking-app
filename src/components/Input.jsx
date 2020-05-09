import React from 'react'

function Input(props) {

    
    return (
        <div>
            <h3>{props.title}</h3>
            <input 
            type={props.utype} 
            onChange={props.onChange} 
            placeholder={props.userplaceholder}
            name={props.name}
            value={props.value} />
            
            <input 
            type={props.ptype} 
            onChange={props.onChange}
            name={props.pname}
            placeholder={props.passplaceholder}
            value={props.pvalue} />
            
            <button 
            type={props.btype}
            class={props.bluebclass}
            name={props.rButtonname}
            value= {props.rvalue}
            onClick={props.onRClick}>Register</button>
            
            <button
            type={props.btype}
            class={props.greenbclass}
            name={props.lButtonname}
            value={props.lvalue}
            onClick={props.onLClick}>Login</button>
        </div>
    )
}

export default Input;