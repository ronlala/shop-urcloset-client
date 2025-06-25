
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "../itemcardstyles.css";

function Itemcard(){
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  
const {clothingId} = useParams()
console.log(clothingId);

const [clothing, setClothing] = useState({});
const [loading, setLoading] = useState(true); // Add loading state
const [fetchError, setFetchError] = useState(null);

const [errorMessage, SetErrorMessage] = useState("");
    

 useEffect(() => {
        const fetchClothingItem = async () => {
            setLoading(true); // Set loading to true before fetch
            setFetchError(null); // Clear previous errors

            try {
                const response = await fetch(`${API_BASE_URL}/${clothingId}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error.message || 'Failed to fetch clothing item');
                }

                const data = await response.json();
                setClothing(data.data.closetItem); // Access the actual item from data.data.closetItem
            } catch (error) {
                console.error("Error fetching clothing item:", error);
                setFetchError(error.message); // Set fetch-specific error message
            } finally {
                setLoading(false); // Set loading to false after fetch completes (success or error)
            }
        };

        if (clothingId) { // Only fetch if clothingId exists
            fetchClothingItem();
        }

    }, [clothingId, API_BASE_URL]); // Add API_BASE_URL to dependencies if it can change

    console.log("Current clothing state:", clothing);
    console.log("Current fetchError state:", fetchError);
    console.log("Current loading state:", loading);



  // useEffect(()=> {
  // fetch(`${API_BASE_URL}/${clothingId}`)
  // .then((response) => response.json())
  // .then((data) => setClothing(data));
  // },[clothingId]);
  // console.log(clothing);
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
      purchdate: e.target.purchdate.value,
      price: parseInt( e.target.price.value) || 0,
    }
    console.log(body);
 try{
  const response = await fetch(`${API_BASE_URL}update/${clothingId}`,{
     method: "PUT", 
     headers: {"Content-Type": "application/json",
     },
            body: JSON.stringify(body)});
       const result = await response.json();

            if (!response.ok) {
                SetErrorMessage(result.error.message || "Failed to update item.");
            } else {
                SetErrorMessage("Item updated successfully!"); // Provide success message
                // Optionally update the local state with the new data
                setClothing(result.data.closetItem);
            }
        } catch (error) {
            console.error("Error updating clothing item:", error);
            SetErrorMessage(error.message);
        }
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
<main className="mainCard">
       {/* !-- Clothing Name Header --> < */}
        <h1 className="heading">Clothing Item card </h1>
         {/* <!-- Clothing image box  goes here find an image to place here --> */}
        <form className ="formSelect" onSubmit={handleUpdateSubmit} action="">
            <label htmlFor="text">Brand</label>
            <input type="text" name="brand" id="brand" placeholder="Brand" defaultValue={clothing.brand}  />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" placeholder="ImageURL" defaultValue={clothing.image}  />
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color" placeholder="color" defaultValue={clothing.color}  />
            <label htmlFor="Size">Size</label>
            <input type="text" name="size" id="size" placeholder="Size"  defaultValue={clothing.size} />
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
            <input type="date" name="purchdate" id="purchdate" defaultValue={clothing.purchdate}  />
            <label htmlFor="price">Purchase Price</label>
            <input type="number" name="price" id="price" defaultValue={clothing.price}  />
             <button type="submit" >Add to Closet</button>
             {errorMessage && <p className="itemform">{errorMessage}</p>}
        <div className="Buttons"> <button>Wear</button>
        <button>Edit</button>
        <button>Remove from Closet</button>  
         </div>
        
        </form>
    
  </main>
   
    </div>
)}
export default Itemcard;   
   