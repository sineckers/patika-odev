function isim() {
  let name = prompt("Merhaba, İsmin Nedir?");
  if (name == "") {
    document.getElementById("myName").innerText = "yabancı";
  } else document.getElementById("myName").innerText = name;
}

function tarihSure() {
  let tarih = new Date();
  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let gun = tarih.getDay();
  switch (gun) {
    case 0:
      gun = "Pazar";
      break;
    case 1:
      gun = "Pazartesi";
      break;
    case 2:
      gun = "Salı";
      break;
    case 3:
      gun = "Çarşamba";
      break;
    case 4:
      gun = "Perşembe";
      break;
    case 5:
      gun = "Cuma";
      break;
    case 6:
      gun = "Cumartesi";
  }

  if (saat < 10) {
    saat = "0" + saat;
  }
  if (dakika < 10) {
    dakika = "0" + dakika;
  }
  if (saniye < 10) {
    dakika = "0" + dakika;
  }

  var suan = saat + ":" + dakika + ":" + saniye + "" + " " + gun;
  document.getElementById("myClock").innerText = suan;

  setTimeout(tarihSure, 1000);
}
tarihSure();
isim();
