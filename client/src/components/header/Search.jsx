import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%%;
  background-color: #fff;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const SearchIconWrapper = styled(Box)`
margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const ListWrapper = styled(List)`
position: absolute;
background-color: #FFFFFF;
color: #000;
margin-top:36px;
`
const Search = () => {
  const [text, setText] = useState("")
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  const getText = (text) => {
    dispatch(getProducts())
    setText(text)
  }
  return (

    <SearchContainer>
      <InputSearchBase
        placeholder='Search for products,brands and more'
        onChange={(e) => getText(e.target.value)} 
        value={text}/>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {
        text &&
        <ListWrapper>
          {
           products
           .filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
           .map(product => (
             <ListItem key={product.id}>
              <Link to={`/product/${product.id}`} onClick={()=>setText("")} style={{textDecoration:"none", color:"inherit"}}>
               {product.title.longTitle}
              </Link>
             </ListItem>
           ))
         
          }
        </ListWrapper>
      }
    </SearchContainer>

  )
}

export default Search
