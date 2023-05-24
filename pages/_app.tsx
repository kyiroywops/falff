import '../styles/globals.css';
import { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const basicTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={basicTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
