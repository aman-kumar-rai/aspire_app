import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Add from "@assets/add.png";
import styles from "./style.module.css";
import { CardHeaderProps } from "@/types";

const CardHeader = ({
    currency = "S$",
    balance,
    isModalOpen,
    handleAddNewCard,
    handleToggleModal,
}: CardHeaderProps) => {
    const [newCardName, setNewCardName] = useState({
        value:"",
        error:""
    });

    const handleCardName = (event) =>{
        const {value} = event.target;
        setNewCardName({
            value,
            error:""
        })
    }

    const onSubmitNewCard = (event) =>{
        // return
        event.preventDefault();
        if(newCardName.value.trim().length<3){
            setNewCardName(prev=>({...prev, error:"Card holder's name should be of atleast 3 letters"}))
            return
        }
        handleAddNewCard(newCardName.value)
        setNewCardName({value:"", error:""})
    }

    return (
        <div className={styles.container}>
            <span className={styles.availableBalanceText}>Available balance</span>
            <div className={styles.balanceAndNewCardSection}>
                <span className={styles.availableBalance}>
                    <span className={styles.currency}>{currency}</span>
                    <h2 className={styles.balance}>{balance}</h2>
                </span>
                <button onClick={handleToggleModal} className={styles.newCardBtn}>
                    <img src={Add} className={styles.addIcon} />
                    New card
                </button>
            </div>
            <Dialog.Root open={isModalOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className={styles.dialogOverlay} />
                    <Dialog.Content className={styles.dialogContent}>
                        <Dialog.Title className={styles.dialogTitle}>Add New Card</Dialog.Title>
                        <form className={styles.cardInputSection}>
                            <label className="Label" htmlFor="name">
                                Card Holder's Name
                            </label>
                            <input className={styles.inputArea} id="name" placeholder="Please enter card holder's name" value={newCardName.value} onChange={handleCardName}/>
                            <li className={styles.errorMsg}>{newCardName.error}</li>
                            <div className={styles.btnSection}>
                                <button className={styles.cancelBtn} type="button" aria-label="Close" onClick={handleToggleModal}>Cancel</button>
                                <button className={styles.submitBtn} type="submit" onClick={onSubmitNewCard}>Submit</button>
                            </div>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </div>
    )
}

export default CardHeader;