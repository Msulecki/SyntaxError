import React from 'react'
import { Header } from '../Header'
import '../../styles/pages/About.scss'
import aboutData from '../../data/about.json'

export const About = () => (
  <section id='about' className='about'>
    <div className='about__header'>
      <Header title='About' />
    </div>
    <div className='about__content'>{aboutData.about}</div>
  </section>
)
