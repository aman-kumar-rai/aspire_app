import { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./style.module.css";

const AccordionTrigger = forwardRef(({ children, ...props }, ref) => {
    return (
        <Accordion.Header className={styles.accordion_header}>
            <Accordion.Trigger
                className={styles.accordion_trigger}
                ref={ref}
                {...props}
            >
                <span className={styles.accordion_trigger_content}>
                    {children}
                </span>
                <span className={styles.accordion_trigger_icon}>X</span>
            </Accordion.Trigger>
        </Accordion.Header>
    )
})

const AccordionContent = forwardRef(({ children, ...props }, ref) => {
    return (
        <Accordion.Content
            className={styles.accordion_content}
            ref={ref}
            {...props}
        >
            {children}
        </Accordion.Content>
    )
})

export {
    AccordionTrigger,
    AccordionContent
}