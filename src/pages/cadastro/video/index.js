import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';



function CadastroVideo () {
  return (
    <PageDefault>
     <h1> Pagina de Cadastro de Video </h1> 
      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
      

    

      <Button>
        Cadastrar
      </Button>

    </PageDefault>
  );
}

export default CadastroVideo;