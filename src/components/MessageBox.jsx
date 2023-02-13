import React, { useState } from 'react'

export const MessageBox = ({socket}) => {


    const [message, setmessage] = useState("")

    const sendMessage = (evento) =>{ 
        evento.preventDefault()

        /* Checking if the message is empty and if the username is
         in the local storage. */
        if (message.trim() && localStorage.getItem("username")) {
            socket.emit('message', {
                text: message,
                username: localStorage.getItem("username"),
                idMessage: `${socket.id}${Math.random()}`, //  54dewfe8.35435473874
                socketId: socket.id
            })
        }

        setmessage("")
    }

    return (
        <div className='footer'>
            <form className='frmMessage' onSubmit={ sendMessage }>
                <input
                    type="text"
                    placeholder='Escribe tu mensaje...'
                    className='message'
                    value={ message }
                    onChange={ (texto) => setmessage(texto.target.value) }
                />
                <button className='btnSend'>Enviar</button>
            </form>
        </div>
    )
}
