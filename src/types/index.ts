export type OrderStatus = "idle" | "submitting" | "success" | "error";

export interface OrderFormState {
  name: string;
  phone: string;
  district: string;
  thana: string;
  address: string;
  size: string;
}

export interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
}

export interface Review {
  name: string;
  city: string;
  text: string;
}
