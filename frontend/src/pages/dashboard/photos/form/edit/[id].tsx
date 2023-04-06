

import { useRouter } from 'next/router';
import PhotoForm from '../../../../../lib/components/App/Dashboard/sections/photos/form';




export default function Edit() {

  const router = useRouter();
  const photoId = router.query.id


  return (
    <PhotoForm type='edit' id={photoId}/>
  );
}