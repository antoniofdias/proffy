import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/33850209?s=460&u=c97d81e510e79ef043c0613491f63f37f18b8341&v=4" alt="Antônio Dias"/>
        <div>
          <strong>Antônio Dias</strong>
          <span>Laboratório de Programação 1</span>
        </div>
      </header>

      <p>
        Pokem ipsum dolor sit amet Shelgon Butterfree Pokemon The Movie 2000 Meowth Natu Razor Leaf.
        <br/>
        Ut aliquip ex ea commodo consequat Sandshrew Meloetta Ditto Jellicent Litwick Aerodactyl.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;