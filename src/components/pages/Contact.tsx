import React from 'react'
import { Header } from '../Header'
import '../../styles/pages/Contact.scss'
import contact from '../../data/contact.json'

const { mail, phone, company, additional } = contact

export const Contact = () => (
  <section className='contact'>
    <div className='contact__header'>
      <Header title="Let's keep in touch" />
    </div>
    <div className='contact__content'>
      <ul className='contact__column'>
        <li>
          <a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <a href={`tel:${phone.split(' ').join('')}`}>{phone}</a>
        </li>
      </ul>
      <ul className='contact__column'>
        <li>{company}</li>
        <li>{additional}</li>
      </ul>
    </div>
  </section>
)
