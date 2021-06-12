import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import { FaWhatsapp } from 'react-icons/fa';
import watermark from '../../icons/watermark.png';
import nameUser from '../../user.json';
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [nameError,setNameError]=useState();
  const [roomError,setRoomError]=useState();
  const checkUserName=(event)=>{

    if(!name || !room)
     { if(!room)
      {
        setRoomError('Enter Room number')
      }
      if(!name)
      {
        setNameError('Enter Your Name');
      }
     return  event.preventDefault()
    }
    let newName=name.trim().toLowerCase();
    console.log("name,",newName);
    const filterName=nameUser.filter((usr)=>usr.name===newName);
    if(filterName.length<=0){
      setNameError('UserName is not Registered');
      return  event.preventDefault();
    }
    console.log("filterName",filterName);
  }
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <img className="mylogo" src={watermark} alt ={'my logo'}/>
        <h1 className="heading">Join To Chat <FaWhatsapp className='whatspp'/></h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => {
              setNameError();
              setName(e.target.value);
            }}
          />
          {nameError?<h5 className="nameError">{nameError}</h5>:null}
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => {
              setRoomError()
              setRoom(e.target.value);
            }}
          />
           {roomError?<h5 className="nameError">{roomError}</h5>:null}
        </div>
        <Link
          onClick={(event) => {
            checkUserName(event)
          }}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button  className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
