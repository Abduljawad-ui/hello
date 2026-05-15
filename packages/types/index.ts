export interface Shop {
  id: string;
  name: string;
  category: string;
  address: string;
}
export interface Complaint {
  id: string;
  shop_id: string;
  category: string;
  description: string;
  status: string;
  created_at: string;
}
