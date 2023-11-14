const submitBtn = document.getElementById('submit-btn');

const imageAgreement = document.getElementById('agreement');

imageAgreement.addEventListener('click', () => {
  if (imageAgreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});
