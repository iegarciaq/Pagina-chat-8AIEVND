import React, { useEffect, useState } from 'react'

export const Messages = ({ messages }) => {


    console.log(messages);
    
    const cerrarSesion = () => {
        // TODO: Eliminar el usuario del LS - removeItem

        // TODO: Redirigir al usuario al login ( / ) - navigate

        window.localStorage.reload()
    }

    return (
        <>
            <header className='chat_mainHeader'>
                <p>Chat chismes3mil</p>
                <button className='btnLeaveChat' onClick={ cerrarSesion } >Salir del chat</button>
            </header>
            <div className='messages_container'>
                {
                    messages.map(message => message.username === localStorage.getItem("username") ? (
                        <div className='message_chats' key={message.idMessage}>
                            <div className='message_sent'>
                                <p> {message.text} </p>
                            </div>
                        </div>

                    ) : (
                        <div className='message_chats' key={message.idMessage}>
                            <p className='user_received'>OTROS</p>
                            <div className='message_received'>
                                <p> {message.text} </p>
                            </div>
                        </div>
                    ))
                }

                {/* Escribiendo */}
                <div className="message_status">
                    <p>Escribiendo ...</p>
                </div>
            </div>
        </>
    )
}
