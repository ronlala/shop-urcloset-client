import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


// function Closet(){
// // Get data from all Closet inventory to display on the screen.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const categories = [
   "Hardly Worn",
            "Shirts",
            "Pants",
            "Dresses_robes",
            "Skirts",
            "Shoes",
            "Accessories",
            "Outerwear"
]

function Closet() {

  const [clothing, setClothing] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");


  //Use effect function to display all data

  useEffect(() => {
    fetch(`${API_BASE_URL}`)
      .then(response => response.json()) 
      .then((data) => {
        setClothing(data.data.wardrobe)
        console.log(data.data.wardrobe);
      })
      .catch((error) => {
        if (error.name === "Abort") {
          console.log("fetch Aborted");
        }
      });
  }, []);

  //Date display 

  
  // Function ( on click) for the list options and will run when the button is clicked) it will know what items
  // to display and the State would need to save the filter option. It will be a type of string that will be blank .
  //  The state is going to be updated. Once its updated. And you can automaticly filter by type in the page without fetching from the mongodb
  useEffect(() => {
    function closetFilter() {
      setClothing((prevClothing) =>
        prevClothing.filter((item) => item.category === filterCategory)
      );
    }
    closetFilter();
  }, [filterCategory]);

  // closet Filter categories 
  const closetItems = (index) => {setFilterCategory(categories[index])};
  console.log(filterCategory);
     console.log(clothing);
// Date format for for the purchase date g
  const dateFormat = (date) => {
  const myDate = new Date(date).toLocaleDateString()
  console.log(myDate)
  return myDate;

};

  return (
    <div>
      <main>
        <div className="body_sizing">
          <h1>Your Closet</h1>
          <div className="body_closet_addto">
            <Link to="/addnewitem">
            
              <button>Add to Your Closet</button>
            </Link>
            {/* needs to go to the item card*/}
          </div>

          {/* <!-- add closet filter option buttons categories /Hardly worn / shirts/ pants /dresses_robes/ */}
          {/* skirts/shoes/accessories/outerwear  --> */}
          <div className="body_closet_options">
            {categories.map((category,index) => (<button key={category._id} onClick={()=>closetItems(index)}>{category}</button>))}
          </div>
          {/* made a change
           */}
          <div  className="body_closet_inventory">
            <div>
              {clothing.map((closetItem) => 
                 ( 
                <div key={closetItem._id}>
             <img  src={closetItem.image} alt="image"/>
              <p>{closetItem.brand}</p>
              <p>Purchase Date{dateFormat (closetItem.purchdate)}</p>
              <p>category: {closetItem.category}</p>
              <Link to={`/itemcard/${closetItem._id} `}> 
              <button>Wear</button>
              </Link>
              
              </div>
           ))}
          </div>
           
          </div>
      
        </div>
      </main>
    </div>
  );
}
export default Closet;
