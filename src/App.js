import { useEffect, useState } from 'react';
import Container from './components/Container';
import products from './products.json';

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={ item.thumbnail }></img>
      <h4> { item.title } </h4>
      <p> { item.description } </p>
      <span> { item.brand } </span>
      <span> { item.price } </span>
    </li>
  )
}

function App() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    setSmartphones(products.filter(product => product.category === "smartphones"));
  }, []);

  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {
          smartphones.length > 0
          ?
          smartphones.map( product => <Item item={product} key={product.id} />)
          :
          <></>
        }
      </ul>
    </Container>
  );
}

export default App;
