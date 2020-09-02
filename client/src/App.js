import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import MasterForm from "./components/MasterForm";

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Route component={MasterForm}/>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
