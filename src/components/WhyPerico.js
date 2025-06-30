import React from 'react';
import '../styles/WhyPerico.css';

const items = [
  {
    emoji: '🕊️',
    title: 'Soaring Spirit',
    text: 'Perico spreads his wings across the crypto skies.'
  },
  {
    emoji: '🛫',
    title: 'Join the Flight',
    text: 'Hop on board and shout \u201cS\u00e1quenlo!\u201d'
  },
  {
    emoji: '🎉',
    title: 'Feathered Fun',
    text: 'Celebrate every pump with style.'
  }
];

const WhyPerico = () => (
  <section className="why-perico">
    <h2>Why Fly with $PERI?</h2>
    <div className="why-items">
      {items.map((item, i) => (
        <div className="why-item" key={i}>
          <span className="emoji">{item.emoji}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyPerico;
