import React from 'react';
import Messaging from './Messaging';
import InboxDetails from './InboxDetails';

const Inbox = () => {
    return (
        <div>
            <Messaging/>
            <InboxDetails/>
        </div>
    );
};

export default Inbox;