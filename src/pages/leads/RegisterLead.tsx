import { Grid, Typography } from '@mui/material';
import React from 'react';
import CustomerForm from 'src/components/customer/CustomerForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import LeadService from 'src/services/LeadService';
import { useMutation, useQuery } from '@tanstack/react-query';
import InformationSource from 'src/services/InformationSourceService';

interface leadsInputs {
  name: string;
  email: string;
  phone_one: string;
  phone_two: string;
  phone_three: string;
  phone_four: string;
  information_source: string;
  property_type: string;
  youtube: string;
  facebook: string;
  telegram: string;
  tiktok: string;
  linkedin: string;
  whatsapp: string;
  website: string;
  instagram: string;
  image: string;
}

const RegisterLead = () => {
  const [imageData, setImageData] = React.useState('');
  const [image, setImage] = React.useState(null);

  const inforrmationSource = useQuery({
    queryKey: ['getInformationSource'],
    queryFn: () => InformationSource.getInformationSource(),
  });

  const leadMutation = useMutation({
    mutationFn: LeadService.addLead,
    onSuccess: () => {},
  });

  const handleChange = (file: any) => {
    setImageData(file[0]);
    const selectedFile = file[0];
    setImage(URL.createObjectURL(selectedFile));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<leadsInputs>();
  const onSubmit: SubmitHandler<leadsInputs> = (data) => {
    const fData = new FormData();
    fData.append('image', imageData);
    fData.append('name', data.name);
    fData.append('email', data.email);
    fData.append('phone_one', data.name);
    fData.append('phone_two', data.phone_two);
    fData.append('phone_three', data.phone_three);
    fData.append('phone_four', data.phone_four);
    fData.append('property_type', data.property_type);
    fData.append('youtube', data.youtube);
    fData.append('facebook', data.facebook);
    fData.append('telegram', data.telegram);
    fData.append('tiktok', data.tiktok);
    fData.append('linkedin', data.linkedin);
    fData.append('whatsapp', data.whatsapp);
    fData.append('website', data.website);
    fData.append('instagram', data.instagram);
    fData.append('information_source', data.information_source);
    // console.log('fdata', fData);

    leadMutation.mutate(fData);
  };

  return (
    <div>
      <Grid>
        <Typography>RegisterLead</Typography>
        <CustomerForm
          {...{
            onSubmit,
            handleSubmit,
            register,
            image,
            setImage,
            handleChange,
            leadMutation,
            inforrmationSource,
          }}
        />
      </Grid>
    </div>
  );
};

export default RegisterLead;
