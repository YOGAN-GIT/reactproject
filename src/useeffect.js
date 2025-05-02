import { useEffect } from "react";

import { useState } from "react";
import HomePage from "./homepage";
import './App.css'


function ApiProject() {
    const [Countries, setCountires] = useState([])
    const [minpopulation,setminpopulation]=useState('');
    const [maxpopulation,setmaxpopulation]=useState('');

    useEffect(() => {
        async function apiHit() {
            const api = await fetch('https://restcountries.com/v3.1/all')

            const japi = await api.json()
            console.log(japi);

            setCountires(japi);
            
        }
        apiHit();

    }, []
            
   )
    const getfilteredcountries =()=>{
        return  Countries.filter((country)=>
        {

                    
                        
                            const population=country.population
                            const min = minpopulation?parseInt(minpopulation):0;
                            const max =maxpopulation?parseInt(maxpopulation):Infinity;
                            return population>= min && population<=max
                        })
        }
    
    
     
    return (
          <>
           <div style={{display:"flex",alignItems:"center",gap:"1rem",margin:"1rem"}}>
             <HomePage/>
             <label> MINPOPULATION <input type="number" value={minpopulation} onChange={(e=>setminpopulation(e.target.value))} style={{margin:"0.5rem"}}></input></label>
             <label> MINPOPULATION <input type="number" value={maxpopulation} onChange={(e=>setmaxpopulation(e.target.value))} style={{margin:"0.5rem"}}></input></label>
             </div>
        
        <div className="container" style={{backgroundColor:"#e0f7fa"}} >
        
            <div className="row" >
           
            {getfilteredcountries().map((coutry, index) =>
            (<div className=" col-md-3 mb-4"  key={index}  >
                <div className="card  " style={{ width: "18rem;", height:"25rem;", display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"1rem", backgroundColor:"#f8f9fa" }}  >
                    <img className="flg" src={coutry.flags.png} alt={"Error"} style={{height:"120px",objectFit:"cover"}} />
                    <div className="name">
                        <h5 className="coun" style={{textAlign:"center", backgroundColor:"darkgoldenrod"}}>{coutry.name.common}</h5>
                    
                        <h4 className="cap" style={{whiteSpace:"normal", overflowWrap:"break-word",fontSize:"15px"}}> Capital City:{coutry.capital}</h4>
                        <h4 className="language"style={{whiteSpace:"normal",overflowWrap:"break-word",fontSize:"15px"}}>Languages:{ coutry.languages? Object.values(coutry.languages).join(","):"NILL"}</h4>
                        <h4 className="populations" style={{whiteSpace:"normal",overflowWrap:"break-word",fontSize:"15px"}}>Population:{coutry.population} </h4>
                        <a href={coutry.maps.googleMaps}  className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{textAlign:"center"}}>Location</a>
                    </div>
                </div>
                </div>
                
            )
          
            )}
             </div>
            </div>
            
       
            </>   

    )
}


export default ApiProject;
