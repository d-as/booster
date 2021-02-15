import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import cardHandler, { CardListeners, removeCard } from './card-handler';
import '../styles/Card.scss';

interface CardProps {
  src: string
  onClick?: (removeCard: Function) => void
}

const Card = ({ src, onClick }: CardProps): JSX.Element | null => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [listeners, setListeners] = useState<CardListeners | undefined>(undefined);
  const [removed, setRemoved] = useState(false);

  const destroy = (): void => {
    removeCard(cardRef, listeners);
    setRemoved(true);
  };

  useEffect(() => {
    setListeners(cardHandler(cardRef));
    return () => destroy();
  }, []);

  const clickHandler = (): void => (
    onClick?.(() => destroy())
  );

  if (removed) {
    return null;
  }

  return (
    <div
      ref={cardRef}
      onClick={clickHandler}
      className="cover card"
    >
      <div
        className="card-layer"
        data-img={src}
      />
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick: undefined,
};

export default Card;
