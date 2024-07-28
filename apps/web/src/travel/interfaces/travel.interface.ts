export interface Travel {
  id:          string;
  origin:      string;
  destination: string;
  startDate:   string;
  hour:        string;
  price:       number;
  isActive:    boolean;
  state:       string;
  carID:       string;
}

export interface SearchTravelsQueryParams {
  start_date?: string
  hour?: string
  origin?: string
  destination?: string
  max_price?: number
}
