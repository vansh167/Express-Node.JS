import React from 'react';


export default function ItemList({ items, onEdit, onDelete }){
if(!items || items.length === 0) return <div>No items</div>


return (
<div>
{items.map(it => (
<div key={it._id} style={{ border:'1px solid #ddd', padding:8, marginBottom:8 }}>
<strong>{it.name}</strong>
<p>{it.description}</p>
<div>
<button onClick={()=>onEdit(it)}>Edit</button>
<button onClick={()=>{
if(window.confirm('Delete?')) onDelete(it._id);
}}>Delete</button>
</div>
</div>
))}
</div>
)
}