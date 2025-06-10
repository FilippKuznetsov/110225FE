import React from "react";
import styles from './Advantage.module.css'

export default function Advantages() {


const listOfPreferensies=['Responsibility',' Quality',' Efficiency'];
const listInfo=['Im very responsible and never lass Thigs they isnt done',
    'I always try to take a feedback,with them i can to take up my quality',
'IFFFFFFFF A PERSON; WHO SPEAKS WITH THE SIGHN LANGUAGE IS MISSING A FINGER, IS THAT AN ACCENT OR A SPEACH IMPEDIMENT!???']

  return (
    <div className={styles.preferenciesDIV}>
    {
        listOfPreferensies.map((val,index)=>(
            <div key ={index} >

            <h3>{val}</h3>
            <p>{listInfo[index]}</p>


            </div>
        ))
    }
    </div>
  )
}
