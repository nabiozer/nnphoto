import Head from 'next/head';
import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import { Layout as DashboardLayout } from '../../../../lib/components/App/Dashboard/layouts/dashboard/layout'
import { AccountProfile } from '../../../../lib/components/App/Dashboard/sections/account/account-profile';
import { AccountProfileDetails } from '../../../../lib/components/App/Dashboard/sections/account/account-profile-details';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../../../store';
import { getUserById } from '../../../../store/user/userActions';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const Detail = () =>{
    const dispatch = useAppDispatch();
    const router = useRouter();
    const id = router.query.id;
    const {data,error,loading} = useSelector((state:RootState) => state.user.userDetails)
    
    useEffect(() => {
                dispatch(getUserById(id))
    }, [id])

return(

    
  <DashboardLayout>
    <Head>
      <title>
        Account | NNPHOTOFILM
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        marginBottom: 10,
       
       
      }}
      style={{height:'calc(100vh - 325px - 56px)'}}
    >
      <Container maxWidth="lg">
        
          <div>
            <Typography variant="h4">
              
            </Typography>
          </div>
          {data && <>
            <div>
         
              <AccountProfileDetails userDetails={data}/>
            
          </div>
          </>} 
          
   
      </Container>
    </Box>
  </DashboardLayout>
)} ;

export default Detail;
