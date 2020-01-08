import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  CONNECTED,
  MESSAGE_RECEIVED,
  MESSAGE_SENT
} from '../../../contants/sockets';
import {
  getMessagesRequest,
  postMessagesRequest
} from '../../../services/chat.service';

function ChatPage({ match }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { socket, auth } = useSelector(state => state);
  const { teamId } = match.params;

  useEffect(() => {
    socket.io.emit(CONNECTED, { teamId });

    socket.io.on(MESSAGE_RECEIVED, function(data) {
      setMessages(prevMessages => [...prevMessages, data.message]);
    });
  }, [socket.io, teamId]);

  useEffect(() => {
    (async function() {
      try {
        const res = await getMessagesRequest(auth.token, teamId);
        setMessages(res.data.messages);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, [auth.token, teamId]);

  function handleSubmit(e) {
    e.preventDefault();
    (async function() {
      try {
        const res = await postMessagesRequest(auth.token, teamId, {
          authorId: auth.user._id,
          message
        });
        socket.io.emit(MESSAGE_SENT, { teamId, message: res.data.message });
        setMessages(prevMessages => [...prevMessages, res.data.message]);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }

  return (
    <>
      {messages.map(message => (
        <div key={message._id}>{message.message}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setMessage(e.target.value)} />
      </form>
    </>
  );
}

export default ChatPage;
