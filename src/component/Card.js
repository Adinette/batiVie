import Image from 'next/image'
import React from 'react'

export default function Card({iconSrc,title,description}) {
  return (
    
          <div className='col-lg-4'>
            <div class="card bg-transparent text-white border-0">
              <Image src={iconSrc} alt="logo" width={357}/>
              <div class="card-body pb-4">
                <h4 class="card-title text-center mb-3">{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </div>
  )
}
