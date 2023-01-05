import "./styles.css";
import logoImg from "../../../assets/logo.jpg";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  // armazena o valor dos inputs
  const [password, setPassword] = useState("");

  function hendleLogin(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (email == "jose@teste.com" && password == "1234") {
      alert("email: " + email + " " + "password: " + password);
    } else {
      alert("Nome de usuário ou senha inválidos!");
    }
  }

  return (
    <div className="container">
      <main className="main">
        <form className="form">
          <h1>Welcome</h1>
          <img className="logo" src={logoImg} alt="Logotipo" />

          <section className="sectionInputs">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              id="email"
              className="input"
              required
              placeholder="Email"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              className="input"
              required
              placeholder="Password"
            />

            <button
              className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl text-white uppercase p-2"
              type="submit"
              onClick={hendleLogin}
            >
              Logar
            </button>
          </section>
        </form>
      </main>
    </div>
  );
}
export { Login };
