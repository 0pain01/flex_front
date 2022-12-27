import { Button,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';
import axios from 'axios';

function Register(){
    const [name,setName]=useState('');
    const [Age,setAge]= useState('');
    const [DOJ,setDOJ] =useState('');
    const [batch,setBatch]=useState('');
    const [pay,setPay]=useState(true);
    const [paid,setPaid]=useState(false);

    const handleChange = (e)=>{
        setBatch(e.target.value);
    }

    const completePayment = (e)=>{
        e.preventDefault()
        setPaid(true)
        setPay(e.target.value);
    }

    const handleSubmit = (e)=>{
        console.log(e);
        e.preventDefault()
        const x = {
            method:"post",
            url:"https://flex-back-omega.vercel.app/register",
            data : {
                name,
                Age,
                DOJ,
                batch,
                paid
            }
        }

        var ag = Number(Age)
        if((ag>=18) && (ag<=65))
        {
            axios(x)
            .then((result)=>{
                console.log("success");
            }).catch((error)=>{
                console.log("failed");
            })
        }
        else
        {
            alert("invalid age!!");
        }
        
    }
    return (
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="doj">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control value={DOJ} onChange={(e)=>{setDOJ(e.target.value)}} placeholder="dd-mm-YY" />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="Age">
            <Form.Label>Age</Form.Label>
            <Form.Control value={Age} onChange={(e)=>{setAge(e.target.value)}} />
            </Form.Group>

            <Form.Group as={Col} controlId="batch">
            <Form.Label>Batch</Form.Label>
            <Form.Select value={batch} onChange={handleChange} defaultValue="Choose...">
                <option value="6-7 AM">6-7 AM</option>
                <option value="7-8 AM">7-8 AM</option>
                <option value="8-9 AM">8-9 AM</option>
                <option value="5-6 PM">5-6 PM</option>
            </Form.Select>
            </Form.Group>
        </Row>
        <Button variant="primary" type="submit" onClick={(e)=>completePayment(e)}>
            Pay Now
        </Button> <br></br><br></br>
        {
            pay? <p style={{color:"red"}}>pay 500 to continue!!</p> : <p style={{color:"green"}}>amount paid</p>
        }
        <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
            Submit
        </Button>
    </Form>
    );
}

export default Register;
