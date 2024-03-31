import Logo from "@components/icons/Logo/Logo";
import Visa from "@assets/visa.png";
import styles from "./style.module.css";
import { CarouselItemProps } from "@/types";
import { formatExpiryDate } from "@/utils";

const CarouselItem = ({
    name,
    cardNumber,
    expiry,
    cvv,
    isFrozen,
    showCardNumber
}: CarouselItemProps) => {
    return (
        <div className={styles.container} key={cardNumber} data-state={isFrozen ? "frozen" : "non-frozen"}>
            <div className={styles.aspireLogo}>
                <Logo
                    label={"Aspire"}
                />
            </div>
            <span className={styles.cardHolderName}>
                {name}
            </span>
            <div className={styles.cardDetails}>
                <span className={styles.cardNumber}>
                    {showCardNumber ?
                        <>
                            <span className={styles.cardNumberPart}>{cardNumber.slice(0, 4)}</span>
                            <span className={styles.cardNumberPart}>{cardNumber.slice(4, 8)}</span>
                            <span className={styles.cardNumberPart}>{cardNumber.slice(8, 12)}</span>
                            <span className={styles.cardNumberPart}>{cardNumber.slice(12)}</span>
                        </>
                        : (
                            <>
                                <span className={`${styles.cardNumberPartHidden} ${styles.cardNumberPart}`}>....</span>
                                <span className={`${styles.cardNumberPartHidden} ${styles.cardNumberPart}`}>....</span>
                                <span className={`${styles.cardNumberPartHidden} ${styles.cardNumberPart}`}>....</span>
                                <span className={styles.cardNumberPart}>{cardNumber.slice(12)}</span>
                            </>
                        )}

                </span>
                <div className={styles.cardDateCvvSection}>
                    <span className={styles.expiryDate}>
                        Thru:{formatExpiryDate(expiry)}
                    </span>
                    <span className={styles.cvv}>
                        <span>CVV:</span>
                        <span className={styles.cvvNumber}>{showCardNumber ? cvv : "***"}</span>
                    </span>
                </div>
                <div className={styles.type}>
                    <img src={Visa} className={styles.visa} />
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;