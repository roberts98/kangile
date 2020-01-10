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
import Layout from '../../Layout';
import { Container } from 'react-bootstrap';
import { Message, FormInput } from './';

function ChatPage({ match }) {
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

  function handleSubmit(message) {
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
    <Layout withNavbar>
      <Container>
        <div>
          {messages.map(message => (
            <Message
              isAuthor={message.authorId === auth.user._id}
              message={message}
              key={message._id}
            />
          ))}
        </div>
        <FormInput handleSubmit={handleSubmit} />
      </Container>
    </Layout>
  );
}

export default ChatPage;
