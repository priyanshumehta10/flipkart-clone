import { Box, Button,styled } from "@mui/material"
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions"
import { useState } from "react";
import { payUsingPaytm } from "../service/api";
import {post} from "../../utils/paytm";

const LeftComponent = styled(Box)(({theme}) => ({
  minWidth: "40%",
padding : "40px 0 0 80px",
  [theme.breakpoints.down("lg")]:{
    padding:"20px 40px"
  }
}));

const Image = styled("img")({
  padding:"15px",
  width:"90%",
  textAlign:"center"
})
const StyledButton = styled(Button)(({theme})=>({
width: "49%",
height: "50px", 
borderRadius : "2px",
marginTop:20,
[theme.breakpoints.down("lg")]:{
  width:"49%"
},
[theme.breakpoints.down("sm")]:{
  width:"46%"
}
}))



const ActionItems = ({product}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = product;
  const [quantity,setQuantity] = useState("1")

  const addItemToCart =() =>{
    dispatch(addToCart(id,quantity));
    navigate("/cart")

  }
  const buyNow =async() =>{
    let response =  await payUsingPaytm({amount:500,email:'mehtapriyanshu1028@gmail.com'})
    let information = {
      action :"http://securegw-stage.paytm.in/order/process",
      params:response
    }
    post(information);
  }

  return (
    <LeftComponent>
      <Box style={{padding: " 15px 20px",border: "1px solid #f0f0f0"}}>
        <Image src={product.detailUrl} alt="product" />
        </Box>
        <StyledButton variant="contained" onClick={()=> addItemToCart()} style={{marginRight:3,background:"#ff9f00"}}><Cart/>Add to Cart</StyledButton>
        <StyledButton variant="contained" onClick={()=> buyNow()} style={{background:"#FB541B"}}><Flash/>Buy Now</StyledButton>
    </LeftComponent>
  )
}

export default ActionItems
