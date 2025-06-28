import React from 'react';
import MemeGenerator from '../components/MemeGenerator';
import Tokenomics from '../components/Tokenomics';
import Listings from '../components/Listings';
import * as Accordion from '@radix-ui/react-accordion';
import '../styles/About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <Accordion.Root type="single" collapsible className="about-accordion">
        <Accordion.Item value="meme">
          <Accordion.Header>
            <Accordion.Trigger className="about-trigger">
              {t('generatorTitle')}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="about-content">
            <MemeGenerator />
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="tokenomics">
          <Accordion.Header>
            <Accordion.Trigger className="about-trigger">
              {t('tokenomics')}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="about-content">
            <Tokenomics />
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="listings">
          <Accordion.Header>
            <Accordion.Trigger className="about-trigger">
              {t('cex')}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="about-content">
            <Listings />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export default About;
