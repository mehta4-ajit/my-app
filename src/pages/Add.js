import React, { useState, useEffect } from "react";
import { RadioGroup,Container,Row,Form,Button } from 'react-bootstrap';
 const Add = ({history}) =>{ 
     const [formData,setFormData]=useState([])
     const handleChange = (e)=> {
         console.log(e.target.name)
         setFormData({...formData,[e.target.name]:e.target.value})
     
    }
    const handleSubmit = (e)=>{
       
        console.log(formData)
        e.preventDefault();
       
        let mobiles = JSON.parse(localStorage.getItem("mobiles") || "[]");
        mobiles.push(formData)
        localStorage.setItem("mobiles", JSON.stringify(mobiles));
        history.push('/')
    }
 return(<>
 <Container>
  <Row>
<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="mobile" placeholder="Mobile name" onChange={handleChange}/>
    <Form.Text className="text-muted">
      enter the model name.
    </Form.Text>
  </Form.Group>

  <div className="form-group"  >
  <Form.Label>Brand</Form.Label>
  <div>
        <div className="form-check form-check-inline">
        <input  className="form-check-input" name="brand" onChange={handleChange} type="radio" id="honor" value="honor"/>
        <label className="form-check-label" >Honor</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" name="brand" onChange={handleChange} type="radio" id="xiaomi" value="xiaomi"/>
        <label className="form-check-label" >Xiaomi</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" name="brand" onChange={handleChange} type="radio" id="samsung" value="samsung"/>
        <label className="form-check-label">samsung</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" name="brand" onChange={handleChange}  type="radio" id="apple" value="apple"/>
        <label className="form-check-label">Apple</label>
        </div>
    </div>    
</div>

  <Form.Group controlId="formBasicPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control name="price"  type="text" placeholder="enter price" onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicRam">
    <Form.Label>Ram</Form.Label>
    <Form.Control name="ram" type="text" placeholder="ram" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicRom">
    <Form.Label>Rom</Form.Label>
    <Form.Control  name="rom" type="text" placeholder="rom" onChange={handleChange}/>
  </Form.Group>
  



  <Button variant="primary" type="submit" onSubmit={handleSubmit}>
    Submit
  </Button>
</Form>
</Row>
</Container>
  
 </>);
 }
 export default Add;