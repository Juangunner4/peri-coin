import React, { useState } from 'react';
import '../styles/MemeGenerator.css';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const MemeGenerator = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');

  const generateName = () => {
    const random = Math.floor(Math.random() * 1000);
    setName(`PERI${random}`);
  };

  return (
    <Card className="meme-generator">
      <CardContent>
        <Typography variant="h5" component="h2">
          {t('generatorTitle')}
        </Typography>
        <Button onClick={generateName} variant="contained" className="generate-btn" sx={{ mt: 1 }}>
          {t('generate')}
        </Button>
        {name && (
          <TextField
            fullWidth
            margin="normal"
            value={name}
            InputProps={{ readOnly: true }}
            className="generated-name"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default MemeGenerator;
