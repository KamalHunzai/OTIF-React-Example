import React, { useState, useEffect } from 'react';
import User from "../../components/User/User";
import axios from "axios";
import "./Search.css";
function Search() {
    let [users, setUsers] = useState([]);
    let [keyword, setKeyword] = useState('');
    let [filteredUsers, setFilteredUsers] = useState([]);
    useEffect(() => {
        axios({ method: "get", url: "https://otif-server-dot-otif-mx.uc.r.appspot.com/access" }).then((response) => {
            setUsers(response.data);
            setFilteredUsers(response.data);
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    function filter() {

        let filteredUsers = users.filter((user) => {
            return user.username.match(`${keyword}`);
        });
        setFilteredUsers(filteredUsers);
    }
  return (
      <div className='search__container'>
          <div className='header__container'>
              <div className='wrapper__container'>
                  <input type="search" id="search" name="search" value={keyword} onChange={(event) => setKeyword(event.target.value)} /><button id="search__btn" onClick={filter}>Search</button>
                  </div>
          </div>
          <div className='users__container'>
              {
                  filteredUsers.map((user,index) => <User user={user} key={index} />)
              }
          </div>
    </div>
  )
}

export default Search