import React from 'react'
import { HeaderProps } from '../interfaces/interfaces'
import '../styles/Header.scss'

export const Header = ({ title }: HeaderProps) => (
  <h2 className='header'>
    {title.includes('&')
      ? title.split('&').map((text, index) => (
          <React.Fragment key={index}>
            {text}
            {title.split('&').length > index + 1 && <span>&amp;</span>}
          </React.Fragment>
        ))
      : title}
    <div className='header__border header__border--lt'></div>
    <div className='header__border header__border--rt'></div>
    <div className='header__border header__border--ld'></div>
    <div className='header__border header__border--rd'></div>
  </h2>
)
