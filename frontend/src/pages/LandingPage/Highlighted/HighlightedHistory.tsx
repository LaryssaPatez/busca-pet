import HighlightedCard from "../../../components/cards/Highlighted";
import highlightedData from "../../../utils/sampleHistories.json";
import { useState, useEffect } from "react";
import { PageWrapper } from "./HighlightedHistory.style";

export default function HighlightedHistory() {
    const [selectedItems, setSelectedItems] = useState<typeof highlightedData>([]);

    useEffect(() => {
        const getRandomItems = () => {
          const arrayCopy = [...highlightedData];
          for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
          }
          return arrayCopy.slice(0, 3);
        };
        setSelectedItems(getRandomItems());
      }, []);
      
    return (
        <PageWrapper>
            <h2>Histórias em destaque</h2>
                <article>
                    {selectedItems.map((item, index) => (
                        <HighlightedCard
                            key={index}
                            name={item.name}
                            keeper={item.keeper}
                            history={item.history}
                        />
                    ))}
                </article>
        </PageWrapper>
    );
}