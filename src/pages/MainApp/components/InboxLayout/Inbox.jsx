import React from 'react';
import { useParams } from 'react-router';

const Inbox = () => {
    const { chatId } = useParams();

    // Mock chat data (you'd fetch this from your backend in a real app)
    const chatData = {
        1: {
            name: 'Ricky Smith',
            messages: [
                { sender: 'Ricky Smith', text: 'Hi! How are you? 😊', time: '11:00 AM' },
                { sender: 'You', text: "Hey Ricky! I'm feeling amazing, how about you?", time: '12:42 PM' },
                { sender: 'Ricky Smith', text: "That's a cool idea! 😎", time: '12:42 PM' },
                { sender: 'You', text: "Hey, so happy you are down! ✨", time: '12:42 PM' },
            ],
        },
        // Add more chat data as needed
    };

    const chat = chatData[chatId] || { name: 'Unknown', messages: [] };

    return (
        <div className="h-full flex flex-col">
            <div className="px-4 py-3.5 border-b-2 border-gray-50 flex items-center shadow">
                <div className="w-10 h-10 rounded-full mr-4"></div>
                <div>
                    <h2 className="text-lg font-semibold">{chat.name}</h2>
                    <p className="text-xs text-green-500">Online</p>
                </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                {chat.messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'
                            }`}
                    >
                        <div
                            className={`max-w-xs p-3 rounded-2xl ${message.sender === 'You' ? 'bg-black text-white' : 'bg-gray-50'
                                }`}
                        >
                            <p>{message.text}</p>
                            <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t-2 border-gray-100">
                <input
                    type="text"
                    placeholder="Write something..."
                    className="w-full p-2 rounded-lg bg-gray-50 border-2 border-gray-100 focus:outline-none placeholder:text-gray-700"
                />
            </div>
        </div>
    );
};

export default Inbox;