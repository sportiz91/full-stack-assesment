import axios from "axios";

const hitExternalApi = async () => {
  const { data } = await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart');

  console.log(data);
};

export default hitExternalApi;