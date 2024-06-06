import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Banner from '@/component/Banner'
import Card from '@/component/Card'
import { images } from '../style/icon'


export default function Service() {
  const servicesCards = [
    {
      iconSrc: images.service1,
      title: '',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.service2,
      title: '',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.service3,
      title: '',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
  ]

  return (
    <div>
      <Header />
      <Banner
        title={'Nos services'}
        description={'Nous proposons une variété de services'}
      /><div className='row'>
        {servicesCards.map((card, index) => (
          <div key={index} className={`col-lg-4 `}>
            <Card {...card} customClassName="card-project" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
