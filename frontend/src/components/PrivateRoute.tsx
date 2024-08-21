// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   return userInfo ? <Outlet /> : <Navigate to={'/login'} replace />;
// };

// export default PrivateRoute;
import React from 'react';

const PrivateRoute = () => {
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
