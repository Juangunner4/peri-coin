import React from 'react';
import '../styles/Manga.css';
import { useTranslation } from 'react-i18next';
import * as Accordion from '@radix-ui/react-accordion';

const Manga = () => {
  const { t } = useTranslation();
  const items = [
    'Perico Adventures - Chapter 5 releasing soon!',
    'Crypto Feathers - New arc drops next week!',
    'The Blockchain Bird - Volume 2 on the way!',
  ];

  return (
    <div className="manga-page">
      <h2>{t('manga')}</h2>
      <Accordion.Root type="single" collapsible className="manga-list">
        {items.map((item, index) => (
          <Accordion.Item value={`item-${index}`} key={index} className="manga-item">
            <Accordion.Header>
              <Accordion.Trigger className="manga-trigger">{item}</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="manga-content">{t('mangaComingSoon')}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <p className="fomo">{t('mangaFomo')}</p>
    </div>
  );
};

export default Manga;
