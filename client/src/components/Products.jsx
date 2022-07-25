import Item from "./Item";
import Laptop from "../../images/Laptop.png";
import Earphones from "../../images/Earphones.jpg";
import Camera from "../../images/Camera.webp";
import Phone from "../../images/Phone.png";
import SmartWatches from "../../images/SmartWatch.webp";
import TShirt from "../../images/TShirt.jpg";

const ProductsData = [
  {
    Serial_id: "101",
    name: "Laptop",
    link: "../../images/Laptop.png",
    price: "59,999",
    productDesc: "Best ever laptop",
  },
  {
    Serial_id: "102",
    name: "Camera",
    link: "../../images/Camera.webp",
    price: "25,990",
    productDesc: "Best ever camera",
  },
  {
    Serial_id: "103",
    name: "Earphones",
    link: "../../images/Earphones.jpg",
    price: "1499",
    productDesc: "Best ever Earphones",
  },
  {
    Serial_id: "104",
    name: "TShirt",
    link: "../../images/TShirt.jpg",
    price: "999",
    productDesc: "Best ever tshirt",
  },
  {
    Serial_id: "105",
    name: "Phone",
    link: "../../images/Phone.png",
    price: "65,999",
    productDesc: "Best ever Phone",
  },
  {
    Serial_id: "106",
    name: "SmartWatch",
    link: "../../images/SmartWatch.webp",
    price: "21,599",
    productDesc: "Best ever SmartWatch",
  },
];

const Products = () => {
  return (
    <div>
      <div>
        <h1 className="tit">Products</h1>
      </div>
      <div className="firstLine">
        {ProductsData.map((product) => (
            <Item
              name={product.name}
              img={product.link}
              price={product.price}
              productDesc={product.productDesc}
              id={product.Serial_id}
            />
        ))}
      </div>
      {/* <div className="firstLine">
          <Item
            name="Laptop"
            img={Laptop}
            price="59,999"
            productDesc="Best ever laptop"
          />
          <Item
            name="Camera"
            img={Camera}
            price="25,990"
            productDesc="Best ever camera"
          />
          <Item
            name="Earphones"
            img={Earphones}
            price="1499"
            productDesc="Best ever earphones"
          />
          <Item
            name="Earphones"
            img={Earphones}
            price="1499"
            productDesc="Best ever earphones"
          />
        </div> */}
      {/* <div className="secondLine">
        <Item
          name="Phone"
          img={Phone}
          price="55,000"
          productDesc="Best ever mobile phone"
        />
        <Item
          name="TShirt"
          img={TShirt}
          price="599"
          productDesc="Best ever t-shirt"
        />
        <Item
          name="SmartWatch"
          img={SmartWatches}
          price="32,000"
          productDesc="Best ever smart watches"
        />
      </div> */}
    </div>
  );
};

export default Products;
