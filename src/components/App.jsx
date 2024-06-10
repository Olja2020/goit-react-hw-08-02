// import { useEffect } from "react";
// import ContactForm from "./contactForm/ContactForm";
// import ContactList from "./contactList/ContactList";
// import SearchBox from "./searchBox/SearchBox";
// import { selectError, selectLoading } from "../redux/contactsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../redux/contactsOps";
// import Loader from "../components/loader/Loader";
// import Error from "../components/error/Error";
// export default function App() {
//   const dispatch = useDispatch();

//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />

//       {isError && <Error message={"oops"} />}
//       {isLoading && <Loader message={"loader"} />}
//       <ContactList />
//     </div>
//   );
// }

import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
//import ContactsPage from "../pages/contactsPage/ContactsPage";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/registrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/contactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/tasks"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};
// Додайте маршрутизацію з бібліотекою React Router. Компоненти сторінок додайте у папку src/pages. Для обгортки компонентів публічних і приватних сторінок використовуйте компоненти PrivateRoute та RestrictedRoute.
// У застосунку мають бути наступні маршрути:
// / - маршрут домашньої сторінки додатка, де можна розмістити інформацію про додаток чи його розробника. Рендерить компонент HomePage.
// /register - публічний маршрут для реєстрації нового користувача, на якому рендериться компонент сторінки RegistrationPage з формою RegistrationForm.
// /login - публічний маршрут для логіна існуючого користувача, на якому рендериться компонент сторінки LoginPage з формою LoginForm.
// /contacts - приватний маршрут для роботи зі списком контактів користувача, на якому рендериться компонент сторінки ContactsPage.
// Створіть компонент Layout, який буде рендерити компонент AppBar і огортати усі маршрути, щоб бути доступним на кожному із них.
// Компонент AppBar має рендерити компонент навігації Navigation та AuthNav. Водночас авторизований користувач замість AuthNav має бачити UserMenu.
// Обов’язково очищайте колекцію контактів у стані при логауті користувача.
