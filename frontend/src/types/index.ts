export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SchoolInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}