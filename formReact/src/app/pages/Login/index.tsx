import './styles.css'

interface LoginProps {
  text: string;
}

function Login({ text }:LoginProps) {
  return (
    <div className='container'>
      <h3>{text}</h3>
    </div>
  );
}
export { Login };
