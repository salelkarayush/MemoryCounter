export default function Header({currscore, bestscore}){
    return(
        <div className="container">
            <div className="Headings">
                <h1>Memory Card Game</h1>
                <label htmlFor="score">Score:</label>
                <p>{currscore}</p>
                <label htmlFor="highscore">High Score:</label>
                <p>{bestscore}</p>
            </div>
        </div>
    );
}