import { clientApi } from "../Api/ClientApi"
import { Client, ClientResponse } from "../interfaces/Client";

export const fetchAllClients = async (): Promise<Client[]> => {

    const result = await clientApi.get<ClientResponse>('/clients');
    const data : Client[] = result.data.data;
    return data;
}
