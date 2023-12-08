import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CustomerForm from 'src/components/customer/CustomerForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import LeadService from 'src/services/LeadService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import InformationSourceService from 'src/services/InformationSourceService';
import PropertyTypeService from 'src/services/PropertyTypeService';
import LeadsErrors from 'src/components/customer/LeadsErrors';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import UpdateCustomerForm from 'src/components/customer/UpdateCustomerForm';

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

const UpdateLead = () => {
  const queryClient = useQueryClient();
  const leadId: any = useParams();
  const [imageData, setImageData] = React.useState('');
  const [image, setImage]: any = React.useState(null);

  const [propertyType, setPropertyType] = React.useState('');
  const [informationSource, setInformationSource] = React.useState('');

  const [formsData, setFormsData]: any = React.useState(undefined);

  //   const [leadsErrors, setLeadsErrors] = React.useState(undefined);
  //   useEffect(() => {
  //     lead.refetch();
  //   }, []);

  //   Get Lead By Id
  const lead = useQuery({
    queryKey: ['getLead'],
    queryFn: () => LeadService.getLead(leadId.id),
    refetchOnWindowFocus: false,
  });

  // Fetch Information Source
  const inforrmationSource = useQuery({
    queryKey: ['getInformationSource'],
    queryFn: () => InformationSourceService.getInformationSource(),
  });

  // Fetch Information Source
  const propertyTypeData = useQuery({
    queryKey: ['getPropertyType'],
    queryFn: () => PropertyTypeService.getPropertyType(),
    // refetchOnWindowFocus: false,
  });

  const leadMutation = useMutation({
    mutationFn: () => LeadService.updateLead(leadId.id, formsData),
    onSuccess: () => {
      queryClient.invalidateQueries(['getLeads']);
      toast.error('Updated Successfully');
      //   reset();
    },
    onError: (error: any, variables: any, context: any) => {
      // console.log('This error occurred', JSON.stringify(error.message));
      console.log('This error occurred', JSON.parse(error.message));
      // setPromoCodeModal(false)
      // Toas.show({
      //   type: 'error',
      //   text1: error?.message,
      // });
    },
  });

  const handleChange = (file: any) => {
    setImageData(file[0]);
    const selectedFile = file[0];
    setImage(URL.createObjectURL(selectedFile));
  };

  const onSubmit: SubmitHandler<leadsInputs> = (data) => {
    const fData = new FormData();
    fData.append('image', imageData);
    fData.append('name', data.name);
    fData.append('email', data.email);
    fData.append('phone_one', data.phone_one);
    fData.append('phone_two', data.phone_two);
    fData.append('phone_three', data.phone_three);
    fData.append('phone_four', data.phone_four);
    fData.append('property_type', propertyType ? propertyType : data.property_type);
    fData.append('youtube', data.youtube);
    fData.append('facebook', data.facebook);
    fData.append('telegram', data.telegram);
    fData.append('tiktok', data.tiktok);
    fData.append('linkedin', data.linkedin);
    fData.append('whatsapp', data.whatsapp);
    fData.append('website', data.website);
    fData.append('instagram', data.instagram);
    fData.append(
      'information_source',
      informationSource ? informationSource : data.information_source
    );
    console.log('fdata', fData);
    setFormsData(fData);
    leadMutation.mutate(fData);
  };

  if (
    inforrmationSource.isLoading ||
    propertyTypeData.isLoading ||
    // ||
    lead.isFetching
  )
    return <div>Loading...</div>;

  console.log('lead', lead);

  return (
    <div>
      <Grid>
        <Typography variant='h3'>RegisterLead</Typography>
        {/* {leadsErrors !== undefined && <LeadsErrors {...{ leadsErrors }} />} */}
        <UpdateCustomerForm
          {...{
            onSubmit,
            image,
            setImage,
            handleChange,
            leadMutation,
            inforrmationSource,
            propertyTypeData,
            propertyType,
            setPropertyType,
            informationSource,
            setInformationSource,
            lead,
          }}
          defaultValues={lead.data.data}
        />
      </Grid>
    </div>
  );
};

export default UpdateLead;
