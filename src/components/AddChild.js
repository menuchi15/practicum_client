import React, { useContext } from "react";
import { detailsContext } from "../DetailsContext";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function AddChild(){

    const ctx=useContext(detailsContext)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()

    function onSubmit(data){
        console.log(data)
        ctx.setChildren([...ctx.children,{'name':data.name,'idNumber':data.idNumber,'birthDate':data.birthDate}])
        navigate('/');
    }

    return(
        <form className="div-location row" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group input-group-sm mb-3 row">
                <div className="form-floating">
                    <input className="form-control" placeholder="תעודת זהות" {...register('name', { required: true })} />
                    <label for="floatingInput">שם</label>
                </div>
                {errors.name && <p>זהו שדה חובה</p>}
            </div>

            <div className="input-group input-group-sm mb-3 row">
                <div className="form-floating">
                    <input placeholder="מספר זהות" className="form-control" {...register('idNumber', { required: true})} />
                    <label for="floatingInput">מספר זהות</label>
                </div>  
                {errors.idNumber && <p>מספר הזהות אינו תקין</p>}
            </div>

            <div className="input-group input-group-sm mb-3 form-floating">
                <label className="input-group-text">תאריך לידה</label>
                <input className="form-control" type="date" {...register('birthDate', { required: true })}/>   
            </div>
            
            <Button type="submit" variant="text">שמור</Button>
            {/* <input className="btn btn-outline-primary" type="submit" value="שמור"></input> */}
        </form>
    )
}