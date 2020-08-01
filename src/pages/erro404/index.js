import React from 'react';
import logo from '../../assets/img/starwars.png';
import PageDefault from '../../components/PageDefault/index.js';
import { Link } from 'react-router-dom';




function PageErro() {
  return (
    // arrumar css
    <PageDefault>
      <>
        <menu />
        <img src={logo} alt="starwars"/>
        <h1> Erro 404 </h1> 
        <Link to="/">
          Voltar para Home
        </Link>
        
      </>
    </PageDefault>  
    
  );
}

export default PageErro;