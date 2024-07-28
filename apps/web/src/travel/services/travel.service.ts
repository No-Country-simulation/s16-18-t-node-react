import { api } from "@/common/utils"
import { SearchTravelsQueryParams, Travel } from "../interfaces/travel.interface"

export const getTravelById = async (id: string) => {
  const travel = await api.get(`travel/${id}`)
  console.log(travel.data)
}

export const getTravelsByQueryParams = async (data: SearchTravelsQueryParams) => {
  const params: Record<string, string> = {}

  Object.keys(data).forEach(key => {
    if (data[key] !== undefined) {
      params[key] = data[key]!.toString()
    }
  });

  const queryParams = new URLSearchParams(params);

  try {
    const { data } = await api.get<Travel[]>(`travel/search?${queryParams}`);
    return data
  } catch (error) {
    throw 'A error'
  }
};