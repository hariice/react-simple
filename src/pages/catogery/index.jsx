import React, { useState, useEffect } from "react";
import "./catogery.scss";
// import { Select } from "ant";


const Catogery = () => {
    const [data, setData] = useState([]);
    const [option, setOption] = useState([]);

    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
            .then(res => res.json())
            .then(data => {
                setData(data.entries);
                // const arr=[];
                // data.entries.map((item)=>
                // {
                //     if(!arr.includes(item.Category)){
                //         arr.push(item.Category)

                //     }
                // })
                // setData(data.entries);
                // setOption(arr);
            })
    }, []);

    return (
        <div className="main-tab">
            <h1>Public API</h1>




            {/* <select defaultValue="Api" style={{ width: 120 }}>

                {option.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select> */}

            <hr></hr>
            <div className="container">

                <table>
                    <thead>
                        <tr>
                            <th>API</th>
                            <th>Description</th>
                            <th>Auth</th>
                            <th>HTTPS</th>
                            <th>Cors</th>
                            <th>Link</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => (
                            <tr>
                                <td>{item.API}</td>
                                <td>{item.Description}</td>
                                <td>{item.Auth}</td>
                                <td>{item.HTTPS}</td>
                                <td>{item.Cors}</td>
                                <td>{item.Link}</td>
                                <td>{item.Category}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>




            </div>

        </div>
    )
}
export default Catogery; 