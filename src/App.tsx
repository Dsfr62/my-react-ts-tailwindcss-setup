import { Route } from "react-router"
import { Routes } from "react-router-dom"

// Or you can create an routes.tsx and put this content there and import that component for this place.

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<div>Hello world</div>} />
    </Routes>
  );
};

export default AppRoutes;