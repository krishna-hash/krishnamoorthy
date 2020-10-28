import React,{useState} from 'react'
import axios from "axios"
import "./App.css"
import Header from "./Header"
import {Button} from "@material-ui/core"
import Content from "./Content"
import Main from "./Maincontent"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  const[data,setdata]=useState([])


  const post=async(e)=>{
    e.preventDefault()
   await axios.get("https://jsonplaceholder.typicode.com/posts ").then(res=>(res.data)).then((data) => {
    console.log(data);
    const values = data.map((dataa) => ({
      id: dataa.id,
      userId:dataa.userId,
      title:dataa.title,
      body:dataa.body
    }));
    setdata(values);
    
  });
    }

    console.log(">>>>>>>>>>>",data)
    const delet=()=>{
      if(data){
        setdata([""])
        
      
      }

    }
  return (
    <Router>
  <div className="app">
  <Header/>
    <Switch>
   
     <Route path="/data">
     <div className="app_content">
      
      <Button  onClick={post}  style={{backgroundColor:"green"}}>List the Post</Button>
      <Button  onClick={delet} style={{backgroundColor:"red"}}>Clear</Button>
          </div>
    
    <div className="app_value">
      
    {
      data.map((datas)=>(
      
        <Content title={datas.title} key={datas.id} id={datas.id} userId={datas.userId} body={datas.body}></Content>
      
      ))
    }
    </div>
    
     </Route>
     
     <Route path="/main">
       
        <Main title={data.title} key={data.id} id={data.id} userId={data.userId} body={data.body} />
      
       
       
     </Route>
    
   
                
               </Switch>
    </div>
    </Router>
  
  )
}

export default App
