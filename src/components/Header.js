import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toogleGptSearchView } from "../utils/gptSlice";
import { SUPPORTET_LANGUAGES } from "../utils/constant";
import { changelanguage } from "../utils/configSlice";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const dispatch = useDispatch();

  const handleSingout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLangugageChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-col  md:flex-row justify-between">
      <img
        className="w-52 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className=" flex p-6 justify-between">
          {showGptSearch && (
            <select
              className=" self-center p-2 rounded-md text-white font-semibold  cursor-pointer focus:outline-none bg-gray-700 "
              onChange={handleLangugageChange}
            >
              {SUPPORTET_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" py-2 px-4 mx-4 my-4  bg-red-700 text-white rounded-lg "
            onClick={handleGptSearch}
          >
      
            { showGptSearch ?"Home Page" : "Movies Search"}
          </button>
        
          <button
            onClick={handleSingout}
            className="p-4 mx-4 my-3  bg-slate-900 text-white font-bold text-md rounded-md hover:bg-red-700"
          >
          <FaPowerOff />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
