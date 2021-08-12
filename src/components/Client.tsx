import { useClient } from "../hooks/useClient"
import { Loading } from "./Loading";

export const Client = () => {

    const { isLoading, clients } = useClient();

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        clients.map( c => 
                            <tr key={ c.id }>
                                <th >{ c.id }</th>
                                <td>{ c.first_name }</td>
                                <td>{ c.last_name }</td>
                                <td>{ c.email }</td>
                            </tr>
                        )
                    }
                    
                </tbody>
                </table>
                {
                    isLoading && <Loading></Loading>
                }
        </>
    )
}
