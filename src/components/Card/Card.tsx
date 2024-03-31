import Logo from "@components/icons/Logo/Logo";
import Visa from "@assets/visa.png";
import styles from "./style.module.css";

const Card = ({
    id,
    cardHolderName = "",
    cardNumber,
    cvv="***",
    isFrozen=false,
    issuer = "VISA",
    expiryDate
}) => {
    return (
        <div className={styles.container} key={id}>
            <div className={styles.aspireLogo}><Logo label={"Aspire"} /></div>
            <span className={styles.cardHolderName}>
                {cardHolderName}
            </span>
            <div className={styles.cardDetails}>
                <span className={styles.cardNumber}>{cardNumber}</span>
                <div className={styles.cardDateCvvSection}>
                    <span className={styles.expiryDate}>
                        Thru:{expiryDate}
                    </span>
                    <span className={styles.cvv}>
                        <span>CVV:</span> 
                        <span className={styles.cvvNumber}>{cvv}</span>
                    </span>
                </div>
                <div className={styles.type}>
                    <img src={Visa} className={styles.visa}/>
                </div>
            </div>
        </div>
    )
}

export default Card;