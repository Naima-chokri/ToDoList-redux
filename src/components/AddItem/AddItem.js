import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { AddItemToStore } from '../../features/todoReducer';
import './AddItem.css'

const AddItem = () => {
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState('')
    const AddItem = () => {
        dispatch(AddItemToStore(valueInput))
    }
    const changeValue = (e) => {
        setValueInput(e.target.value)
    }

  return (
    <div className="row d-flex justify-content-center container">
        <div className='Addbloc col-md-8'>
          <Form.Control size="lg" type="text"  value={valueInput} onChange={changeValue} placeholder="Add Task"  autoFocus/>
            <br />
            <button onClick={AddItem} className="btn btn-primary">Add Task</button>
        </div>
    </div>
  )
}

export default AddItem