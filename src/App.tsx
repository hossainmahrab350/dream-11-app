
import { Suspense } from "react";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Players from "./component/Players/Players";
import type { IPlayer } from "./Types/PlayerType";

import Footer from "./component/Footer";



const PlayersFetch = async (): Promise<IPlayer[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};
const playersPromise = PlayersFetch();

function App() {

    return (
        <>
            <Nav />
            <Banner />

            <Suspense fallback={<h2>Loading...</h2>}>
                <Players playerPromise={playersPromise} />
            </Suspense>


            <Footer/>


        </>
    );
}

export default App;
