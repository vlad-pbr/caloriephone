// import logo from './logo.svg';
// import axios from 'axios'

// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import IconButton from '@material-ui/core/IconButton';


// function App() {

//   const res = axios.post('/prediction')

//   return (
//     // <div className="App">
    
//     //   <header className="App-header">
        
//     //     <h1 className="App-h1">Caloriephone</h1>
//     //     <button>upload photo</button>
//     //     <input
//     //     type="file"
//     //     accept="image/*"
//     //     style={{ display: 'none' }}
//     //     id="contained-button-file"
//     //   />
//     //   </header>
//     // </div>
//     <div className="App">
      
    
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
  
function App() {
    const [file, setFile] = useState();
    const [data, setData] = useState();
    async function getPrediction() {
      const res = await axios.post('/predict', file)
      // set the lable and calorie value
      setData();
    }
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }
  
    return (
        <div className="App">
          <header className="App-header">
            <h1 >Caloriephone</h1>
            <div className="content">
            

            <div style={{
            display: 'flex',
            margin: 'auto',
            width: 400,
            flexWrap: 'wrap',
            flexDirection: 'column'
          }}>
            
            
            <div>
              <div>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              onChange={handleChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
            </div>
            </div>
            <image></image>
          </div>
          <div className="imageWrap">
          <img src={file} className="Image"/>
          </div>
          </div>
          <div>
            data
          </div>
          </header>

          
        </div>
  
    );
}
  
export default App;