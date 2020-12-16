import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json",
});

export default instance;
