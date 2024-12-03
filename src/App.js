import {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Task from './components/Task';

function App() {

  var[Taskname,setTaskname]=useState("");
  var[TaskArray,setTaskArray]=useState([]);
  var[SearchText,setSearchText]=useState("");
  var[SearchArray,setSearchArray]=useState([]);

  var matches=[];//This array is going to keep the matches from searching

  //Adding function
  function AddTask(e){

    e.preventDefault();

    //Adding Task into the array
    setTaskArray([...TaskArray,Taskname]);
  }




  //Deleting task function
  function DeleteTask(index){

    setTaskArray((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }



  //Searching function
  function SearchFunc(e){
    
    e.preventDefault();

    for(var i=0;i<TaskArray.length;i++){

      //If there are tasks with the searching text;Put them into the array
      if(TaskArray[i]==SearchText){
        matches.push(TaskArray[i]);
      }
    }

    setSearchArray(matches);
  }



  useEffect(()=>{
    console.log("Task Array:",TaskArray);
  },[TaskArray]);


  useEffect(()=>{
    console.log("Search Array:",SearchArray);
  },[SearchArray]);


  return (
    <div className="App">
      <h1 id='header'>Todo List</h1>

      <div id="input-div" className="container-fluid d-flex justify-content-center pt-5">

        <form onSubmit={AddTask}>
          <div className="form-group">
            <input type="text" onChange={(e)=>setTaskname(e.target.value)} required className="form-control" id="task-input"  placeholder="Task..."/>
          </div>
          <button type="submit" className="btn btn-success">Add Task</button>
        </form>

      </div>

      <br/>
      <br/>
      <br/>
      <br/>


      <h1 id="search-text">Todo's</h1>

      <div id='tasks-div' className='container-fluid d-flex justfiy-content-center flex-column gap-2 pt-3'>

        {
          //Displaying Tasks
          TaskArray.map((item,index)=>{
            
            return(
              <>
                <Task ID={index} task_value={item} DeleteFunction={()=>{DeleteTask(index)}}/>
              </>
            )

          })
        }

      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <h1 id='search-text'>Search</h1>


      <div id="search-div" className="container-fluid d-flex justify-content-center pt-5">

        <form onSubmit={SearchFunc}>
          <div className="form-group">
            <input type="text" onChange={(e)=>setSearchText(e.target.value)} required className="form-control" id="task-input"  placeholder="Task..."/>
          </div>
          <button type="submit" className="btn btn-success">Search</button>
        </form>

      </div>


      <div id='tasks-div' className='container-fluid d-flex justfiy-content-center flex-column gap-2 pt-3'>
        {
          //Displaying Tasks
          SearchArray.map((item,index)=>{
            
            return(
              <>
                <Task ID={index} task_value={item} DeleteFunction={()=>{DeleteTask(TaskArray.indexOf(item))}}/>
              </>
            )

          })
        }

      </div>
      

    </div>
  );
}

export default App;
