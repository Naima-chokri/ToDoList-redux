import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SingleItem from '../SingleItem/SingleItem'

const ListItem = () => {
    const db = useSelector((state) => state.todo.data)
    const [datafilter, setDatafilter] = useState('all')
    const ALLTask = () => {
      setDatafilter('all')
    }
    const DoneTask = () => {
      setDatafilter('Done')
    }
    const NotdoneTask = () => {
      setDatafilter('NotDone')
    }
  return (
  <div className="row d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="fa fa-tasks" />&nbsp;Task Lists</div>
            </div>
            <div className="scroll-area-sm">
              <perfect-scrollbar className="ps-show-limits">
                <div style={{position: 'static'}} className="ps ps--active-y">
                  <div className="ps-content">
                    <ul className=" list-group list-group-flush"></ul>
                    {datafilter==='Done'
                    ? db.filter(el=>el.isDone===true).map(el => <SingleItem  el={el}/>) 
                    : (datafilter==='NotDone'
                    ? db.filter(el=>el.isDone===false).map(el => <SingleItem  el={el}/>) 
                    :  db.map(el => <SingleItem  el={el}/>))}
                  </div>
                </div>
              </perfect-scrollbar>
            </div>
            <div   style={{marginBottom: 35 , marginLeft: 35}} class="col-md-12 ">
                <div class="row">
                  <div class="col-sm">
                  <button onClick={ALLTask} className="btn btn-primary">ALL</button>
                  </div>
                  <div class="col-sm">
                  <button onClick={DoneTask} className="btn btn-success">DONE</button>
                  </div>
                  <div class="col-sm">
                  <button onClick={NotdoneTask} className="btn btn-danger">NOTDONE</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
</div>
  )
}

export default ListItem
