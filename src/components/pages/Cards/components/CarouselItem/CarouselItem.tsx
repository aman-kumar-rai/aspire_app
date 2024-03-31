import Logo from "@components/icons/Logo/Logo";
import Visa from "@assets/visa.png";
import styles from "./style.module.css";
import { CardType } from "@/types";
import { formatExpiryDate } from "@/utils";

const Card = ({
    name,
    cardNumber,
    expiry,
    cvv,
    isFrozen
}: CardType) => {
    return (
        <div className={styles.container} key={cardNumber}>
            <div className={styles.aspireLogo}>
                <Logo
                    label={"Aspire"}
                />
            </div>
            <span className={styles.cardHolderName}>
                {name}
            </span>
            <div className={styles.cardDetails}>
                <span className={styles.cardNumber}>{cardNumber}</span>
                <div className={styles.cardDateCvvSection}>
                    <span className={styles.expiryDate}>
                        Thru:{formatExpiryDate(expiry)}
                    </span>
                    <span className={styles.cvv}>
                        <span>CVV:</span>
                        <span className={styles.cvvNumber}>{cvv}</span>
                    </span>
                </div>
                <div className={styles.type}>
                    <img src={Visa} className={styles.visa} />
                </div>
            </div>
        </div>
    )
}

export default Card;