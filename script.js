const message = `Semoga kesehatan, kebahagiaan, dan rezeki yang berlimpah selalu menjadi bagian dari hari-harimu. Jika ada kesulitan, semoga kamu selalu diberi kekuatan untuk melewatinya. Jika ada kebahagiaan, semoga kebahagiaan itu berlipat ganda dan bertahan lama di hatimu.
Semoga kesehatan, kebahagiaan, dan rezeki yang berlimpah selalu menjadi bagian dari hari-harimu. Jika ada kesulitan, semoga kamu selalu diberi kekuatan untuk melewatinya. Jika ada kebahagiaan, semoga kebahagiaan itu berlipat ganda dan bertahan lama di hatimu.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    const signature = document.querySelector(".signature");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      } else {
        // setelah teks selesai baru munculkan tanda tangan
        setTimeout(() => {
          signature.style.opacity = 1;
        }, 500);
      }
    }

    typeWriter();
  }, 600);
}
