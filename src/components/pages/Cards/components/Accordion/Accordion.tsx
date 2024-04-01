import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./style.module.css";

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof Accordion.Trigger>,
    React.ComponentPropsWithRef<typeof Accordion.Trigger>
>
    (({ children, ...props }, ref) => {
        return (
            <Accordion.Header className={styles.accordion_header}>
                <Accordion.Trigger
                    className={styles.accordion_trigger}
                    ref={ref}
                    {...props}
                >
                    <div className={styles.accordion_trigger_content}>
                        {children}
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>
        )
    })

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof Accordion.Content>,
    React.ComponentPropsWithRef<typeof Accordion.Content>
>(({ children, ...props }, ref) => {
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