import React from 'react'
import '../css/NewArraival.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from '../assets/images'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function NewArraival() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        initialSlide: 0,
     
        
    };
  return (
    <>
        <div className='new__arraival'>
            <div className='new__arraival__content'>
                <div className='text'>
                    <label>New Arrival</label>
                </div>
                <div className='new_arrival_cards'>
                   
                <Slider {...settings}>
                    {
                        data.map((d) => {
                            return (
                                <div className='cards'>
                                    <Card sx={{ maxWidth: 180 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={d.img}

                                            />
                                            <CardContent>
                                                
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <lable className='brand'>{d.brand}</lable>
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    <lable className='name'>{d.name}</lable>
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    <lable className='price'><FontAwesomeIcon className='icon' icon={faIndianRupeeSign} />{d.price}</lable>
                                                </Typography>
                                                
                                                
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>

                            );
                        })
                    }
                </Slider>

                
                </div>
            </div>
        </div>
    </>
  )
}


const data =[

    {
        name: 'Black Wayfarer Men Sunglasses',
        img: [IMAGES.fb_banner1],
        brand: 'titan',
        gender: 'men',
        rim: 'Rimmed',
        frameshap: 'Round',
        size: 'Medium',
        price: '2600',
        color: 'yellow',
        frame_width: '145mm',
        frame_colour: 'yellow',
    },
    {
        name: 'Black Wayfarer Sunglasses for Men',
        img: [IMAGES.fb_banner1],
        brand: 'fastrack',
        gender: 'men',
        rim: 'Rimmed',
        frameshap: 'Wayfarer',
        size: 'Medium',
        price: '999',
        color: 'black',
        frame_width: '144mm',
        frame_colour: 'black',
    },
    {
       name: 'Yellow Round Rimmed Eyeglasses ',
       img: [IMAGES.fb_banner3],
       brand: 'fastrack',
       gender: 'men',
       rim: 'Rimmed',
       frameshap: 'Wayfarer',
       size: 'Medium',
       price: '999',
       color: 'yellow',
       frame_width: '141mm',
       frame_colour: 'black',
   },
   

   {
    name: 'Black Wayfarer Sunglasses for Men',
    img: [IMAGES.fb_banner1],
    brand: 'fastrack	',
    gender: 'men',
    rim: 'Rimmed',
    frameshap: 'Wayfarer',
    size: 'Medium',
    price: '899',
    color: 'grey',
    frame_width: '140mm',
    frame_colour: 'grey',
},
{
    name: 'Brown Round Rimmed Eyeglasses ',
    img: [IMAGES.fb_banner6],
    brand: 'titan',
    gender: 'men',
    rim: 'Rimmed',
    frameshap: 'Round',
    size: 'Medium',
    price: '750',
    color: 'brown',
    frame_width: '140mm',
    frame_colour: 'Brown',
},

{
       name: 'Black Square Rimmed Eyeglasses ',
       img: [IMAGES.fb_banner7],
       brand: 'titan',
       gender: 'men',
       rim: 'Rimmed',
       frameshap: 'square',
       size: 'Medium',
       price: '1000',
       color: 'black',
       frame_width: '140mm',
       frame_colour: 'black',
   },
   {
    name: 'Black Aviator Rimless Eyeglasses ',
    img: [IMAGES.fb_banner8],
    brand: 'titan',
    gender: 'men',
    rim: 'Rimmless',
    frameshap: 'Round',
    size: 'Medium',
    price: '750',
    color: 'black',
    frame_width: '140mm',
},

{
       name: 'Black Pilot Rimmed Eyeglasses ',
       img: [IMAGES.fb_banner9],
       brand: 'fastrack',
       gender: 'men',
       rim: 'Rimmed',
       frameshap: 'Pilot',
       size: 'Medium',
       price: '1000',
       color: 'black',
       frame_width: '140mm',
       frame_colour: 'black',
   },
{
       name: 'Black Wayfarer Rimmed Eyeglasses ',
       img: [IMAGES.fb_banner10],
       brand: 'Fastrack',
       gender: 'men',
       rim: 'Rimmed',
       frameshap: 'Wayfarer',
       size: 'Medium',
       price: '1000',
       color: 'black',
       frame_width: '126mm',
       frame_colour: 'black',
   },
]


export default NewArraival