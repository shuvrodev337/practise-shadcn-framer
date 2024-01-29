import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

const useGetServices = () => {
  const services = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  return services;
};

export default useGetServices;
