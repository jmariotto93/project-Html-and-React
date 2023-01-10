import logoImg from "../../../assets/logo.jpg";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  // armazena o valor dos inputs
  const [password, setPassword] = useState("");

  function hendleLogin(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    // if (email == "jose@teste.com" && password == "1234") {
    //   alert("email: " + email + " " + "password: " + password);
    // } else {
    //   alert("Nome de usuário ou senha inválidos!");
    // }
  }

  return (
    <div className="flex h-screen" >
      <main className="h-3/5 m-auto p-2 bg-white rounded-xl w-[212px] ">
        <form className=" h-full flex flex-col items-center justify-center gap-2 ">
          <h1>Welcome</h1>
          <img className="w-9 rounded-[5px] mb-4 " src={logoImg} alt="Logotipo" />

          <section className=" flex flex-col gap-4 ">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              id="email"
              className="w-full p-2 border-[1px] border-x-0 border-t-0 border-[#8d8c8c] outline-none"
              required
              placeholder="Email"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              className="w-full p-2 border-[1px] border-x-0 border-t-0 border-[#8d8c8c] outline-none"
              required
              placeholder="Password"
            />

            <button
              className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl text-white uppercase p-2 active:scale-90 transition-all active:bg-gradient-to-r active:indigo-500 active:to-sky-500 hover:brightness-90"
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
