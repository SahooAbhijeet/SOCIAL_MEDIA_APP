import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import UserCard from './Card';
import PostCardLList from './PostCardList';
import UserList from './UserList';



export default function MainContainer() {
  return (
    <Box sx={{ width: '100%', mt: '3rem' }}>
      <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={0} md={3}>

          <UserList />

        </Grid>
        <Grid xs={12} md={9} container justifyContent={"center"} alignContent={"center"} direction={"column"} gap={"3rem"} mx={"-5rem"}>

          <PostCardLList />
          
        </Grid>

      </Grid>
    </Box>
  );
}
