import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Image from 'next/image'
import { images } from '../style/icon'

export default function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3>A propos de nous</h3>
            <a class="navbar-brand" href="#"><Image src={images.logo} alt="logo"/></a>
            <p>lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting
              lorem ipsum is simply dummy textof th printing and typesetting</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3>Notre equipe</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div class="card border-0">
              <Image src={images.logo} alt="logo"/>
              <div class="card-body pb-4">
                <h5 class="card-title text-center mb-3">JOHN  DOE</h5>
                <h5 class="card-title text-center mb-3">TECHNICIEN</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div class="card border-0">
              <Image src={images.logo} alt="logo"/>
              <div class="card-body pb-4">
                <h5 class="card-title text-center mb-3">JOHN  DOE</h5>
                <h5 class="card-title text-center mb-3">TECHNICIEN</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div class="card border-0">
              <Image src={images.logo} alt="logo"/>
              <div class="card-body pb-4">
                <h5 class="card-title text-center mb-3">JOHN  DOE</h5>
                <h5 class="card-title text-center mb-3">TECHNICIEN</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
