import {Box} from '@mui/material'
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import DataProvider from './context/DataProvider';


import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  
  return (
    <DataProvider>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Header/>
        <Box style={{marginTop:54}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<DetailView/>} />
            <Route path='/cart' element={<Cart/>} />
          
          </Routes>
        </Box>
        </ThemeProvider>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
