import React from 'react'

export default function SectionTitle({title,description,className}) {
    return (
        <div className='row'>
            <div className='col-12'>
               <div className={`section-title ${className}`}>
               <h2>{title}</h2>
               <p>{description}</p>
               </div>
            </div>
        </div>)
}
