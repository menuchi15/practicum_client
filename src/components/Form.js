import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { detailsContext } from "../DetailsContext";
import AddChild from "./AddChild";
import Button from '@mui/material/Button'
import axios from 'axios'

export default function FormToComplete(){

    const detailsCtx=useContext(detailsContext);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate()
    const [show,setShow]=useState(false);

    function onSubmit(data){
        axios.post('https://localhost:44391/api/UserDetails',{
            id:0,
            firstName: data.firstName,
            lastName: data.lastName,
            idNumber: data.idNumber,
            birthDate: data.birthDate,
            gender: data.gender,
            hmo: data.HMO,
            children: detailsCtx.children
          }).then(data=>{
            console.log(data)
            detailsCtx.setFirstName('')
            detailsCtx.setLastName('')
            detailsCtx.setIdNumber('')
            detailsCtx.setBirthDate('')
            detailsCtx.setGender('')
            detailsCtx.setHMO('')
            detailsCtx.setChildren([])
            navigate(`/success/${data.data.id}`)}
          ).catch()
    }

    return(
        <div className="div-location">
            <form className="row rounded-1" onSubmit={handleSubmit(onSubmit)} >
                <div className="col">
                    <div className="row input-group input-group-sm mb-3">
                        <input className="form-control" placeholder="שם פרטי" {...register('firstName', { required: true })} value={detailsCtx.firstName} onChange={e=>{detailsCtx.setFirstName(e.target.value)}}/>
                        {errors.firstName && <p className="invalid-feedback">First name is required.</p>}
                    </div>
                    <div className="row input-group input-group-sm mb-3">
                        <input className="form-control" placeholder="שם משפחה" {...register('lastName', { required: true })} value={detailsCtx.lastName} onChange={e=>{detailsCtx.setLastName(e.target.value)}}/>
                        {errors.lastName && <p className="invalid-feedback">Last name is required.</p>}
                    </div>
                    <div className="row input-group input-group-sm mb-3">
                        <input className="form-control" placeholder="מספר זהות" {...register('idNumber', { required: true, minLength:9, maxLength:9 })} value={detailsCtx.idNumber} onChange={e=>{detailsCtx.setIdNumber(e.target.value)}}/>
                        {errors.idNumber && <p className="invalid-feedback">Last name is required.</p>}
                    </div>
                </div>
                <div className="col">
                    <div className="input-group input-group-sm mb-3">
                        <label className="input-group-text">תאריך לידה</label>
                        <input type="date" {...register('birthDate', { required: true })} value={detailsCtx.birthDate} onChange={e=>{detailsCtx.setBirthDate(e.target.value)}}/>   
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <div className="form-check">
                            <span className="form-check-label">זכר</span>
                            <input type='radio' className="form-check-input" {...register('gender',{required: true})} value="זכר" onChange={e=>{detailsCtx.setGender(e.target.value)}}/>
                        </div>              
                        <div className="form-check">
                            <span className="form-check-label">נקבה</span>
                            <input type='radio' className="form-check-input" {...register('gender',{required: true})} value="נקבה" onChange={e=>{detailsCtx.setGender(e.target.value)}}/>
                        </div>             
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <label className="input-group-text">קופת חולים</label>
                        <select className="form-select" {...register('HMO')} value={detailsCtx.HMO} onChange={e=>{detailsCtx.setHMO(e.target.value)}}>
                            <option value="כללית">כללית</option>
                            <option value="מכבי">מכבי</option>
                            <option value="לאומית">לאומית</option>
                            <option value="מאוחדת">מאוחדת</option>
                            <option value="אחר">אחר</option>
                        </select>
                    </div> 
                </div>
                <div>
                    <div>
                        {
                            detailsCtx.children.map((c,index)=>
                            <ul className="list-inline-item" key={index}>
                                <li><span className="badge badge-primary">{index+1}</span>:{c.name}</li>
                            </ul>  
                            )
                        }
                    </div>
                    {!show
                    ?
                    <div>            
                        <label>הוסף ילד</label>
                        <Button onClick={()=>setShow(true)} variant="text">+</Button>
                    </div> : 
                    // <AddChild/>
                        navigate('/addChild')
                    }
                </div> 
                <div>
                <Button type="submit" variant="text">שמור ושלח</Button>
                {/* <input className="btn btn-outline-primary opacity-75 col-3" type="submit" value="שמור ושלח"/> */}
                </div>
            </form>
    </div>
    )
}