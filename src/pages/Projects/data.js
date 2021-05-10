import Blogue from '../../Images/gifs/Blogue.gif'
import Hobbit from '../../Images/gifs/Hobbit.gif'
import YourRepo from '../../Images/gifs/YourRepo.gif'
import quizards from '../../Images/gifs/quizards.gif'
const repos = [
    {
        id: 1,
        Name: "Blogue",
        description: "This is an anonymous community journalling webpage, where users can enter their unfiltered thoughts. Users can enter their posts and add a GIPHY. They can also view posts made by other users and engage by adding reactions and comments.",
        technologies: "HTML&CSS, JavaScript, Express.js, Jest",
        github: "https://github.com/emmanuel-sobamowo/blogue-client",
        netlify: "https://blogue.netlify.app/",
        image: Blogue,
    },

    {
        id: 2,
        Name: "Hobbit",
        description: "Hobbit is an app that helps users create healthy routines and turn them into hobbies by allowing you to set habit goals, track your progress, and then motivating you with streaks. Users are able to register for a Hobbit account; upon login, they are able to access their dashboard where they can add a customised habit, mark as complete for the day/week and see their most recent completion streaks.",
        technologies: "HTML&CSS, JavaScript, PostgresSQL, Express.js, Jest",
        github: "https://github.com/emmanuel-sobamowo/hobbit",
        netlify: "https://hobbit.netlify.app/",
        image: Hobbit,
    },

    {
        id: 3,
        Name: "Your-Repo-Story",
        description: "A React app used to retrieve the public GitHub Repositories of an existing user by connecting to GitHub's API. The user is able to see repository data such as name, description, forks, stars and watches.",
        technologies: "React, HTML&CSS, JavaScript, Jest/React Testing Library",
        github: "https://github.com/emmanuel-sobamowo/your-repo-story",
        netlify: "https://your-repo-story.netlify.app/",
        image: YourRepo,
        
    },
    {
        id: 4,
        Name: "Quizards",
        description: "Quizards is an online quiz game which uses OpenTrivia API for fetching questions. Users can join a room with a name and room code, then create a game. (5 players max). Users can select the difficulty, category and number of questions. At the end of each quiz users are sent to a leaderboards page displaying their score.",
        technologies: "React, CSS, Node.js, socket.io",
        github: "https://github.com/emmanuel-sobamowo/QuizAppClient",
        netlify: "https://quizards.netlify.app/",
        image: quizards,
    }


];

export default repos;