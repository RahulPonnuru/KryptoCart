import Item from "./Item"
import Laptop from "../../images/Laptop.png"
import Earphones from "../../images/Earphones.jpg"
import Camera from "../../images/Camera.webp"
import Phone from "../../images/Phone.png"
import SmartWatches from "../../images/SmartWatch.webp"
import TShirt from "../../images/TShirt.jpg"

const Products=()=>{
    return(
        <div>
            <div>
                <h1 className="tit">Products</h1>
            </div>
                <div className="firstLine">
                    <Item name="Laptop" img={Laptop} price="59,999" productDesc="Best ever laptop" />
                    <Item name="Camera" img={Camera} price="25,990" productDesc="Best ever camera" />
                    <Item name="Earphones" img={Earphones} price="1499" productDesc="Best ever earphones" />               
                </div>   
                <div className="secondLine">
                        <Item name="Phone" img={Phone} price="55,000" productDesc="Best ever mobile phone" />
                        <Item name="TShirt" img={TShirt} price="599" productDesc="Best ever t-shirt" />
                        <Item name="SmartWatch" img={SmartWatches} price="32,000" productDesc="Best ever smart watches" />
                    </div>                
        </div>
    )
}

export default Products;