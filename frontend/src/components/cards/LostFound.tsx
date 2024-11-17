import { IoStar } from 'react-icons/io5';
import { LostFoundCardProps } from '../../utils/types';
import { CardContainer, CardContent } from './LostFound.style';

export default function LostFound({name, location, status, imageUrl}: LostFoundCardProps) {
  return (
        <CardContainer>
            <h2>{status}</h2>
            <div className="image-container">
                <img src={imageUrl} alt="avatar" />
            </div>
            <CardContent>
                <div>
                    <h3>{name}</h3>
                    <IoStar/>
                </div>
                <p>{location}</p>
            </CardContent>
        </CardContainer>
    )
}