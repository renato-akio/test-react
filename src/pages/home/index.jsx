import { useEffect, useState } from "react"
import api from "../../services/api"
import Header from "../../components/header"
import { Container, ContainerItems } from "./styles"
import Card from "../../components/card";

function Home() {
    const [movies, setMovies] = useState();
    const [filteredMovies, setfilteredMovies] = useState();

    useEffect(() => {
        async function loadData() {
            const { data: { docs } } = await api.get("movie")

            setMovies(docs);
            setfilteredMovies(docs);
            console.log(docs);
        }

        loadData();
    }, [])

    return (
        <Container>
            <Header movies={movies} setMovies={setfilteredMovies} />

            <ContainerItems>
                {filteredMovies && filteredMovies.map(movie => <Card movieData={movie} key={movie._id} />)}
            </ContainerItems>
        </Container>
    )
}

export default Home