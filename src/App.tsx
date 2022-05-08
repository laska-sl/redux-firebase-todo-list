import { FC, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { setHasLoaded } from "./redux/actionTypes/loadingStatusActions";
import { store } from "./redux/store";
import { auth } from "./services/firebase";

const App: FC = () => {
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  let [isLoading, setLoadingStatus] = useState(true); // TODO Replace with Redux state

  useEffect(() => {
    if (isLoading && !!user) {
      dispatch(setHasLoaded());
    }
  }, [user]);

  store.subscribe(() => {
    console.log("state changed: " + store.getState().isLoading);
    setLoadingStatus(store.getState().isLoading);
  });

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Container />
        </>
      )}
    </div>
  );
};

export default App;
