import React from 'react';
import backgroundImage from './resources/background.jpg'; // Adjust the path as needed

import QAndAApp from './QAndAApp';

const App = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',  // You can add other background properties here
      backgroundRepeat: 'no-repeat',
      height: '100vh',  // Set height to fill the entire viewport
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    <QAndAApp/>

    


      
    </div>
  );
}

// rem
// em 
// 16px


export default App;