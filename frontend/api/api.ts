import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const fetchAccessToken = async (): Promise<void> => {
  try {
    await api.get("/crm/auth");
  } catch (err) {
    console.error(err);
  }
};

const fetchAddItems = async (selectedValue: string): Promise<any> => {
  try {
    const response = await api.post(`/crm/items/?endpoint=${selectedValue}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export { fetchAccessToken, fetchAddItems };
