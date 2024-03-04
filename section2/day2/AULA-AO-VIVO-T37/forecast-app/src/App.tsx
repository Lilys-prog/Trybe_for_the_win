import './App.css';
import CardComponent from './components/CardComponent';
import Header from './components/Header';
import TodayWeather from './components/TodayWeather';
import image from './assets/image.png';

const forecast = () => {
  return (
    <>
      <div>
        <CardComponent />
        <Header />
        <TodayWeather
          day="Domingo"
          date=" mar 3"
          icon={image}
          condition="Rain"
          temp="15-30°"
        />
      </div>
    </>
  );
};

export default forecast;

// TEORIA:
// como o main referencia o app, o app é o componente principal
// exporta o nome da função, não do arquivo
// visualmente pode se ver que o app tem a função
// dessa forma, temos o index.html > main.tsx > app.tsx
// é a partir do app que as coisas são criadas, é o começo de tudo

// o que define um componente?
// visualmente pode ser visto como uma função que retorna um html
// mas o componente é o pedacinho de tela que se quer criar
// e, claro, o css vai ser exportado da mesma forma, como um módulo no tsx(js)
// tem dois arquivos de css, o index.css e o app.css
