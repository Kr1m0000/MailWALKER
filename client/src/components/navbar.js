import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './log/logout';
import axios from 'axios';

const Navbar = () => {
    const uid = useContext(UidContext);
    const [userPseudo, setUserPseudo] = useState('');
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchUserEmail = async () => {
          try {
            const response = await axios.get(`${apiUrl}api/user/${uid}`);
            setUserPseudo(response.data.pseudo);
          } catch (error) {
            console.error('Error fetching user email:', error);
          }
        };
    
        fetchUserEmail();
      }, [uid]);


  return (
   <nav>
    <div className='nav-container'>
        <div className='logo'>
            <NavLink exact to="/">
                <div className='logo'>
                    <img src='./img/icon.png' alt='icon'/>
                    <h3>MailWALKER</h3>
                </div>
            </NavLink>
        </div>
        {uid ? (
            <ul>
                <li></li>
                <li className='welcome'>
                    <NavLink exact to="/profil">
                        <h5>Welcome {userPseudo}</h5>
                    </NavLink>
                </li>
                <Logout/>
            </ul>
        ) : (
            <ul>
                <li></li>
                <li>
                    <NavLink exact to="/profil">
                        <img src='./img/icons/login.svg' alt='login' />
                    </NavLink>
                </li>
            </ul>
        )}
    </div>
   </nav>
  );
};

export default Navbar;