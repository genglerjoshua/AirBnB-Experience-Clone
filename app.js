
const data = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "Blank description place holder.",
        price: 136,
        coverImg: "image 12.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding phtotographer: For beginner and export photographers alike, join us in learning techniques required to leave the happy memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography 1.png",
        stats: {
            rating: 5.0,
            reviewCount: 38
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all the while conquring rugged terrain on your bike.",
        price: 50,
        coverImg: "mountain-bike 1.png",
        stats: {
            rating: 4.8,
            reviewCount: 2,
        },
        location: "Norway",
        openSpots: 3,
    },
]

function Navbar() {
    return (
        <nav className="nav">
            <img className="logo" src="./images/airbnb 1.png"></img>
        </nav>
    )
}

function Hero() {
    return (
        <main>
            <div>
                <img className="hero-img" src="./images/Group 77.png"></img>
            </div>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    )
}

function Card(props) {
    return (
        <section>
            <div className="card">
                <img className="card-img" src={`./images/${props.item.coverImg}`} />
                <div className="card-text">
                    <img className="star" src="./images/Star 1.png"></img><span>{props.item.stats.rating}</span><span className="gray">({props.item.stats.reviewCount})</span><span className="gray">{props.item.location}</span>
                    <p clasNames="card-title">{props.item.title}</p>
                    <p className="card-price"><span className="bold">From ${props.item.price}</span> / person</p>
                </div>
            </div>
        </section>
    )
}

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-section">
                {cards}
            </section>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)