import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
    return (
      <>
        <div 
        className="d-flex flex-column justify-content-center align-items-center" 
        style={{
          height: '100vh',
          backgroundColor: '#f6ebdb',
          color: '#1b2c3c',
          fontSize: '5em',
          fontWeight: '900'
          }}>
            <h1>
                Sorry, couldn't find that.
            </h1>
            <p>We can’t seem to find the page you are looking for.</p>
            <NavLink 
            style={{
              fontSize: '15px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              color: '#1b2c3c',
              padding: '8px 16px',
            }}
            smooth to={'/'}>Home</NavLink> 
     
            

         </div>
      </>
    );
  }
  
  export default NotFoundPage;
  