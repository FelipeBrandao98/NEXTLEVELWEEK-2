import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem: React.FunctionComponent = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/62968877?s=460&u=97de4916282c6240736fe17833a0143c3895c943&v=4" alt="Felipe Brandão"/>
        <div>
          <strong>Felipe Brandão</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi beatae iusto voluptatem.<br /> Adipisci deleniti quas reiciendis, commodi, eligendi facilis amet voluptates laudantium dignissimos error ad sint quidem facere, impedit doloribus.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
