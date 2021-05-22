import React from 'react';
import './List.css';


 function List(props) {

    const deleteItem=(key)=>{
         const newList=props.itemList.filter(itemobj =>{
           return itemobj.key !== key;
        });
        props.setItemList(newList)
    }
    return (
        <div className ="list">
           
            {props.itemList.map(itemobj=>{
                
                return <div>
                <p key ={itemobj.key}>{itemobj.item}
                <button id='btn' onClick={()=>deleteItem(itemobj.key)}>Delete</button> </p>
                </div>
            })}
           
        </div>
    )
}
export default List;