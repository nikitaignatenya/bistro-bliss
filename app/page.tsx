import Image from "next/image";
import Header from "../components/Header/Header";
import style from "../assets/main-page.module.css";
import { title } from "process";

const cartsArray = [
  {
    path: "/Breakfast.svg",
    title: "Breakfast",
    descriptrion:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    path: "/mainDishes.svg",
    title: "Main Dishes",
    descriptrion:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    path: "/drinks.svg",
    title: "Drinks",
    descriptrion:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    path: "/desserts.svg",
    title: "Desserts",
    descriptrion:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.background_container}>
        <h2>Best food for your taste</h2>
        <p className={style.description}>
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className={style.buttonContainer}>
          <button className={`${style.buttonTable} ${style.buttonAll}`}>
            Book A Table
          </button>
          <button className={`${style.buttonMenu} ${style.buttonAll}`}>
            Explore Menu
          </button>
        </div>
      </div>
      <div className={style.menuContainer}>
        <h2>Browse Our Menu</h2>
        <div className={style.all_list}>
          {cartsArray.map((el, i) => (
            <div key={i} className={style.cart}>
              <div className={style.cartImage}>
                <Image
                  src={el.path}
                  alt="cart_image"
                  className={style.image}
                  width={44}
                  height={42}
                />
              </div>
              <h4>{el.title}</h4>
              <p className={style.cartDescription}>{el.descriptrion}</p>
              <p className={style.exploreLink}>Explore Menu</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
