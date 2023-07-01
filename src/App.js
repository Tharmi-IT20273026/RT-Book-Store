import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import BookInformation from './BookInformation'
import CreateBook from './CreateBook'
import SignIn from './SignIn';
import AdminLogin from './AdminLogin';
import AsigninUp from './AsiginUp';
import UserSignUp from './UserSignUp';
import BookList from './BookList';
import Cart from './Cart';
import {useTable}from 'react-table'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path ="/" element={<Home />}> </Route>
            <Route path ="/adminBookList" element={<BookInformation />}> </Route>
            <Route path ="/create" element={<CreateBook />}> </Route>
            <Route path ="/signin" element={<SignIn />}> </Route>
            <Route path ="/adminlogin" element={<AdminLogin />}> </Route>
            <Route path ="/adminsignup" element={<AsigninUp />}> </Route>
            <Route path ="/usersignup" element={<UserSignUp />}> </Route>
            <Route path ="/books" element={<BookList />}> </Route>
            <Route path ="/cart" element={<Cart />}> </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
