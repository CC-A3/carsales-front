import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1';

export const login = ({ email, password }) => axios({
  method: 'post',
  url: `${baseUrl}/login`,
  data: {
    email,
    password,
  },
});

export const signup = ({ email, fullName, password }) => axios({
  method: 'post',
  url: `${baseUrl}/signup`,
  data: {
    email,
    fullName,
    password,
  },
});

export const activeUser = (code ) => axios({
  method: 'put',
  url: `${baseUrl}/verify`,
  params: {
    code,
  },
});

export const fetchClientProfile = (id) => axios({
  method: 'get',
  url: `${baseUrl}/profile/${id}`,
})

export const changeProfile = ({ id, email, fullName, phoneNumber }) => axios({
  method: 'put',
  url: `${baseUrl}/profile/change`,
  data: {
    id,
    email,
    fullName,
    phoneNumber
  },
});

export const changePassword = ({ id, previousPassword, newPassword }) => axios({
  method: 'put',
  url: `${baseUrl}/change-password`,
  data: {
    id,
    previousPassword,
    newPassword,
  },
});
