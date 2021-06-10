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

export const addCarForSale = ({ title, price, kilometers, colour, body, engine, transmission, fuelConsumption, type, ownerId}) => axios({
  method: 'post',
  url: `${baseUrl}/vehicles/add`,
  data: {
    title,
    price,
    kilometers,
    colour,
    body,
    engine,
    transmission,
    fuelConsumption,
    type,
    ownerId,
  }
});
export const fetchVehiclesByType = (type) => axios({
  method: 'get',
  url: `${baseUrl}/vehicles`,
  params: {
    type,
  },
});

export const fetchVehicleById = ({vehicleId, clientId}) => axios({
  method: 'get',
  url: `${baseUrl}/vehicle`,
  params: {
    vehicleId,
    clientId,
  }
})

export const subscribeVehicle = ({ vehicleId, clientId }) => axios({
  method: 'post',
  url: `${baseUrl}/vehicles/${vehicleId}/subscribe/${clientId}`,
});

export const unSubscribeVehicle = ({ vehicleId, clientId }) => axios({
  method: 'post',
  url: `${baseUrl}/vehicles/${vehicleId}/unsubscribe/${clientId}`,
});


export const fetchWatchList = (clientId) => axios({
  method: 'get',
  url: `${baseUrl}/vehicles/watch-list/${clientId}`,
});

export const fetchVehiclesByOwnerId = (ownerId) => axios({
  method: 'get',
  url: `${baseUrl}/vehicles/own-vehicles/${ownerId}`,
});

export const modifyPrice = ({ id, price }) => axios({
  method: 'put',
  url: `${baseUrl}/vehicles/${id}/price/${price}`,
});

export const changeStatus = ({ id, status }) => axios({
  method: 'put',
  url: `${baseUrl}/vehicles/${id}/status/${status}`,
});

