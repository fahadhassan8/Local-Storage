let signUp = document.querySelector(".sign-up");
      let login = document.querySelector(".login");
      login.style.display = "none";

      let sign_up = () => {
        let signUpName = document.getElementById("signup-name").value;
        let signUpEmail = document.getElementById("signup-email").value;
        let signUpPassword = document.getElementById("signup-paswrd").value;
        localStorage.setItem(
          "users",
          JSON.stringify({
            signup_name: signUpName,
            signup_email: signUpEmail,
            signup_password: signUpPassword,
          })
        );
        if (signUpName === "" || signUpEmail === "" || signUpPassword === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields.",
        });
        return;
    }
        signUp.style.display = "none";
        login.style.display = "flex";
      };
      let login_page = () => {
        let loginEmail = document.getElementById("login-email").value;
        let loginPassword = document.getElementById("login-paswrd").value;
        let userData = JSON.parse(localStorage.getItem("users"));
        // console.log(userData)
        if(loginEmail === "" || loginPassword === ""){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields.",
        });
        }
        else if (
          userData.signup_email === loginEmail &&
          userData.signup_password === loginPassword
        ) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "Logged In Successfully!",
          });
        }
         else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Credentials!",
          });
        }
      };
