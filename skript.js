function showAlert(element, message) {
    alert(message);
  }
  
  // Yuklanayotgan effekt
  function showLoader(element) {
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
      alert("Жүктөө аяктады!");
    }, 2000); // 2 секунддан кийин жок болот
  }
  
  // Tugманын түсүн өзгөртүү
  function changeColor(element) {
    element.style.backgroundColor = "#16a34a"; // жашыл
    element.style.color = "white";
    element.innerText = "Тандалды!";
  }
