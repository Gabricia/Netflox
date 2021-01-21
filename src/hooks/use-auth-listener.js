import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";


//this custom hooks allows us to use the localstorage to store and get
//the user authentification beyond session in order check if he is 
//connected or not so he doesn't have to logged in every time he
//opens his browser

//N.B.: localstorage only accept strings: that's why we use json.stringify to store 
//the authuser objet in it and json.parse to get the authuser objet of it

const useAuthListener = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);
  
    useEffect(() => {
        //when the firebase auth state change
      const listener = firebase.auth().onAuthStateChanged((authUser) => {
          //if there is a user authenticed, store the id inside the localstorage 
          //and inside the user state
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser));
          setUser(authUser);
          //else clear localstorage and user state
        } else {
          localStorage.removeItem('authUser');
          setUser(null);
        }
      });
  
      return () => listener();
    }, []);
  
    return { user };

};

export default useAuthListener;
