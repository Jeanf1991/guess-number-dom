let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 1;
let maxIntentos = 3;

console.log("Número secreto:", numeroAleatorio); 

while (intentos <= maxIntentos) {
  let numeroIntroducido = Number(prompt(`Intento ${intentos}: Adivina el número del 1 al 10`));

  
  if (numeroIntroducido < 1 || numeroIntroducido > 10 || isNaN(numeroIntroducido)) {
    alert("⚠️ Número inválido.");
    continue;
  }

  let diferencia = Math.abs(numeroAleatorio - numeroIntroducido);

  if (numeroIntroducido === numeroAleatorio) {
    alert(" ¡GANASTE! Adivinaste el número 😊");
    break;
  } else if (diferencia === 1) {
    alert("🔥 ¡Muy caliente! .");
  } else if (diferencia === 2) {
    alert("🌡️ Caliente. Cerquita!.");
  } else if (diferencia <= 4) {
    alert("🧊 Frío.");
  } else {
    alert("❄️ Muy frío.");
  }

  intentos++;
  console.log(`Intento número ${intentos}`);
}

// Mensaje final si falla
if (intentos > maxIntentos) {
  alert(`😔 Se acabaron tus intentos. El número era ${numeroAleatorio}.`);
}
