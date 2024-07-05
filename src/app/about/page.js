import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Image from 'next/image'
import { images } from '../style/icon'
import Card from '@/component/Card'
import SectionTitle from '@/component/SectionTitle'


export default function About() {
  const aboutCards = [
    {
      iconSrc: images.project1,
      title: 'JOHN DOE',
      description: 'TECHNICIEN',
    },
    {
      iconSrc: images.project1,
      title: 'JOHN DOE',
      description: 'TECHNICIEN',
    },
    {
      iconSrc: images.project1,
      title: 'JOHN DOE',
      description: 'TECHNICIEN',
    },
  ]

  return (
    <div>
      <Header />
      <div className='about'>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2>A propos de nous</h2>
            <a className="navbar-brandr" href="#"><Image src={images.logo} alt="logo" /></a>
            <p>lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting</p>
          </div>
        </div>
      </div>
      </div>
      <div className='team'>
      <div className="container">
        <SectionTitle
          title="Notre equipe"
          description=""
          className={''}
        />
        <div className='row'>
          {aboutCards.map((card, index) => (
            <div key={index} className={`col-lg-4 `}>
              <Card {...card} customClassName="card-about" />
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}
