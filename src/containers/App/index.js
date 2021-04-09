import './App.css';
import { Container } from '@material-ui/core';
import Helmet from 'react-helmet';

import Login from '../../containers/Login'

function App() {
  return (
     <Container maxWidth="sm">
         <Helmet>
           <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
         </Helmet>
         <Login count={10}/>
    </Container>
  );
};

export default App;
