import Image from 'next/image'
import { images } from '../app/style/icon'
import React from 'react'

export default function Header() {

	return (
		<header class="">
		<nav class="navbar navbar-expand-lg p-3">
		  <div class="container">
			<a class="navbar-brand" href="#"><Image src={images.logo} alt="logo" width={200} height={40}/></a>
			<button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
			  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
			  aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
			  <ul class="navbar-nav">
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="/home">Accueil</a>
				</li>
				<li class="nav-item mx-lg-4 mx-0 ">
				  <a class="nav-link " href="#" role="button" aria-current="page">
				  Quincaillerie
				  </a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="/services">Services</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="/contact">Contact</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="/about">A propos</a>
				</li>
			  </ul>
			</div>
			<div>
				  <button class="navbtn" type='submit'>Demander un devis</button>
			</div>
		  </div>
		</nav>
	  </header>
	)
}

