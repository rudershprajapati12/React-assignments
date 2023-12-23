import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { lazy, Suspense } from 'react';
import Loading from './Loading';


const Load = lazy(()=>{return new Promise (resolve => {
  setTimeout(() => {
     resolve(import("./App"))
  },3000);
})});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
    <Load/>
    </Suspense>
  </React.StrictMode>
);


reportWebVitals();
