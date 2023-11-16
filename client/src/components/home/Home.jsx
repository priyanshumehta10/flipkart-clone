
//Components
import Slide from './Slide';
import Navbar from './Navbar'
import Banner from './Banner'
import React,{ Fragment,useEffect } from 'react'
import {Box, styled} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions/productActions';
import Midslide from './Midslide';
import MidSection from './MidSection';

const Component = styled(Box)`
padding: 10px;
background-color:#F2F2F2;
`;
const Home = () => {
  const {products} = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <Fragment>
        <Navbar/>
        <Component>
            <Banner/>
            <Midslide
                    products={products} 
                    title='Deal of the Day'
                    timer={true} 
                     
                />
                <MidSection/>
            <Slide
                    products={products} 
                    title='Discounts for You'
                    timer={false} 
                     
                />
                <Slide
                    products={products} 
                    title='Suggested Items'
                    timer={false} 
                     
                />
                <Slide
                    products={products} 
                    title='Top Selection'
                    timer={false} 
                     
                />
                <Slide
                    products={products} 
                    title='Recommended Items'
                    timer={false} 
                     
                />
        </Component>


    </Fragment>

  )
}

export default Home
