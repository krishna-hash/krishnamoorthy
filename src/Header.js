import { Button } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import {increment,decrement,INC,DEC,TITLE,BODY,ID,USERID} from "./features/counter/counterSlice"
import {useSelector,useDispatch} from "react-redux"


function Header() {
    const dispatch=useDispatch()
    const stateinc=useSelector(INC)
    const statedec=useSelector(DEC)
    const stateid=useSelector(ID)
    return (
        <div className="header">
            
            API Posts
            <div className="butt">
            <Link to="/data"    onClick={()=>{
                dispatch(increment({
                    inc: 0
                }))
                dispatch(decrement({
                    dec:0
                }))
            }} style={{textDecoration:"none"}}> <Button  style={{width:"100px",backgroundColor:"lightblue"}} > <span style={{marginTop:"6px"}}>GO</span></Button></Link>
            <Link to="/data"   onClick={()=>{
                dispatch(increment({
                    inc: 0
                }))
                dispatch(decrement({
                    dec:0
                }))
            }} style={{textDecoration:"none"}}> <Button  style={{width:"100px",backgroundColor:"lightgreen"}} > <span style={{marginTop:"6px"}}>BACK</span></Button></Link>
           <Link to="/" style={{textDecoration:"none"}}> <Button  style={{width:"100px",backgroundColor:"lightpink"}} > <span style={{marginTop:"6px"}}>HOME</span></Button></Link>
            </div>
          
        </div>
    )
}

export default Header