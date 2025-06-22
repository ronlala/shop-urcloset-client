
import { useEffect, useState } from "react";
import {Link, useParams , useNavigate } from "react-router-dom";
import React from "react";
import { use } from "react";

function Itemcard(){
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  
const {clothingId} = useParams();
const navigate = useNavigate();
//use state goes here for pulling 1 item
    //Const clothing id = useParams()
    // const navigate = use navigate()
    // Use effect to fetch the base API that is in the closet component and slash with just clothing id and matches the use param
    // const 
    
    // For delete you will need a handler function for deleting closet items 
    // handler functions for the handle delete book 
    // fetch with the method of delete with book id 
// state to hold single item 
const [clothingItem, setClothingItem] = useState(null);
const [errorMessage, SetErrorMessage] = useState("");
    

//use state for form inputs 
const [formData, setFormData] = useState({
    brand: "",
    image: "", 
    color: "",
    size: "",
    category: "", 
    datePurchased: "",
    price: 1,
  });

  useEffect(()=> {
  fetch(`${API_BASE_URL}api/closet/${closetID}`)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

})
  // use effect for fetching a single clothing item
// useEffect(() => {
//     if (clothingID) {
//         fetch (`${API_BASE_URL}/api/wardrobe/${clothingId}`)
//        .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//        .then(data) => {
//         setClothingItem(data.data.wardrobe);
        
//         setFormData({
//             brand: data.data.wardrobe.brand || "",
//             image: data.data.wardrobe.image || "",
//             color: data.data.wardrobe.color || "",
//             size: data.data.wardrobe.size || "",
//             category: data.data.wardrobe.category || "", 
//             datePurchased: data.data.wardrobe.purchdate ? new Date(data.data.wardrobe.purchdate): "",
//             price: data.data.wardrobe.price || 0,    
//        });
//        console.log("You have fetched a single closet item:", data.data.wardrobe);
//     })
//     .catch((error) => {
//           console.error("Error fetching single item:", error);
//           setErrorMessage("Failed to load item details. Please try again.");
//           setClothingItem(null); // Clear item if fetch fails
//         });
//     }
//   }, [clothingId, API_BASE_URL]);
    


const handleChange = (e) => {
const {name , value} = e.target


   if ( name === "price") {
    const value = parseInt(value);   
}
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value,
}))
  };
console.log(formData);

//Update handle submit for updating things in the item card.

 const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("submitted")
    const URL = API_BASE_URL;

  fetch(`${URL}update/${closetID}`,{
     method: "PUT", 
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

  //Delete handle submit .. For deleting things 
 const handleDelete = async (e) => {
    e.preventDefault();
    console.log("submitted")
    const URL = API_BASE_URL;
 fetch(`${API_BASE_URL}delete/${closetID}`,{
     method:"DELETE",
 })
  .then((response) =>response.json())
        .then((result) => {
            console.log(result)
            setErrorMessage(result.error.message);})
        .catch(error => {
            console.log(error)
            setErrorMessage(error.message);  })
        };
   return ( 
   
   <div>
<main>
       {/* !-- Clothing Name Header --> < */}
        <h1>Clothing Item card </h1>
         {/* <!-- Clothing image box  goes here find an image to place here --> */}
        <form action="">
            <label htmlFor="text">Brand</label>
            <input type="brand" name="Brand" id="Brand" placeholder="Brand"/>
            <label htmlFor="color">Color</label>
            <input type="Color" name="Color" id="Color" placeholder="Color"/>       
            <label htmlFor="Size">Size</label>
            <input type="text" name="Size" id="Size" placeholder="Size"/>
            <label htmlFor="Category">Category</label>
            <select name="Category" id="Category">
                <option value="Shoes">Shoes</option>
                <option value="Shirts">Shirts</option>
                <option value="Pants">Pants</option>
                <option value="dresses_robes">Dresses_robes</option>
                <option value="Skirts">Skirts</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
                <option value="Outerwear">Outerwear</option>
            </select>
            <label htmFor="DatePurchased">Date Purchased</label>
            <input type="date" name="Date" id="Date"/>
            <label htmlFor="Purchase Price">Purchase Price</label>
            <input type="number" name="PurchasePrice" id="PurchasePrice"/>
        </form>
        <button>Wear</button>
        <button>Edit</button>
        <button>Remove from Closet</button>
        <script src="" async defer></script>
  </main>
   
    </div>
)}
export default Itemcard;   
   