import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Banner from '../../component/Banner'

export default function Contact() {
  return (
    <div>
      <Header />
      <Banner 
        title={'Contact'}
        description={'Nous contacter'}
      />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3>Notre equipe</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8'>
            <div class="">
              <div class="pb-4">
C                <form>
                  <div className='input-group'>
                    <div><input type='text' id='name' name='name' className='form-control' placeholder='Nom complet' /></div>
                    <div><input type='email' id='email' name='email' className='form-control' placeholder='Email' /></div>
                  </div>
                    <div><textarea placeholder='Message' name='message' id='message'/></div>
                    <div><Button>Envoyer</Button></div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div class="">
              <div class=" pb-4">
              <h4 class="card-title text-center mb-3">Contact info</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
