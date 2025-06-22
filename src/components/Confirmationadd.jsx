import { Link,} from "react-router-dom"; // Import useNavigate for redirection



function Home() {
  return (
    <div>
      <main>
        {/* <!-- photos moving right to left center of the screen with last worn dates: Not items from your closet  --> */}
        <h1>Congrats New Things added to your closet! </h1>
        <p> Return to your Closet to view them 
            <Link to={`/closet `}> 
              <button>View Your Closet</button>
              </Link>
        </p>

      </main>
    </div>
  );
}
export default Home;