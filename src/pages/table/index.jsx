import React, { useEffect, useState } from "react";
import "./table.scss";
import Axios from "axios";

const Table = () => {

    const [data, setData] = useState([]);
    // const [color, setColor] = useState("blue")
    const [className, setClassName] = useState("red")
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data)
            })
    }, [])
    // const colorChange=()=>{
    //     if(color === "blue"){
    //         setColor("red")
    //     }
    //     else{
    //         setColor("blue")
    //     }

    // }
    const classNameChange=()=>{
        if(className === "blue"){
            setClassName("red")
        }
        else{
            setClassName("blue")
        }
    }

    return (


        <><button onClick={classNameChange}>{className}
       </button>
            <div className="red">
                
                RED

    </div>
            <div className="blue">
                Blue
    </div>
        </>
    )



}
export default Table;