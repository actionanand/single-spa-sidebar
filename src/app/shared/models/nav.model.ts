export interface MenuItem {
  icon: string;
  label: string;
  isUrl?: boolean;
  url?: string;
  children?: MenuItem[];
  isOpen?: boolean;
}