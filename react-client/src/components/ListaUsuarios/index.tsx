import React, {useState, ChangeEvent} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useQuery} from '@apollo/client'
import { Usuarios } from '../UsuarioType';
import { GET_USER } from '../../services/userServices'
import { Avatar, ListItemAvatar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'id' | 'name' | 'avatar' | 'email' | 'phone' | 'password';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
  
const columns: readonly Column[] = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'avatar', label: 'Foto', minWidth: 100 },
    { id: 'name', label: 'Nome', minWidth: 200 },
    { id: 'email', label: 'Email', minWidth: 200 },
    { id: 'phone', label: 'Contato', minWidth: 170 },
];
  

export default function ListaUsuarios() {
  const {data, loading} = useQuery(GET_USER)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = data?.users.map((user: Usuarios) => 
    <TableRow role="checkbox" tabIndex={-1} key={user.id}>                    
        <TableCell component="th" scope="rows">
            {user.id}
        </TableCell>
        <TableCell>
            <Avatar alt={"foto usuário"} src={user.avatar}>
                <AccountCircle />
            </Avatar>
        </TableCell>
        <TableCell>
            {user.name}
        </TableCell>
        <TableCell>
            {user.email}
        </TableCell>
        <TableCell>
            {user.phone}
        </TableCell>
    </TableRow>
    
  )

  if(loading)
    return <p>Carregando...</p>

  return (
    <>
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: '100%' }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                labelRowsPerPage="Usuários por página:"
                rowsPerPageOptions={[5, 15, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    </>
  )
}
