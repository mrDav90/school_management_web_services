import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/dashboard',{replace:true});  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ececec]">
      <div className="flex rounded-5 shadow-lg w-full max-w-[930px] p-3 bg-white">
        {/* Left Box */}
        <div className="hidden md:flex justify-center items-center flex-col bg-[#f29c15] w-1/2 rounded-4 p-5 overflow-hidden">
          <div className="featured-image mb-3">
            <img src="images/boulanger.png" alt="Boulanger" className="w-72" />
          </div>
          <p className="text-white text-3xl font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>Login</p>
          <small className="text-white text-center" style={{ width: '17rem', fontFamily: "'Poppins', sans-serif" }}>
            Le futur de la boulangerie - Pâtisserie commence ici.
          </small>
        </div>

        {/* Right Box */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-10">
          <div className="flex items-center mb-4">
            <img src="images/EFEB.png" alt="Logo" className="w-20 h-auto mr-2" />
            <h2 className="text-xl">Bienvenue!</h2>
          </div>
          <p className="mb-4">Connectez-vous à votre compte.</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg bg-light text-lg border border-gray-300 rounded-md p-3 w-full placeholder:text-gray-500"
              placeholder="E-mail"
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              className="form-control form-control-lg bg-light text-lg border border-gray-300 rounded-md p-3 w-full placeholder:text-gray-500"
              placeholder="Mot de passe"
            />
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex items-center">
              <input type="checkbox" className="form-check-input" id="formCheck" />
              <label htmlFor="formCheck" className="text-gray-600 ml-2">
                <small>Se souvenir de moi</small>
              </label>
            </div>
            <div className="forgot">
              <small><a href="#" className="text-blue-600 hover:underline">Mot de passe oublié ?</a></small>
            </div>
          </div>
          <div className="mb-3">
            <button 
              className="w-full bg-[#f29c15] border-0 text-white text-lg p-3 rounded-md hover:bg-[#d88b1a]"
              onClick={handleLoginClick}
            >
              Connexion
            </button>
          </div>
          <div className="mb-3">
            <button className="w-full bg-white border rounded-md text-lg p-3 flex items-center justify-center">
              <img src="images/google.png" alt="Google" className="w-5 mr-2" />
              <small>Connectez-vous avec Google</small>
            </button>
          </div>
          <div className="text-center">
            <small>Vous n'avez pas de compte ? <a href="#" className="text-blue-600 hover:underline">S'inscrire</a></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
