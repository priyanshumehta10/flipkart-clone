

import {Box, Button, Typography,Badge} from '@mui/material'
import React,{useState,useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import styled from '@emotion/styled'
import { DataContext } from '../../context/DataProvider'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
//Component
import LoginDailog from '../login/LoginDailog'
import Profile from './Profile'

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration:"none",
  color:"inherit",
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    font-weight: 600;
    border-radius: 2;
    padding: 5px 40px;
    height: 32;
    box-shadow: none;
   `
const CustomButtons = () => {

  const [open, setOpen] = useState(false);
  const{account,setAccount}=useContext(DataContext);
  const {cartItems} = useSelector(state=>state.cart)

  const openDailog =()=>{
    setOpen(true);
  }

  return (
    <Wrapper>
      {
        account? <Profile account={account} setAccount={setAccount}/>:
       <LoginButton variant='contained' onClick={()=>openDailog()}>login</LoginButton>
      }
       <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
       <Typography style={{marginTop:3}}>More</Typography>
       <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color='secondary'>
        <ShoppingCartIcon/>
        </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
       </Container>
       <LoginDailog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons
