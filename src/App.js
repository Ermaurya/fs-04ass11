import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  async function getUnsplashPhotos() {
    try {
      //IMPORTANT! Update the below variable with your own api key!!
      const apiKey = 'rsLB5dvZ25nXDnJ1fYv7eJq7xAozDP6J20mxW0DZdO8';

      //making unsplash api call to search for photos based on search query
      let resp = await axios.get(`https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=30`);
      console.log(21, resp.data.results);
      //store the array of results into urlsToDisplay variable
      setUrlsToDisplay(resp.data.results);
    } catch (e) {
      console.log(e);
    }

  }



  return (
    <>
      <div className="fullscreen">
        <div className="center">
          <input placeholder='Enter Search Query' onChange={(e) => {

            setSearchQuery(e.target.value);
          }} />
          <button onClick={getUnsplashPhotos}>
            Submit
          </button>
        </div>
        <div className="row">
         
          {urlsToDisplay.map((image,idx) => {
            return <div className='height' key={idx}>
             
              <img className='style' alt='' src={image.urls.small} />
              <p>{image.alt_description}</p>
              <p className='margin'>{image.created_at}</p>
            </div>
          })}
        </div>
      </div>
    </>

  );
}

export default App;