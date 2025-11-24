const BASE = 'http://localhost:5000/api/items';


export const fetchItems = () => fetch(BASE).then(r => r.json());
export const createItem = (data) => fetch(BASE, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}).then(r=>r.json());
export const updateItem = (id, data) => fetch(`${BASE}/${id}`, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)}).then(r=>r.json());
export const deleteItem = (id) => fetch(`${BASE}/${id}`, { method: 'DELETE'}).then(r=>r.json());