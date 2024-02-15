import Home from "~/pages/Home";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
import Profile from "~/pages/Profile";
import BlogDetail from "~/pages/BlogDetail";
import GoogleLogins from "~/pages/GoogleLogins/GoogleLogin";
import User from "~/pages/users";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/profile", component: Profile },
  { path: "/blog-detail/:id", component: BlogDetail },
  { path: "/google", component: GoogleLogins },
  { path: "/user", component: User },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
