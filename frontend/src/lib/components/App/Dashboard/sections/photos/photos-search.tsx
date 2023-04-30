import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, CardActions, Grid, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import Select from '../../../../Form/Select';
import { PhotoProperty } from '../../../../../../types/photo';
import useForm from '../../../../../_hooks/useForm';
import { jsonToQueryString } from '../../../../../_helpers/query';
import { cleanNullProperty } from '../../../../../_helpers/utility';
import { useRouter } from 'next/router';
import Button from '../../../../Form/Button';

export const PhotosSearch = () => {

  const router = useRouter();

  const defaulValues = {
    Property: '',

}

const { control, errors, handleSubmit, setValue } = useForm({
    defaultValues: defaulValues,
    validationSchema: {


    }
})


const onSubmit = (data: any) => {

  const newData = { ...data };

  const q = jsonToQueryString(cleanNullProperty(newData));

  if (q) {
    router.push(`/dashboard/photos?${q}`)
  } else {
    router.push(`/dashboard/photos`)
  }
}





  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={1} component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, padding: '2rem' }}>
        <Grid item xs={12} md={6} sm={6} lg={6} sx={{ mt: 2 }} ><Select options={{ data: [{ Value: 'Ana Sayfa', Id: PhotoProperty.Home }, { Value: 'Galeri', Id: PhotoProperty.Gallery }, { Value: 'Video', Id: PhotoProperty.Video }, { Value: 'Album', Id: PhotoProperty.Album }], displayField: 'Value', displayValue: 'Id' }} id="Property" name="Property" label="Tip" control={control} errors={errors} setValue={setValue} defaultValue={defaulValues.property} fullWidth />
        </Grid>
        <Button text="Filter" type='submit' />
      </Grid>
    </Card>
  )
};
