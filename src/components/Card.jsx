import styles from "./Card.module.css"
export default function Card(data) {
    data = data.data;
    return (
        <div>
           <a href="/detailproduct"><img src={data.image} class={styles.cardImage} alt="" /></a>
           <div class={styles.cardInfo}>
            <div class={styles.cardInfoText}>
            <p>{data.price}</p>
            <p>{data.title}</p>
            </div>
            <a href="/cart"><img src="/cart.png" class={styles.cart} alt="" /></a>
           </div>
        </div>
    );
}