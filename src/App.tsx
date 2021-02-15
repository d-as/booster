import { useState } from 'react';
import uniqid from 'uniqid';
import Card from './components/Card';
import './styles/App.scss';

interface CardData {
  id: string
  key: string
}

const rng = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

const pullCards = (count: number, min: number, max: number): CardData[] => (
  Array.from(new Set([...Array(count)].map(() => rng(min, max))))
    .map(id => ({
      id: `${id}`,
      key: uniqid(),
    }))
);

const baseURL = 'https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_';

const App = (): JSX.Element => {
  const reset = (): CardData[] => pullCards(8, 1, 113);

  const [cards, setCards] = useState(reset());

  const onClick = (key: string, removeCard: Function): void => {
    removeCard();
    cards.splice(cards.findIndex(card => card.key === key), 1);
    setCards(cards.length ? cards : reset());
  };

  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main className="app-content">
        {cards.map(card => (
          <Card
            key={card.key}
            onClick={removeCard => onClick(card.key, removeCard)}
            src={`${baseURL}${card.id}.png`}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
