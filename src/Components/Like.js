import React from "react";
import UseCounter from "../custom-hooks/UseCounter";

export default function Like() {
    const {count,increment}=UseCounter()
  return (
    <div>
        <button onClick={increment}>Like:{count}</button>
    </div>
  )
}
