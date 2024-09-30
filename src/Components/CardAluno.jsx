import React from 'react';
import './CardAluno.css';


const CardAluno = ({nome, media}) => {
    const situacao = media >= 6 ? 'Aprovado!':'Reprovado!';
    const CardClass = media >= 6 ? 'Card Aprovado':'Card Reprovado';
    return (
        <div className={CardClass}>
            <h2>{nome}</h2>
            <p>Média: {media}</p>
            <p>Situação: {situacao}</p>
        </div>
    );
};
export default CardAluno;
