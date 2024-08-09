import { api } from "@/common/utils"
import { SearchTravelsQueryParams, Travel } from "../interfaces/travel.interface"

export const getTravelById = async (travelId: string) => {
  try {
    const { data } = await api.get<Travel>(`travel/find-travel/${travelId}`)
    return data
  } catch (error) {
    throw 'Error'
  }
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
    throw 'Error'
  }
};