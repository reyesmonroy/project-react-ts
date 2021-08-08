import { useForm } from '../hooks/useForm';

interface Persona {
    email: string,
    nombre: string,
    edad: number
}

export const Fomulario = () => {


    const { email, nombre, edad, formulario, handleChange } = useForm<Persona>({
        email: 'pulmundo@gmail.com',
        nombre: 'Fernando',
        edad: 23
    });

    //const { email, nombre, edad } = formulario;

    /* const [formulario, setFormulario] = useState<Persona>({
        email: '',
        nombre: ''
    });


    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });
    } */

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" 
                        className="form-control"
                        onChange= { handleChange }
                        value= { email }
                        name="email"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" 
                        className="form-control"
                        onChange= { handleChange }
                        value= { nombre }
                        name="nombre"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Edad</label>
                <input type="number" 
                        className="form-control"
                        onChange= { handleChange }
                        value= { edad }
                        name="edad"/>
            </div>

            <pre> { JSON.stringify(formulario) } </pre>
        </form>
    )
}
