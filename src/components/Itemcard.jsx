
import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";


function Itemcard(){
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  
const {clothingId} = useParams();
// const navigate = useNavigate();
//use state goes here for pulling 1 item
    //Const clothing id = useParams()
    // const navigate = use navigate()
    // Use effect to fetch the base API that is in the closet component and slash with just clothing id and matches the use param
    // const 
    
    // For delete you will need a handler function for deleting closet items 
    // handler functions for the handle delete book 
    // fetch with the method of delete with book id 
// state to hold single item 
// const [clothingItem, setClothingItem] = useState(null);
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
  fetch(`${API_BASE_URL}${clothingId}`)
  .then((response) => response.json())
  .then((data) => setFormData(data));
  },[clothingId]);
    


const handleChange = (e) => {
const {name , value} = e.target;


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

 const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted")
    const URL = API_BASE_URL;

  fetch(`${URL}update/${clothingId}`,{
     method: "PUT", 
     headers: {"Content-Type": "application/json",
     },
            body: JSON.stringify(formData)})
        .then((response) =>response.json())
        .then((result) => {
            console.log(result);
            setFormData(result);
            SetErrorMessage(result.error.message);})
        .catch(error => {
            console.log(error)
            SetErrorMessage(error.message);  })
        };
    console.log("form data is : " ,formData);
   console.log(errorMessage);

  //Delete handle submit .. For deleting things 
//  const handleDelete = async (e) => {
//     e.preventDefault();
//     console.log("submitted")
//     const URL = API_BASE_URL;
//  fetch(`${API_BASE_URL}delete/${closetID}`,{
//      method:"DELETE",
//  })
//   .then((response) =>response.json())
//         .then((result) => {
//             console.log(result)
//             setErrorMessage(result.error.message);})
//         .catch(error => {
//             console.log(error)
//             setErrorMessage(error.message);  })
//         };
console.log("formData :   ", formData);

   return ( 
   
   <div>
<main>
       {/* !-- Clothing Name Header --> < */}
        <h1>Clothing Item card </h1>
         {/* <!-- Clothing image box  goes here find an image to place here --> */}
        <form onSubmit={handleUpdateSubmit} action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="brand" id="Brand" placeholder="Brand" value={formData.brand} onChange={handleChange} />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" placeholder="ImageURL" value={formData.image} onChange={handleChange} />
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color" placeholder="color" value={formData.color} onChange={handleChange} />
            <label htmlFor="Size">Size</label>
            <input type="text" name="size" id="size" placeholder="Size"  value={formData.size} onChange={handleChange}/>
            <label htmlFor="category">Category</label>
            <select name="category" id="category"  >
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
            <input type="date" name="purchdate" id="Date" value={formData.purchdate} onChange={handleChange} />
            <label htmlFor="price">Purchase Price</label>
            <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} />
             <button type="submit" >Add to Closet</button>
             {errorMessage && <p>{errorMessage}</p>}
         <button>Wear</button>
        <button>Edit</button>
        <button>Remove from Closet</button>
        </form>
       
        <script src="" async defer></script>
  </main>
   
    </div>
)}
export default Itemcard;   
   