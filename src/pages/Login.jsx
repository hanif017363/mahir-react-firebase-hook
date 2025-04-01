import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function UserLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, user.email, user.password);
  };
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          className="border-2 border-gray-400"
          type="text"
          value={user.email}
          onChange={handleChange}
          required
          name="email"
        />
        <input
          className="border-2 border-gray-400"
          type="password"
          value={user.password}
          onChange={handleChange}
          required
          name="password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      </form>
      <input
        ref={inputRef}
        className="border-2 border-gray-400 my-8"
        placeholder="Type here..."
      />
    </div>
  );
}

export default UserLogin;
