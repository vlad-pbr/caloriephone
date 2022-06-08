import logo from './logo.svg';

import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import './App.css';

function App() {
  return (
    // <div className="App">
    
    //   <header className="App-header">
        
    //     <h1 className="App-h1">Caloriephone</h1>
    //     <button>upload photo</button>
    //     <input
    //     type="file"
    //     accept="image/*"
    //     style={{ display: 'none' }}
    //     id="contained-button-file"
    //   />
    //   </header>
    // </div>
    <div className="App">
      
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 400,
      flexWrap: 'wrap',
      flexDirection: 'column'
    }}>
      <div style={{ width: '100%', float: 'left' }}>
        <h3>Caloriephone  </h3> <br />
      </div>
      <div>
        <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      </div>
      <h3>  OR  </h3>
      <div>
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
