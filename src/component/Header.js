"use client"
import Image from 'next/image'
import { images } from '../app/style/icon'
import React, { useEffect, useState } from 'react';
import { HeaderItem } from './HeaderItem';

export default function Header({className}) {
  const HeaderItems = [
    {
      title: 'Acceuil',
      url: '/home',
    },
    {
      title: 'Produits',
      url: '/produit',
    },
    {
      title: 'Services',
      url: '/services',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
    {
      title: 'A propos',
      url: '/about',
    },
  ]
  return (
    <header class={""}>
      <nav class="navbar navbar-expand-lg p-3">
        <div class="container">
          <a class="navbar-brand py-0 me-0" href="#"><Image src={images.logo} alt="logo" width={200} height={60} /></a>
          <div
            className={`collapse navbar-collapse justify-content-center`} id="navbarSupportedContent">
            <ul class="nav nav-underline">
              {HeaderItems.map((card, index) => (
                  <HeaderItem key={index} {...card} className="" />
              ))}

            </ul>
          </div>
          <div>
            <button class="btn btn-primary" type='submit'>Demander un devis</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

