import { OrderList } from 'primereact/orderlist';
import '../App.css'

const ImagePicker = ({itemImages, changeImage}) => {
    const itemTemplate = (itemImage) => (
      <img
        src={`${itemImage}`}
        alt={itemImage}
        style={{ width: "100px", height: "100px" }}
      />
    );
    const selectImage = (e) => {
        changeImage(e.target.currentSrc);
    }

    return (
      <div style={{ gridColumn: "1 / 2", gridRow: "1/4", marginLeft: "20px" }}>
        <p style={{color: "#fff"}}>Pick an image: </p>
        <OrderList
          value={itemImages}
          itemTemplate={itemTemplate}
          onClick={selectImage}
        ></OrderList>
      </div>
    );

}; export default ImagePicker