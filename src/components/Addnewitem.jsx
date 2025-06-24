
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Addnewitem() {

//   const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

   //State to hold form input values
  const [formData, setFormData] = useState({
    brand: "",
    image: "", 
    color: "",
    size: "",
    category: "Dresses_robes", 
    purchdate: "",
    price: 1,
  });

  
  //Handle input changes


  const handleChange = (e) => {
   const value = e.target.value;
   const name = e.target.name;

//    if ( name === "price") {
//     const value = parseInt(value);   
// }
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value,
}))
  };
console.log(formData);


//   // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    // setIsLoading(true);

    // const body = {
    //   brand: e.target.brand.value,
    //   image: e.target.image.value,
    //   color: e.target.color.value,
    //   size: e.target.size.value,
    //  category: e.target.category.value, 
    //   purchdate: e.target.datePurchased.value,
    //   price: parseInt( e.target.purchasePrice.value) || 0,
    // }
    // console.log(body);
   

    const URL ="http://localhost:8080/api/closet/create/new";

    fetch (`${URL}`,
        {   method:"POST", 
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)})
        .then((response) =>response.json())
        .then((result) => {
            console.log(result)
            navigate('/confirmationadd');
            setErrorMessage(result.error.message);})
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message);  })
        // .finally(() => setIsLoading(false));
    
   };
   console.log(errorMessage);
   console.log("formData: >>", formData);

    return(<main>

        <div>
            <h1> Add Your Item</h1>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="brand" id="Brand" placeholder="Brand" onChange={handleChange} />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" placeholder="ImageURL" onChange={handleChange} />
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color" placeholder="color" onChange={handleChange} />
            <label htmlFor="Size">Size</label>
            <input type="text" name="size" id="size" placeholder="Size" onChange={handleChange}/>
            <label htmlFor="category">Category</label>
            <select name="category" >
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
            <input type="date" name="purchdate" id="Date" onChange={handleChange} />
            <label htmlFor="price">Purchase Price</label>
            <input type="number" name="price" id="price" onChange={handleChange} />
             <button type="submit" >Add to Closet</button>
             {errorMessage && <p>{errorMessage}</p>}
        </form>
        </div>
 

</main>
    )
}

export default Addnewitem;
