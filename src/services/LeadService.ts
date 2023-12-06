import { apiInstance } from 'src/utils/baseUrl';

const addLead = async (formData: FormData) => {
  try {
    const response = await apiInstance.post('/customers', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getLeads = async ($paginate: number, page: number) => {
  try {
    const response = await apiInstance.get(`/customers?paginate=${$paginate}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const LeadService = {
  addLead,
  getLeads,
};

export default LeadService;
