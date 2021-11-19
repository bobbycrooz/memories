import React from "react";
import { Route, Switch } from "react-router";
import Errors from "./pages/error";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import Purchased from "./pages/Purchased";
import Acheivement from "./pages/Achievement";
import About from "./pages/About";
import Learning from "./pages/myLearning";
import Purchase from "./pages/buyCourse";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import Course from "./pages/course";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "./hooks/windowSize";
import { useDisableBodyScroll } from "./hooks/hideBodyScroll";
import Hambuger from "./components/sideNav/Hambuger";

// this app uses "user" object in localStorage to check if user exist

function App() {
    const size = useWindowSize();
    const history = useHistory();
    const [error, setError] = React.useState(false);
    const [openSidebar, seTSidebar] = React.useState(true);
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(true);
    const dispatch = useDispatch();
    const { showModal } = useSelector(({ modalSlice }) => modalSlice);
     const [user, setUser] = React.useState(false);

    // disable body scroll when modal is open
    useDisableBodyScroll(showModal);

    // React.useEffect(() => {
    //     if (size.width && size.width <= 900) {
    //         setError(true);
    //     } else {
    //         setError(false);
    //     }
    // }, [size.width]);
    
         React.useEffect(() => {
              const User = localStorage.getItem("User");
              console.log(JSON.parse(User));
              if (User) {
                   setUser(User);
              }
         }, [localStorage]);

    React.useEffect(() => {
        if (history.location.pathname === "/") {
            history.push("/Home");
        }
    }, [size.width]);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         seTSidebar(true);
    //     }, 4000);
    // }, []);

    return (
         <>
              {showModal && <Modal setIsOpen={setIsOpen} />}
              <Hambuger pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

              <div className='App overflow-hidden' id='page-wrap'>
                   <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} />

                   <Switch>
                        <Route path='/Home' exact>
                             <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} />
                        </Route>
                        <Route path='/Contact' exact component={Contact} />
                        <Route path='/Purchased' exact component={Purchased} />
                        <Route path='/About' exact component={About} />
                        <Route path='/buy' exact component={Purchase} />

                        <Route path='/Course' exact component={Course} />
                        <Route path='/ach' exact component={Acheivement} />
                        <Route path='/Learning' exact component={Learning} />
                        <Route path='*' exact component={Home} />
                   </Switch>
                   <Footer />
              </div>
         </>
    );
}

export default App;
