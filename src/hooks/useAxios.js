import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = initialBaseUrl => {
  const [axiosData, setData] = useState([]);
  const [baseUrl, updateBaseUrl] = useState(initialBaseUrl);
  //   const [restOfUrl, updateRestOfUrl] = useState(initialRestOfUrl);
  const addAxiosData = async (restOfUrl = null) => {
    if (!restOfUrl) return;
    const res = await axios.get(`${baseUrl}/${restOfUrl}`);
    setData(() => [...axiosData, { ...res.data, id: uuid() }]);
  };

  return [axiosData, addAxiosData, updateBaseUrl];
};

export default useAxios;
