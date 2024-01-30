import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '₹20,020',
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '₹11,020',
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '₹32,020',
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '₹23,020',
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imgURL:
      'https://media.licdn.com/dms/image/D5603AQGK1JBTrmVkjw/profile-displayphoto-shrink_800_800/0/1705242665002?e=1712188800&v=beta&t=Laf-TChqtwFPho6XGXx8DT_1Scb4dQqen3kaektTP9I',
    customerName: 'Nanda Kumar B M',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL:
      'https://media.licdn.com/dms/image/D5603AQG-lzalfHtpEg/profile-displayphoto-shrink_800_800/0/1666196938994?e=1712188800&v=beta&t=ErE0igONe7zA1oWwiCPEInoT00-USUt1mTJ1ZNBvZSw',
    customerName: 'Pavan Gowda K S',
    rating: 5.0,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL:
      'https://media.licdn.com/dms/image/D5603AQHQXM5XlUqjTg/profile-displayphoto-shrink_800_800/0/1705721021390?e=1712188800&v=beta&t=5c1H2jsjM5MDA2yvOvpoElLcpBh04Ei0hd1lxsPmk5U',
    customerName: 'Manu M Benakal',
    rating: 4.5,
    feedback:
      "Nike shoes are not just about performance they're a fashion statement too! I love how effortlessly stylish.",
  },
  {
    imgURL:
      'https://media.licdn.com/dms/image/D5603AQFLOnjH0nb7Ew/profile-displayphoto-shrink_800_800/0/1693127627041?e=1712188800&v=beta&t=U-bAljWWQaxwJeb_DVSr8Nd0OaZF4MfnKZfEffsMtZM',
    customerName: 'Puneeth N',
    rating: 4.0,
    feedback:
      'As someone with foot issues, finding the right athletic shoes was a struggle until I discovered Nike.',
  },
  {
    imgURL:
      'https://media.licdn.com/dms/image/C5603AQHKmxXrON9hlw/profile-displayphoto-shrink_800_800/0/1664087736379?e=1712188800&v=beta&t=8jJm8IG-9oK_IBXqKWtqVZFLfDB8DYh9zfgvz6v2L_A',
    customerName: 'Prajwal P',
    rating: 4.0,
    feedback:
      'Nike commitment to innovation shines through in their shoes. The incorporation of cutting-edge technologies like React and Flyknit provides unmatched support and comfort.',
  },
  {
    imgURL:
      'https://media.licdn.com/dms/image/D5603AQGs96htszlkrw/profile-displayphoto-shrink_800_800/0/1694760434094?e=1712188800&v=beta&t=cGlPkcACisjjyA0MrCezjsQz_MuDwydZM1qSvOHDki8',
    customerName: 'Krithika N',
    rating: 4.0,
    feedback:
      'Nike shoes are not just about performance; they are a style statement. The sleek designs and iconic swoosh make a bold fashion statement. And the best part? They dont compromise on comfort.',
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+91 8055', link: 'tel:+918055' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];
