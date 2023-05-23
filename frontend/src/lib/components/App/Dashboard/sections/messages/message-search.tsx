import { Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import useForm from '../../../../../_hooks/useForm';
import Button from '../../../../Form/Button';
import DatePicker from '../../../../Form/DatePicker';
import Input from '../../../../Form/Input';

export const MessagesSearch = () => {

  const router = useRouter();

  const defaulValues = {
    StartDate: null,
    EndDate: null,
    Description:'',
  }

  const { control, errors, handleSubmit } = useForm({
    defaultValues: defaulValues,
    validationSchema: {}
  })


  const onSubmit = (data: any) => {
    const newData = { ...data };
    const q = jsonToQueryString(cleanNullProperty(newData));
    if (q) {
      router.push(`/dashboard/messages?${q}`)
    } else {
      router.push(`/dashboard/messages`)
    }
  }

  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate >
        <Grid item xs={12} md={4} sm={4} lg={4} ><DatePicker id="StartDate" name="StartDate" label="Çekim Tarihi"  control={control} errors={errors} unixTime fullWidth sx={{ width: '100% ' }} /></Grid>
        <Grid item xs={12} md={4} sm={4} lg={4} ><DatePicker id="EndDate" name="EndDate" label="Çekim Tarihi"  control={control} errors={errors} unixTime fullWidth sx={{ width: '100% ' }} /></Grid>
        <Grid item xs={12} md={4} sm={4} lg={4} ><Input id="Name" name="Name" placeholder="Açıklama" label="Açıklama" control={control} errors={errors} /></Grid>
        <Grid item xs={12} md={4} sm={4} lg={4} >
          <Button text="Filtrele" type='submit' fullWidth />
        </Grid>
      </Grid>
    </Card>
  )
};


