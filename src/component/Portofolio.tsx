import React from "react";
import produk1 from "../assets/contoh.png";
import { data } from "./data-portofolio";

const Portofolio =()=> {
    return(
        <div className="homeContainer">
            
            <div className="section-portofolio">

                {data.map((data, index) => {
                    return (
                <div key={index} className="card">
                     <div className="img">
                        <img src={data.image} />
                    </div>
                    <div className="description">
                        <h3>{data.tittle}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portofolio