import React, { useEffect, useState } from 'react';
import axiosService from "../helpers/axios";

function History() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosService.get("http://localhost:8000/api/chat/")        
        const data = response.data;
        console.log('data', data);
        setMessages(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Messages</h2>
      <ul>
            {messages.map(message => (
                <li key={message.id}>
                    <span>User:{message.user.username}</span>
                    <span>Mensagem:{message.message}:</span>
                    <span>Chat:{message.response}</span>
                </li>
            ))}
      </ul>
    </div>
  );
}

export default History;