import './App.css';
import InputLogin from "./InputLogin";
import {useState} from "react";
import InputName from "./InputName";
import InputPassword from "./InputPassword";
import InputPassConfirm from "./InputPassConfirm";
function App() {
    const [login,setLogin]=useState("");
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const [passStatus,setPassStatus]=useState("");
    const [arr,setArr]=useState({});
    const handleUpdateLogin=(value)=>{
        setLogin(value);
    }
    const handleUpdateName=(value)=>{
        setName(value);
    }
    const handleUpdatePass=(value)=>{
        setPass(value)
    }
    const handleUpdatePassConfirm=(value)=>{
        setPassStatus(value)
        console.log(passStatus)
    }
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        if(login.length!==0&&name.length!==0&&pass===passStatus){
            let array={login:login,name:name,pass:pass}
            setArr(array);
        }
    }
  return (
    <div className="App">
        <p className="title">Form</p>
        <form onSubmit={handleOnSubmit}>
            <InputLogin value={handleUpdateLogin}/>
            <InputName value={handleUpdateName}/>
            <InputPassword value={handleUpdatePass}/>
            <InputPassConfirm value={handleUpdatePassConfirm} confirm={pass}/>
            <input className="btn" type="submit"/>
        </form>
        <p>{"Login:"+arr.login+" Name:"+arr.name+" Password:"+arr.pass}</p>
    </div>
  );
}

export default App;
