import { apiInstance } from 'src/utils/baseUrl';

const getPropertyType = async () => {
  try {
    const response = await apiInstance.get(`/property_type`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const PropertyTypeService = {
  getPropertyType,
};

export default PropertyTypeService;
