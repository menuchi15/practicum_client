import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { detailsContext } from "../DetailsContext";
import Button from '@mui/material/Button'
import axios from 'axios'
import '../style/StyleSheet.css'

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
        <form className="col padding direct border border-secondary-subtle form-style mt-5" onSubmit={handleSubmit(onSubmit)} >
            <div className="row input-group mb-3">
                <div>
                    <div className="form-floating">
                        <input className="form-control" placeholder="שם פרטי" {...register('firstName', { required: true })} value={detailsCtx.firstName} onChange={e=>{detailsCtx.setFirstName(e.target.value)}}/>
                        <label>שם פרטי</label>
                    </div>
                </div>
                {errors.firstName && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div>

            <div className="row input-group mb-3">
                <div> 
                    <div className="form-floating">
                        <input className="form-control" placeholder="שם משפחה" {...register('lastName', { required: true })} value={detailsCtx.lastName} onChange={e=>{detailsCtx.setLastName(e.target.value)}}/>                                
                        <label>שם משפחה</label>
                    </div>
                </div>
                {errors.lastName && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div>
                
            <div className="row input-group mb-3">
               <div>
                    <div className="form-floating">
                        <input className="form-control" placeholder="מספר זהות" {...register('idNumber', { required: true, minLength:9, maxLength:9 })} value={detailsCtx.idNumber} onChange={e=>{detailsCtx.setIdNumber(e.target.value)}}/>
                        <label>מספר זהות</label>
                    </div>
                </div>
                {errors.idNumber && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div>

            <div className="col input-group mb-3">
                <div className="input-group mb-1 direct-d">
                    <input className="form-control" type="date" {...register('birthDate', { required: true })} value={detailsCtx.birthDate} onChange={e=>{detailsCtx.setBirthDate(e.target.value)}}/>   
                    <span className="input-group-text">תאריך לידה</span>
                </div>
                {errors.idNumber && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div>            
             
            <hr/>   
            <div className="col input-group mb-3 justify-content-evenly">
                <div className="form-check">
                    <input type='radio' className="form-check-input" {...register('gender',{required: true})} value="זכר" onChange={e=>{detailsCtx.setGender(e.target.value)}}/>
                    <span className="form-check-label">זכר</span>
                </div>              
                <div className="form-check">
                    <input type='radio' className="form-check-input" {...register('gender',{required: true})} value="נקבה" onChange={e=>{detailsCtx.setGender(e.target.value)}}/>
                    <span className="form-check-label">נקבה</span>
                </div> 
                {errors.gender && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}            
            </div>

            <div className="col input-group input-group-sm mb-3 direct-d">
                <select className="form-select" {...register('HMO')} value={detailsCtx.HMO} onChange={e=>{detailsCtx.setHMO(e.target.value)}}>
                    <option value="כללית" className="direct">כללית</option>
                    <option value="מכבי" className="direct">מכבי</option>
                    <option value="לאומית" className="direct">לאומית</option>
                    <option value="מאוחדת" className="direct">מאוחדת</option>
                    <option value="אחר" className="direct">אחר</option>
                </select>
                <label className="input-group-text">קופת חולים</label>
                {errors.HMO && <p className="invalid-field text-primary-emphasis">זהו שדה חובה</p>}
            </div> 
                
            <hr/>
            <div>
                <div className="direct mb-3 d-flex justify-content-start">
                    <ul className="list-inline">
                        {detailsCtx.children.map((c,index)=>  
                        <li key={index} className="list-block-item p-2">
                            <span className="badge bg-primary rounded-pill m-2">{index+1}</span>
                            {c.name}
                        </li> 
                        )}
                    </ul> 
                </div>
                {!show
                ?
                <div className="col direct">            
                    <label d-inline>הוסף ילד</label>
                    <Button onClick={()=>setShow(true)} variant="text" size="large">+</Button>
                </div> :
                    navigate('/addChild')
                }
            </div>
            <Button type="submit" variant="text" size="large">שמור ושלח</Button>
        </form>
    )
}