import React, { useContext } from "react";
import { detailsContext } from "../DetailsContext";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import '../style/StyleSheet.css'

export default function AddChild(){

    const ctx=useContext(detailsContext)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()

    function onSubmit(data){
        console.log(data)
        ctx.setChildren([...ctx.children,{'id':0,'name':data.name,'idNumber':data.idNumber,'birthDate':data.birthDate}])
        navigate('/');
    }

    return(
        <form className="direct div-location row padding border border-secondary-subtle" style={{width:'35vw'}} onSubmit={handleSubmit(onSubmit)}>
            <h5 className="padding-a mb-5 text-primary-emphasis">הוסף את פרטי הילד</h5>
            
            <div className="input-group input-group-sm mb-3 row">
                <div>
                    <div className="form-floating">
                        <input className="form-control" placeholder="שם" {...register('name', { required: true })} />
                        <label >שם</label>
                    </div>
                </div>
                {errors.name && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div>

            <div className="input-group input-group-sm  row">
                <div>
                    <div className="form-floating">
                        <input placeholder="מספר זהות" className="form-control" {...register('idNumber', { required: true,minLength:9,maxLength:9})} />
                        <label >מספר זהות</label>
                    </div> 
                </div>
                {errors.idNumber && <p className="invalid-field text-primary-emphasis">מספר הזהות אינו תקין</p>} 
                {/* {errors?.idNumber?.minLength && <p className="invalid-field text-primary-emphasis">מספר הזהות אינו תקין</p>}
                {errors?.idNumber?.maxLength && <p className="invalid-field text-primary-emphasis">מספר הזהות אינו תקין</p>}
                {errors.idNumber?.required && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>} */}
            </div>

            <div className="col mb-2 p-4">
                <div className="input-group mb-1 direct-d">
                    <input className="form-control" type="date" {...register('birthDate', { required: true })}/>   
                    <span className="input-group-text">תאריך לידה</span>
                </div>
                {errors.birthDate && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div>

            <Button type="submit" variant="text" size="medium">שמור</Button>
        </form>
    )
}