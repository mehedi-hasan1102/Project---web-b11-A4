function validEmail(email) {
  if (typeof email !== "string") return "Invalid";

  if (/^[\.-_+@]/.test(email)) return false;

  if (!email.includes("@")) return false;

  if (email.includes(" ")) return false;

  if (!email.endsWith(".com")) return false;

  return true;
}

console.log(validEmail("mehedi@google.com")); 
console.log(validEmail(".rukaya@google.com")); 
console.log(validEmail("karim@ google.com")); 
console.log(validEmail("taniyagoogle.com")); 
console.log(validEmail("test@google.org")); 
console.log(validEmail(12345)); 
