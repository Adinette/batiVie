"use client"
import React, { useState } from 'react';
import { images } from '../app/style/icon';
import Image from 'next/image'

import SectionTitle from './SectionTitle';

export default function SectionProduct() {
  const productCards = [
    {
      iconSrc: images.product1,
      title: 'Sanitaire',
      description: '',
      detailIcon: images.product_detail,
      detailDescription: 'Description détaillée du sanitaire...',
    },

    {
      iconSrc: images.product1,
      title: 'Sanitaire',
      description: '',
      detailIcon: images.product_detail,
      detailDescription: 'Description détaillée du sanitaire...',
    },

    {
      iconSrc: images.product1,
      title: 'Sanitaire',
      description: '',
      detailIcon: images.product_detail,
      detailDescription: 'Description détaillée du sanitaire...',
    },

    {
      iconSrc: images.product1,
      title: 'Sanitaire',
      description: '',
      detailIcon: images.product_detail,
      detailDescription: 'Description détaillée du sanitaire...',
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // State for selected card

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index); // Toggle selection
  };

  return (
    <div className='products'>
      <div className='container'>
        <SectionTitle
          title="Nos produits quincaillerie"
          description=""
          className={'text-center'}
        />
        <div className='row'>
          {productCards.map((card, index) => (
            <div key={index} className={`col-lg-3 `}>
              <Card
                {...card}
                customClassName="card-product "
                onClick={() => handleCardClick(index)}
              />
              {selectedCardIndex === index && (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <Image src={card.detailIcon} alt="detail" />
                    </div>
                  <div className="col-lg-6">
                    <h3>{card.title}</h3>
                    <p>{card.detailDescription}</p>
                  </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ iconSrc, title, description, customClassName, onClick }) {
  return (
    <div className={`card bg-transparent text-white border-0 `} onClick={onClick}>
      <Image src={iconSrc} alt="product" />
      <div className={`card-body ${customClassName}`}>
        <h5 className="card-title text-center mb-3">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
