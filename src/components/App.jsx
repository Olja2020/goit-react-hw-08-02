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
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
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
