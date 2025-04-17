
function Closet(){
    return (
         <div>
    <main>
        <div className="body_sizing">
           
                <h1>Your Closet</h1>
                <div className="body_closet_addto">
                    <button>Add to Your Closet</button> 
                </div>
               
                 {/* <!-- add closet filter option buttons categories /Hardly worn / shirts/ pants /dresses_robes/ */}
                 {/* skirts/shoes/accessories/outerwear  --> */}
                 <div className="body_closet_options">
                 <button>Hardly Worn</button>
                 <button>Shirts</button>
                 <button>Pants</button> 
                 <button>Dresses_robes</button>
                 <button>Skirts</button>
                 <button>Shoes</button>
                 <button>Accessories</button>
                 <button>Outerwear</button>
                 </div>
                 {/* made a change
                  */}
                 <div className="body_closet_inventory">
                     <div >
                         <img src="public/images/Outerwear_temp_image.png" alt="Outerwear"/>
                         <p>Description</p>
                         <p>Last Worn Date</p>
                         <button>Wear</button>
                     </div>
                     <div>
                         <img src="public/images/Dress_temp_image.png" alt="Dresses"/>
                         <p>Description</p>
                         <p>Last Worn Date</p>
                         <button>Wear</button>
                     </div>
                    <div>
                     <img src="public/images/Pants_temp_image.png" alt="Pants"/>
                     <p>Description</p>
                     <p>Last Worn Date</p>
                     <button>Wear</button>
                    </div>
                     <div>
                         <img src="public/images/Shirt_temp_image.png" alt="Shirts"/>
                         <p>Description</p>
                         <p>Last Worn Date</p>
                         <button>Wear</button>
                     </div>
                   <div>
                     <img src="public/images/Shoes_temp_image.png" alt="Shoes"/>
                     <p>Description</p>
                     <p>Last Worn Date</p>
                     <button>Wear</button>
                   </div>
                   <div>
                     <img src="public/images/Accessories_temp_image.png" alt="Accessories"/>
                     <p>Description</p>
                     <p>Last Worn Date</p>
                     <button>Wear</button>
                  </div>
                 <div>
                     <img src="public/images/Skirt_temp_image.png" alt="Skirt"/>
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
)}
export default Closet;