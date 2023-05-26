import { Box, Button, Card, CardActions, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout as DashboardLayout } from '../../../../lib/components/App/Dashboard/layouts/dashboard/layout';
import AlbumChoice from '../../../../lib/components/App/Dashboard/sections/account/account-album';
import PhotoChoice from '../../../../lib/components/App/Dashboard/sections/account/account-photo';
import { AccountProfileDetails } from '../../../../lib/components/App/Dashboard/sections/account/account-profile-details';

import { RootState, useAppDispatch } from '../../../../store';
import { getUserById, updateUserByAdmin } from '../../../../store/user/userActions';


const Detail = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = router.query.id;
  const { data, error, loading } = useSelector((state: RootState) => state.user.userDetails)




  useEffect(() => {
    dispatch(getUserById(id))
  }, [id])
  
  const onChoiceStart = async () => {
    const data = {
      isChoiced: false
    }
    const res = await dispatch(updateUserByAdmin({ id, data }));
    if (res.meta.requestStatus === 'fulfilled') {

      dispatch(getUserById(id));
    }

  }
  const onChoiceEnd = async () => {
    const data = {
      isChoiced: true
    }
    const res = await dispatch(updateUserByAdmin({ id, data }));
    if (res.meta.requestStatus === 'fulfilled') {

      dispatch(getUserById(id));
    }

  }

  

  return (


    <DashboardLayout>
      <Head>
        <title>
          Account | NNPHOTOFILM
        </title>
      </Head>
      <Box
        component="main"
        style={{ height: 'calc(100% - 325px - 56px)' }}
      >
        <Container maxWidth="lg">

          <div>
            <Typography variant="h4">

            </Typography>
          </div>
          {data &&
            <Card>
              <AccountProfileDetails userDetails={data} />
              <AlbumChoice userDetails={data} />
              <PhotoChoice userDetails={data} />
             
             { data && data?.chosen &&<CardActions>
                {!data?.chosen?.isChoiced && <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => onChoiceEnd()}
                >
                  Seçimi Kapat
                </Button>}
                {/* eslint-disable-next-line */}
               {data?.chosen?.isChoiced && <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => onChoiceStart()}
                >
                  Seçimi Aç
                </Button>}
              </CardActions>}
            </Card>}


        </Container>
      </Box>
    </DashboardLayout>
  )
};

export default Detail;
