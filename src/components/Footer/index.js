import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo Basedflix" />
      </a>
      <p>
        All Rights reserved to BasedFlix ©
      </p>
    </FooterBase>
  );
}

export default Footer;
