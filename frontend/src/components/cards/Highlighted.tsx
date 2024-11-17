import { CardContainer, CardHeader, CardContent } from './Highlighted.style';
import { IoStar } from 'react-icons/io5';
import usePetImage from '../../hooks/usePetImage';
import { HighlightedCardProps } from '../../utils/types';

export default function Highlighted({ name, keeper, history }: HighlightedCardProps) {
    const dogImage = usePetImage({ type: 'Dog' });
    const rated = 5;

    return (
        <CardContainer>
            <CardHeader>
                <img src={dogImage} alt="avatar" />
                <h3>{name}</h3>
            </CardHeader>
            <CardContent>
                <span>
                    <h4>{keeper}</h4>
                    <span>
                        {Array(rated)
                            .fill(null)
                            .map((_, index) => (
                                <IoStar key={index} />
                            ))}
                    </span>
                </span>
                <p>{history}</p>
            </CardContent>
        </CardContainer>
    );
}