import { apiInstance } from 'src/utils/baseUrl';

interface login {
  email_or_phone: string;
  password: string;
}

const login = async ({ email_or_phone, password }: login) => {
  try {
    const response = await apiInstance.post('/login', { email_or_phone, password });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const AuthService = {
  login,
};

export default AuthService;
