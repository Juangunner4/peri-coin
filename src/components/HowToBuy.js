import * as Accordion from '@radix-ui/react-accordion';
import { CheckIcon } from '@radix-ui/react-icons';
import '../styles/HowToBuy.css';
import { useTranslation } from 'react-i18next';

const HowToBuy = () => {
  const { t } = useTranslation();
  const steps = [
    t('guide_step1'),
    t('guide_step2'),
    t('guide_step3'),
    t('guide_step4'),
  ];

  return (
    <section className="how-to-buy">
      <h2>{t('howtobuy')}</h2>
      <Accordion.Root type="single" collapsible className="accordion-root">
        {steps.map((step, index) => (
          <Accordion.Item value={`step-${index}`} key={index} className="step-item">
            <Accordion.Header>
              <Accordion.Trigger className="step-trigger">
                <CheckIcon className="icon" />
                {step}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="step-content">
              {step}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default HowToBuy;
