import React, { useState, useEffect } from 'react';
import User from '../User/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=15`)
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.log(err))
    }, [])
const [addmem , setaddMem] = useState([]);
 const addMember = (member) => {
    const newAddMem = [...addmem, member];
    setaddMem(newAddMem);
 }
    
    return (
        <div className="main">
       
        <div className="add-member d-flex justify-content-around align-items-center sticky-top">
        {addmem.map(name => <h4 className='mx-2 '>{name}</h4>)}
        </div>
        
        
        <div className="container-xl">
            <div className='row mt-2'>
        
                {
                    users.map(user => <User user={user} addMember={addMember}></User>)
                }

            </div>
            </div>
        </div>

    );
};

export default Users;