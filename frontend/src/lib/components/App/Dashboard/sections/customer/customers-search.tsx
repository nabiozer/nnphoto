import { Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import useForm from '../../../../../_hooks/useForm';
import Button from '../../../../Form/Button';
import DateTimePicker from '../../../../Form/DateTimePicker';
import Input from '../../../../Form/Input';
import Select from '../../../../Form/Select';
import { StatusSelect } from '../account/type';

export const CustomersSearch = () => {

  const router = useRouter();

  const defaultValues = {
    Name: '',
    StartDate: null,
    EndDate: null,
    Description:'',

  }

  const { control, errors, handleSubmit,setValue } = useForm({
    defaultValues: defaultValues,
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
      <Grid item xs={12} md={3} sm={3} lg={3}  > <Select displayEmpty options={{ data:  StatusSelect || [], displayField: 'Value', displayValue: 'Value' }} id="Status" name="Status" label="Durum" control={control} errors={errors} setValue={setValue} defaultValue={defaultValues.Description} fullWidth /></Grid>
        <Grid item xs={12} md={3} sm={3} lg={3}  ><Input id="Name" name="Name" placeholder="Kullanıcı Adı" label="Kullanıcı Adı" control={control} errors={errors} /></Grid>
        <Grid item xs={12} md={3} sm={3} lg={3} ><DateTimePicker id="StartDate" name="StartDate" label="Çekim Tarihi"  control={control} errors={errors} unixTime fullWidth sx={{ width: '100% ' }} /></Grid>
        <Grid item xs={12} md={3} sm={3} lg={3} ><DateTimePicker id="EndDate" name="EndDate" label="Çekim Tarihi"  control={control} errors={errors} unixTime fullWidth sx={{ width: '100% ' }} /></Grid>
        <Grid item xs={12} md={12} sm={12} lg={12} >
          <Button text="Filtrele" type='submit' fullWidth />
        </Grid>

      </Grid>
    </Card>
  )
};


