// sidebar for chat icons and working
import React, { useState, useEffect } from 'react'
import "./sidebar.css"
import { Avatar, IconButton, Tooltip } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Sidebarchat from './Sidebarchat';
import { getUsers, getChats, createChat } from '../../services/userService';

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [created, setCreated] = useState(false);
  const user = sessionStorage.getItem('user') ? sessionStorage.getItem('user') : 'null';

  useEffect(() => {
    getChats(user, setRooms);
  }, [user, created]);

  const createChatFunc = () => {
    getUsers().then((result) => {
      const roomName = prompt(result);

      if (roomName) {
        if (result.indexOf(roomName) === -1)
          return alert("chose");

        createChat(user, roomName);
        setCreated(!created);
      }
    });

  };

  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <Avatar style={{ marginLeft: "15px" }} />
        <b className="TEXT">{user}</b>
        <div className="Sidebar__headerRight">
          <IconButton>
            <Tooltip title="Add Room">
              <AddCircleOutline onClick={() => createChatFunc()} style={{ color: "#B1B3B5" }} />
            </Tooltip>
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className="Sidebar__chats">
        {rooms.map((room) => (
          <Sidebarchat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
