let myMap = new Map();
myMap.set("family" , "name");
myMap.set('Ivanov' , 'Ivan');
myMap.set('Petrov' , 'Petr');

for (let name of myMap.keys()){
  console.log(`ключ - ${name} , значение - ${myMap.get(name)}`); 
}