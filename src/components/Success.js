import axios from "axios";
import React from "react";
import { useParams } from 'react-router-dom';
import * as XLSX from 'xlsx'
import { Button } from "@mui/material";
import '../style/StyleSheet.css'

export default function Succsses(){

    const {id}=useParams()

    function download(){
        axios.get(`https://localhost:44391/api/UserDetails/${id}`).then(
            (j)=>{
              const ws= XLSX.utils.json_to_sheet([j.data]);
              const wb= XLSX.utils.book_new();
              XLSX.utils.book_append_sheet(wb, ws, 'test');
              XLSX.writeFile(wb, 'download_details.xlsx');
        })
    }

    return(
        <div className="div-location row padd">
            <h4 className="padding-a">הפרטים נוספו בהצלחה</h4>
            <h6 className="direct">המשך יום טוב---</h6>
            <label className="direct padding-a">להורדת הפרטים בקובץ Excel</label>
            <div>
                <Button variant="contained" size="large" onClick={download}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"16",height:"16"}} className="bi bi-download">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                </Button>  
            </div>
        </div>
    )
}