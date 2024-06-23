export const authenticatedNavItems = [
  { name: "Dashboard", href: "/dashboard" },
];
export const notAuthenticatedNavItems = [
  { name: "Home", href: "/" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "Signin", href: "/signin" },
];

// Define route access rules
export const ROUTE_RULES = [
  { path: "/", access: "public", name: "Home" },
  { path: "/signin", access: "public", name: "SignIn" },
  { path: "/tutorials", access: "public", name: "Tutorials" },
  { path: "/dashboard", access: "protected", name: "Dashboards" },
  { path: "/unauthorized", access: "public", name: "Unauthorized" },
];
