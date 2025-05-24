import Card from "./Card.jsx";
import styles from "./Cards.module.css"
const data = {
    card1:{
        image: "/public/poncho.jpg",
        title: "Poncho",
        price: "$100",
    },
    card2:{
        image: "/public/gorro.jpg",
        title: "Gorro",
        price: "$100",
    },
    card3:{
        image: "/public/cardigan.jpg",
        title: "Cardigan",
        price: "$100",
    },
    card4:{
        image: "/public/chompa.jpg",
        title: "Chompa",
        price: "$100",
    },
    card5:{
        image: "/public/gorro.jpg",
        title: "Gorro",
        price: "$100",
    },
    card6:{ 
        image: "/public/poncho.jpg",
        title: "Poncho",
        price: "$100",
    },
    card7:{
        image: "/public/gorro.jpg",
        title: "Gorro",
        price: "$100",
    },
    card8:{
        image: "/public/cardigan.jpg",
        title: "Cardigan",
        price: "$100",
    },
    card9:{
        image: "/public/poncho.jpg",
        title: "Poncho",
        price: "$100",
    },
    card10:{
        image: "/public/gorro.jpg",
        title: "Gorro",
        price: "$100",
    },
    card11:{
        image: "/public/cardigan.jpg",
        title: "Cardigan",
        price: "$100",
    },
    card12:{
        image: "/public/poncho.jpg",
        title: "Poncho",
        price: "$100",
    },
}
export default function Cards() {
    return (
      <div class={styles.cards}>
        {Object.values(data).map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    );
  }
  