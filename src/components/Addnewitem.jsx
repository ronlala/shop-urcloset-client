
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Addnewitem() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  
//     // State to hold form input values
//   const [formData, setFormData] = useState({
//     brand: "",
//     image: "", 
//     color: "",
//     size: "",
//     category: "", 
//     purchdate: "",
//     price: 1,
//   });


  // errors 

  const [errorMessage, setErrorMessage] = useState("");
  //Handle input changes


//   const handleChange = (e) => {
//    const value = e.target.value;
//    const name = e.target.name;

//    if ( name === "price") {
//     const value = parseInt(value);   
// }
//   setFormData(prevFormData => ({
//     ...prevFormData,
//     [name]: value,
// }))
//   };
// console.log(formData);


//   // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      brand: e.target.brand.value,
      image: e.target.image.value,
      color: e.target.color.value,
      size: e.target.size.value,
      category: e.target.category.value, 
      datePurchased: e.target.datePurchased.value,
      price: e.target.purchasePrice.value,
    }
    console.log(body);
    setIsLoading(true);

    const URL = "http://localhost:8080/api/closet/create/new"

    fetch (`${URL}`,
        {   method:"POST", 
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)})
        .then((response) =>response.json())
        .then((result) => {
            console.log(result)
            navigate('/closet');
            setErrorMessage(result.error.message);})
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message);  })
        .finally(() => setIsLoading(false));
    
   };
   console.log(errorMessage);




    return(<main>

        <div>
            <h1> Add Your Item</h1>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="brand" id="Brand" placeholder="Brand" onChange={handleChange}/>
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" placeholder="ImageURL" onChange={handleChange} />
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="Color" placeholder="Color" onChange={handleChange}/>
            <label htmlFor="Size">Size</label>
            <input type="text" name="size" id="Size" placeholder="Size" onChange={handleChange}/>
            <label htmlFor="Category">Category</label>
            <select name="Category" id="Category" onChange={handleChange} >
                <option value="Shoes">Shoes</option>
                <option value="Shirts">Shirts</option>
                <option value="Pants">Pants</option>
                <option value="Dresses_robes">Dresses_robes</option>
                <option value="Skirts">Skirts</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
                <option value="Outerwear">Outerwear</option>
            </select>
            <label htmlFor="purchdate">Date Purchased</label>
            <input type="date" name="purchdate" id="Date" onChange={handleChange}/>
            <label htmlFor="Purchase Price">Purchase Price</label>
            <input type="number" name="purchdate" id="PurchasePrice" onChange={handleChange}/>
             <button type="submit" >Add to Closet</button>
             {errorMessage && <p>{errorMessage}</p>}
        </form>
        </div>
 

</main>
    )
}

export default Addnewitem;
