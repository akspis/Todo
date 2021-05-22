import React,{useState} from 'react'
import './App.css';
import List from './List';


function App() {
 const [currentItem, setCurrentItem] = useState('')
 const [itemList, setItemList] = useState([])

 const addItem =(e)=>{
   if(currentItem === '') { 
     alert("Add somting to list") }
   else{
   e.preventDefault()
   setItemList([...itemList, {item:currentItem , key: Date.now()}]);
   setCurrentItem('');
 }}

 const deleteAll =() =>{
    setItemList([]);
 }

  return (
    <div className="App">
   <div className="to-do-form">
     <h3>TODO-LIST</h3>
     <p>What's Your Schedule Today.</p>
     <input type="text" placeholder='Enter List'
     value={currentItem} onChange={(e)=> setCurrentItem(e.target.value)}/>
     <button onClick={addItem}>Add</button>
     <List itemList={itemList} setItemList={setItemList}/>
     
     </div>
     <div className='del'><button onClick={deleteAll}>Clear All</button></div>
    </div>
    
  );
}

export default App;
