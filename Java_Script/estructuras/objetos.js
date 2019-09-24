const saludar = () => {
    return "Hola a Todos";
}

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    peso: 60.5,
    hobbies: ["musica", "futbol", "internet"],
    saludar

};

persona.apellido = "Perez Sosa";
console.log(persona.nombre + " " + persona.apellido);
console.log(persona.hobbies);
console.log(persona.saludar());

//Arreglo de objetos

let frutas = [
    {
        nombre: "Grosella",
        familia: "Saxifragáceas",
        calorias: 29.3
    },
    {
        nombre: "Limón",
        familia: "Rutáceas",
        calorias: 40.2
    },
    {
        nombre:"Piña",
        familia: "Bromeliáceas",
        calorias:46
    }
];

for(let i=0; i<frutas.length; i+=1){
    console.log(frutas[i]);
};