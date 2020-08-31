export function listenToAuthStateChanged( firebase, setLoginState ) {
  firebase.auth().onAuthStateChanged(function ( user ) {
    if ( user ) {
      console.log("log in")
      setLoginState({ isLoading: false, user })
    } else {
      console.log("log out")
      setLoginState({ isLoading: false, user: null })
    }
  });
}
