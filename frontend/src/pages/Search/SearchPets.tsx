import LostFoundCard from "../../components/cards/LostFound";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect, useCallback } from "react";
import { usePetContext } from "../../context/PetContext";
import { IMAGE_URL } from "../../utils/constants";
import {
    FilterContainer,
    Header,
    Main,
    NotFoundContent,
    PageWrapper,
    SearchInputWrapper,
    Content
} from "./SearchPets.style";

export default function SearchPets() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");
    const [stateFilter, setStateFilter] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("");

    const { filteredPets, filterPets } = usePetContext();

    const handleSearchTermChange = useCallback((e:any) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleStatusChange = useCallback((e:any) => {
        setStatusFilter(e.target.value);
    }, []);

    const handleCityChange = useCallback((e:any) => {
        setCityFilter(e.target.value);
    }, []);

    const handleStateChange = useCallback((e:any) => {
        setStateFilter(e.target.value);
    }, []);

    const handleSpecieshange = useCallback((e:any) => {
        setSpeciesFilter(e.target.value);
    }, []);

    useEffect(() => {
        filterPets({
            searchTerm,
            status: statusFilter,
            city: cityFilter,
            state: stateFilter,
            species: speciesFilter,
        });

    }, [searchTerm, statusFilter, cityFilter, stateFilter, speciesFilter]);

    return (
        <PageWrapper>
            <Header>
                <a href="/">Início</a> {' > '} Pets listados
                <h1>Achados e perdidos</h1>
            </Header>
            <Content>
            <FilterContainer>
                <label>Status:</label>
                <select value={statusFilter} onChange={handleStatusChange}>
                    <option value="">Todos</option>
                    <option value="Perdido">Perdido</option>
                    <option value="Encontrado">Encontrado</option>
                </select>

                <label>Tipo de Pet:</label>
                <select value={speciesFilter} onChange={handleSpecieshange}>
                    <option value="">Todos</option>
                    <option value="Dog">Cachorro</option>
                    <option value="Cat">Gato</option>
                </select>

                <label>Cidade:</label>
                <input
                    type="text"
                    value={cityFilter}
                    onChange={handleCityChange}
                    placeholder="Cidade"
                />

                <label>Estado:</label>
                <input
                    type="text"
                    value={stateFilter}
                    onChange={handleStateChange}
                    placeholder="Estado"
                />
                <SearchInputWrapper>
                    <IoSearchOutline />
                    <input
                        placeholder="Buscar por nome, cidade ou status"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                </SearchInputWrapper>
            </FilterContainer>

            <Main>
                {filteredPets && filteredPets.length > 0 ? (
                    filteredPets.map((pet:any) => (
                        <LostFoundCard
                            key={pet.idPost}
                            name={pet.petName}
                            creator={pet.userName}
                            location={`${pet.city}/${pet.state}`}
                            status={pet.status}
                            imageUrl={IMAGE_URL + pet.imageName}
                            idPost={pet.idPost}
                        />
                    ))
                ) : (
                    <NotFoundContent>
                        Nenhum pet encontrado no banco de dados.
                    </NotFoundContent>
                )}
            </Main>
            </Content>
            
        </PageWrapper>
    );
}
