// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { publicRoutes } from "~/routes";
// import { DefaultLayout } from "~/components/Layout";

// function App() {
//   return (
//     // <DarkModeProvider>
//     <Router>
//       <div className="App">
//         <Routes>
//           {publicRoutes.map((route, index) => {
//             const Layout = route.layout || DefaultLayout;
//             const Page = route.component;
//             return (
//               <Route
//                 key={index}
//                 path={route.path}
//                 element={
//                   <Layout>
//                     <Page />
//                   </Layout>
//                 }
//               />
//             );
//           })}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get("http://ip-api.com/json/");
        console.log("hiii", res)
        setLocation(res.data);
        
        await axios.post("https://679e4562946b0e23c06300b9.mockapi.io/user_address", {
          country: res.data.country,
          regionName: res.data.regionName,
          city: res.data.city,
          isp: res.data.isp,
          org: res.data.org,
        });
      } catch (error) {
        console.error("Lỗi lấy vị trí:", error);
      }
    };
    
    fetchLocation();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
