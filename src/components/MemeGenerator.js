import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { PRIMARY_GREEN } from '../styles/theme';

const MemeGenerator = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');

  const generateName = () => {
    const random = Math.floor(Math.random() * 1000);
    setName(`PERI${random}`);
  };

  return (
    <Card sx={{ p: 2, m: 2, maxWidth: 400, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          {t('generatorTitle')}
        </Typography>
        <Button onClick={generateName} variant="contained" sx={{ mt: 1, backgroundColor: PRIMARY_GREEN, '&:hover': { backgroundColor: '#3c8c3c' } }}>
          {t('generate')}
        </Button>
        {name && (
          <TextField
            fullWidth
            margin="normal"
            value={name}
            InputProps={{ readOnly: true }}
            sx={{ mt: 2 }}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default MemeGenerator;
