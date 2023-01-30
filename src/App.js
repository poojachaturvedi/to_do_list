import React from 'react'
// import UseCounter from './custom-hooks/UseCounter'
import { useState } from "react";
import useList from './custom-hooks/useList';
import styles from './App.module.css'

// import Like from './Components/Like';

export default function App() {
  // const {count,increment,decrement}=UseCounter()
  const {list,push,pull}=useList()
  const[todo,settodo]=useState("")
  const onsubmithandler=(event)=>{
    event.preventDefault();
    push(todo)
    settodo("")
  }
  return (
    <div className={styles.body}>
      {/* {count}
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <Like/> */}
      <div>
        <h1 className={styles.heading}>To DO LIST</h1>
        <header>
          <form onSubmit={(event)=>{onsubmithandler(event)}}>
            <label>Add Todo Item</label>
            <input type="text" onChange={(e)=>{settodo(e.target.value)}} value={todo} />
            <button type="submit">Submit</button>
          </form>
          <h5 className={styles.task}>
          {
          list.map((listItem,listIndex)=>{
            return(<>
            <li key={listIndex}>{listItem}</li>
            <button onClick={()=>{pull(listIndex)}}>Remove Index</button>
            </>
            ) 

          })}
          </h5>
        </header>
      </div>
    </div>

  )
}
