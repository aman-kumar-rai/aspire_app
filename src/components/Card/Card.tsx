import Logo from "../icons/Logo/Logo";
import styles from "./style.module.css"
const Card = ({
    id,
    cardHolderName = "Mark Henry",
    cardNumber = 1234567812345678,
    cvv,
    isFrozen,
    type = "VISA",
    expiryDate
}) => {
    return (
        <div className={styles.container} key={id}>
            <div><Logo label={"Aspire"} className={styles.logo} /></div>
            <span>
                {cardHolderName}
            </span>
            <div>
                {cardNumber}
            </div>
            <div>
                <span>
                    Thru:{expiryDate}
                </span>
                <span>
                    CVV:{cvv}
                </span>
            </div>
            <div>
                {type}
            </div>
        </div>
    )
}

export default Card;