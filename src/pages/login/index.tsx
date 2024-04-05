import { useState } from 'react';

// import Toast from '~/components/toast';
import { useLoginUserMutation } from '~/store/simpleBankApi';

const LoginPage: React.FC = () => {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
console.log('loginUser', loginUser, 'isLoading', isLoading, 'isError', isError)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

  // Dispatch login action
  loginUser({ loginUserRequest: { username, password } });
  };



  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="username">
            Username
          </label>
          <div className="control">
            <input
              id="username"
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              id="password"
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-link">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
