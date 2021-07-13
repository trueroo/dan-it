let 
  businessEmail, 
  personalEmail, 
  isBusinessEmailValid, 
  isPersonalEmailValid;

function collectEmails () {
  businessEmail = prompt('Enter your business email');
  personalEmail = prompt('Enter your personal email');
  validateEmails();
}

function validateEmail (email) {
  if (email.indexOf('@') < 1) {
    return false;
  }

  if (email.indexOf('.') < email.indexOf('@')) {
    return false;
  }

  return true;
}

function validateEmails () {
  isBusinessEmailValid = validateEmail(businessEmail);
  isPersonalEmailValid = validateEmail(personalEmail);
  console.log('Business ', isBusinessEmailValid);
  console.log('Personal ', isPersonalEmailValid);
  if (!isBusinessEmailValid || !isPersonalEmailValid) {
    collectEmails();
  } else {
    informUser();
  }
}

function informUser() {
  if (isBusinessEmailValid && isPersonalEmailValid) {
    alert('Thank you, you have registered');
  } else {
    alert('Sorry, one of your emails is invalid');
  }
}

collectEmails();
