import React from "react";
import {Routes,Route} from 'react-router-dom'
import AddChild from "./AddChild";
import FormToComplete from "./Form";
import Instructions from "./Instructions";
import Succsses from "./Success";

export default function MiniRouter(){
    return(
        <div>
            <Routes>
                <Route path="/instruction" element={<Instructions/>}/>
                <Route path="/" element={<FormToComplete />}/>
                <Route path="/addChild" element={<AddChild />}/>
                <Route path="/success/:id" element={<Succsses />}/>
            </Routes>
        </div>
    )
}