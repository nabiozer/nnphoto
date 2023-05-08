

import { useRouter } from 'next/router';
import Form from '../../../../../lib/components/App/Dashboard/sections/expenses/form';





export default function Edit() {

  const router = useRouter();
  const packageId = router.query.id


  return (
    <Form type='edit' id={packageId}/>
  );
}