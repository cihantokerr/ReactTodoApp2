import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import './task.css'
import React from 'react';

function Task({task_value,ID,DeleteFunction}){

    return(

        <div id="task-body" className="container w-50 d-flex justify-content-start align-items-center">

            <div id='text-div' className='container w-75 d-flex justify-content-start align-items-center'>{task_value}</div>

            <div id='delete-button-div' className='container w-25 d-flex justify-content-end align-items-center'>
                <button type='button' className='btn btn-danger' onClick={DeleteFunction}>Delete</button>
            </div>


        </div>
    )
}


export default Task;