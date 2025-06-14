import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// function Closet(){
// // Get data from all Closet inventory to display on the screen.
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

  useEffect(() => {
    fetch()
      .then((request) => {})
      .then((data) => {
        setClothing(data);
      })
      .catch((error) => {
        if (error.name === "Abort") {
          console.log("fetch Aborted");
        }
      });
  }, []);
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

  
  const closetItems = (index) => {setFilterCategory(categories[index])};
  console.log(filterCategory);

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
            {categories.map((category,index) => (<button onClick={()=>closetItems(index)}>{category}</button>))}
            
    
          </div>
          {/* made a change
           */}
          <div className="body_closet_inventory">
            <div >
              <img
                src="public/images/Outerwear_temp_image.png"
                alt="Outerwear"
              />
              <p>Description</p>
              <p>Last Worn Date</p>
              {/* adds to wear cart each item displayed */}
              <button>Wear</button>
            </div>
            <div>
              <img src="public/images/Dress_temp_image.png" alt="Dresses" />
              <p>Description</p>
              <p>Last Worn Date</p>
              <button>Wear</button>
            </div>
            <div>
              <img src="public/images/Pants_temp_image.png" alt="Pants" />
              <p>Description</p>
              <p>Last Worn Date</p>
              <button>Wear</button>
            </div>
            <div>
              <img src="public/images/Shirt_temp_image.png" alt="Shirts" />
              <p>Description</p>
              <p>Last Worn Date</p>
              <button>Wear</button>
            </div>
            <div>
              <img src="public/images/Shoes_temp_image.png" alt="Shoes" />
              <p>Description</p>
              <p>Last Worn Date</p>
              <button>Wear</button>
            </div>
            <div>
              <img
                src="public/images/Accessories_temp_image.png"
                alt="Accessories"
              />
              <p>Description</p>
              <p>Last Worn Date</p>
              <button>Wear</button>
            </div>
            <div>
              <img src="public/images/Skirt_temp_image.png" alt="Skirt" />
              <p>Description</p>
              <p>Last Worn Date</p>
              <button>Wear</button>
            </div>
          </div>
          {/* <!-- closet database show for all info in the database should be a three by three square for web / tablet  and two by two for phone --> */}

          {/* <!-- <script src="" async defer></script> --> */}
        </div>
      </main>
    </div>
  );
}
export default Closet;
