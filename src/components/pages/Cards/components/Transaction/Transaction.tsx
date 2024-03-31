import { formatDate } from "@/utils";
import { TransactionProps } from "@/types";
import Flight from "@assets/flight.png";
import MegaPhone from "@assets/megaphone.png";
import FileStorage from "@assets/fileStorage.png";
import Business from "@assets/business.png";
import Next from "@assets/next.png"
import styles from "./style.module.css";

const LOGOS = [
    {
        id: "flight",
        icon: Flight
    },
    {
        id: "megaPhone",
        icon: MegaPhone
    },
    {
        id: "fileStorage",
        icon: FileStorage
    }
]

function getLogoIcon() {
    return LOGOS[Math.floor(Math.random() * 3)]
}


const Transaction = ({
    type,
    merchant,
    date,
    currency,
    amount
}: TransactionProps) => {
    const { id, icon } = getLogoIcon();
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <span data-id={id} className={styles.logoSpan}>
                    <img src={icon} alt="transaction" className={styles.logo} />
                </span>
                <div className={styles.transDetails}>
                    <h3 className={styles.merchant}>{merchant}</h3>
                    <p className={styles.transDate}>{formatDate(date)}</p>
                    <span className={styles.transTypeSection}>
                        <span className={styles.transTypeLogo}>
                            <img src={Business} alt={`${type === "credit" ? "refund" : "charged"}`} className={styles.businessLogo} />
                        </span>
                        <p className={styles.transTypeDesc}>{`${type === "credit" ? "Refund on " : "Charged to "} debit card`}</p>
                    </span>
                </div>
            </div>
            <h3 className={styles.transAmountSection} data-type={type}>
                <span>{`${type === "credit" ? "+" : "-"}`}</span>
                <span>{currency}</span>
                <span>{amount}</span>
                <img src={Next} alt="transaction details" className={styles.nextLogo} />
            </h3>
        </div>
    )
}

export default Transaction;