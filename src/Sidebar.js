import React, { useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import { MoreVert } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from './firebase';
import { useState } from 'react';

function Sidebar() {
    const [rooms,setRooms]=useState([]);

    useEffect(()=>{
     const unsubscribe=db.collection("rooms").onSnapshot((snapshot)=>
        setRooms(
          snapshot.docs.map((doc)=>
          ({
            id:doc.id,
            data:doc.data(),
          }))
        )
      );
      return ()=>{
        unsubscribe();
      }
    }, []);
  return (
    <div className="sidebar">
        <div className="sidebar__header">
          <Avatar />
         <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLarge/>
          </IconButton>
          <IconButton>
            <Chat/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div
        className="sidebar__searchContainer">
          <Search/>
          <input placeholder="Search or Start new chat" type="text"/>
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {rooms.map((room)=>(
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
           ))}
      </div>

    </div>
  );
}

export default Sidebar;