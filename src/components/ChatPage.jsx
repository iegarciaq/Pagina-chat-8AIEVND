import React, { useEffect, useState } from 'react'
import { MessageBox } from './MessageBox'
import { Messages } from './Messages'
import { Users } from './Users'

export const ChatPage = ({ socket }) => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on("resendMessage", (msg) => {
      setMessages([
        ...messages,
        msg
      ])
    })
  }, [messages, socket])


  return (
    <div className='chat'>
      <Users socket={socket} />
      <div className='chat_main'>
        <Messages messages={messages} />
        <MessageBox socket={socket} />
      </div>
    </div>
  )
}
