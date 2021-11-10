import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make an admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    type="email"
                    onBlur={handleBlur}
                    label="Email"
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;