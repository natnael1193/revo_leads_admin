import { apiInstance } from 'src/utils/baseUrl';

const getInformationSource = async () => {
  try {
    const response = await apiInstance.get(`/information_source`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const InformationSource = {
  getInformationSource,
};

export default InformationSource;
