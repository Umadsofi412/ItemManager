import React from "react";
import { useState } from "react";

const ItemForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted'); 
        const newItem = { name, description };


        fetch('http://localhost:5000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                setName('');
                setDescription('');
                console.log('Item added', data);
            })
    }
    return (
        <form onSubmit={handleSubmit} className="form-main">
            <h1>Item Manager</h1>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>
            <button type="submit">Add Item</button>
        </form>
    )
}
export default ItemForm;