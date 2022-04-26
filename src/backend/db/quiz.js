import { v4 as uuid } from "uuid";
import {ladakh, rajasthan, tamilnadu} from "../../assets";

export const quizzes = [
  {
    _id: uuid(),
    name: "Rajasthan",
    difficulty: "easy",
    genres: ["action", "Adventure"],
    image: {
        src: rajasthan,
        alt: ""
    },
    questions: [
      {
        id: uuid(),
        question: "Which of these is not a lake in Udaipur ?",
        options: ["Pichola", "Fateh Sagar", "Nakki"],
        answer: "Nakki"
      },
      {
        id: uuid(),
        question: " Which among the following district of Rajasthan does not shares border with Pakistan ?",
        options: ["Jaisalmer ", "Jodhpur", "Barmer"],
        answer: "Jodhpur"
      },
      {
        id: uuid(),
        question: "Which district of Rajasthan has been nicknamed “The Golden city” ?",
        options: ["Jaisalmer", "Bikaner", "Jaipur"],
        answer: "Jaisalmer"
      },
      {
        id: uuid(),
        question: "Keoladeo National Park is located in which district of Rajasthan ?",
        options: ["Ajmer", "Kota", "Bharatpur"],
        answer: "Bharatpur"
      },
      {
        id: uuid(),
        question:
          "Which dance form of Rajasthan is included in Intangible Cultural Heritage list of UNESCO ?",
        options: ["Kalbelia", "Ghoomar", "Kachi Ghodi"],
        answer: "Kalbelia"
      }
    ]
  },
  {
    _id: uuid(),
    name: "Ladakh",
    difficulty: "medium",
    genres: ["action"],
    image: {
        src: ladakh,
        alt: ""
    },
    questions: [
      {
        id: uuid(),
        question: "What is the capital city of Ladakh ?",
        options: ["Leh", "Kargil", "Siachen"],
        answer: "Leh"
      },
      {
        id: uuid(),
        question: "The famous Pangong lake of Ladakh is the world’s highest located _______ lake.",
        options: ["Freshwater Lake", "Glacier Lake", "Salt water Lake"],
        answer: "Salt water Lake"
      },
      {
        id: uuid(),
        question: "An area in Ladakh where your car is pulled upwards without any manual effort is called",
        options: ["Illusion Hill", "Magnetic Hill", "Haunted Hill"],
        answer: "Magnetic Hill"
      },
      {
        id: uuid(),
        question: "Which river is known as the backbone of Ladakh ?",
        options: ["Indus River", "Nubra River", "Zanskar River"],
        answer: "Indus River"
      },
      {
        id: uuid(),
        question: "Which village in Ladakh has soil that depicts that of the moon ?",
        options: ["Nyoma", "Langokor", "Lamayuru"],
        answer: "Lamayuru"
      }
    ]
  },
  {
    _id: uuid(),
    name: "Tamil Nadu",
    difficulty: "hard",
    genres: ["action", "Adventure"],
    image: {
        src: tamilnadu,
        alt: ""
    },
    questions: [
      {
        id: uuid(),
        question: "Which one is considered as state fruit in Tamil Nadu ?",
        options: ["Banana", "Jackfruit", "Orange"],
        answer: "Jackfruit"
      },
      {
        id: uuid(),
        question: "Meenakshi Amman Temple is located in the bank of the river",
        options: ["Kaveri River", "Cheyyar River", "Vaigai River"],
        answer: "Vaigai River"
      },
      {
        id: uuid(),
        question: "Tamil Nadu is a major producer of",
        options: ["Sugarcane", "Cotton", "Sunflower"],
        answer: "Sugarcane"
      },
      {
        id: uuid(),
        question: "Udayagiri fort is located in",
        options: ["Ramnad", "Sivaganga", "Kanniyakumari"],
        answer: "Kanniyakumari"
      },
      {
        id: uuid(),
        question: "In which hill is the Killyur waterfall located",
        options: ["Shervaroy", "Nilgiris", "Kodaikanal"],
        answer: "Shervaroy"
      }
    ]
  }
];