import { getCategories, getSizes, updateWaredrobeItem , getItems} from "../../utils/api"
import { Dropdown } from 'primereact/dropdown';
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';

const UpdateForm = ({updateItem, setUpdateItem, setIsUpdateItem, setItems}) => {
 
    const [itemCategories, setItemCategories] = useState([])
    const [itemSizes, setItemSizes] = useState([])

    useEffect(() => {
        getCategories().then(response => setItemCategories(() => [...response.data]))
        getSizes().then(response => setItemSizes(() => [...response.data]))
    }, [])

    const update = (event) => {
        event.preventDefault();
        updateWaredrobeItem(updateItem)
        getItems().then((response) => setItems(() => [...response.data]));
        setIsUpdateItem(false);

    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setUpdateItem({...updateItem, [name]: value})
    }

    const onChangeCategory = (event) => {
      const { value } = event.target;
      const temp = {...updateItem}
      setUpdateItem(({...updateItem, description: { category: value, size: updateItem.description.size, color: updateItem.description.color }}))
    }

    const onChangeSize = (event) => {
        const { value } = event.target;
        setUpdateItem((item) => Object.assign({}, item, { description: { category: updateItem.description.category, size: value, color: updateItem.description.color} }))
    }

    return (
      <form
        onSubmit={update}
        style={{
          gridColumn: "2 / 3",
          marginLeft: "20px",
          border: "1px solid #002B6E",
        }}
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <p style={{ color: "#002B6E" }}>
            {updateItem.name} | {updateItem.description.category} |{" "}
            {updateItem.description.size}
          </p>
        </div>
        <div>
          <p>Change item name: </p>
          <input type="text" name="name" value={updateItem.name} onChange={onChangeHandler}/>
        </div>
        <div className="grid-container" style={{ display: "grid", marginTop: "30px" }}>
          <div style={{ gridColumn: "1 / 2" }}>
            <Dropdown
              value={updateItem.description.category}
              name="category"
              onChange={onChangeCategory}
              options={itemCategories}
              placeholder="Change Category"
            />
          </div>
          <div style={{ gridColumn: "2 / 3" }}>
            <Dropdown
              value={updateItem.description.size}
              name="size"
              onChange={onChangeSize}
              options={itemSizes}
              placeholder="Change Size"
            />
          </div>
        </div>
        <Button  style={{marginTop: "20px"}} type="submit"  severity="help" label="Update"/>
      </form>
    );
}; export default UpdateForm;