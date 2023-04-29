import { useState, useEffect } from 'react'
import './App.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import {getItems, deleteItem, getCategories, filterItems} from '../utils/api'
import ItemForm from './components/ItemForm';
import UpdateForm from './components/UpdateForm';
function App() {

  const [items, setItems] = useState([])
  const [filter, setFilter] = useState("")
  const [filterOptions, setFilterOptions] = useState(["All"])
  const [isNewItem, setIsNewItem] = useState(false)
  const [isUpdateItem, setIsUpdateItem] = useState(false)
  const [updateItem, setUpdateItem] = useState(null)
 
  const gridStyle = {
    display: isNewItem  || isUpdateItem ? "grid" : "flex",
    justifyContent: "space-evenly"
  }
  useEffect(() => {
    getItems().then(response => setItems(() => [...response.data]));
    getCategories().then(response => setFilterOptions(previous => [...previous,...response.data]))
  },[])

  useEffect(() => {
    if(filter === "" || filter === "All"){
      getItems().then(response => setItems(() => [...response.data]))
    } else {
      filterItems(filter).then(response => setItems(() => [...response.data]))
    }
  }, [filter])

  const deleteItemById = (itemId) => {
    deleteItem(itemId).then(() => {
      setItems((previous) => previous.filter(item => item.id !== itemId))
    })
  }

  const update = (item) => {
    setIsUpdateItem(() => !isUpdateItem);
    setUpdateItem(() => item);
  }

  const deleteButton = (item) => <Button icon="pi pi-trash" rounded text raised  severity="danger" aria-label="Cancel" onClick={() => deleteItemById(item.id)}/>
  const updateButton = (item) => <Button icon="pi pi-pencil" rounded text raised  severity="help" aria-label="Cancel" onClick={() => update(item)}/>

  const color = (item) => {
    return <div style={{width: "30px", height: "30px", backgroundColor: `${item.description.color}`, borderColor: `${item.description.color}`}}></div>
  }
  const image = (item) => {
    return <img src={`${item.image}`} alt={item.image} style={{width: "70px", height: "70px"}} />;
};

const header = (
  <div className='grid-container'
  style={{ display: "grid", justifyContent: "space-evenly"}}>
      <p style={{ gridColumn: "1 / 2", color: "#150C56"}}>My Wardrobe 👗 </p>
      <Dropdown style={{ gridColumn: "2 / 3"}} placeholder="Filter" value={filter} onChange={(event) => setFilter(event.value)} options={filterOptions}/>
      <Button style={{ gridColumn: "3 / 4", backgroundColor: "#FFD237", color: "#000", borderColor: "#FFD237"}} label="Add new item" onClick={() => setIsNewItem(!isNewItem)}/>
  </div>
);
  return (
    <div className="App">
      <h1 style={{ color: "#6C3800", fontFamily: "monospace" }}>
        Some fancy fashion quote!
      </h1>
      <div style={gridStyle}>
        <DataTable
          style={{ gridColumn: "1/2" }}
          value={items}
          paginator
          rows={5}
          dataKey="id"
          header={header}
        >
          <Column header="Name" field="name"></Column>
          <Column header="Image" body={image}></Column>
          <Column header="Color" field="color" body={color}></Column>
          <Column header="Size" field="description.size"></Column>
          <Column header="Category" field="description.category"></Column>
          <Column body={updateButton}></Column>
          <Column body={deleteButton}></Column>
        </DataTable>
        {isNewItem && <ItemForm setIsNewItem={setIsNewItem} setItems={setItems}/>}
        {isUpdateItem && <UpdateForm updateItem={updateItem} setUpdateItem={setUpdateItem} setIsUpdateItem={setIsUpdateItem} setItems={setItems}/>}
      </div>
    </div>
  );
}

export default App
