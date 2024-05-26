import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TASKS_STATUSES = ["Unstarted", "In Progress", "Completed"]

const Task = (props) => {

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value)
  }

  function onDeleteTask(){
    props.onDeleteTask(props.task.id)
  }

  return (
    <>
    <div onChange={onStatusChange} class="custom-select">
      <select defaultValue={props.task.status}>
        {TASKS_STATUSES.map(status =>
          <option value={status} key={status}>{status}</option>
        )}
      </select>
      </div>

    <h2 
      className='card-title mt-3 text-uppercase px-2' 
      style={{color: '#3a4'}}
    >
      {props.task.title}
    </h2>
    <p className='card-text mb-3 text-muted front-weight-bold px-2'
    >
      {props.task.description}
    </p>
  <FontAwesomeIcon 
  icon={faTrash}
  style={{color: 'tomato', cursor: 'pointer'}}
  onClick={() => onDeleteTask(props.task.id)}
  />
    </>
  )
}

export default Task
