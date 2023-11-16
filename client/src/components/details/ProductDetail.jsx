
import { Typography,Box,styled, TableCell,Table,TableRow,TableBody } from "@mui/material"
import {LocalOffer as Badge}from '@mui/icons-material';


const SmallText = styled(Box)`
font-size:14px ; 
vertical-align:baseline;
  & > p {
    font-size:14px;
    margin-top:10px;
  }`

  const StyledBatch = styled(Badge)`
  margin-right:10px;
  color: #00CC00;
  font-size:15px;
  `;
  const ColoumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align:baseline;;
  margin-top: 10px;
  & > td {
    font-size: 14px;
    border:none;
  }
  `;
const ProductDetail = ({product}) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const date = new Date(new Date().getTime()+(5*24*60*60*1000))
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
   <>
   <Typography>{product.title.longTitle}</Typography>
    <Typography style={{marginTop:5,color:"#878787",fontSize:14}}>
    8 Ratings & 1 Review 
    <Box component="span"><img src={fassured} alt="assureed" style={{width:77,marginLeft:20}} /></Box>
    </Typography>
    <Typography>
    <Box component="spam" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp; &nbsp; &nbsp;
    <Box component="spam" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp; &nbsp; &nbsp;
    <Box component="spam" style={{color:"#388E3C"}}>₹{product.price.discount}</Box>
    </Typography>
    <SmallText>
      <Typography><StyledBatch/>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</Typography>
      <Typography><StyledBatch/>10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</Typography>
      <Typography><StyledBatch/>10% off on Kotak Bank Credit Card EMI Txns, up to ₹1500 on orders of ₹5,000 and aboveT&C</Typography>
      <Typography><StyledBatch/>Special PriceGet extra 35% off (price inclusive of cashback/coupon)T&C</Typography>
      <Typography><StyledBatch/>Buy this product & get ₹75 off on your next purchase of FansT&C</Typography>
    </SmallText>
    <Table>
      <TableBody>
        <ColoumnText>
          <TableCell style={{color: "#878787"}}>
            Delivery
          </TableCell>
          <TableCell style={{fontWeight:600}}>
            Delivery by {date.toDateString()} | ₹40
          </TableCell>
        </ColoumnText>
        <ColoumnText>
          <TableCell style={{color: "#878787"}}>
            Warranty
          </TableCell>
          <TableCell >
            No Warranty
          </TableCell>
        </ColoumnText>
        <ColoumnText>
          <TableCell style={{color: "#878787"}}>
            Seller
          </TableCell>
          <TableCell >
          <Box component="spam" style={{color:"#2874f0"}}>SuperComNet</Box>
          <Typography>GST invoice available</Typography>
          <Typography>view more sellers starting from ₹{product.price.cost}</Typography>
          </TableCell>
        </ColoumnText>
        <ColoumnText>
          <TableCell colSpan={2}>
           <img src={adURL} style={{width:390}} alt="supercoin" />
          </TableCell>
        </ColoumnText>
        <ColoumnText>
          <TableCell style={{color: "#878787"}}>
           Description
          </TableCell>
          <TableCell style={{}}>
            {product.description}
          </TableCell>
        </ColoumnText>
      </TableBody>
    </Table>
   </>
  )
}

export default ProductDetail
