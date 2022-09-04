import React from 'react'
import './Cardbody.css'
import { Cardtemplate } from './Cardtemplate'
import Data from '../Data'
import { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import TicketQR from './TicketQR'

import ReactToPrint from 'react-to-print'
import { useForm} from 'react-hook-form'

const Cardbody = () => {

  const [modal, setModal] = useState(false);
  const[secondModal, setsecondModal] = useState(false);
  const [chosen, setChosen]  = useState();
  const [ticketno, setTicketno] = useState();
  const [datevalue, setDatevalue]  = useState();
  const [destination, setDestination]  = useState();
  const [ticketclass, setTicketclass] = useState();


  const ticket = useRef();
  const [unique, setUnique] = useState();
  const ticketprint = useRef();
  const showModal = ()   => {
    setModal(true)
  }
  
  const modalTwo = () => {    
    setUnique()
    setsecondModal(true)
    setModal(false)
  }
  
  const {register,handleSubmit} = useForm()
  return ( 
    
    <div className='row gap-2' style={{display: 'flex', marginLeft: '50px', marginTop: '5%'}}
    onMouseOver='this.style.shadow'>
    
      <Modal id="firstmodal" show={modal} size="lg"  onHide={() => setModal(false)}>
      
     <Modal.Body> 
        <Form onSubmit={handleSubmit((data) => {
          setTicketclass(data.ticketClass)
          setTicketno(data.noTickets)
          setDestination(data.loc)
          setChosen(data.departureTime)
          setDatevalue(data.datechosen)
          modalTwo()
        })}>
        <Form.Label> Departure Date</Form.Label>
        <Form.Control
         {...register('datechosen')}
        type="date" placeholder="Departure Date" required/>
        <label> Section</label>
        <Form.Control required as="select" {...register('ticketClass', {required: true})} custom >
            <option disabled select value> --select an option-- </option>
            <option> First Class</option>
            <option> Second Class</option>
            <option> Third Class</option>
            <option> Economy Class</option>
            <option> Business Class</option>
        </Form.Control >
        
        <Form.Label> No of Tickets</Form.Label>
        <input type = "number" className='form-control' {...register("noTickets", {required: true})}/>
        <Form.Label> Destination</Form.Label>
         <Form.Select {...register("loc", {required:true})}> 

         {Data.map((object) => (<option> {object.location}</option>))}

          </Form.Select> 
        <Form.Label> Departure Time</Form.Label>
        <Form.Select {...register("departureTime", {required: true})} >
            <option > 8.00AM</option>
            <option> 3.00PM</option>
        </Form.Select>
        <button type="submit" style={{width:"25%", margin: "5px"}} className = "btn btn-primary"> NEXT</button>
        </Form>
        </Modal.Body>
    </Modal>

    <Modal id="secondmodal" show={secondModal} onHide={ () => setsecondModal(false)}  size ="lg">
      <Modal.Header>
        TICKET INFORMATION
      
      </Modal.Header>
      <Modal.Body >
      <div ref = {ticketprint} className="container text-center" style={{fontFamily: 'Courier New', fontFamily: 'monospace'}}>
      <div className='row'>
        <div className='col' style ={{textAlign: 'left'}}>
        <h5 > DEPARTURE TIME</h5>
        <h5> DEPARTURE DATE</h5>
        <h4 > DESTINATION</h4>
        <h5> TICKET CLASS</h5>
      </div> 
      <div className='col'>
        <h5> {chosen}</h5>
        <h5> {datevalue}  </h5>
        <h5> {destination}</h5>
        <h5> {ticketclass}</h5>
       
      </div>
      <div  sytle= {{width: "250px", height:"250px"}}>
      <TicketQR />
      </div>
      </div>
     {/*  <img style={{float: "left"}} src="images/railwayslogo.png"/> */}
      </div>
      </Modal.Body>

      <Modal.Footer>
      <ReactToPrint 
        trigger={() => <button className="btn btn-light"> PRINT TICKET</button>}
        content = {() => ticketprint.current}
        onAfterPrint = {() => setsecondModal(false)}
        />
      </Modal.Footer>
    </Modal>

    {Data.map((locs) => (
      <Cardtemplate
      image={locs.image}
      location ={locs.location}
      terminus={locs.terminus}   
      onclick={showModal}
      />
    ))}


    </div>
  )
    }

export default Cardbody 