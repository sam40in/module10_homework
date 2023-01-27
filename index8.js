let myMap = new Map();
myMap.set("1", "string");
myMap.set(23, "number");
myMap.set(true, "boolean");
myMap.set(82.2, 165);
myMap.set("forest", "tree");
myMap.set("high_mountain", false);

for (let name of myMap) {
  console.log(`Ключ - ${name[0]}, Значение - ${name[1]}`);
}
