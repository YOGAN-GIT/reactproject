
import { useState } from "react"

function Project({concpet})
{     
    const [count,setcount]= useState(0)
    function increseCount()
    {
        setcount(count+1)

    }
    function decreaseCount()
    {
        setcount(count-1)
    }

    return(
        <div className="card">
  <img src="C:\Users\LENOVO\reactprojectcreation\public\download (1).jpg" className="card-img-top" alt="shoepic"/>
  <div class="card-body">
    <h5 class="card-title">SHOE</h5>
    <p class="modify">count={count}</p></div>
    <div>
    <button class="btn -btn-primary" onClick={increseCount}>INCREMENT</button>
    <button class="btn -btn-primary" onClick={decreaseCount}>DECREMENT</button>
    
  </div>
</div>
    )
}

export default Project