import * as Accordion from '@radix-ui/react-accordion';
import { CheckIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HowToBuy = () => {
  const { t } = useTranslation();
  const steps = [
    t('guide_step1'),
    t('guide_step2'),
    t('guide_step3'),
    t('guide_step4'),
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {t('howtobuy')}
      </Typography>
      <Accordion.Root type="single" collapsible style={{ width: '100%', maxWidth: 600 }}>
        {steps.map((step, index) => (
          <Accordion.Item value={`step-${index}`} key={index} style={{ marginBottom: 4 }}>
            <Accordion.Header>
              <Accordion.Trigger style={{ all: 'unset', display: 'flex', alignItems: 'center', padding: 8, backgroundColor: '#f0f0f0', cursor: 'pointer' }}>
                <CheckIcon style={{ marginRight: 8, color: '#06d702' }} />
                {step}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content style={{ padding: '8px 16px', border: '1px solid #e2e2e2' }}>
              {step}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
};

export default HowToBuy;
