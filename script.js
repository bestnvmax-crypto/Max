const form = document.getElementById('presentation-form');
const message = document.getElementById('form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // TODO: Подключить отправку данных в backend/CRM после согласования интеграции.
    message.textContent =
      'Заявка отправлена. Мы свяжемся с вами и покажем, как УМК может лечь на вашу школу.';
    form.reset();
  });
}
