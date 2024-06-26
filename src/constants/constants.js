export const authenticatedNavItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Blogs", href: "/blogs" },
];

export const notAuthenticatedNavItems = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  // { name: "Signin", href: "/signin" },
];

// Define route access rules
export const ROUTE_RULES = [
  { path: "/", access: "public", name: "Home" },
  { path: "/signin", access: "public", name: "SignIn" },
  { path: "/blogs", name: "Blogs" },
  { path: "/dashboard", access: "protected", name: "Dashboards" },
  { path: "/unauthorized", access: "public", name: "Unauthorized" },
];
