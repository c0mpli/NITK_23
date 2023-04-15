// Sidebar imports
import {
  UilEstate,
  UilUsersAlt,
  UilPackage,
  UilDumbbell,
  UilUser,
} from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

//Popular Programs imports
import pic1 from "../imgs/sampleProgram.png";
import pic2 from "../imgs/sampleProgram2.png";
import pic3 from "../imgs/sampleProgram3.png";

//Testimonal imports
import anushkaSharma from "../imgs/anushkaSharma.png";
import akshayKumar from "../imgs/akshay.png";
import viratKohli from "../imgs/virat.png";
import sachinTendulkar from "../imgs/sachin.png";

//aboutUs imports
import about1 from "../imgs/about/1.jpg";
import about2 from "../imgs/about/about1.jpeg";
import about3 from "../imgs/about/about4.jpeg";
import about4 from "../imgs/about/more2.jpg";
import about5 from "../imgs/about/5.jpg";

// Sidebar Data
export const SidebarData = [
  {
    key: 1,
    icon: UilEstate,
    heading: "Dashboard",
    link: "/dashboard",
    role: ["user"],
  },
  {
    key: 2,
    icon: UilDumbbell,
    heading: "Your clients",
    link: "/clients",
    role: ["user"],
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    image: img1,
    title: "Swimming Injury Prevention Program",
    barValue: 32,
  },
  {
    image: img2,
    title: "Core and Back Fitness Program",
    barValue: 50,
  },
  {
    image: img3,
    title: "ACL Rehab Stage-1 Recovery Program",
    barValue: 60,
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Health Matthews",
    noti: "All the best :)",
    time: "28m ago",
  },
  {
    img: img2,
    name: "HMP Team",
    noti: "Feel free to reach out to us.",
    time: "50m ago",
  },
  {
    img: img3,
    name: "Coach",
    noti: "Congratulations on your first step to recovery :)",
    time: "2h ago",
  },
];

export const aboutusImg = [
  {
    id: 1,
    img: about1,
  },
  {
    id: 2,
    img: about2,
  },
  {
    id: 3,
    img: about3,
  },
  {
    id: 4,
    img: about4,
  },
  {
    id: 5,
    img: about5,
  },
];

export const dataDigitalBestSeller = [
  //HMP Programs data
  {
    id: 1,
    title: "ACL Rehab Stage-1 Recovery Program",
    price: "Lorem ipsum dolor sit dfd consectetur ashjfkdye ",
    linkImg: pic1,
    days: 18,
  },
  {
    id: 2,
    title: "ACL Rehab Stage-2 Recovery Program",
    price: "Lorem ipsum dolor sit dfd consectetur ashjfkdye ",
    linkImg: pic2,
    days: 21,
  },
  {
    id: 3,
    title: "ACL Rehab Stage-3 Recovery Program",
    price: "Lorem ipsum dolor sit dfd consectetur ashjfkdye ",
    linkImg: pic3,
    days: 26,
  },
  {
    id: 4,
    title: "ACL Rehab Stage-4 Recovery Program",
    price: "Lorem ipsum dolor sit dfd consectetur ashjfkdye ",
    linkImg: pic1,
    days: 69,
  },
  {
    id: 5,
    title: "ACL Rehab Stage-5 Recovery Program",
    price: "Lorem ipsum dolor sit dfd consectetur ashjfkdye ",
    linkImg: pic2,
    days: 19,
  },
];

export const testimonials = [
  {
    name: "Anushka Sharma",
    status: "Indian Actress",
    message:
      "I have worked with Heath for a good span of time and I can vouch for the fact that he has great knowledge of his discipline and the results of working with him have been wonderful. He is very professional and efficient in his work and understands the comfort zone of the patients.",
    image: anushkaSharma,
  },
  {
    name: "Akshay Kumar",
    status: "Indian Actor",
    message:
      "Heath is my go to guy with hands of steel and technique like I've never encountered in India before. I have a lot to thank him for, he's helped me get through more action sequences than I remember.",
    image: akshayKumar,
  },
  {
    name: "Sachin Tendulkar",
    status: "Retired Indian Cricketer",
    message:
      "Heath was a huge help with my wrist surgery rehab. His guidance made a huge difference in making me fit again.",
    image: sachinTendulkar,
  },
  {
    name: "Virat Kohli",
    status: "Indian Cricketer",
    message:
      "Heath has a fantastic out-of-the-box approach to fitness and how to enhance sports specific skills.",
    image: viratKohli,
  },
];
