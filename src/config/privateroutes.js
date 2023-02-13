import React, { useEffect, useState } from "react";
import { getAuth,  } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
 const auth = getAuth()
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return navigate("/");
  }

  if (user.email !== "admin@gmail.com") {
    return navigate("/adminfirstscreen");
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome, {user.email}!</p>
    </div>
  );
};

export default AdminPage;





