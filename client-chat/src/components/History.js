import React, { useEffect, useState } from 'react';
import axiosService from "../helpers/axios";

    const History = () => {
        const [messages, setMessages] = useState([]);
        const [error, setError] = useState(null);
        const API_URL = "http://localhost:8000/api/chat/";


        useEffect(() => {            
            fetchChatHistory();
        }, []);

        const fetchChatHistory = async () => {
                try {
                    const response =  await axiosService.get(API_URL)
                    console.log('response', response)              
                    setMessages(response.data);
                } catch (error) {
                    setError(error);                
            };
        }   

        return (
            <div className="message-list">                          
                    
                {messages.results && messages.results.map((msg) => (
                    <div key={msg.id} className='message-item'>
                                 <span className="message-sender">{msg.user}: </span>
                                <span className="message-content">{msg.message}</span>
                                                             
                    </div>
                ))}
                  
            </div>
        );
    };

    export default History;