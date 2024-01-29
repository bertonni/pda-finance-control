import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

function LandingPage() {
  const { loggedUser, signinWithGoogle } = useAuth();

  return (
    <div
      className="h-screen w-screen flex flex-col items-center
      justify-between py-14"
    >
      <img src="/images/logo-pda.png" alt="logo pda" />
      <div className="flex flex-col items-center gap-4">
        <h1 className="display-large text-center">PDA</h1>
        <h2 className="headline-small text-center w-2/3">
          Gerenciamento Financeiro
        </h2>
      </div>
      {loggedUser ? (
        <Link to={"/finance/home"}>
          <Button
            title="Começar"
            style={{ width: 200 }}
          />
        </Link>
      ) : (
        <Button title="Login" onClick={signinWithGoogle} style={{ width: 200 }} />
      )}
    </div>
  );
}

export default LandingPage;
