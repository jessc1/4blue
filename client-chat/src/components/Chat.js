import React, { useState, useEffect } from 'react';
import axiosService from "../helpers/axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [res] = useState('');
  const API_URL = "http://localhost:8000/api/chat/";

  const sendMessage = async () => {

    if(!input.trim()) return;
    const userMsg = input;
    setInput('');

    setMessages(prev =>[...prev, {id: Date.now(), message: userMsg, chat_response: res}]);
    setTimeout(() => {
        const bot = `You asked: "${userMsg}". Em Breve Responderemos.`;
        const newBotMessage = { id: Date.now() + 1, text: bot};
        
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      }, 1000);

      setInput('');
    
  
    try {
      await axiosService.post(API_URL, {message: userMsg});
      
    } catch(error){
      console.error("Error in sending  message:", error);
    }
  };

    
  
  const fetchMessages = async () => {
    try {
      const response = await axiosService.get(API_URL);
      setMessages(response.data);  

    }catch(error){
      console.log("Error in fetching messages:", error);
    }
  }


  return (
       <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.results && messages.results.map((msg) => (
                <div key={msg.id} style={{ marginBottom: '10px' }}>
                    <p><strong>User:</strong> {msg.message}</p>
                    {msg.response && <p><strong>Bot:</strong> {msg.response}</p>}
                </div>
            ))}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>


  ) 
   
};
export default Chat;