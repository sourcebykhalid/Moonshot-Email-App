import axios from "axios";

const API_URL = "https://flipkart-email-mock.now.sh";

export const getEmails = async (page = 1) => {
  const response = await axios.get(`${API_URL}/?page=${page}`);
  return response.data;
};

export const getEmailById = async (id) => {
  const response = await axios.get(`${API_URL}/?id=${id}`);
  return response.data;
};
