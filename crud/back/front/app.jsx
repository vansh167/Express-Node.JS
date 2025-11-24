import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, updateItem, deleteItem } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';


export default function App(){
const [items, setItems] = useState([]);
const [editItem, setEditItem] = useState(null);


const load = () => fetchItems().then(setItems);
useEffect(() => { load(); }, []);


const handleCreate = async (data) => {
await createItem(data);
load();
}


const handleUpdate = async (id, data) => {
await updateItem(id, data);
setEditItem(null);
load();
}


const handleDelete = async (id) => {
await deleteItem(id);
load();
}


return (
<div style={{ maxWidth:700, margin:'20px auto', fontFamily:'sans-serif' }}>
<h2>Simple MERN CRUD</h2>
<ItemForm onCreate={handleCreate} onUpdate={handleUpdate} editItem={editItem} />
<ItemList items={items} onEdit={setEditItem} onDelete={handleDelete} />
</div>
)
}