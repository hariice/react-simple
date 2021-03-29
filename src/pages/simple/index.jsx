import React, { useState, useEffect } from "react";

import "./simple.scss";
import ProgressBar from "@ramonak/react-progress-bar"
import { BrowserRouter } from "react-router-dom";

const Simple = () => {
    const [text, setText] = useState("jigdw")
    const [change, setChange] = useState("show")
    const [bulb, setBulb] = useState(false)
    const [values, setValues] = useState("1")
    const [count, setCount] = useState(0)

    // const changeCount = ()=>{
    //     if(count ==={
    //         setCount(count+1)
    //     })
    // }

    const buttonchange = () => {
        if (change === "show") {
            setChange("hide")
        }
        else {
            setChange("show")
        }
    }


    return (
        <>
            <button className="btn" onClick={() => setCount(count + 1)}>+</button>
            <button className="btn" onClick={() => {
                if (count === 0) {
                    return;
                }
                setCount(count - 1)

            }}>-</button>
            <br />
            <div><button className={count === 0 ? "btn btn-yellow" : " btn btn-blue"} >
                {count === 0
                    ? "Zero"
                    : count}</button></div>

            <input values={values} onChange={(e) => setValues(e.target.value)} type="range" />
            <ProgressBar completed={parseInt(values)} />

            <div className="container">
                <div className="search">
                    <lable>NAME:</lable>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
                    <p>Your name is <b>{text}</b></p>
                    {text === "naveen" && (
                        <input value={text} />
                    )}
                    <>
                        <button onClick={buttonchange}>{change}</button>

                    </>
                    {change === "show" && (
                        <p> <img src="https://images.unsplash.com/photo-1616878454012-966ce24cc4de?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /></p>

                    )}
                    <button onClick={() => setBulb(!bulb)}>
                        {bulb ? "On" : "Off"}
                    </button>
                    <p>
                        <img
                            style={{ width: 300 }}
                            src={
                                bulb
                                    ? "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"
                                    : "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"
                            } />
                    </p>
                </div>
            </div>
            <hr />
            <br />
            <br />
            <br />
            <br />

        </>
    )

}
export default Simple;