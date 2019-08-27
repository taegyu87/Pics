import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 96c207f15421490e2c4c4c4cad9512dca2e660327647318f9c049d7084fbf774"
  }
});
