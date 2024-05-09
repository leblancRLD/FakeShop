import React,{useState} from "react";
import './Buttons.css'
import SimpleModal from "./Modal";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function ButtonsOrder() {
    const [show, setShow] = useState(false)
    const [produs,Setprodus] = useState<number>(0)
    const [totalPurchased, setTotalPurchased] = useState<number>(0);


    function Plus(a:number,b:number): number {
        return(a+b);
        
    }


    function more() {
        Setprodus(produs + 1);
        setTotalPurchased(Plus(totalPurchased,1));
        
    }

    function less() {
        if (produs > 0) {
            Setprodus(produs - 1);
            setTotalPurchased(Plus(totalPurchased, -1));
        }
    }
    function deleteAll() {
        Setprodus(0);
        setTotalPurchased(0);
    }
    return(
        <>
        <div className="MoveMe">
            <Button variant="text" className="ButtonsOrder" type="button" onClick={()=>setShow(true)}>Order</Button>

            <SimpleModal show={show} setShow={setShow}>
                how many stuff yo want to order
                ? 
                <div className="modalo">
                     <Button  variant="text" onClick={more}>More</Button>
                     <h5>{produs}</h5>
                     <Button  variant="text"  onClick={less}>Less</Button>
                     <br></br>
                </div>
                <div className="modalo1">
                     <Button variant="outlined" onClick={()=>setShow(false)}>Accepts</Button>
                     <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteAll}>Delete</Button>  
                </div>
               
            </SimpleModal>
            
                <p>{produs}</p> 
                <Button variant="text" className="delete" startIcon={<DeleteIcon />} onClick={deleteAll}>Delete</Button>   
        </div>
             <div>
                <h3>Total Purchased: {totalPurchased}</h3>
             </div>
        </>
    )
}

export default ButtonsOrder;