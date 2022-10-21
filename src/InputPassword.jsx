import {useState} from "react";

const InputPassword=(props)=>{
    const [value,setValue]=useState("");
    const [error,setError]=useState("");
    const [type,setType]=useState("password");
    const [valueBtn,setValueBtn]=useState("Show")
    const handleOnChange=(event)=>{
        setValue(event.target.value);
        props.value(event.target.value)
        if(event.target.value.length===0){
            setError("This field cannot be left blank!");
        }else if(/[^a-zA-Z0-9-_&*#]/.test(event.target.value)){
            setError("The login must contain only Latin letters, numbers and symbols: _ - & * #")
        }else if(event.target.value.length>0&&event.target.value.length<=7){
            setError("\n" +
                "You must enter at least 8 characters!")
        }else{
            setError("")
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
export default InputPassword;