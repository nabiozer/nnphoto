

import { useRouter } from 'next/router';
import Form from '../../../../../lib/components/App/Dashboard/sections/customer/form';



export default function Edit() {

  const router = useRouter();
  const customerId = router.query.id


  return (
    <Form type='edit' id={customerId}/>
  );
}