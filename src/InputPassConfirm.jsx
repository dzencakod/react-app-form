import {useState} from "react";

const InputPassConfirm=(props)=>{
    const [value,setValue]=useState("");
    const [error,setError]=useState("");
    const [type,setType]=useState("password");
    const [valueBtn,setValueBtn]=useState("Show")
    const handleOnChange=(event)=>{
        setValue(event.target.value);
        props.value("")
        if(event.target.value.length===0){
            setError("This field cannot be left blank!");
        }else if(props.confirm!==event.target.value){
            setError("Passwords do not match!")
        }else{
            setError("")
            props.value(event.target.value);
        }
    }
    const handleOnClick=(event)=>{
        event.preventDefault();
        if(type==="password"){
            setType("text");
            setValueBtn("Hide")
        }else{
            setType("password");
            setValueBtn("Show")
        }
    }
    return (<div>
        <p className="warning">{error}</p>
        <input className="input" type={type} value={value} onChange={handleOnChange} placeholder="Enter a new password"/>
        <button onClick={handleOnClick} className="btn-pass">{valueBtn}</button>
    </div>)
}
export default InputPassConfirm;
