// Task: Create an app with:
// 1. A Home page that loads immediately
// 2. A "HeavyComponent" that lazy loads when a button is clicked
// 3. Show a loading spinner while HeavyComponent loads

// Starter Code:
import React, { useState, lazy,  Suspense} from 'react'
import Loader from './Loader';

const HeavyComponent = lazy(() => 
  new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./HeavyComponent')), 
      5000  // 2 second delay
    )
  )
);

// const HeavyComponent = lazy(()=>import('./HeavyComponent'));
const Home = () => {
    const [load, setLoad] = useState(false);
  return (
    <div>
        <h1>Welcome Home!</h1>
        {
            load ? 
            (
                <Suspense fallback={<Loader/>}>
                    <HeavyComponent/>
                </Suspense>
            
            )
            
            :
            
            (<button onClick={()=>{setLoad(true)}}>Click</button>)
        }
        
    </div>
  )
}

export default Home

// Your task: Implement the lazy loading below
/*
    Expected Behavior:

    Initial render shows "Welcome Home!" and a button
    Click button → shows loading spinner for 2 seconds
    After 2 seconds → shows HeavyComponent
*/ 