import { useNavigate } from "react-router-dom";
import useDataFromDb from "../../../hooks/useDataFromDb";
import { NotFoundContent, PageWrapper } from "./HighlightedLostFound.style";
import { IMAGE_URL } from "../../../utils/constants";
import LostFound from "../../../components/cards/LostFound";

export default function HighlightedLostFound() {
    const navigate = useNavigate();
    const data = useDataFromDb();
    const recentPets = data ? (Array.isArray(data) ? data.slice(0,4) : []) : [];
    
    return (
        <PageWrapper>
            <h2>Achados e perdidos</h2>
            <p>Pets anunciados recentemente.</p>
            <div>
                {recentPets.length > 0 ? recentPets.map((pet:any) => (
                    <LostFound
                        key={pet.idPost}
                        name={pet.petName}
                        location={`${pet.city}/${pet.state}`}
                        status={pet.status}
                        imageUrl={IMAGE_URL + pet.imageName}
                    />
                )) : <NotFoundContent>Nenhum pet encontrado no banco de dados.</NotFoundContent>}
            </div>
            <button onClick={() => navigate("/search")}>Ver mais</button>
        </PageWrapper>
    );
}