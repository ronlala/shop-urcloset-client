
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// Assuming API_BASE_URL is defined elsewhere, e.g., in a config file or as an environment variable
// REMEMBER TO REPLACE "YOUR_ACTUAL_API_BASE_URL" with your actual API endpoint.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Addnewitem() {

  // State to hold form input values
  const [formData, setFormData] = useState({
    brand: "",
    image: "", 
    color: "",
    size: "",
    category: "", 
    datePurchased: "",
    purchasePrice: 1,
  });


  // errors 

  const [errorMessage, setErrorMessage] = useState("");
  // Handle input changes


  const handleChange = (e) => {
   const value = e.target.value;
   const name = e.target.name;

   if ( name === "price") {
    const value = parseInt(value);   
}
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value,
}))
  };
console.log(formData);



//   // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted")
    const url = API_BASE_URL;

    fetch (`${url}create/new`,
        {   method: "POST", 
            body: JSON.stringify(formData)})
        .then((response) =>response.json())
        .then((result) => {
            console.log(result)
            setErrorMessage(result.error.message);})
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message);  })
    
   };
   console.log(errorMessage);

//     setLoading(true); // Start loading
//     setError(null);    // Clear any previous errors
//     setSuccess(false); // Clear any previous success message
//     console.log(formData);

//     try {
//       const response = await fetch(`${API_BASE_URL}create/new`, { // Ensure this is your correct POST endpoint
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Add any other headers like authorization tokens if needed
//           // e.g., 'Authorization': `Bearer ${yourAuthToken}`,
//         },
//         body: JSON.stringify(formData), // Convert your form data to a JSON string
//       });

//       if (!response.ok) {
//         // If the response status is not 2xx, it's an HTTP error
//         const errorData = await response.json(); // Try to parse error message from response body
//         throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Item added successfully:", result);
//       setSuccess(true); // Indicate success

//       // Optionally clear the form after successful submission
//     //   setFormData({
//     //     brand: "",
//     //     imageUrl: "",
//     //     color: "",
//     //     size: "",
//     //     category: "Shoes",
//     //     datePurchased: "",
//     //     purchasePrice: "",
//     //   });

//       // Redirect to a different page, e.g., a dashboard or item list
//       navigate('/closet'); // Make sure you have a route set up for /dashboard
      
//     } catch (err) {
//       console.error("Error adding item:", err);
//       setError(err.message || "An unknown error occurred."); // Set error message
//     } finally {
//       setLoading(false); // End loading, regardless of success or failure
//     }
//   };


    return(<main>

        <div>
            <h1> Add Your Item</h1>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="Brand" id="Brand" placeholder="Brand"  onChange={handleChange} />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" placeholder="ImageURL" onChange={handleChange}/>
            <label htmlFor="color">Color</label>
            <input type="text" name="Color" id="Color" placeholder="Color"  onChange={handleChange}/>
            <label htmlFor="Size">Size</label>
            <input type="text" name="Size" id="Size" placeholder="Size" onChange={handleChange}/>
            <label htmlFor="Category">Category</label>
            <select name="Category" id="Category"  onChange={handleChange}>
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
            <input type="date" name="Date" id="Date" value={formData.date} onChange={handleChange}/>
            <label htmlFor="Purchase Price">Purchase Price</label>
            <input type="number" name="PurchasePrice" id="PurchasePrice"  onChange={handleChange}/>
             <button type="submit" >Add to Closet</button>
             {errorMessage && <p>{errorMessage}</p>}
        </form>
        </div>
 

</main>
    )
}

export default Addnewitem;
