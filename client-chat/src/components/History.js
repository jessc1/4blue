import React, { useEffect, useState } from 'react';
import axiosService from "../helpers/axios";

    function History() {
        const [messages, setMessages] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            axiosService.get('http://localhost:8000/api/chat/')
                .then(res => {
                    setMessages(res.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }, []);

        if (loading) return <p>Loading messages...</p>;
        if (error) return <p>Error loading messages: {error.message}</p>;

        return (
       <div >
        {messages.results && messages.results.map((msg) => (
                <div key={msg.id} style={{ marginBottom: '10px' }}>
                    <p><strong>User:</strong> {msg.user}</p>
                    {msg.message && <p><strong>Bot:</strong> {msg.response}</p>}
                </div>
            ))}
           
        </div>
        )
    }

    export default History;