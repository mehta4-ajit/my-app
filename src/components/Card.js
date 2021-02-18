import React, { useState, useEffect } from "react";
import { Card,Button } from 'react-bootstrap';
const MobileCard = ({product:{mobile,brand,price,ram,rom}}) =>{
    return(
        <>
        <Card style={{ width: '15rem' }} className="m-2">
        <Card.Body>
            <Card.Title>{mobile}</Card.Title>
            <Card.Text>
             Brand   {brand}
            </Card.Text>
            <Card.Text>
               Ram {ram}
            </Card.Text>
            <Card.Text>
               Rom {rom}
            </Card.Text>
            <Button variant="primary">Rs {price}</Button>
        </Card.Body>
        </Card>
        </>
    )
}
export default MobileCard


