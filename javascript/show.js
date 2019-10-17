var masukanpass = document.getElementById('Password'),
      chk  = document.getElementById('chk'),
      label = document.getElementById('showhide');


     chk.onclick = function () {

      if(chk.checked) {

           masukanpass.setAttribute('type', 'text');
           label.textContent = 'Hide Password';
       } else {

           masukanpass.setAttribute('type', 'Password');
           label.textContent = 'Show Password';
       }
 
     }

     function Login() {
        var nama = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;
        if (nama != "pemri123" && password !="facebook123") {
            alert('Username dan Password anda salah');
        }else{
            alert('Login Berhasil');
            document.location="home.html"
            
        }
    }