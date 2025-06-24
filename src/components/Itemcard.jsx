
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Itemcard(){
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  
const { clothingId } = useParams()
console.log(clothingId);
const [clothing, setClothing] = useState({});

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
    
  useEffect(()=> {
  fetch(`${API_BASE_URL}/${clothingId}`)
  .then((response) => response.json())
  .then((result) => setClothing(result.data.clothing));
  },[clothingId]);
//use state for form inputs 
// const [formData, setFormData] = useState({
//     brand: "",
//     image: "", 
//     color: "",
//     size: "",
//     category: "", 
//     datePurchased: "",
//     price: 1,
//   });

console.log(clothingId);
console.log(clothing);
console.log(API_BASE_URL);
    



 const handleUpdateSubmit = async (e) => {
    e.preventDefault();
   const body = {
      brand: e.target.brand.value,
      image: e.target.image.value,
      color: e.target.color.value,
      size: e.target.size.value,
     category: e.target.category.value, 
      purchdate: e.target.datePurchased.value,
      price: parseInt( e.target.purchasePrice.value) || 0,
    }
    console.log(body);
    console.log("submitted")
    // const URL = API_BASE_URL;

  fetch(`${API_BASE_URL}update/${clothingId}`,{
     method: "PUT", 
     headers: {"Content-Type": "application/json",
     },
            body: JSON.stringify(body)})
        .then((response) =>response.json())
        .then((result) => {
            console.log(result);
            // setFormData(result);
            SetErrorMessage(result.error.message);})
        .catch(error => {
            console.log(error)
            SetErrorMessage(error.message);  })
        };

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


   return ( 
   
   <div>
<main>
       {/* !-- Clothing Name Header --> < */}
        <h1>Clothing Item card </h1>
         {/* <!-- Clothing image box  goes here find an image to place here --> */}
        <form onSubmit={handleUpdateSubmit} action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="brand" id="brand" placeholder="Brand" defaultValue={clothing.brand}  />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" placeholder="ImageURL" defaultValue={clothing.image}  />
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color" placeholder="color" defaultValue={clothing.color}  />
            <label htmlFor="Size">Size</label>
            <input type="text" name="size" id="size" placeholder="Size"  value={clothing.size} />
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
            <input type="date" name="purchdate" id="Date" defaultValue={clothing.purchdate}  />
            <label htmlFor="price">Purchase Price</label>
            <input type="number" name="price" id="price" defaultValue={clothing.price}  />
             <button type="submit" >Add to Closet</button>
             {errorMessage && <p>{errorMessage}</p>}
         <button>Wear</button>
        <button>Edit</button>
        <button>Remove from Closet</button>
        </form>
    
  </main>
   
    </div>
)}
export default Itemcard;   
   