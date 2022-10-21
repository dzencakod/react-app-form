import {useState} from "react";

const InputName=(props)=>{
    const [value,setValue]=useState("");
    const [error,setError]=useState("");
    const handleOnChange=(event)=>{
        setValue(event.target.value);
        props.value("")
        if(event.target.value.length===0){
            setError("This field cannot be left blank!");
        }else if(/[^a-zA-Z]/.test(event.target.value)){
            setError("The login must contain only Latin letters!")
        }else{
            setError("")
            props.value(event.target.value)
        }
    }
    return (<div>
        <p className="warning">{error}</p>
        <input className="input" type="text" value={value} onChange={handleOnChange} placeholder="Enter your name"/>
    </div>)
}
export default InputName;