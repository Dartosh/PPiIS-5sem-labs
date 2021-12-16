import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/header/Header";

const App: React.FC = ({children}) => (
    <Fragment>
      <div className="wrapper">
        <Header />
        { children }
      </div>
    </Fragment>
)

export default App;
