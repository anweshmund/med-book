import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoc = ( speciality,docId) => {
    const {doctors} =useContext(AppContext)
    const [relDos,setRelDoc]= useState([])
    useEffect(()=>{
        if(doctors.length>0 && speciality){
            const doctorData= doctors.filter((doc)=> doc.speciality ===speciality && doc._id == docId)
            setRelDoc(doctorData)
        }
    },[doctors,speciality,docId])
  return (
    <div>
       
    </div>
  )
}

export default RelatedDoc
