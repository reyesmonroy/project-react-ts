import { useEffect, useState } from "react"
import { fetchAllClients } from "../helpers/fetchAllClients";
import { Client } from "../interfaces/Client";

export const useClient = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        fetchAllClients()
            .then(cli =>{
                setIsLoading(false);
                setClients(cli);
            });
    }, [])

    return {
        isLoading,
        clients
    }
    
}
