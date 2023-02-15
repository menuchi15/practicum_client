import React, { createContext, useState } from "react";

export const detailsContext=createContext();

export default function DetailsContext(props){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [idNumber,setIdNumber]=useState('')
    const [birthDate,setBirthDate]=useState('')//(new Date())
    const [genus,setGender]=useState('')
    const [HMO,setHMO]=useState('')
    const [children,setChildren]=useState([])

    return(
        <div className="div-location">
            <detailsContext.Provider value={{firstName,setFirstName,lastName,setLastName,idNumber,setIdNumber,birthDate,setBirthDate,genus,setGender,HMO,setHMO,children,setChildren}}>
                {props.children}
            </detailsContext.Provider>
        </div>
    )
}