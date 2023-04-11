import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "@emailjs/browser";

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const handleLogout = (e) => {
    e.preventDefault();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleSendMessage = () => {
    //console.log(emailjs);
    const template = {
      sitename: "Unicode Academy",
      name: "Hoàng An",
      content: "ABC",
    };
    const send = emailjs.send(
      "service_ub4bvhq",
      "template_3n7jrap",
      template,
      "K0-a5BUCAxXfsgo6y"
    );
    send.then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <button onClick={handleSendMessage}>Send email</button>
      {!isLoading &&
        (isAuthenticated ? (
          <p>
            Chào: {user.name} |{" "}
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </p>
        ) : (
          <button
            onClick={() => {
              loginWithRedirect({ ui_locales: "vi" });
            }}
          >
            Login
          </button>
        ))}
    </>
  );
}

export default App;
