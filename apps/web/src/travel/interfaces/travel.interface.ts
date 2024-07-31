export interface Travel {
  id:               string;
  origin:           string;
  destination:      string;
  startDate:        string;
  hour:             string;
  price:            string;
  isActive:         boolean;
  state:            string;
  carID:            string;
  PreferenceTravel: PreferenceTravel[];
  disponibility:    number;
  driver:           Driver[];
  rating:           Rating;
  car: Car
  meetingPoint: string
  description: string
}

interface PreferenceTravel {
  id: string
  name: string
}

interface Rating {
  average: null | number
}

interface Car {
  id:               string;
  userID:           string;
  brand:            string;
  color:            string;
  capacity:         number;
  photo:            string;
  patent:           string;
  drivingRecord:    string;
  vehicleInsurance: string;
}


 interface Driver {
  id:     string;
  userID: string;
  dni:    string;
  name:   string;
  phone:  string;
  gender: string;
  avatar: null;
}

export interface SearchTravelsQueryParams {
  size?: number
  limit?: number
  start_date?: string
  hour?: string
  origin?: string
  destination?: string
  max_price?: number
}

