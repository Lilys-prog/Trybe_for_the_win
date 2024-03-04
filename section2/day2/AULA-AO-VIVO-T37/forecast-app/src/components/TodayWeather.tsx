type TodayWeatherProps = {
  day: string;
  date: string;
  icon: string;
  temp: string;
  condition: string;
};

// todas as props são passadas na área de parâmetro da função, ou assinatura do componente
// tudo o que vem na prop (ou assinatura do componente) é um objeto. Mesmo que nenhum valor seja atribuído a ele, ele terá o valor de um objeto vazio. Mesmo que os valores passados não sejam um objeto, a props é por definição.
// as props devem ser passadas no local em que a função está sendo chamada, no caso, dentro do app.tsx
// as props serão passadas no componente app, mas serão recebidas no componente correspondente
const TodayWeather = ({
  day,
  date,
  icon,
  temp,
  condition,
}: TodayWeatherProps) => {
  return (
    // neste caso em particular, é necessário passar 5 propriedades para o elemento da função
    // nesse caso, por exemplo, as cinco propriedades podem sesr passadas uma a uma, ou pode ser passado um objeto que as contenha
    <>
      <h2>{day}</h2>
      <p>{date}</p>
      {/* o src dentro da img é uma prop, o alt tb; são atributos */}
      <img src={icon} alt="" />
      <h2>{condition}</h2>
      <p>{temp}</p>
    </>
  );
};

export default TodayWeather;
