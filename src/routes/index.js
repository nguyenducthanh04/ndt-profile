import Home from "~/pages/Home";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
import Profile from "~/pages/Profile";
import BlogDetail from "~/pages/BlogDetail";
import AuthLogin from "~/pages/AuthLogin/Auth";
import User from "~/pages/users";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/profile", component: Profile },
  { path: "/blog-detail/:id", component: BlogDetail },
  { path: "/auth/login", component: AuthLogin },
  { path: "/user", component: User },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
