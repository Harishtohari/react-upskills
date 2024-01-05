import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">     
      <div class="container-login">
        <div class="login_main">
          <h3>login</h3>
          <form action="">
            <div class="user_name">
              <label for="">username</label>
              <input type="text" placeholder="Uersname" />
            </div>
            <div class="user_name">
              <label for="">password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div class="user_name">
              <button class="btn_log_in">login</button>
            </div>
            <p class="log_cont">Don’t have an account? <span class="toggle-form">Register</span></p>
          </form>
        </div>
        <div class="registr_mian">
          <h3>Register</h3>
          <form id="registration-form" action="" method="post">
            <div class="user_name">
              <label for="">username</label>
              <input type="text" placeholder="Name" required />
            </div>
            <div class="user_name">
              <label for="">Email-ID</label>
              <input type="text" placeholder="Email" pattern="[^ @]*@[^ @]*" required />
            </div>
            <div class="user_name">
              <label for="password1">Password</label>
              <div class="pwd_cont">
                <input class="pwd_show" id="password1" type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                <span class="hide_shw_pwd">
                  <i class="fa-regular fa-eye-slash hide_icn"></i>
                  <i class="fa-regular fa-eye show_icn"></i>
                </span>
              </div>
            </div>
            <div class="user_name">
              <label for="password2">Confirm Password</label>
              <div class="pwd_cont">
                <input class="pwd_show" id="password2" type="password" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                <span class="hide_shw_pwd">
                  <i class="fa-regular fa-eye-slash hide_icn"></i>
                  <i class="fa-regular fa-eye show_icn"></i>
                </span>
              </div>
            </div>
            <div id="password-match-message" class="err_msg"></div>

            <div class="user_name">
              <label for="">Phone-number</label>
              <input id="phoneInput" type="tel" placeholder="Phone-number" name="phone" pattern="^[0-9]{10}$" maxlength="10" />
            </div>
            <div class="user_name">
              <button class="btn_log_in" type="submit">Register</button>
            </div>
            <p class="log_cont">If you have an account? <span class="toggle-form">login</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
