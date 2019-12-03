export interface ApplicationsDto {
  current_page: number;
  data: Array<ApplicationsDataDto>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface ApplicationsDataDto {
  category: string;
  created_at: string;
  description: string;
  form_configuration: any;
  id: string;
  logo_url: string;
  name: string;
  publisher_id: string;
  repository: string;
  screenshots: Array<string>;
  title: string;
  updated_at: string;
}
