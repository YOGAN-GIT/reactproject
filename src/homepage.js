import { useNavigate } from "react-router-dom";
import './Home.css';

function HomePage()
{
    const Homenavigate=useNavigate()
    const goToHomepage=()=>{Homenavigate('/')}
   return(
    <>
     <div>
        <button className="button1"  onClick={goToHomepage}>HOME</button>
     </div>

    </>
   )
    
}

export default HomePage;