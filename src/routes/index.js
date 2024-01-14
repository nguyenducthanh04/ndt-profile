import Home from "~/pages/Home";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
