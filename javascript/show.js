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

function validate() {
    var password1 = document.getElementById('pw1').value;
    var password2 = document.getElementById('pw2').value;
    if (password1 != password2) {
        alert("Password Tidak Sama!!");
    } else {
        alert("Selamat Anda Telah Mengganti Password Anda");
        document.location="index.html"
    }
}
