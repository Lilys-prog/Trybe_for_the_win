const adress = {
  city: 'New York',
  state: 'NY',
  district: 'Brooklyn',
}

const cities = ['Belém', 'Marituba', 'Belo Horizonte'];

const Header = () => {
  return (
    <header>
      <h2>{ adress.district }</h2>
      <h3>{ cities.join(', ') }</h3>
    </header>
  );
}

export default Header;

// para misturar js com html usa-se o método de interpolação
// não precisa do cifrão neste tipo de interpolação, onde só se está pondo uma variável. Ela vai ser usada quando for algo que precisa da crase.
// essa interpolação com chaves vale pra qualquer tipo de valor js, objetos, variãveis, arrays, funções, etc.
// não pode colocar um objeto simplesmente pq o react não sabe lidar com objetos, só com propriedades
// o array pode ser colocado e vai ser renderizado, mas a priori seus elementos vão aparecer concatenados sem espaço, grudados um no outro
    // o join é uma forma de resolver, adicionando uma vírgula entre os elementos