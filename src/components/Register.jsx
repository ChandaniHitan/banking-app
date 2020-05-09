import React from 'react'

function Register(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <input
                name= {props.name}
                type={props.utype}
                value={props.value}
                placeholder={props.nameplaceholder}
                onChange={props.onChange}
                />
            
            <input
                name={props.pname}
                value={props.pvalue}
                type={props.ptype}
                placeholder={props.passplaceholder}
                onChange= {props.onChange}
                />
            
            <input
            name={props.cname}
            value={props.cvalue}
            type={props.ctype}
            placeholder={props.depositplaceholder}
            onChange= {props.onChange}
            />
            
            <button
                type={props.btype}
                name={props.sbuttonname}
                class={props.greenbclass} 
                value={props.svalue}
                onClick={props.onSClick}>Save and Login</button>

            <button
                type={props.btype}
                name={props.bButtonname}
                value={props.bvalue}
                class={props.redbclass}
                onClick={props.onBClick}>Back</button>
        </div>
    )
}

export default Register;