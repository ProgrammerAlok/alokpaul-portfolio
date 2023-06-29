import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, fuga eum nam autem ullam quam labore qui, ratione illum dolore. Ut voluptas quis magni reiciendis maxime maiores debitis architecto?',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, fuga eum nam autem ullam quam labore qui, ratione illum dolore. Ut voluptas quis magni reiciendis maxime maiores debitis architecto?',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, fuga eum nam autem ullam quam labore qui, ratione illum dolore. Ut voluptas quis magni reiciendis maxime maiores debitis architecto?',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, fuga eum nam autem ullam quam labore qui, ratione illum dolore. Ut voluptas quis magni reiciendis maxime maiores debitis architecto?',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          Data.map(({id, avatar, name, review}) => {
            return(         
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar 1" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
           )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
