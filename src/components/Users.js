import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { gql, useQuery } from '@apollo/client';
import './Users.scss';


const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 150,
        editable: true,
    },
    {
        field: 'cats',
        headerName: 'Cats',
        width: 150,
        editable: true,
    },
];

const Users = () => {
    const { loading, error, data } = useQuery(gql`
        query {
            users {
                id
                name
                age
                cats
            }
        }
    `);

    if (loading) return <p>Loading...</p>
    if (error) return <p>There was an error. Please try again!</p>

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={data.users}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )
}

export default Users;

