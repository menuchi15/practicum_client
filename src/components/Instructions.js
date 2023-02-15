import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {detailsContext} from '../DetailsContext';

export default function Instructions(){

    const nameCtx=useContext(detailsContext);
    const navigate=useNavigate()

    return(
        <div style={{direction:"rtl"}} className="row div-location">
            <div>
                <h6>שלום {nameCtx.firstName}</h6>
            בטופס תתבקש/י למלא את פרטיך ופרטי ילדיך<br/>
            כדי שנוכל להתאים לכם את המתנות המתאימות לכם ביותר<br/>
            ולפנק אתכם באמת בחגים ובחופשים<br/>
            אנחנו כאן כדי לעזור לך---
            </div>
            <div>
             שים/י לב:<br/>
            <ul className="list-inline-item">
                <li>הכנס/י את פרטיך האישיים על פי ההוראות הכתובות בטופס.</li>
                <li>כדי להוסיף ילד לחץ/י על הכפתור +.</li>
                <li>הפרטים יאובטחו וישמרו רק בהסכמתך.</li>
                <li>לאחר השמירה לא תוכל/י לשנות את הבחירה.</li>
            </ul>
            <br/>
            בהצלחה!!
            </div>
            <div><button className="btn btn-outline-primary opacity-75 col-3 margin" onClick={()=>navigate('/')}>חזרה לטופס</button></div>           
        </div>
    )
}