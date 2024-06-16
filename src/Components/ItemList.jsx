import React from "react";
import { useEffect } from "react";
import { useState } from "react";
 const ListItem =  () =>{
    const [items,setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/api/items')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => {
            console.error('Error',error);
        });
    },[]);

    return(
        <div className="item-list">
            <h1>Items List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>{item.name}:{item.description}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListItem;