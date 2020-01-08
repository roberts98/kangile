import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ChatPage({ match }) {
  const { socket } = useSelector(state => state);

  useEffect(() => {
    socket.io.emit('CONNECTED', { teamId: match.params.teamId });
  }, [socket.io, match.params.teamId]);

  return <div>Chat</div>;
}

export default ChatPage;
