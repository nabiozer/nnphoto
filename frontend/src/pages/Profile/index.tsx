import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProfileAlbumChoice from '../../lib/components/App/Profile/profile-album';
import { ProfileDetails } from '../../lib/components/App/Profile/profile-details';
import ProfilePhotoChoice from '../../lib/components/App/Profile/profile-photo';
import { RootState, useAppDispatch } from '../../store';
import { getProfile, getUserById } from '../../store/user/userActions';


const Detail = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = router.query.id;
  const { data, error, loading } = useSelector((state: RootState) => state.user.userDetails)

  useEffect(() => {
    dispatch(getProfile())
  }, [id])

  return (


    <Box sx={{ marginTop: '100px' }}>
      <Head>
        <title>
          Profil | NNPHOTOFILM
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
          {data && <>
            <ProfileDetails userDetails={data} />
            <ProfileAlbumChoice userDetails={data} />
            <ProfilePhotoChoice userDetails={data} />
          </>}


        </Container>
      </Box>
    </Box>
  )
};

export default Detail;
