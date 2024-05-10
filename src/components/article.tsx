import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import ButtonsOrder from "./Buttons";
import './article.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Margin } from "@mui/icons-material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';




export default function Article() {
    const[value,SetValue]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>SetValue(data))
        .catch(error => console.error('this things doesnt work',error));
    },[])

    const filterproducts = value.filter(prodotti=> 
        prodotti.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return(   
    <>
        <Navbar/>
        <input 
        style={{
            width:'150px',
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            margin:'auto ',
            marginTop:'8px'
        }}
        type="text"
        placeholder="search articles"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <br></br>
        {filterproducts.map(prodotti =>
                <Card className="Card" sx={{ maxWidth: 360 }}>
                    <CardMedia>
                        <div className="containers" key={prodotti.id}>
                            <h2>{prodotti.title}</h2>
                            <p>{prodotti.category}</p>
                            <img className="product" src={prodotti.image} alt="idontknow" />
                            <br></br>
                            <div className="price">
                                <span> €{prodotti.price}</span>
                            </div>
                            <ButtonsOrder />
                        </div>
                    </CardMedia>
                </Card>
            )}
        <br></br>
        <br></br>
        <ButtonGroup variant="text" aria-label="Basic button group" style={{
            margin:10,
            display:"flex",
            justifyContent:"center"
        }}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
        </ButtonGroup>
        <Footer/>    
 </>
    )
}