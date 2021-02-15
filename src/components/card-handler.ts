// https://codepen.io/robin-dela/pen/jVddbq

import { RefObject } from 'react';

export interface CardListeners {
  mouseMove: EventListener
  mouseEnter: EventListener
  mouseLeave: EventListener
}

const CARD_WIDTH = 250;

const mouseMove = (
  event: MouseEvent,
  element: HTMLElement,
  shine: HTMLDivElement,
): void => {
  const { pageX, pageY } = event;
  const offsets = element.getBoundingClientRect();
  const width = element.clientWidth;
  const height = element.clientHeight;
  const widthMultiple = CARD_WIDTH / width;
  const offsetX = 0.52 - (pageX - offsets.left - window.scrollX) / width;
  const offsetY = 0.52 - (pageY - offsets.top - window.scrollY) / height;
  const dy = (pageY - offsets.top - window.scrollY) - height / 2;
  const dx = (pageX - offsets.left - window.scrollX) - width / 2;
  const rotateX = (dy - offsetY) * (0.1 * widthMultiple);
  const rotateY = (offsetX - dx) * (0.07 * widthMultiple);
  const imageStyles = [`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`];
  const angleRadians = Math.atan2(dy, dx);
  let angle = (angleRadians * 180) / Math.PI - 90;

  if (angle < 0) {
    angle += 360;
  }

  if (element.firstChild instanceof HTMLElement && element.firstChild.className.includes(' over')) {
    imageStyles.push('scale3d(1.07, 1.07, 1.07)');
  }

  if (element.firstChild instanceof HTMLElement) {
    // eslint-disable-next-line no-param-reassign
    element.firstChild.style.transform = imageStyles.join(' ');
  }

  const shineAlpha = ((pageY - offsets.top - window.scrollY) / height) * 0.4;

  // eslint-disable-next-line no-param-reassign
  shine.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${shineAlpha}) 0%, rgba(255, 255, 255, 0) 80%)`;

  // eslint-disable-next-line no-param-reassign
  shine.style.transform = `translateX(${offsetX - 0.1}px) translateY(${offsetY - 0.1}px)`;
};

const mouseEnter = (element: HTMLElement): void => {
  if (element.firstChild instanceof HTMLElement) {
    element.firstChild.classList.add('over');
  }
};

const mouseLeave = (
  element: HTMLDivElement, layer: HTMLDivElement, shine: HTMLDivElement,
): void => {
  const container = element.firstChild;

  if (container instanceof HTMLElement) {
    container.classList.remove('over');
    container.style.transform = '';
  }

  // eslint-disable-next-line no-param-reassign
  shine.style.cssText = '';

  // eslint-disable-next-line no-param-reassign
  layer.style.transform = '';
};

export const removeCard = (cardRef: RefObject<HTMLDivElement>, listeners?: CardListeners): void => {
  const card = cardRef.current;

  if (card && listeners) {
    card.removeEventListener('mousemove', listeners.mouseMove);
    card.removeEventListener('mouseenter', listeners.mouseEnter);
    card.removeEventListener('mouseleave', listeners.mouseLeave);
  }
};

export default (cardRef: RefObject<HTMLDivElement>): CardListeners | undefined => {
  const card = cardRef.current;
  const cardLayer = card?.querySelector('.card-layer');

  if (!card || !cardLayer) {
    return undefined;
  }

  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }

  const container = document.createElement('div');
  const shine = document.createElement('div');
  const shadow = document.createElement('div');
  const layers = document.createElement('div');

  container.className = 'card-container';
  shine.className = 'card-shine';
  shadow.className = 'card-shadow';

  const layer = document.createElement('div');
  const imageSource = cardLayer.getAttribute('data-img');

  layer.className = 'card-rendered-layer';
  layer.style.backgroundImage = `url(${imageSource})`;

  layers.appendChild(layer);
  card.appendChild(container);
  [shadow, layers, shine].forEach(child => container.appendChild(child));

  card.style.transform = `perspective(${card.clientWidth * 3}px)`;

  const listeners: CardListeners = {
    mouseMove: event => mouseMove(event as MouseEvent, card, shine),
    mouseEnter: () => mouseEnter(card),
    mouseLeave: () => mouseLeave(card, layer, shine),
  };

  card.addEventListener('mousemove', listeners.mouseMove);
  card.addEventListener('mouseenter', listeners.mouseEnter);
  card.addEventListener('mouseleave', listeners.mouseLeave);

  return listeners;
};
