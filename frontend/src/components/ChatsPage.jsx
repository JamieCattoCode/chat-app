import React, { useState, useEffect } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const projectId = '5062bbf8-fb40-4a5c-968a-ce64be777716';

const ChatsPage = ({ user }) => {
  return (
    <div className='background'>
      <PrettyChatWindow
        projectId={projectId}
        username={user.username}
        secret={user.secret}
      />
    </div>
  );
}

export default ChatsPage;
