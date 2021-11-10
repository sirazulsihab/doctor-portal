import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppoinments] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/appoinments?email=${user.email}&date=${date}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAppoinments(data));
    }, [date])
    return (
        <div>
            <h2>Appointments : {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointment table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <StyledTableRow key={row._id}>

                                <StyledTableCell align="right">{row.patientsName}</StyledTableCell>
                                <StyledTableCell align="right">{row.time}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;