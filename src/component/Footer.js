import Image from 'next/image'
import { images } from '../app/style/icon'
import React from 'react'

export default function Footer
() {
  return (
    <div class="footer">
    <div class="container ">
      <div class="row">
        <div class=" col-lg-4 pb-6 pb-lg-0">
          <div class=" mb-4"><a class="navbar-brand" href="#"><Image src={images.logo} alt="logo"/></a></div>
          <div>
            <h6>A propos</h6>
          <span>Nou sommes spécialisé dans la construction des bâtiments et la prestation de service BTP.</span>
          <div class="mt-5">
            <span class="icon rounded-circle   py-2"><i class="bi bi-google px-2"></i></span>
            <span class="icon rounded-circle   py-2"><i class="bi bi-twitter px-2"></i></span>
            <span class="icon rounded-circle   py-2"><i class="bi bi-instagram px-2"></i></span>
            <span class="icon rounded-circle   py-2"><i class="bi bi-linkedin px-2"></i></span>
          </div>
          </div>

        </div>
            <div class=" col-6 col-md-4 col-lg-3 mb-6 mb-lg-0 ">
              <h6 class="mb-5 ">Bureau</h6>
              <ul>
                <li>Cocotomey Zounga</li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3 mb-6 mb-lg-0 ">
              <h6 class=" mb-5">Services</h6>
              <ul>
                <li>Contact</li>
                <li class="my-4">Email : contact@bativitebenin.com</li>
                <li>Phone : (+229) 96-11-55-25</li>
              </ul>
            </div>
            <div class=" col-6 col-md-4 col-lg-2">
              <h6 class=" mb-5">Liens</h6>
              <ul>
                <li>Acceuil</li>
                <li class="my-4">A propos</li>
                <li>Services</li>
                <li class="my-4">Contact</li>
              </ul>
            </div>
            
          </div>
    </div>
    <div class="container pt-lg-11 pt-5 pb-5 ">
      <div class="row">
        <div class="col-12">
          <div class=" text-center">
            <span>Copyright © 2024 GICS DIGITAL EXPERTISE. Tout droits réservé.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
