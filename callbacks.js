const waitAndMessage = () => {
  setTimeout(() => {
    console.log("sono passati 3.5s");
  }, 3500);

  console.log("Io sono l'ultimo");
};

// -------------------------------------------------------------------------------------------

const phoneCall = (id, callback) => {
  const randTime = Math.floor(Math.random() * 3000);

  setTimeout(() => {
    callback(id, randTime); // normalAnswer(randTime); grannysAnswer(randTime);  ((time) => console.log("📞 Che vuoi?!? " + time / 1000 + "s"))()
  }, randTime);

  console.log("☎️ *Il telefono sta squillando* (" + id + ")");
};

const normalAnswer = (id, time) => {
  console.log(id + ") 📞 Pronto? Chi parla? " + time / 1000 + "s");
};

const grannysAnswer = (id, time) => {
  console.log(id + ") 📞 Pronto? Tesoro hai mangiato?? " + time / 1000 + "s");
};

phoneCall(1, normalAnswer);
phoneCall(2, grannysAnswer);
phoneCall(3, (id, time) => console.log(id + ") 📞 Che vuoi?!? " + time / 1000 + "s"));
// phoneCall();

// callback in array methods
const arr = [20, 30, 50, 100];

const forEach = callback => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    callback(element);
  }
};

arr.forEach(element => console.log("il numero è: " + element));

const filter = callback => {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (callback(element)) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

const filteredElements = arr.filter(element => element > 30);
console.log(filteredElements);
