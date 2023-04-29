import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
        
const CategoryPicker = ({itemCategories, pickCategory}) => {

  const [category, setCategory] = useState("");

  const onChangeHandler = (e) => {
    setCategory(() => e.value)
    pickCategory(category)
  }
    return (
      <div style={{ gridColumn: "2 / 3", gridRow: "2", marginRight: "20px" }}>
        <Dropdown
          value={category}
          onChange={onChangeHandler}
          options={itemCategories}
          placeholder="Select Category"
        />
      </div>
    );
}; export default CategoryPicker