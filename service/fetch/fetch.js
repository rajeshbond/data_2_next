import { api } from "@/app/lib/axios/axios"

export const getEsp32 = async() => {
  const response = await api.get("/api/v1/cycle/latest")

  // console.log("servive log---->",response.data)

  return response.data
};