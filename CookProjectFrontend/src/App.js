import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Signin from "./pages/signin";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import DashViewProfile from "./pages/view_profile";
import DashEditProfile from "./pages/editProfile";
import DashPromotion from "./pages/dashPromotion";
import SearchPage from "./pages/search";
import AdvancedSearchPage from "./pages/advanced_search";
import CreateRecipePage from "./pages/create_recipe";
import ChiefProfilePage from "./pages/chief_profile";
import TicketsPage from "./pages/ticket";
import {useState} from "react";
import axios from "axios";
import Foods from "./Components/Foods/Food";
import FoodDetail from "./Components/Foods/FoodDetail";
import Forum from "./Components/Forum/Forum";
import ForumProfile from "./Components/Forum/ForumProfile";
import ForumDetail from "./Components/Forum/ForumDetail";


export const BASE_API = "http://127.0.0.1:8000/api/"
export const ROLES = {1: "کاربر", 2: "آشپز"}

export function check_error(response) {
    return response.err_c !== undefined;
}


function App() {
    let isLogin = localStorage.getItem("isLogin") === "true";
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [fetchFood, setfetchFood] = useState([]);
    const setFoods = (value) => {
        setfetchFood(value)
        console.log(fetchFood);
    };

    const setAuth = (value) => {
        localStorage.setItem("username", JSON.stringify(value));
        localStorage.setItem("isLogin", JSON.stringify(true));
        isLogin = true;
    };

  const removeAuth = () => {
    localStorage.setItem("isLogin", false);
    isLogin = false;
    localStorage.clear();

  };
  //atom globally

  return (
    //import redirect with navigate
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<SearchPage setFoods={setFoods}/>} exact />
        <Route path="/advanced_search" element={<AdvancedSearchPage setFoods={setFoods} />} exact />
        <Route path="/foods" element={<Foods fetchFood={fetchFood}/>} exact />
        <Route path="/foods/:food_id" element={<FoodDetail />} exact />
        <Route path="/forum-profile/:chiefName/forumList/:forumName/h/:forumId" element={<ForumDetail />} exact />
        <Route path="/forum-profile/:chiefName/forumList" element={<Forum />} exact />
        <Route path="/forum-profile/:chiefName" element={<ForumProfile />} exact />
        <Route path="/create_recipe" element={<CreateRecipePage />} exact />
        <Route path="/chief_profile" element={<ChiefProfilePage />} exact />
        {/* <Route
    const removeAuth = () => {
        let username = JSON.parse(localStorage.getItem("username"))
        let useObject = {"username": username};
        //window.location.reload()
        axios
            .put(BASE_API + `accounts/logout/`, JSON.stringify(useObject), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                localStorage.removeItem("username")
                localStorage.setItem("isLogin", JSON.stringify(false))
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // //atom globally
    //
    return (
        //import redirect with navigate
        <Router className="App">
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/search" element={<SearchPage setFoods={setFoods}/>} exact/>
                <Route path="/course-list/:criterion" element={<SearchPage setFoods={setFoods}/>} exact/>
                <Route path="/advanced_search" element={<AdvancedSearchPage setFoods={setFoods}/>} exact/>
                <Route path="/foods" element={<Foods fetchFood={fetchFood}/>} exact/>
                <Route path="/foods/:food_id" element={<FoodDetail/>} exact/>
                <Route path="/forum-profile/:chiefId/forumList/:forumId" element={<ForumDetail/>} exact/>
                <Route path="/forum-profile/:chiefId/forumList" element={<Forum/>} exact/>
                <Route path="/forum-profile/:chiefId" element={<ForumProfile/>} exact/>
                <Route path="/create_recipe" element={<CreateRecipePage/>} exact/>
                <Route path="/chief_profile/:chief" element={<ChiefProfilePage/>} exact/>
                {/* <Route
          path="/login"
          element={<Dashboard removeAuth2={removeAuth1} />}
          exact
        />
        <Route
          path="/register"
          element={<Dashboard removeAuth2={removeAuth1} />}
          exact
        /> */}
        {/* {!isLogin && (
          <>
            
          </>
        )} */}
                <Route path="/login" element={<Signin setAuth={setAuth}/>} exact/>
                <Route path="/register" element={<Register/>} exact/>
                {isLogin && (
                    <>
                        <Route
                            path="/dashboard"
                            element={<Dashboard removeAuth={removeAuth}/>}
                            exact
                        />
                        <Route
                            path="/dashboard/view-profile"
                            element={<DashViewProfile removeAuth={removeAuth}/>}
                            exact
                        />
                        <Route
                            path="/dashboard/edit-profile"
                            element={<DashEditProfile removeAuth={removeAuth}/>}
                            exact
                        />
                        <Route
                            path="/dashboard/promotion"
                            element={<DashPromotion removeAuth={removeAuth}/>}
                            exact
                        />
                        <Route path="/dashboard/tickets" element={<TicketsPage/>} exact/>
                    </>
                )}
                <Route path="*" element={<p>404</p>} exact/>
            </Routes>
        </Router>
    );
}

export default App;
