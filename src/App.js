import { BrowserRouter } from "react-router-dom";

function App() {
  /* 
  get user from store.
  use effect --> check localstorage for token; (true) -> validate; (true)-> auth, setUser in store.
  */

  return (
    <>
      {/* <Navbar user={user} /> */}
      {/* user.isAuthenticated && <userPanel />  */}
      <BrowserRouter>
        <div></div>
      </BrowserRouter>
      {/* footer */}
    </>
  );
}

export default App;
