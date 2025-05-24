import styles from "./CartList.module.css"
const data = {
    card1:{
        image: "/poncho.jpg",
        title: "Poncho",
        price: "$100",
    },
    card2:{
        image: "/gorro.jpg",
        title: "Gorro",
        price: "$100",
    },
    card3:{
        image: "/cardigan.jpg",
        title: "Cardigan",
        price: "$100",
    },
    card4:{
        image: "/chompa.jpg",
        title: "Chompa",
        price: "$100",
    },
    card5:{
        image: "/gorro.jpg",
        title: "Gorro",
        price: "$100",
    },
    card6:{ 
        image: "/poncho.jpg",
        title: "Poncho",
        price: "$100",
    }
}
export default function CartList() {
    return (
      <div class={styles.cartList}>
        {Object.values(data).map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
  