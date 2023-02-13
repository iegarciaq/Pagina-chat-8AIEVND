import React, { useEffect, useState } from 'react'

export const Users = ({ socket }) => {

  const [users, setUsers] = useState([])

  useEffect(() => {

    socket.on("newUserAdded", (users) => setUsers(users)
    )

  }, [users, socket])

  // hooks : Funciones de React



  return (
    <div className='chat_sidebar'>
      <h2>Chat 8A IEVND</h2>

      <div>
        <h4 className='chat_header'>Usuarios Conectados</h4>
        <div className='chat_users'>
          {
            users.map((user => (
              <h1 key={user.socketId}> {user.user} </h1>
            )))
          }
        </div>
      </div>
    </div>
  )
}
