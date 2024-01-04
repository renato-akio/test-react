import { useEffect, useRef, useState } from "react"
import ConvIcon from "../../assets/conv-icon.svg"
import { TopHeader, Container } from "./styles"

export default function Header({ movies, setMovies }) {
    const input = useRef()
    const [aveValue, setAveValue] = useState({
        runtime: 0,
        budget: 0
    })

    function aveMovies(movies) {
        const runtime = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length;
        const budget = movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length;

        setAveValue({
            runtime,
            budget
        })
    }

    function inputChange() {
        const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()));
        aveMovies(filteredMovies)
        setMovies(filteredMovies);
    }

    useEffect(() => {
        if (movies && movies.length > 0){
            aveMovies(movies);
            console.log("aqui");
        }
            

    }, [movies])
    return (
        <>
            <TopHeader>
                <img src={ConvIcon} alt="conv-icon" />
                <p>Senior Frontend Test</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className="ave-values">
                    <div >
                        <p>Ave. movie runtime: {aveValue.runtime} min</p>
                        <p>Ave. movie budget: ${aveValue.budget}M</p>
                    </div>
                    <input type="text" placeholder="Filter movies by name" ref={input} onChange={inputChange} />
                </div>
            </Container>
        </>
    )
}