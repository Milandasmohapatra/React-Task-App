
import { useState } from "react";
import './Home.css';

export default function HomeComponent() {

 
  
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState({ title: '', description: '' });
 
   const addTask = () => {
     if (newTask.title && newTask.description) {
       setTasks([...tasks, { ...newTask, completed: false, id: Date.now() }]);
       setNewTask({ title: '', description: '' });
     }
   };
   const completeTask = (taskId) => {
     const updatedTasks = tasks.map((task) =>
       task.id == taskId ? { ...task, completed:!task.completed }:task
     );
     setTasks(updatedTasks);
   };
   const deleteTask = (taskId) => {
     const updatedTasks = tasks.filter((task) => task.id !== taskId);
     setTasks(updatedTasks);
   };
   const editTask = (editedTask) => {
      const updatedTasks = tasks.map((task) =>
        task.id == editedTask.id ? { ...editedTask } : task
      );
      setTasks(updatedTasks);
    };
 
   return (
     <div className="Home">
       <h1 style={{"marginLeft":"-200px"}}>Task List</h1>
       <form>
         <dl>
          <dt style={{"marginLeft":"-200px"}}>Title:</dt>
          <dd><input   type="text" className='form-control w-75' id="title"value={newTask.title}  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}/> </dd>
          <dt style={{"marginLeft":"-200px"}}>Description:</dt>
          <dd> <input  type="text"  className='form-control w-75' id="description"  value={newTask.description}  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
           <button type="button" className="btn btn-primary mt-2 " style={{"marginLeft":"-200px"}} onClick={addTask}> Add Task  </button></dd>
         </dl>
       </form>
       <div className="task-list">
         {tasks.map((task) => (
           <Task
             key={task.id}
             task={task}
             onComplete={completeTask}
             onDelete={deleteTask}
             onEdit={editTask}
           />
         ))}
       </div>
     </div>
   );
 }
 function Task({ task, onComplete, onDelete ,onEdit}){
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

   const taskStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',color: task.completed ? 'red' : 'black', 
    
  };
   


const handleEdit = () => {
  setIsEditing(!isEditing);
};

const handleSave = () => {
  onEdit(editedTask);
  setIsEditing(false);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditedTask({ ...editedTask, [name]: value });
};
     
 
    return(
     <div>
         <div className={`task ${isEditing ? 'editing' : ''}`} style={taskStyle}>
         {isEditing ? (                          //ternary oprator
         <div className="edit-form">
         <span>
         <input type="text"  className='form-control w-100'  name="title"value={editedTask.title} onChange={handleInputChange}/>
         <input  type="text" className="form-control w-100"   name="description" value={editedTask.description}onChange={handleInputChange}/>
         <button onClick={handleSave} className="btn btn-warning mt-2">Save</button>
         </span>
         </div>
          ) : (                                    //midle of ternary
           <div > 
             <h3 className="mb-4">{task.title}</h3>
              <p>{task.description}</p>
           </div>
           )}
           <button className="btn btn-primary w-25" onClick={() => onComplete(task.id)}>
           {task.completed ? 'Un Completed': 'Completed'}
           </button>
           <button className="btn btn-primary w-25" onClick={handleEdit}>{isEditing ? 'Cancel' : 'Edit'}</button>
           <button className="btn btn-primary w-25" onClick={() => onDelete(task.id)}>delete</button>
           </div>                                    
        </div>
    
    
    );
}