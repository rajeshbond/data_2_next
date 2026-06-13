import { getEsp32 } from "@/service/fetch/fetch";
import { useQuery } from "@tanstack/react-query"

export const useEsp32 = ()=>{
  return useQuery({
    queryKey:["espData"],
    queryFn:getEsp32,
     refetchInterval: 1000, // 🔥 live dashboard
    staleTime: 500,
  });
}