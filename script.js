document.getElementById("buttonCheck").addEventListener("click", function () {
  // после клика:
  // 1. найти пароль из текстового поля
  // 2. проверить его на условия защищенности
  // 3. Вывести результат на экран
  const password = document.getElementById("passwordInput").value;
  //   alert(/abcdefghijklmnopqrstuvwxyz/.test(password));
  if (
    password.length >= 8 &&
    /[abcdefghijklmnopqrstuvwxyz]/.test(password) &&
    /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(password)
  ) {
    const paragraph = document.getElementById("resultMessage");
    paragraph.className = "success";
    paragraph.textContent = "Пароль надёжный!";
  } else {
    const paragraph = document.getElementById("resultMessage");
    paragraph.className = "error";
    paragraph.textContent = "Пароль слишком слабый!";
  }
});
