

function Addnewitem(){
    
    return(<main>

        <div>
            <h1> Add Your Item</h1>
        <form action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="Brand" id="Brand" placeholder="Brand"/>
            <label htmlFor="image">Image</label>
            <input type="image" name="image" id="image"/>
            <label htmlFor="color">Color</label>
            <input type="Color" name="Color" id="Color" placeholder="Color"/>
            <label htmlFor="Size">Size</label>
            <input type="text" name="Size" id="Size" placeholder="Size"/>
            <label htmlFor="Category">Category</label>
            <select name="Category" id="Category">
                <option value="Shoes">Shoes</option>
                <option value="Shirts">Shirts</option>
                <option value="Pants">Pants</option>
                <option value="Dresses_robes">Dresses_robes</option>
                <option value="Skirts">Skirts</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
                <option value="Outerwear">Outerwear</option>
            </select>
            <label htmlFor="DatePurchased">Date Purchased</label>
            <input type="date" name="Date" id="Date"/>
            <label htmlFor="Purchase Price">Purchase Price</label>
            <input type="number" name="PurchasePrice" id="PurchasePrice"/>
        </form>
        </div>
 

</main>
    )
}
export default Addnewitem;
