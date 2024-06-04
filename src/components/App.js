// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message); // Update state with image URL
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage(); // Call the function on component mount
  }, []);

  return (
    <div className="App">
      {!imageUrl && <p>Loading...</p>}  {/* Display "Loading..." while no image */}
      {imageUrl && <img src={imageUrl} alt="A Random Dog" />}  {/* Display image if available */}
    </div>
  );
}

export default App;
