import axios from "axios";

// axios--> (throws error automatically)
export const getServices = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos"; // used todos instead of services
  const res = await axios.get(url);
  return res.data; // axios returns everything in property called 'data' in an object.
};

// Fetch-->
// (As fetch does not throw error automatically, here is an exapmple of manual error throwing , in case we use fetch and the response data has a 'success' property.)

// export const getServices = async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos"; // used todos instead of services
//   const res = await fetch(url).then((response) => response.json());
//   if (!res.success) {
//       throw new Error('Something wrong')
//   }
//   return res;
// };
