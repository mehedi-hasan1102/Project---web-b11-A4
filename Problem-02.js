function validEmail(email) {
  if (typeof email !== "string") return "Invalid";

  if (/^[\.-_+@]/.test(email)) return false;

  if (!email.includes("@")) return false;

  if (email.includes(" ")) return false;

  if (!email.endsWith(".com")) return false;

  return true;
}

console.log(validEmail("mehedi@google.com")); // ✅ true
console.log(validEmail(".rukaya@google.com")); // ❌ false (starts with special character)
console.log(validEmail("karim@ google.com")); // ❌ false (contains space)
console.log(validEmail("taniyagoogle.com")); // ❌ false (missing @)
console.log(validEmail("test@google.org")); // ❌ false (not ending with .com)
console.log(validEmail(12345)); // ❌ "Invalid" (input is not a string)
