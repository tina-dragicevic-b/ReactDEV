import { ColorPicker } from 'primereact/colorpicker';
        
const ItemColorPicker = ({pickColor}) => {

    const setColor = (color) => {
        let col = `#${color.value}`
        pickColor(col)
    }
    return (
      <div style={{ gridColumn: "2 / 3", marginRight: "20px" }}>
        <p style={{ color: "#fff" }}>Pick a color: </p>
        <ColorPicker onChange={setColor} inline />
      </div>
    );
}; export default ItemColorPicker