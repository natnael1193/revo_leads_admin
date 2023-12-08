import { apiInstance } from 'src/utils/baseUrl';
import toast from 'react-hot-toast';

const addLead = async (formData: FormData) => {
  try {
    const response = await apiInstance.post('/customers', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error-error', error);
    toast.error(error.response.data.message);
    throw new Error(error);
  }
};

const getLeads = async ($paginate: number, page: number) => {
  try {
    // const response = await apiInstance.get(`/customers?paginate=${$paginate}&page=${page}`, {
    const response = await apiInstance.get(`/customers?paginate=100&page=1`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateLead = async (id: any, formData: any) => {
  console.log('id', id, 'f_data', formData);
  try {
    const response = await apiInstance.post(`/update_customer/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log('error-error', error);
    toast.error(error.response.data.message);
    throw new Error(error);
  }
};

const getLead = async (id: any) => {
  try {
    const response = await apiInstance.get(`/customers/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error-error', error);
    toast.error(error.response.data.message);
    throw new Error(error);
  }
};

const LeadService = {
  addLead,
  getLeads,
  updateLead,
  getLead,
};

export default LeadService;
