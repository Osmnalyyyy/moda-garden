import axios from "axios";

export const sendMessage = (message) => {
  return axios.post(`buraya api bağlantısı yazılacak`, message);
};
