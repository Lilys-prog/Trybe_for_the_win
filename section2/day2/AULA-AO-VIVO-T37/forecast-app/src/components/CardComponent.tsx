const style = { backgroundColor: 'wheat', color: 'blue', padding: '1rem'};

const CardComponent = () => {
  return (
    <div style={ style }>
     <p>Card Container</p> 
      </div>
  );
}

export default CardComponent;

// este componente é o container
// as funções de componente começam com letra maiúscula
// para adicionar um estilo in-line, é preciso usar dois conjuntos de chave,a primeira representando a interpolação do js e a segunda a do css: 
// { {color: black} }
    // pode-se também criar um objeto css com as propriedades e adicionar