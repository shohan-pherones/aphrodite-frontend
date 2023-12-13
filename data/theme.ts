import { createTheme } from '@mui/material/styles';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

export const theme = createTheme({
  palette: {
    primary: {
      main: '#629460',
    },
  },
  typography: {
    fontFamily: lora.style.fontFamily,
  },
});
