interface Ilink {
  title: string;
  icon: string;
  to: string;
}

interface Iimage {
  id: number;
  src: string;
  name: string;
}

interface Isale {
  id: number;
  name: string;
  text: string;
}

interface Iaddress {
  id: number;
  address: string;
}

export const linksList: Ilink[] = [
  {
    title: 'Главная',
    icon: 'mdi-home',
    to: '/',
  },
  {
    title: 'Меню',
    icon: 'mdi-silverware',
    to: '/menu',
  },
  // {
  //   title: "Рестораны",
  //   icon: "mdi-map-marker",
  //   to: "/restourants",
  // },
  // {
  //   title: "Доставка",
  //   icon: "mdi-food-takeout-box",
  //   to: "/delivery",
  // },
  {
    title: 'Корзина',
    icon: 'mdi-cart',
    to: '/cart',
  },
]

export const images: Iimage[] = [
  {
    id: 1,
    src: 'steak.jpg',
    name: 'steak',
  },
  {
    id: 2,
    src: 'soup.jpg',
    name: 'soup',
  },
  {
    id: 3,
    src: 'ribs.jpg',
    name: 'ribs',
  },
  {
    id: 4,
    src: 'wings.jpg',
    name: 'wings',
  },
]

export const sales: Isale[] = [
  {
    id: 1,
    name: 'День рождения',
    text: 'Для именниников скидка 20% на весь заказ.',
  },
  {
    id: 2,
    name: '6 по цене 5',
    text: 'Купите 5 стейков - получите 6-й в подарок.',
  },
  {
    id: 3,
    name: 'Никита',
    text: 'Если вас зовут Никита - стейк бесплатно.',
  },
]

export const addresses: Iaddress[] = [
  {
    id: 1,
    address: 'г. Санкт-Петербург, ул Проспект Просвещения, д. 43',
  },
  {
    id: 2,
    address: 'г. Уфа, ул Проспект Октября, д. 180',
  },
]
