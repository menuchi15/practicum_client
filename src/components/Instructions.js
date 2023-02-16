import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {detailsContext} from '../DetailsContext';
import { Button } from "@mui/material";
import '../style/StyleSheet.css'

export default function Instructions(){

    const nameCtx=useContext(detailsContext);
    const navigate=useNavigate()

    return(
        <div className="direct row div-location padd">
            <p className="m-3">
                <h5 className="text-primary-emphasis">שלום {nameCtx.firstName}</h5>
            המשרד שלנו במגמת התייעלות<br/>
            ולכן התבקשת למלא טופס זה<br/>
            </p>
            <p className="m-1">
             בטופס תמלא/י את פרטיך ופרטי ילדיך<br/>
            כדי שנוכל להתאים לכם את המתנות המתאימות לכם ביותר<br/>
            ולפנק אתכם באמת בחגים ובחופשים<br/>      
            </p>
            <p className="m-3">
            אנחנו כאן כדי לעזור לך---<br/>
             שים/י לב:<br/>
            <ul className="list-inline-item">
                <li className="m-2">הכנס/י את פרטיך האישיים על פי ההוראות הכתובות בטופס.</li>
                <li className="m-2">כדי להוסיף ילד לחץ/י על הכפתור +.</li>
                <li className="m-2">הפרטים יאובטחו וישמרו רק בהסכמתך.</li>
                <li className="m-2">לאחר השמירה לא תוכל/י לשנות את הבחירה.</li>
            </ul>
            <br/>
            בהצלחה!!
            </p>
            <Button variant="text" size="large" onClick={()=>navigate('/')}>חזרה לטופס</Button>
        </div>
    )
}