import React,{useCallback, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";


function App(){

    const[password,setPassword]=useState();
    const[length,setLength]=useState(10);
    const[numberChanged,setnumberChanged]=useState(false);
    const[charChanged,setcharChanged]=useState(false);

    const generatePass=useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged){
            str+="0123456789"
        };

        if(charChanged){
            str+="!@#$%^&*()_-+=<>";
        }

        let pass="";
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);
    },[length,numberChanged,charChanged])

    // function generatePass(){
    //     let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //     if(numberChanged){
    //         str+="0123456789"
    //     };

    //     if(charChanged){
    //         str+="!@#$%^&*()_-+=<>";
    //     }

    //     let pass="";
    //     for(let i=0;i<length;i++){
    //         pass+=str[Math.floor(Math.random()*str.length)]
    //     }
    //     setPassword(pass);
    // }
    
    useEffect(()=>{
        generatePass()
    },[length,numberChanged,charChanged])
    return(
        <>
        <h1>Password is : {password} </h1>
        <div>
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is: {length}</label>

            <input type="checkbox" defaultChecked={numberChanged} onChange={(e)=>setnumberChanged(!numberChanged)}></input>
            <label>Include Number</label>

            <input type="checkbox" defaultChecked={charChanged} onChange={(e)=>setcharChanged(!charChanged)}></input>
            <label>Include Special Character</label>
        </div>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)