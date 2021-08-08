import { useReducer } from "react";

const initialState = {
    contador: 0
}

type ActionType = 
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }

const contadorReducer = ( state: typeof initialState, action: ActionType) => {
    switch ( action.type ) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
    
        default:
            return state;
    }
}

/* Se agrega individual lo de arriba por lo general en otro archivo */
export const ContadorRed = () => {

    const [ { contador } , dispatch] = useReducer(contadorReducer, initialState)

    return (
        <>
           <h3> contador: { contador } </h3> 
           <button className="btn btn-primary" 
                onClick={ () => dispatch({ type: 'incrementar' }) }>
               +1
           </button>

           <button className="btn btn-success" 
                onClick={ () => dispatch({ type: 'decrementar' }) }>
               -1
           </button>

           <button className="btn btn-danger" 
                onClick={ () => dispatch({ type: 'custom', payload: 100 }) }>
               100
           </button>
        </>
    )
}
