function usdToBgn(input) {
  let usd = Number(input);
  let exRate = 1.79549;
  console.log(usd * exRate);
}

function radiantoDeg(input) {
  let rad = Number(input);
  let deg = (rad * 180) / Math.PI;
  console.log(deg.toFixed(0));
}

function deposit(amount, time, interest) {
  console.log(
    (
      Number(amount) +
      ((Number(amount) * (Number(interest) / 100)) / 12) * Number(time)
    ).toFixed(2)
  );
}

function book(pages, rate, days) {
  console.log(Number(pages) / Number(rate) / Number(days));
}
function party(rent) {
  let cake = Number(rent) * (20 / 100);
  let drinks = cake * (1 - 45 / 100);
  let puppet = Number(rent) * (1 / 3);
  console.log(Number(rent) + cake + drinks + puppet);
}
function campaign(days, cooks, cakes, gofr, panc) {
  days = Number(days);
  cooks = Number(cooks);
  cakes = Number(cakes);
  gofr = Number(gofr);
  panc = Number(panc);
  let total =
    days * cooks * cakes * 45 +
    days * cooks * gofr * 5.8 +
    days * cooks * panc * 3.2;
  console.log(total - total / 8);
}
function market(priceStraw, kgBanana, kgOrange, kgMalina, kgStraw) {
  priceStraw = Number(priceStraw);
  kgBanana = Number(kgBanana);
  kgMalina = Number(kgMalina);
  kgOrange = Number(kgOrange);
  kgStraw = Number(kgStraw);
  let priceMalina = priceStraw / 2;
  let priceOrange = priceMalina * 0.6;
  let priceBanana = priceMalina * 0.2;
  console.log(
    kgStraw * priceStraw +
      kgOrange * priceOrange +
      kgMalina * priceMalina +
      kgBanana * priceBanana
  );
}
function fishTank(d, sh, v, level) {
  d = Number(d) / 10;
  sh = Number(sh) / 10;
  v = Number(v) / 10;
  level = (100 - Number(level)) / 100;
  let vol = d * sh * v;
  console.log(vol * level);
}
fishTank("105", "77", "89", "18.5");
