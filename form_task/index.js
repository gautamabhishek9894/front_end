/*
task 0. validation's
task 1. form value LS

- app
    - signup
    - login >> generate token
    - use table 'crud'
*/

export const All_style = () => {
    return `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 600;
    }

    h1 {
        text-align: center;
        margin: 1rem 0;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1.5rem;
        padding: 20px;
        width:300px;
        margin:auto;
        margin-top:20px;
        }

    ul {
        display: contents;
    }
    
    h3 {
        text-align:center;
        font-size:30px;
    }
    .signup_form {
         display:flex;
         align-items:center;
         justify-content:center;
         }
         
         form {
            border:2px solid red;
        
        width:450px;
        padding:20px;
    }

   .inputs > input{
        width:300px;
   }
    
   .submit {
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:10px;
   }

   .submit > button {
   width:100px;
   height:50px;
   border-radius:50px;
   border:2px solid blue;
   }

    form > div:first-child {
        display: flex;
        flex-direction: column;
    }

    div[name="btn"] {
        display: flex;
        justify-content: center;
        padding: 1.5rem 0px;
    }

    div[name="btn"] > input, fieldset {
        padding: 10px 20px;
    }

    .message {
     color : red;
     margin-top:05px;
    }
    `;
};

export const Navbar = () => {
    return `
    <nav>
        <ul>
            <li>signup</li>
            <li>login</li>
            <li>all_user</li>
        </ul>
    </nav>
    `;
};

export const signup = () => {
    return `
   <div class="signup_form">
    <form id="signup">
        <div class="inputs">
        <h3>SignUp</h3>
                <label for="name">name</label>
                <input id="name" type="text">
                <span class="message"></span>
            <br>
                <label for="email">email</label>
                <input id="email" type="text">
                <span class="message"></span>
            <br>
                <label for="phone">phone</label>
                <input id="phone" type="text">
                <span class="message"></span>
            <br>
                <label for="pass">password</label>
                <input id="pass" type="text">
                <span class="message"></span>
            <br>
                <label for="confirm_pass">confirm password</label>
                <input id="confirm_pass" type="text">
                <span class="message"></span>
     </div>
            <br>
                <fieldset>
                    <legend>gender</legend>
                    <label for="male">male</label>
                    <input id="male" value="male" name="gender" type="radio" />
                    
                    <label for="female">female</label>
                    <input id="female" value="female" name="gender" type="radio" />

                    <label for="other">other</label>
                    <input id="other" value="other" name="gender" type="radio" />
                </fieldset>
            <div class="submit">
        <button type="sumbit" >submit</button>
        </div>
    </form>
    </div>
    `;
};

export const Login = () => {};