import React from 'react';

const Messaging = ({chatId}) => {
  const conversation = {
    name: 'Alice',
    messages: [
      { sender: 'Alice', text: 'Hey there!', time: '10:30 AM' },
      { sender: 'You', text: 'Hi! How’s it going?', time: '10:31 AM' },
    ],
  };

  return (
    <div>
    </div>
  );
}

export default Messaging;