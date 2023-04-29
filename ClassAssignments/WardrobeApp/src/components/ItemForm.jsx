import { useEffect, useState } from "react";
import {getImages, getCategories, getSizes, createNewItem} from "../../utils/api"
import ImagePicker from "./ImagePicker";
import { Button } from 'primereact/button';
import ItemColorPicker from "./ColorPicker"
import CategoryPicker from "./CategoryPicker";
import SizePicker from "./SizePicker";
const ItemForm = ({setIsNewItem, setItems}) => {

    const [formData, setFormData] = useState({
        itemName: "",
        itemImage: "",
        itemColor: "",
        itemSize: "",
        itemCategory: "",
    })
    const [itemImages, setItemImages] = useState([])
    const [itemCategories, setItemCategories] = useState([])
    const [itemSizes, setItemSizes] = useState([])

    useEffect(() => {
        getImages().then(response => setItemImages(() => [...response.data]))
        getCategories().then(response => setItemCategories(() => [...response.data]))
        getSizes().then(response => setItemSizes(() => [...response.data]))
    }, [])

    const create = event => {
        event.preventDefault()
        const formatted = dataFormater() 
        createNewItem(formatted)
        setItems((previous) => [...previous, formatted])
        setIsNewItem(false)
    }

    const dataFormater = () => {
        return {
            "name": formData.itemName,
            "image": formData.itemImage,
            "description": {
              "category": formData.itemCategory,
              "size": formData.itemSize,
              "color": formData.itemColor
            }
          }
    }

    const changeInput = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    const changeImage = (value) => {
        setFormData({...formData, itemImage: value})
    }

    const pickColor = (value) => {
        setFormData({...formData, itemColor: value})
    }
    const pickCategory = (value) => {
        setFormData({...formData, itemCategory: value})
    }
    const pickSize = (value) => {
        setFormData({...formData, itemSize: value})
    }

    return (
      <form
        onSubmit={create}
        style={{
          gridColumn: "2 / 3",
          marginLeft: "20px",
          border: "1px solid #002B6E",
        }}
      >
        <div>
          <input
            placeholder="Item name"
            style={{
              backgroundColor: "#fff",
              color: "#002B6E",
              margin: "20px",
              height: "30px",
              width: "350px",
            }}
            type="text"
            name="itemName"
            value={formData.itemName}
            required
            onChange={changeInput}
          />
        </div>
        <div
          className="display-grid"
          style={{
            display: "grid",
            justifyContent: "space-evenly",
            gap: "10px",
          }}
        >
          <ImagePicker
            name="itemImage"
            value={formData.itemImage}
            required
            changeImage={changeImage}
            itemImages={itemImages}
          />
          <ItemColorPicker pickColor={pickColor} />
          <CategoryPicker
            itemCategories={itemCategories}
            pickCategory={pickCategory}
          />
          <SizePicker itemSizes={itemSizes} pickSize={pickSize} />
        </div>
        <Button
          disabled={formData.itemCategory === ""}
          style={{ marginTop: "20px" }}
          type="submit"
          label="Create"
        />
      </form>
    );
}; export default ItemForm;