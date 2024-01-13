const { Movie } = require('../models');

const movieData = [
    {
        id: 1,
        name: "The Godfather",
        description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
        director: "Francis Ford Coppola",
        actor: "Marlon Brando",
        release_date: "1972",
        genreId : 3,
    },
    {
        id: 2,
        name: "Schindler's List",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        director: "Steven Spielberg",
        actor: "Liam Neeson",
        release_date: "1993",
        genreId: 3,
    },
    {
        id: 3,
        name: "12 Angry Men",
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        director: "Sidney Lumet",
        actor: "Henry Fonda",
        release_date: "1957",
        genreId: 3,
    },
    {
        id: 4,
        name: "Life is Beautiful",
        description: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
        director: "Roberto Benigni",
        actor: "Roberto Benigni",
        release_date: "1997",
        genreId: 5,
    },
    {
        id: 5,
        name: "The Good, the Bad and the Ugly",
        description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        director: "Sergio Leone",
        actor: "Clint Eastwood",
        release_date: "1966",
        genreId: 1,
    },
    {  
        id: 6,
        name: "The Shawshank Redemption",
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        director: "Frank Darabont",
        actor: "Tim Robbins",
        release_date: "1994",
        genreId: 3,
    },
    {
        id: 7,
        name: "The Pursuit of Happyness",
        description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
        director: "Gabriele Muccino",
        actor: "Will Smith",
        release_date: "2006",
        genreId: 3,
    },
    {
        id: 8,
        name: "Seven Samurai",
        description: "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.",
        director: "Akira Kurosawa",
        actor: "Toshio Mifune",
        release_date: "1954",
        genreId: 1,
    },
    {
        id: 9,
        name: "Untouchable",
        description: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        director: "Olivier Nakache",
        actor: "Francoi Cluzet",
        release_date: "2011",
        genreId: 2,
    },
    {
        id: 10,
        name: "Central Station",
        description: "The emotive journey of a former schoolteacher who writes letters for illiterate people, and a young boy whose mother has just died, as they search for the father he never knew.",
        director: "Walter Salles",
        actor: "Fernanda Montenegro",
        release_date: "1998",
        genreId: 3,
    },
    {
        id: 11,
        name: "Requiem for a Dream",
        description: "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        director: "Darren Aronofsky",
        actor: "Ellen Burstyn",
        release_date: "2000",
        genreId: 3,
    },
    {
        id: 12,
        name: "A Beautiful Mind",
        description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        director: "Ron Howard",
        actor: "Russell Crowe",
        release_date: "2001",
        genreId: 3,
    },
    {
        id: 13,
        name: "Hachi: A Dog's Tale",
        description: "A college professor bonds with an abandoned dog he takes into his home.",
        director: "Lasse Hallstrom",
        actor: "Richard Gere",
        release_date: "2009",
        genreId: 3,
    },
    {
        id: 14,
        name: "Taken",
        description: "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
        director: "Pierre Morel",
        actor: "Liam Neeson",
        release_date: "2008",
        genreId: 6,
    },
    {
        id: 15,
        name: "My Sassy Girl",
        description: "A young man sees a drunk, cute woman standing too close to the tracks at a metro station in Seoul and pulls her back. She ends up getting him into trouble repeatedly after that, starting on the train.",
        director: "Jae-young Kwak",
        actor: "Cha Tae-hyun",
        release_date: "2001",
        genreId: 5,
    },
    {
        id: 16,
        name: "Amores perros",
        description: "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
        director: "Alejandro G. Inarritu",
        actor: "Emilio Echevarria",
        release_date: "2000",
        genreId: 3,
    },
    {
        id: 17,
        name: "The Shining",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        director: "Stanley Kubrick",
        actor: "Jack Nicholson",
        release_date: "1980",
        genreId: 4,
    },
    {
        id: 18,
        name: "Apocalypto",
        description: "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
        director: "Mel Gibson",
        actor: "Gerardo Taracena",
        release_date: "2006",
        genreId: 1,
    },
    {
        id: 19,
        name: "Gladiator",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        director: "Ridley Scott",
        actor: "Russell Crowe",
        release_date: "2000",
        genreId: 1,
    },
    {
        id: 20,
        name: "Cast Away",
        description: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.",
        director: "Robert Zemeckis",
        actor: "Tom Hanks",
        release_date: "2000",
        genreId: 3,
    },
    {
        id: 21,
        name: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        director: "Christopher Nolan",
        actor: "Christian Bale",
        release_date: "2008",
        genreId: 1,
    },
    {
        id: 22,
        name: "The Pianist",
        description: "During the WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.",
        director: "Roman Polanski",
        actor: "Adrien Brody",
        release_date: "2002",
        genreId: 3,
    },
    {
        id: 23,
        name: "Titanic",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        director: "James Cameron",
        actor: "Leonardo DiCaprio",
        release_date: "1997",
        genreId: 5,
    },
    {
        id: 24,
        name: "3-Iron",
        description: "A transient young man breaks into empty homes to partake of the vacationing residents' lives for a few days.",
        director: "Kim Ki-duk",
        actor: "Lee Seung-yun",
        release_date: "2004",
        genreId: 5,
    },
    {
        id: 25,
        name: "Braveheart",
        description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        director: "Mel Gibson",
        actor: "Mel Gibson",
        release_date: "1995",
        genreId: 3,
    },
    {
        id: 26,
        name: "It's a Wonderful Life",
        description: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
        director: "Frank Capra",
        actor: "James Stewart",
        release_date: "1946",
        genreId: 3,
    },
    {
        id: 27,
        name: "Spring, Summer, Fall, Winter... And Spring",
        description: "A boy is raised by a Buddhist monk in an isolated floating temple where the years pass like the seasons.",
        director: "Kim Ki-duk",
        actor: "Kim Ki-duk",
        release_date: "2003",
        genreId: 5,
    },
    {
        id: 28,
        name: "Alien",
        description: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.",
        director: "Ridley Scott",
        actor: "Sigourney Weaver",
        release_date: "1979",
        genreId: 4,
    },
    {
        id: 29,
        name: "Memories of Murder",
        description: "In a small Korean province in 1986, two detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
        director: "Bong Joon Ho",
        actor: "Song Kang-ho",
        release_date: "2003",
        genreId: 3,
    },
    {
        id: 30,
        name: "The Return",
        description: "In the Russian wilderness, two brothers face a range of new, conflicting emotions when their father - a man they know only through a single photograph - resurfaces.",
        director: "Andrey Zvyagintsev",
        actor: "Vladimir Garin",
        release_date: "2003",
        genreId: 3,
    },
    {
        id: 31,
        name: "I Saw the Devil",
        description: "A secret agent exacts revenge on a serial killer through a series of captures and releases.",
        director: "Jee-woon Kim",
        actor: "Lee Byung-hun",
        release_date: "2010",
        genreId: 1,
    },
    {
        id: 32,
        name: "Children of Heaven",
        description: "After a boy loses his sister's pair of shoes, he goes on a series of adventures in order to find them. When he can't, he tries a new way to 'win' a new pair.",
        director: "Majid Maajidi",
        actor: "Mohammad Amir Naji",
        release_date: "1997",
        genreId: 3,
    },
    {
        id: 33,
        name: "A Separation",
        description: "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
        director: "Asghar Farhadi",
        actor: "Payman Maadi",
        release_date: "2011",
        genreId: 3,
    },
    {
        id: 34,
        name: "The Sixth Sense",
        description: "Malcolm Crowe, a child psychologist, starts treating a young boy, Cole, who encounters dead people and convinces him to help them. In turn, Cole helps Malcolm reconcile with his estranged wife.",
        director: "M. Night Shyamalan",
        actor: "Bruce Wilis",
        release_date: "1999",
        genreId: 3,
    },
    {
        id: 35,
        name: "A Moment to Remember",
        description: "A young couple's enduring love is tested when 27-year-old Su-jin is diagnosed with a rare form of Alzheimer's disease.",
        director: "Park Kyung-Jin",
        actor: "Jung Woo-sung",
        release_date: "2004",
        genreId: 5,
    },
    {
        id: 36,
        name: "Departures",
        description: "A newly unemployed cellist takes a job preparing the dead for funerals.",
        director: "Yojiro Takita",
        actor: "Masahiro Motoki",
        release_date: "2008",
        genreId: 3,
    },
    {
        id: 37,
        name: "The Road Home",
        description: "Prompted by the death of his father and the grief of his mother, a man recalls the story of how they met in flashback.",
        director: "Yimou Zhang",
        actor: "Ziyi Zhang",
        release_date: "1999",
        genreId: 3,
    },
    {
        id: 38,
        name: "Saving Private Ryan",
        description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        director: "Steven Spielberg",
        actor: "Tom Hanks",
        release_date: "1998",
        genreId: 1,
    },
    {
        id: 39,
        name: "The Bridge on the River Kwai",
        description: "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors in occupied Burma, not knowing that the allied forces are planning a daring commando raid through the jungle to destroy it.",
        director: "David Lean",
        actor: "William Holden",
        release_date: "1957",
        genreId: 1,
    },
    {
        id: 40,
        name: "Ben-Hur",
        description: "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.",
        director: "William Wyler",
        actor: "Charlton Heston",
        release_date: "1959",
        genreId: 1,
    },
    {
        id: 41,
        name: "The Exorcist",
        description: "When a young girl is possessed by a mysterious entity, her mother seeks the help of two Catholic priests to save her life.",
        director: "William Friedkin",
        actor: "Ellen Burstyn",
        release_date: "1973",
        genreId: 4,
    },
    {
        id: 42,
        name: "The Secret in Their Eyes",
        description: "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
        director: "Juan Jose Campanella",
        actor: "Ricardo Darin",
        release_date: "2009",
        genreId: 3,
    },
    {
        id: 43,
        name: "Leon",
        description: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
        director: "Luc Besson",
        actor: "Jean Reno",
        release_date: "1994",
        genreId: 1,
    },
    {
        id: 44,
        name: "The Green Mile",
        description: "A tale set on death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution.",
        director: "Frank Darabont",
        actor: "Tom Hanks",
        release_date: "1999",
        genreId: 3,
    },
    {
        id: 45,
        name: "Gran Torino",
        description: "After a Hmong teenager tries to steal his prized 1972 Gran Torino, a disgruntled, prejudiced Korean War veteran seeks to redeem both the boy and himself.",
        director: "Clint Eastwood",
        actor: "Clint Eastwood",
        release_date: "2008",
        genreId: 3,
    },
    {
        id: 46,
        name: "Kill Bill: Vol. 1",
        description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        director: "Quentin Tarantino",
        actor: "Uma Thurman",
        release_date: "2003",
        genreId: 1,
    },
    {
        id: 47,
        name: "Jurassic Park",
        description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        director: "Steven Spielberg",
        actor: "Sam Neill",
        release_date: "1993",
        genreId: 7,
    },
    {
        id: 48,
        name: "Terminator 2: Judgement Day",
        description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.",
        director: "James Cameron",
        actor: "Arnold Schwarznegger",
        release_date: "1991",
        genreId: 1,
    },
    {
        id: 49,
        name: "Back to the Future",
        description: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        director: "Robert Zemeckis",
        actor: "Michael J. Fox",
        release_date: "1985",
        genreId: 7,
    },
    {
        id: 50,
        name: "Finding Nemo",
        description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        director: "Andrew Stanton",
        actor: "Albert Brooks",
        release_date: "2003",
        genreId: 2,
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;