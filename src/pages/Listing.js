import React, { useState, useEffect } from "react";
// import { Card,Button } from 'react-bootstrap';
import { Menu, Slider,Row,Col ,InputNumber,Button } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import MobileCard from '../components/Card';
const { SubMenu, ItemGroup } = Menu;
 const Listing = ({history}) =>{ 
    const [ brand,setBrand ]=useState('')
     const [ mobiles,setMobiles ]=useState([])
     const [original,setOriginal]=useState([])
     const [price,setPrice] =  useState('1000')
     const handleClick = ()=> {
        history.push('/add')
    }
    useEffect(()=>{
        
        let mobiles = JSON.parse(localStorage.getItem("mobiles") || []);
       
        setMobiles(mobiles)
        setOriginal(mobiles)
    },[])
    const handleSlider = (value) => {
       
        setPrice(value);
        setTimeout(() => {
        //   setOk(!ok);
        }, 300);
        mobiles.filter(mobile=>mobile.price>value)
      };
      const handleChange =(e)=>{
         setBrand(e.target.value)
          e.target.value==""?setMobiles(original):setMobiles(original.filter(mobile=>mobile.brand==e.target.value));
        
         
      }
     
 return(
   
 <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-5">

        <Row>
         Price   
        <Col span={12}>
          <Slider
            disabled={false}
            min={1000}
            max={100000}
            onChange={handleSlider}
            value={typeof price === 'number' ? price : 0}
          />
        </Col>
        
      </Row>
      <Row>
         Brand   
         <div>
        <div className="form-check ">
        <input  className="form-check-input" name="brand" onChange={handleChange} type="radio" id="honor" value="honor"/>
        <label className="form-check-label" >Honor</label>
        </div>
        <div className="form-check ">
        <input className="form-check-input" name="brand" onChange={handleChange} type="radio" id="xiaomi" value="xiaomi"/>
        <label className="form-check-label" >Xiaomi</label>
        </div>
        <div className="form-check ">
        <input className="form-check-input" name="brand" onChange={handleChange} type="radio" id="samsung" value="samsung"/>
        <label className="form-check-label">samsung</label>
        </div>
        <div className="form-check ">
        <input className="form-check-input" name="brand" onChange={handleChange}  type="radio" id="apple" value="apple"/>
        <label className="form-check-label">Apple</label>
        </div>
    </div>
   
      </Row>

        </div>
        <div className="col-md-9">
            <h4 className="text-danger">Products</h4>
            <button onClick={handleClick} className="float-right">Add New</button>
          { mobiles.length < 1 && <p>No products found</p>}
          <div className="row pb-5">
    {brand ?
            mobiles.filter(mobile=>mobile.price>=price&&mobile.brand==brand).map((p) => (
              <div key={p.mobile+p.brand} className="col-md-4 mt-3">
                <MobileCard product={p} />
              </div>
            ))
            :
            mobiles.filter(mobile=>mobile.price>=price).map((p) => (
                <div key={p.mobile+p.brand} className="col-md-4 mt-3">
                  <MobileCard product={p} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
 );
}
export default Listing