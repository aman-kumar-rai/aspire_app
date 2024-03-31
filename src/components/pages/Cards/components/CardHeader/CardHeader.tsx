import Add from "@assets/add.png";
import styles from "./style.module.css";
import { CardHeaderProps } from "@/types";

const CardHeader = ({
    currency = "S$",
    balance,
    isModalOpen,
    handleAddNewCard,
    handleToggleModal
}: CardHeaderProps) => {
    return (
        <div className={styles.container}>
            <span className={styles.availableBalanceText}>Available balance</span>
            <div className={styles.balanceAndNewCardSection}>
                <span className={styles.availableBalance}>
                    <span className={styles.currency}>{currency}</span>
                    <h2 className={styles.balance}>{balance}</h2>
                </span>
                <button onClick={handleAddNewCard} className={styles.newCardBtn}>
                    <img src={Add} className={styles.addIcon} />
                    New card
                </button>
            </div>
        </div>
    )
}

export default CardHeader;