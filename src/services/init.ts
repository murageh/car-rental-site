import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

const api = (token = '', useFormData = false) => {
    instance.interceptors.request.use(
        (requestConfig) => {
            if (token) requestConfig.headers.authorization = `Bearer ${token}`;
            requestConfig.headers['Content-Type'] = useFormData ? 'multipart/form-data' : 'application/json';
            return requestConfig;
        },
        (error) => {
            if (error.code === 'ECONNABORTED')
                return 'timeout';

            if (axios.isCancel(error)) {
                console.log('Request cancelled.');
                return Promise.reject(error);
            }
            // show toast message
            // toast.error(error.message || 'Something went wrong. Please try again.');
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                // toast.error('Unauthorized');
                // localStorage.removeItem('token');
                // window.location.href = '/login';
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default api;
