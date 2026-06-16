import "./auth.css";
import TabButton from "../TabButton";

export default function Login() {
function printNome(name){
  alert('olá '+name);
}

  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <TabButton clickFunction={()=>printNome('Sara')}>Login</TabButton>
      </p>
    </form>
  );
}
