import Home from "~/pages/Home";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
import Profile from "~/pages/Profile";
import BlogDetail from "~/pages/BlogDetail";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/profile", component: Profile },
  { path: "/blog-detail", component: BlogDetail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
