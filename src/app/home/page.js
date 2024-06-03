import Footer from '@/component/Footer'
import Header from '@/component/Header'
import React from 'react'
import Image from 'next/image'
import { images } from '../style/icon'

export default function Home() {
    return (
        <div>
            <Header />
            <div className='py-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1>Ensemble batissons notre Demeure</h1>
                            <p>Votre satisfaction est notre priorité.
                                Nous travaillons en etroite collaboration avec vous
                                pour comprendre vos attentes et surpasser vos espérances</p>
                            <div className='d-flex align-item-center'>
                                <div><button className='rounded-2 p-2 me-2' type='button'>Nos services</button></div>
                                <div><button className='rounded-2 p-2 me-2' type='button'>Voir Projet</button></div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div>
                                <ul>
                                    <li>Nous fournissons un services de qualité</li>
                                    <li>Nous fournissons un services de qualité</li>
                                    <li>Nous fournissons un services de qualité</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-item-center'>
                        <div><h4>05+</h4> <span>ans d'experience</span></div>
                        <div><h4>05+</h4> <span>ans d'experience</span></div>
                        <div><h4>05+</h4> <span>ans d'experience</span></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <h1>Ensemble batissons notre Demeure</h1>
                        </div>
                        <div className='col-lg-7'>
                            <h4>05 ans d'expérience</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>Projet  en vedette</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div class="card border-0">
                                <Image src={images.logo} alt="logo"/>
                                <div class="card-body pb-4">
                                    <h4 class="card-title text-center mb-3">Sanitaire</h4>
                                    <span>Venez à la rencontre des plus grande marque de sanitaire</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card border-0">
                                <Image src={images.logo} alt="logo"/>
                                <div class="card-body pb-4">
                                    <h4 class="card-title text-center mb-3">Sanitaire</h4>
                                    <span>Venez à la rencontre des plus grande marque de sanitaire</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card border-0">
                                <Image src={images.logo} alt="logo"/>
                                <div class="card-body pb-4">
                                    <h4 class="card-title text-center mb-3">Sanitaire</h4>
                                    <span>Venez à la rencontre des plus grande marque de sanitaire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container'>
                <div className='row'>
                        <div className='col-12'>
                            <h2>Nos produits quincaillerie</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div class="card border-0">
                                <Image src={images.logo} alt="logo"/>
                                <div class="card-body pb-4">
                                    <h4 class="card-title text-center mb-3">Sanitaire</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card border-0">
                                <Image src={images.logo} alt="logo"/>
                                <div class="card-body pb-4">
                                    <h4 class="card-title text-center mb-3">Sanitaire</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card border-0">
                                <Image src={images.logo} alt="logo"/>
                                <div class="card-body pb-4">
                                    <h4 class="card-title text-center mb-3">Sanitaire</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
