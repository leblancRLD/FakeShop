import React from "react";
import { Outlet,Link } from "react-router-dom";
import './home.css'
import Navbar from './navbar';
import Footer from "./footer";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from "./homeimage";



export default function Welcome() {
    return(
        <>
            <div>
                <Navbar/>
                    <div>
                    <div className="titles">
                        <h1>Welcome to Our Shop</h1>
                    </div>   
                    <ImageList  sx={{ width: 1280, height: 720, margin:4 }} variant="standard" cols={6} gap={9} >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                alt={item.title}
                            />
                 </ImageListItem>
                            ))}
                            </ImageList>
                    </div>
                         
                <Footer/>
            </div>
        </>
    )
}