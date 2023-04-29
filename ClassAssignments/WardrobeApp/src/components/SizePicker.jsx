import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
        
const SizePicker = ({itemSizes, pickSize}) => {

  const [size, setSize] = useState("");

  const onChangeHandler = (e) => {
    setSize(() => e.value)
    pickSize(size)
  }
    return (
      <div>
        <Dropdown
          style={{width: "190px",  marginRight: "20px"}}
          value={size}
          onChange={onChangeHandler}
          options={itemSizes}
          placeholder="Select Size"
        />
      </div>
    );
}; export default SizePicker