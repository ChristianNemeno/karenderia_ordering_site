import adobo from '../assets/adobo.jpg';
import sinigang from '../assets/sinigang.jpg';
import kawali from '../assets/kawali.jpg';
import pancit from '../assets/pancit.jpg';
import lumpia from '../assets/lumpia.jpg';
import item4 from '../assets/item4.jpg';
import buko from '../assets/buko.jpg';
import inasal from '../assets/inasal.jpg';
import kinilaw from '../assets/kinilaw.jpg';
import lapaz from '../assets/lapaz.jpg';
import karekare from '../assets/karekare.jpg';
import pata from '../assets/pata.jpg';
import gata from '../assets/gata.jpg';
import pinakbet from '../assets/pinakbet.jpg';
import sisig from '../assets/sisig.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Adobo',
    category: 'Main Course',
    description: 'A popular Filipino dish made of pork or chicken, simmered in vinegar, soy sauce, garlic, and peppercorns.',
    price: 250.00,
    image: adobo,
  },
  {
    id: 2,
    name: 'Sinigang', 
    category: 'Main Course',
    description: 'A sour and savory Filipino soup or stew characterized by its sour and savory taste. It is most often associated with tamarind.',
    price: 280.00,
    image: sinigang,
  },
  {
    id: 3,
    name: 'Lechon Kawali',
    category: 'Main Course',
    description: 'Crispy deep-fried pork belly, a popular Filipino dish.',
    price: 350.00,
    image: kawali,
  },
  {
    id: 4,
    name: 'Pancit Canton',
    category: 'Noodles',
    description: 'Stir-fried noodles with vegetables and meat, a classic Filipino noodle dish.',
    price: 180.00,
    image: pancit,
  },
  {
    id: 5,
    name: 'Lumpia Shanghai',
    category: 'Appetizer',
    description: 'Crispy fried spring rolls filled with ground pork and vegetables.',
    price: 120.00,
    image: lumpia,
  },
  {
    id: 6,
    name: 'Halo-Halo',
    category: 'Dessert',
    description: 'A popular Filipino cold dessert which is a concoction of crushed ice, evaporated milk and various ingredients.',
    price: 150.00,
    image: item4,
  },
  {
    id: 7,
    name: 'Buko Pandan',
    category: 'Dessert',
    description: 'A Filipino dessert made from pandan-flavored gelatin, young coconut, and cream.',
    price: 100.00,
    image: buko,
  },
  {
    id: 8,
    name: 'Chicken Inasal',
    category: 'Main Course',
    description: 'Grilled chicken marinated in a mixture of calamansi, vinegar, and annatto oil.',
    price: 290.00,
    image: inasal,
  },
  {
    id: 9,
    name: 'Kinilaw',
    category: 'Appetizer',
    description: 'Filipino ceviche, made with fresh raw fish marinated in vinegar or citrus juices.',
    price: 220.00,
    image: kinilaw,
  },
  {
    id: 10,
    name: 'La Paz Batchoy',
    category: 'Noodles',
    description: 'A noodle soup made with pork offal, crushed chicharon, chicken stock, and fresh egg noodles.',
    price: 200.00,
    image: lapaz,
  },
  {
    id: 11,
    name: 'Kare-Kare',
    category: 'Main Course',
    description: 'A Filipino stew complemented with a thick savory peanut sauce. It is made from a variation of oxtail, pork hocks, calves feet, pig feet, beef stew meat, and occasionally offal or tripe.',
    price: 380.00,
    image: karekare,
  },
  {
    id: 12,
    name: 'Crispy Pata',
    category: 'Main Course',
    description: 'Deep-fried pork hock, a popular Filipino dish.',
    price: 450.00,
    image: pata,
  },
  {
    id: 13,
    name: 'Ginataang Gulay',
    category: 'Vegetarian',
    description: 'Mixed vegetables cooked in coconut milk.',
    price: 180.00,
    image: gata,
  },
  {
    id: 14,
    name: 'Pinakbet',
    category: 'Vegetarian',
    description: 'A Filipino dish consisting of mixed vegetables steamed in fish or shrimp sauce.',
    price: 190.00,
    image: pinakbet,
  },
  {
    id: 15,
    name: 'Sizzling Sisig',
    category: 'Main Course',
    description: 'A Filipino dish made from parts of pig\'s head and liver, usually seasoned with calamansi and chili peppers.',
    price: 300.00,
    image: sisig,
  },
];

export default menuItems;