const $btnbody = document.querySelector(".btnbody");
const $length = document.getElementById("length");

//to generate password
function generatePassword() {
  let len = $length.value;
  console.log("clicked generate button");
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=";
  let password = "";
  if (len > 60) {
    alert("Not more than 60");
    return false;
  }
  for (let i = 0; i < len; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return ($btnbody.innerText = password);
}

//to copy generated password
function copyToClipboard() {
  console.log("copied");
  let textArea = document.createElement("textarea");
  const password = $btnbody.innerText;
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Copied to clipboard: " + password);
}
