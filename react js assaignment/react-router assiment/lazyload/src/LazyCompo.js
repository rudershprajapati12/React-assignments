import React, { lazy, Suspense } from 'react';


const Lazyloading = lazy(()=>{return new Promise (resolve => {
  setTimeout(() => {
     resolve(import("./Compo"))
  }, 4000);
})});

const LazyCompo = () => (
  <div style={{textAlign:"center"}}>
    <h1 style={{color:"Blue",fontSize:"80px"}}>Welcome to My Page</h1>
    <Suspense fallback={<h1 style={{color:"Red",fontSize:"30px"}}>Please Wait....</h1>} >
      <Lazyloading/>
    </Suspense>
  </div>
);

export default LazyCompo;