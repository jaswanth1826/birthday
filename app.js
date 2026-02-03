const CORRECT_DOB = "2000-01-01"; // keep in YYYY-MM-DD

function normalizeDOB(value) {
  // If empty
  if (!value) return "";

  // If already YYYY-MM-DD from date picker
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

  // Convert 01-01-2000 or 01/01/2000 to 2000-01-01
  const m = value.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
  if (m) {
    const dd = m[1], mm = m[2], yyyy = m[3];
    return `${yyyy}-${mm}-${dd}`;
  }

  return value;
}

function checkDOB() {
  const inp = document.getElementById("dob");
  const err = document.getElementById("err");
  if (!inp) return;

  const userDOB = normalizeDOB(inp.value.trim());

  console.log("User DOB:", userDOB); // for debugging
  console.log("Correct:", CORRECT_DOB);

  if (userDOB === CORRECT_DOB) {
    localStorage.setItem("birthday_access", "yes");
    window.location.href = "quotes.html";
  } else {
    err.style.display = "block";
  }
}
