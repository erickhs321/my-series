import React, { useState } from 'react';

const NovoGenero = () => {
  const [name, setName] = useState('')

  const onChange = evt => {
    setName(evt.target.value)
  }

  return ( 
    <div className="container">
      <h1>Novo Gênero {name}</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="email" value={name} onChange={onChange} className="form-control" id="name" placeholder="Nome do Gênero"/>
          <button type="button" className="btn btn-primary">Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default NovoGenero;