import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleItem.css'
import 'font-awesome/css/font-awesome.min.css';
import { RemoveItemToStore ,ChangeItemIsDone, UpdateItemDesc } from '../../features/todoReducer';
import { Button, Form, Modal } from 'react-bootstrap';

const SingleItem = ({el}) => {
    const [show, setShow] = useState(false);
    const [inputModal, setInputModal] = useState(el.desc);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const dispatch = useDispatch();
    const removeItem = () =>{
      dispatch(RemoveItemToStore(el.id))
    }
    const changeIsDone = () => {
      dispatch(ChangeItemIsDone(el.id))
    } 
    const updateValue= (e) => {
      
      setInputModal(e.target.value)
    }
    const changeDesc= () => {
      console.log("hello")
      dispatch(UpdateItemDesc({id:el.id,desc:inputModal}))
    }
    
  return (
    // <div>
    //         {el.desc}
    //     <button onClick={removeItem}>X</button>
    //     <button>Edit</button>
    //     <button>IsDone</button>
    // </div>
    <>
        <li className="list-group-item">
                  <div className={`${el.isDone===true?'bg-success':'bg-danger'} todo-indicator`} />
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-2">
                      </div>
                      <div className="widget-content-left">
                        <div className="widget-heading">{el.desc} <div className="badge badge-danger ml-2">Rejected</div>
                        </div>
                        <div className="widget-subheading"><i>By Naima</i></div>
                      </div>
                      <div className="widget-content-right">
                        {/* <button  className="border-0 btn-transition btn" className={el.isDone==true?'btn-outline-success':'btn-outline-danger'}> */}
                        <button onClick={changeIsDone} className={`${el.isDone===true?'btn-outline-success':'btn-outline-danger'} border-0, btn-transition, btn`} style={{border:'none'}}>
                        
                          <i className="fa fa-check" /></button>
                        <button onClick={removeItem} className="border-0 btn-transition btn btn-outline-danger">
                          <i className="fa fa-trash" />
                        </button>
                        <button variant="primary" onClick={handleShow}className="border-0 btn-transition btn btn-outline-primary">
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                        </button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Update Task</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>  <Form.Label>Description</Form.Label>
                                        <Form.Control
                                          type="text"
                                          value={inputModal}
                                          autoFocus
                                          onChange={updateValue}
                                          />
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button  variant="primary" onClick={()=>{changeDesc();handleClose()}}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                       
                      </div>
                    </div>
                  </div>
        </li>  
    </>
                //////////////////////
                 
         

  )
}

export default SingleItem