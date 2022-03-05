import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, Search } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import "./Chat.css";
import { MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from 'react-router-dom';
import db from "./firebase";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams("");
    const [roomName,setRoomName]=useState("");

    useEffect(()=>{
      if(roomId){
        db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
          setRoomName(snapshot.data().name)

        ))
      }
    },[roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage =(e) => {
        e.preventDefault();
        console.log("You typed >>> ", input);
        
        setInput("");
    };
  return (
       <div className="chat">
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />
       <div className='chat__headerInfo'>
        <h3>{roomName}</h3>
        <p>Last seen at...</p>
       </div>
       <div className='chat__headerRight'>
       <IconButton>
            <Search/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
       </div>
      </div>

      <div className='chat__body'>
        <p className={`chat__message ${true &&
        "chat__reciever"}`}>
            <span className='chat__name'>niranjan</span>
            Hey Guys
            <span 
            className='chat__timestamp'>7:30pm</span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon/>
        <form>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message' 
            type="text"/>
            <button onClick={sendMessage}
            type="submit">Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
    ); 
  
}

export default Chat;