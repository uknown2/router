
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animals from "./animals";
import Gardens from "./Gardens";
import Layout from "./Layot";
import Nature from "./Nature";
import Trees from "./Trees";




export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/animals" element={<Animals />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Trees" element={<Trees />} />
          <Route path="/Gardens" element={<Gardens />} />
        </Route>
      </Routes>
    </BrowserRouter>

    //npm i -D react-router-dom@latest    
    //npm i -D react-router-dom
  );
}

