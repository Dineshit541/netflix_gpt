import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSingout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,  photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return ()=>unsubscribe();
  }, []);

  return (
    <div className=" absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-52"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className=" flex p-6 justify-between">
          <img
            className="hidden md:block w-13 h-12 m-1"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            onClick={handleSingout}
            className="p-2 mx-3 my-3 bg-slate-950 text-red-700 font-bold text-md rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
