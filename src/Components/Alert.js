import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const c=word.toLowerCase();
        return c.charAt(0).toUpperCase()+c.slice(1);
        
    }
    return (
        <div style={{height:'50px'}}>
        {props.mode && <div className={`alert alert-${props.mode.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.mode.typ)}</strong>:  {props.mode.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        </div>
    )
}

export default Alert