import styles from "./Card.module.css"
export default function Card(data) {
    data = data.data;
    return (
        <div>
           <img src={data.image} class={styles.cardImage} alt="" />
           <div class={styles.cardInfo}>
            <div class={styles.cardInfoText}>
            <p>{data.price}</p>
            <p>{data.title}</p>
            </div>
            <a href="/cart"><img src="/public/cart.png" class={styles.cart} alt="" /></a>
           </div>
        </div>
    );
}