let word = [];
let intId = null;
newWordEl.addEventListener("input", (e) => {
  let timer = 0;
  if (!intId) {
    intId = setInterval(async () => {
      timer++;
      if (timer == 5) {
        const tarjimasi = await translate(newWordEl.value);
        wordEl.value = tarjimasi.result;
        clearInterval(intId);
        intId = null;
      }
    }, 100);
  }
});
