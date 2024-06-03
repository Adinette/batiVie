import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Banner from '@/component/Banner'
import Card from '@/component/Card'
import { images } from '../style/icon'


export default function Service() {
  return (
    <div>
      <Header />
      <Banner
      title={'Nos services'}
      description={'Nous proposons une variété de services'}
      />
      <div className='bg-black py-4'>
      <div className="container">
        <div className='row'>
          <Card
          iconSrc={images.service1}
          title={'Location de machine Grue'}
          />
          <Card
          iconSrc={images.service3}
          title={'Location de machine Grue'}
          />
          <Card
          iconSrc={images.service1}
          title={'Location de machine Grue'}
          />
          <div><button type='button'>Voir plus</button></div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}
