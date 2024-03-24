import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import RecipeCreateForm from "./pages/recipes/RecipeCreateForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/chefs" render={() => <h1>Chefs</h1>} />
          <Route exact path="/recipes/create" render={() => <RecipeCreateForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <h2>Page Not Found!</h2>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
