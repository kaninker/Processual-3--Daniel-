import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [grade1, setGrade1] = useState('');
  const [grade2, setGrade2] = useState('');

  return (
    <form className="form">
      <div className="form-group">
        <label>Nome do Aluno:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Nota 1:</label>
        <input
          type="number"
          value={grade1}
          onChange={(e) => setGrade1(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Nota 2:</label>
        <input
          type="number"
          value={grade2}
          onChange={(e) => setGrade2(e.target.value)}
        />
      </div>
      <button type="button">Enviar</button>
    </form>
  );
};

export default Form;