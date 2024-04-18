export default function generateContent(count = 500) {
  function getRandomMember(max) {
    return Math.floor(Math.random() * max);
  }

  const generateContent = () => ({
    image: getImage[getRandomMember(7)],
    name: getName[getRandomMember(7)],
    description: getDescription[getRandomMember(5)],
    color: getColor[getRandomMember(7)],
    id: Date.now() + Math.random().toString(36).substring(2),
    rating: Math.round(Math.random() * 50) / 10,
    price: Math.round(Math.random() * 9989 + 10)
  });

  const moduls = [];
  for (let i = 0; i < count; i++) {
    moduls.push(generateContent());
  }
  return moduls;
}

const getColor = [
  "Белый",
  "Зеленый",
  "Красный",
  "Чёрный",
  "Синий",
  "Фиолетовый",
  "Жёлтый"
];

const getImage = [
  "./Images/jeans.jpg",
  "./Images/dress.jpg",
  "./Images/hoodie.jpg",
  "./Images/shoes.png",
  "./Images/skirt.jpg",
  "./Images/sweatshirt.jpg",
  "./Images/t-shirt.jpeg"
];

const getDescription = [
  "Выполнены из натурального хлопка",
  "Дополнит ваш образ",
  "Красота в простоте",
  "Новый цвет",
  "Завершающий штрих образа"
];

const getName = [
  "Джинсы",
  "Футболка",
  "Свитшот",
  "Обувь",
  "Юбка",
  "Платье",
  "Худи"
];
