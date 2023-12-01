import PoppingMovies from '../assets/poppingmovies.png'
import CocktailSearch from '../assets/cocktail.png'
import FriendsTrivia from '../assets/friendstrivia.png'

const completedWork = [
    {
        title: "Popping Movies",
        desc: "Popping Movies was created so that any movie enthusiast could search up their favorite movie and have easy access to see where it is streaming and view their favorite actors. This webpage has a simple design making it user friendly and quick to use.",
        img: PoppingMovies,
        link: "https://akleynhans.github.io/Popping-Movies/"
    },
    {
        title: "Cocktail Search",
        desc: "Cocktail Search is a fun app designed to allow the user to be presented with recipes to randomly generated cocktails. The user can then create an account and save recipes to their page.",
        img: CocktailSearch,
        link: "https://cocktail-search-9a6e5d707e4b.herokuapp.com/"
    },
    {
        title: "Friends Trivia",
        desc: "Friends Trivia is a game designed to test your knowledge on the tv series FRIENDS. The user will be presented with questions about the show, wrong answers will result in a time penalty and the scores are logged and saved at the end of every game",
        img: FriendsTrivia,
        link: "https://raw.githack.com/Akleynhans/Friends-Trivia-Game/main/index.html"
    },
]

export default function workList() {
    return (
        <div>
            <h1>Completed Work</h1>

            {completedWork.map((work) => (

                <li>
                    {/* make title clickable link */}
                    <a href={work.link}>
                        <h3>{work.title}</h3>
                    </a>

                    <img alt={work.name} src={work.img} />
                    <h4>{work.desc}</h4>
                </li>
            )
            )}


        </div>
    )
}