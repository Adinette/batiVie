import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Banner from '@/component/Banner'
import Card from '@/component/Card'
import { images } from '../style/icon'


export default function Produit() {
  const projectCards = [
    {
      iconSrc: images.product_detail,
      title: 'Sanitaire',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.product_detail,
      title: 'Cuisine',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.product_detail,
      title: 'Cuisine',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.product_detail,
      title: 'Sanitaire',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.product_detail,
      title: 'Cuisine',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
    {
      iconSrc: images.product_detail,
      title: 'Cuisine',
      description: 'Venez à la rencontre des plus grande marque de sanitaire',
    },
  ]

  return (
    <div>
      <Header />
      <Banner
        title={'Nos produits'}
        description={'Nous proposons une variété de services'}
      />
      <div className='row'>
        {projectCards.map((card, index) => (
          <div key={index} className={`col-lg-4 `}>
            <Card {...card} customClassName="card-project" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
