import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

const useGetServices = () => {
  const services = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    // gcTime:5000
    // staleTime: 30000
  });
  return services;
};

export default useGetServices;
