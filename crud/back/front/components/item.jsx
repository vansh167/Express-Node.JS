import React, { useEffect, useState } from 'react';


export default function ItemForm({ onCreate, onUpdate, editItem }){
const [name, setName] = useState('');
const [description, setDescription] = useState('');


useEffect(()=>{
if(editItem){
setName(editItem.name || '');
setDescription(editItem.description || '');
} else {
setName(''); setDescription('');
}
}, [editItem]);


const submit = (e) => {
e.preventDefault();
if(!name) return alert('Name required');
const payload = { name, description };
if(editItem) onUpdate(editItem._id, payload);
else onCreate(payload);
setName(''); setDescription('');
}


return (
<form onSubmit={submit} style={{ marginBottom:20 }}>
<div>
<input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
</div>
<div>
<input value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description" />
</div>
<div>
<button type="submit">{editItem ? 'Update' : 'Create'}</button>
</div>
</form>
)
}