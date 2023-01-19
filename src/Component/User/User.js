import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faGenderless,faMobile } from '@fortawesome/free-solid-svg-icons'

import './User.css';

const User = (props) => {
const img =props.user.picture.large ;
const name= props.user.name.first+' '+props.user.name.first;
const{email,gender,phone}= props.user;
const addMember = props.addMember;
const [mobile, setMobile] = useState('');
    const numberHandel = (number) => {
         setMobile(number);
    }
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
      
          <div className="user">
          
           <div className="img">
           <img src={img} alt="" />
           </div>
           <div className="user-details mt-3">
           <h4><FontAwesomeIcon icon={faUser} /> {name}</h4>
           <h5><FontAwesomeIcon icon={faGenderless} />  {gender}</h5>
           <h5><FontAwesomeIcon icon={faEnvelope} /> {email}</h5>
           <h5><FontAwesomeIcon icon={faMobile} /> {mobile} </h5>
           </div>
           <div className="butoons mt-2 d-flex">
           <button className='btn-num' onClick={() => numberHandel(phone)}>Show Number</button>
           <button className='add' onClick={() => addMember(name)}>Add</button>
           </div>
           
          </div>
          
        </div>
    );
};

export default User;