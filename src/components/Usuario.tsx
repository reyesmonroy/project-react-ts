import { useState } from "react";

interface User {
    uid: string,
    name: string
}

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC',
            name: 'Fernando'
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button 
                onClick={ login }
                className="btn btn-primary">
                Login 
            </button>
            {
                (user) ?
                <pre> { JSON.stringify(user) }</pre>
                : <pre>  No hay Usuario </pre>
            }
            
        </div>
    )
}
