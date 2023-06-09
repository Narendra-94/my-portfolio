import React from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import FoodDelivery from "../../images/food-delivery.png";
import Birthday from "../../images/birthday-lucky.png";
import Stock from "../../images/Stock-calculator.png";
import TriangleQuiz from "../../images/Traingle-Quiz.png";
import Manga from "../../images/Manga-reccomendation.png";
import Cash from "../../images/Cash-Manager.png";
import BananaTalks from "../../images/banana-talks.png";
import Fruits from "../../images/fun-with-fruits.png";
import Me from "../../images/you-know-me.png";

import "./Project.css";
import { useState } from "react";

const projectData = [
  {
    id: 2,
    name: "Ecommerce",
    image: FoodDelivery,
    github_link: "https://github.com/Narendra-94/food-delivery-website",
    deploy_link: "https://goresto-food-delivery-app.netlify.app/",
  },
  {
    id: 3,
    name: "Birthday palindrome",
    image: Birthday,
    github_link: "https://github.com/Narendra-94/Is_Your_Bday_Lucky",
    deploy_link: "https://lucky-birthday-checker-fun.netlify.app/",
  },
  {
    id: 3,
    name: "Stock Calculator",
    image: Stock,
    github_link: "https://github.com/Narendra-94/Stock_Profit_Loss",
    deploy_link: "https://profit-loss-stock-cal.netlify.app/",
  },
  {
    id: 3,
    name: "Welcome to Triangles",
    image: TriangleQuiz,
    github_link: "https://github.com/Narendra-94/Fun_With_Triangle",
    deploy_link: "https://triangle-fun-web.netlify.app/",
  },
  {
    id: 3,
    name: "Manga Reccomendations",
    image: Manga,
    github_link: "https://github.com/Narendra-94/Manga_Recommendation-",
    deploy_link: "https://lso8zy.csb.app/",
  },
  {
    id: 3,
    name: "Cash Manager",
    image: Cash,
    github_link: "https://github.com/Narendra-94/Cash_Register_Manager",
    deploy_link: "https://cash-register-mana.netlify.app/",
  },
  {
    id: 3,
    name: "Banana Talks",
    image: BananaTalks,
    github_link: "https://github.com/Narendra-94/Minions_Talk",
    deploy_link:
      "https://637a3e20ee0f5c363e2769a8--translator-minion-talk.netlify.app/",
  },
  {
    id: 3,
    name: "Fun With Fruits",
    image: Fruits,
    github_link: "https://github.com/Narendra-94/Fun_With_Fruits",
    deploy_link: "https://q5o6gs.csb.app/",
  },
  {
    id: 3,
    name: "The Know Me Quiz ",
    image: Me,
    github_link: "https://github.com/Narendra-94/How-well-do-you-know-me",
    deploy_link:
      "https://replit.com/@Naren0707/How-well-do-you-know-me?embed=true",
  },
];

const filterData = [
  {
    fiterId: 1,
    label: "All",
  },
  {
    fiterId: 2,
    label: "Major Projects",
  },
  {
    fiterId: 3,
    label: "Small Projects",
  },
];

export const Project = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoverValue, setHoverValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoverValue(index);
  };

  const FilteredItem =
    filteredValue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredValue);

  return (
    <section id="project" className="project">
      <PageHeader headerText="Projects" icon={<BsInfoCircleFill size={40} />} />
      <div className="project-content">
        <ul className="project-content-filter">
          {filterData.map((item) => (
            <li
              className={item.fiterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.fiterId)}
              key={item.fiterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="project-content-cards">
          {FilteredItem.map((item, index) => (
            <div
              key={`cardItem${item.name.trim()}`}
              className="project-content-cards-item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="project-content-cards-item-image-wrapper">
                <a href={item.deploy_link}>
                  <img src={item.image} alt="project_image" />
                </a>
              </div>
              <div className="overlay">
                {index === hoverValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Live Project</button>
                    <button>View Source</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
