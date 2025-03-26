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
    <div className="flex-1 flex flex-col bg-white">
      <div className="p-4 border-b border-gray-300">
        <h3 className="text-lg font-semibold">{conversation.name}</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {conversation.messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
            >
              {msg.text}
            </span>
            <small className="block text-gray-500 text-xs mt-1">{msg.time}</small>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Write a message..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default Messaging;