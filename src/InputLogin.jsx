import {useState} from "react";

const InputLogin=(props)=>{
    const [value,setValue]=useState("");
    const [error,setError]=useState("")
    const handleOnChange=(event)=>{
        setValue(event.target.value)
        props.value("");
        if(event.target.value.length===0){
            setError("This field cannot be left blank!")
        }else if(/[^a-z0-9_-]/.test(event.target.value)){
            setError("The login must contain only Latin letters, numbers and symbols _ -")
        }else if(event.target.value.length>0&&event.target.value.length<=2){
            setError("\n" +
                "You must enter at least 4 characters!")
        }else{
            setError("");
            props.value(event.target.value);
        }
    }
    return(<div>
        <p className="warning">{error}</p>
        <input className="input" type="text" value={value} onChange={handleOnChange} placeholder="Enter a new login"/>
    </div>)
}
export default InputLogin;