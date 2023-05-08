import { Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import useForm from '../../../../../_hooks/useForm';
import Button from '../../../../Form/Button';
import DateTimePicker from '../../../../Form/DateTimePicker';
import Input from '../../../../Form/Input';

export const PackagesSearch = () => {

  const router = useRouter();

  const defaulValues = {
    Name: '',
    StartDate:null,
    EndDate:null,

  }

  const { control, errors, handleSubmit } = useForm({
    defaultValues: defaulValues,
    validationSchema: {
    }
  })


  const onSubmit = (data: any) => {

    const newData = { ...data };

    const q = jsonToQueryString(cleanNullProperty(newData));

    if (q) {
      router.push(`/dashboard/customers?${q}`)
    } else {
      router.push(`/dashboard/customers`)
    }
  }

  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate >
      <Grid item xs={12} md={4} sm={4} lg={4}  ><Input id="Name" name="Name" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" control={control} errors={errors} /></Grid>
      <Grid item xs={12} md={4} sm={4} lg={4} ><DateTimePicker id="StartDate" name="StartDate" label="Çekim Tarihi" disablePast control={control} errors={errors} unixTime fullWidth sx={{width:'100% '}}/></Grid>
      <Grid item xs={12} md={4} sm={4} lg={4} ><DateTimePicker id="EndDate" name="EndDate" label="Çekim Tarihi" disablePast control={control} errors={errors} unixTime fullWidth sx={{width:'100% '}}/></Grid>
        <Grid item xs={12} md={4} sm={4} lg={4}  >
          <Button text="Filtrele" type='submit' fullWidth />
        </Grid>

      </Grid>
    </Card>
  )
};


