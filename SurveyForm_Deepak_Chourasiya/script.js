function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  let gender = "";
  const genderOptions = document.getElementsByName("gender");
  for (let i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      gender = genderOptions[i].value;
      break;
    }
  }

  if (
    !firstName ||
    !lastName ||
    !dob ||
    !country ||
    !gender ||
    !profession ||
    !email ||
    !mobile
  ) {
    alert("Please fill out all fields.");
    return;
  }

  const popupContent = document.getElementById("popupContent");
  popupContent.innerHTML = `
      <strong>First Name:</strong> ${firstName}<br>
      <strong>Last Name:</strong> ${lastName}<br>
      <strong>Date of Birth:</strong> ${dob}<br>
      <strong>Country:</strong> ${country}<br>
      <strong>Gender:</strong> ${gender}<br>
      <strong>Profession:</strong> ${profession}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Mobile:</strong> ${mobile}
    `;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetForm();
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}
