import { useEffect, useState } from "react";
import Gallery from "../components/Gallery/Gallery";
import * as apiService from '../services/apiService'

export default function HomePage() {
    const [trends, setTrends] = useState(null);

    useEffect(() => {
        apiService.getTrends().then(r => {
            const sortByPopularity = [...r.results].sort((a, b) => a.popularity < b.popularity ? 1 : -1);
            setTrends(sortByPopularity)
        })
    }, [])

    return (
        <>
            <h1 className="tittle"> TOP trends this week</h1>
            {trends && <Gallery items={trends}/>}
        </>
    )
}