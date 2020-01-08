import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  CONNECTED,
  MESSAGE_RECEIVED,
  MESSAGE_SENT
} from '../../../contants/sockets';

function ChatPage({ match }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { socket } = useSelector(state => state);
  const { teamId } = match.params;

  useEffect(() => {
    socket.io.emit(CONNECTED, { teamId });

    socket.io.on(MESSAGE_RECEIVED, function(data) {
      setMessages(prevMessages => [...prevMessages, data.message]);
    });
  }, [socket.io, teamId]);

  function handleSubmit(e) {
    e.preventDefault();
    socket.io.emit(MESSAGE_SENT, { teamId, message });
    setMessages(prevMessages => [...prevMessages, message]);
  }

  return (
    <>
      {messages.map(message => (
        <div key={message}>{message}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setMessage(e.target.value)} />
      </form>
    </>
  );
}

export default ChatPage;
