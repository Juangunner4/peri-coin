import React from 'react';
import '../styles/WhyPerico.css';
import { useTranslation } from 'react-i18next';

const items = [
  { emoji: '🕊️', key: 'why1' },
  { emoji: '🛫', key: 'why2' },
  { emoji: '🎉', key: 'why3' }
];

const WhyPerico = () => {
  const { t } = useTranslation();
  return (
    <section className="why-perico">
      <h2>{t('whyTitle')}</h2>
      <div className="why-items">
        {items.map((item, i) => (
          <div className="why-item" key={i}>
            <span className="emoji">{item.emoji}</span>
            <p>{t(item.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPerico;
