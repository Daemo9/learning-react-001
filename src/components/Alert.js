import React from 'react'

function Alert(props) {
    const upperCase = (word)=>{
        const lower =  word;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
    {props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
        <strong> {upperCase(props.alertMessage.type)}!!</strong> {props.alertMessage.msg}
    </div>}
    </div>
  )
}

export default Alert
