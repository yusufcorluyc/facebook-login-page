
const Login = () => {
  return (
    <div className="container">

      <div className="login">
        <div className="login-container">
          <img src="./src/assets/facebook.svg" id="fb-logo" alt="facebook-logo"/>
          <div className="login-form-div">
            <form action="" id="login-form">
              <div id="log-in-to">Log in to Facebook</div>
              <input type="text" id="email" placeholder="Email adress or phone number"/>
              <input type="password" id="password" placeholder="Password"/>
              <button id="login-button">Log in</button>
              <a href="" id="forgotten-password">Forgotten password?</a>
              <div id="horizontal-line">
                  <span></span>
              </div>
              <button id="sign-in-button">Create new account</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container">
          <ul id="languages">
            <li>English (UK)</li>
            <li>Türkçe</li>
            <li>Kurdî (Kurmancî)</li>
            <li>العربية</li>
            <li>Zaza</li>
            <li>Deutsch</li>
            <li>Русский</li>
            <li>Français (France)</li>
            <li>فارسی</li>
            <li>Español</li>
            <li>Português (Brasil)</li>
            <li><button id="plus-button"> + </button></li>
          </ul>

          <ul id="meta">
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Meta</li>
            <li>PayMeta</li>
            <li>Store</li>
            <li>Meta Quest</li>
            <li>Meta AI</li>
            <li>Instagram</li>
            <li>Threads</li>
          </ul>

          <ul id="copyright">
            <li>Meta &copy; 2024</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login