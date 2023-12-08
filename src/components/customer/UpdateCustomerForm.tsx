import { Grid, TextField, Button } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useForm } from 'react-hook-form';
import { imagePath } from 'src/utils/baseUrl';

interface props {
  onSubmit: Function;
  handleSubmit: any;
  register: any;
  image: string;
  setImage: string;
  handleChange: Function;
  leadMutation: Function;
  inforrmationSource: any;
  propertyTypeData: any;
  propertyType: any;
  setPropertyType: any;
  informationSource: any;
  setInformationSource: any;
}

const UpdateCustomerForm = ({
  onSubmit,
  image,
  setImage,
  handleChange,
  inforrmationSource,
  propertyTypeData,
  propertyType,
  setPropertyType,
  informationSource,
  setInformationSource,
  defaultValues,
  leadMutation,
}: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues,
  });

  const propertyTypeHandleChange = (event: SelectChangeEvent) => {
    setPropertyType(event.target.value as string);
  };
  const informationSourceChange = (event: SelectChangeEvent) => {
    setInformationSource(event.target.value as string);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} sx={{ p: 3 }}>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Full Name" {...register('name')} required />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Email" {...register('email')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Phone One" {...register('phone_one')} required />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Phone Two" {...register('phone_two')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Phone Three" {...register('phone_three')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Phone Four" {...register('phone_four')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          {/* <TextField fullWidth label="Information Source" {...register('information_source')} /> */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Information Source</InputLabel>
              <Select
                // defaultValue={1}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={
                  informationSource === '' ? defaultValues.information_source : informationSource
                }
                label="Information Source"
                onChange={informationSourceChange}
              >
                {inforrmationSource.data.data.map((information: any) => (
                  <MenuItem key={information.id} value={information.id}>
                    {information.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          {/* <TextField fullWidth label="Property Type" {...register('property_type')} /> */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={propertyType === '' ? defaultValues.property_type : propertyType}
                label="Property Type"
                onChange={propertyTypeHandleChange}
                required
              >
                {propertyTypeData?.data.data.map((property_type: any) => (
                  <MenuItem key={property_type.id} value={property_type.id}>
                    {property_type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Youtube" {...register('youtube')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Facebook" {...register('facebook')} />
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Instagram" {...register('instagram')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Tiktok" {...register('tiktok')} />
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="LinkedIn" {...register('linkedin')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Whatsapp" {...register('whatsapp')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Telegram" {...register('telegram')} />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <TextField fullWidth label="Website" {...register('website')} />
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <input
            type="file"
            // fullWidth
            // label="Image"
            onChange={(e: any) => handleChange(e.target.files)}
            // onChange={(e: any) => setImage(e.target.value)}
          />
        </Grid>
        <Grid item lg={12} md={12} xs={12} sx={{ m: 3 }}>
          {!image ? (
            // <img src={'http://127.0.0.1:8001/storage/' + defaultValues.image} />
            <img src={imagePath + defaultValues.image} />
          ) : (
            <img src={image} />
          )}
        </Grid>
        <Grid item lg={12} md={12} xs={12} sx={{ mt: 5 }}>
          <Button variant="contained" type="submit">
            {leadMutation.isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UpdateCustomerForm;
