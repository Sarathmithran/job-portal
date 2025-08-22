export interface Job {
  id: string;
  title: string;
  company: { display_name: string };
  category: { label: string; tag: string };
  contract_time: string | null;
  salary_min: number | null;
  salary_max: number | null;
  location: { display_name: string; area: string[] };
  created: string;
  redirect_url: string;
  // optional custom fields
  logo?: string;
  timeAgo?: string;
}