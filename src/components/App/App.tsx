import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSneakersList } from "../../redux/sneakers/actions";
import { IState } from "../../redux/rootReducer";
import { Loader, Catalog, About, Header, Home, Footer, SomeError } from '../';
import style from './App.module.css';


function App() {
  const dispatch = useDispatch();
  const { pending, error } = useSelector((state: IState) => state.sneakers);
  useEffect(() => {
    dispatch(getSneakersList());
  }, [ dispatch ]);


  if (pending) {
    return <Loader />;
  }

  return (
    <div className={ style.app }>
      <Header />
      <main className={ style.container }>
        { error && <Redirect to="/error" /> }
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/catalog" component={ Catalog } />
          <Route path="/about" component={ About } />
          <Route path="/error">
            <SomeError text="Something wrong :(" />
          </Route>
          <Route path="/notfound">
            <SomeError text="Not found :(" />
          </Route>
          <Redirect to="/notfound" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
