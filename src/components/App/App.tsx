import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionContent, AccordionTrigger } from "@components/Accordion/Accordion";

const App = () => {
    const [openItem, setOpenItem] = useState("cardDetails");
    const [items, setItems] = useState([
        {
            id: "cardDetails",
            heading: "Card details",
            children: "aasdfalk asdfasdf"
        },
        {
            id: "recentTransactions",
            heading: "Recent transactions",
            children: "ajdklfjas alkjaksdlf"
        }
    ])


    return (
        <Accordion.Root type="single" defaultValue={openItem}>
            {items.map(({ id, heading, children }) => {
                return (
                    <Accordion.Item key={id} value={id}>
                        <AccordionTrigger>
                            <span>X</span>
                            <span>{heading}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <span>{children}</span>
                        </AccordionContent>
                    </Accordion.Item>
                )
            })}
        </Accordion.Root>
    );
}

export default App;