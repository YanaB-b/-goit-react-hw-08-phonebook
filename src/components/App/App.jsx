import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css'
import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'Redux/auth/authOperations';
import { useAuth } from '../../Hooks/UseAuth';

const Home = lazy(() => import('../../Pages/Home/Home'));
const Register = lazy(() => import('../../Pages/Register/Register'));
const Login = lazy(() => import('../../Pages/Login/Login'));
const Contacts = lazy(() => import('../../Pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/contacts" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
