import axios from "../api/axios";

const useDelete = () => {

  const deleteData = async (url,data, token) => {
    const controller = new AbortController();

    let result;

    try {
      const response = await axios.delete(url, data, {
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      result = response.data;
    //   return response.data;
    } catch (error) {
        console.log(error)
        return error
    }
    controller.abort();
    return result;
  };

  return { deleteData };
};

export default useDelete