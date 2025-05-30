

import Router from "./Router";
import { AdminContextProvider } from "./context/AdminContext";
import { AuthContextProvider } from "./context/AuthContext";
import axios from 'axios';

axios.defaults.withCredentials = true

function App() {
  return (
    <>
      
        <AuthContextProvider>
          <AdminContextProvider>
            <Router />
          </AdminContextProvider>           
        </AuthContextProvider>
     
      
    </>
  );
}

export default App;
