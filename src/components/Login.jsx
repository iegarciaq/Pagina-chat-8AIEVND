import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export const Login = ({socket}) => {

    const navigate = useNavigate()

    // TODO: Hooks useState
    const [user, setuser]  = useState ('')

    const sendForm = (evento) => {
        evento.preventDefault()

        localStorage.setItem("username", user)
        

        // Emitir que un usuario que se conectó
        socket.emit("newUserConnected", {user, socketId: socket.id})

        navigate('/chat')

    }

    return (
        <form className="login_form" onSubmit={sendForm}>
            <h2 className="login_title">Ingresa tu nombre de usuario</h2>
            <label htmlFor="username">Usuario</label>
            <input
                type="text"
                minLength={5}
                className="username_input"
                id="username"
                value={ user }
                onChange= { (texto) => setuser(texto.target.value) }
            />
            <button className="btn_login">Acceder</button>
        </form>
    )
}
