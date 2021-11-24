let hobbies = ["Journaling", "Martial Arts", "travelling"];

console.log(hobbies[0]);

let hobbyOne = hobbies.shift();

let storeLength = hobbies.length;

hobbies.push("Anime");

console.log(hobbies[2]);

hobbies.unshift(hobbyOne);

console.log(`My hobbies are: ${hobbies.join(", ")}`);
