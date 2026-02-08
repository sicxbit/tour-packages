export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Vendor", href: "/vendor" },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];
