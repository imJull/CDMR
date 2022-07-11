import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import './homeHeader.css'

export const HomeHeader = () => {
  return (
    <div className='home-container'>
        <div className='header-container'>
        <Stack className='avatar' direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
            />
        </Stack>
        <div className='headerText'>
            <h1>Current User</h1>
            <p>User Roll</p>
        </div>
        </div>
    </div>
  )
}
