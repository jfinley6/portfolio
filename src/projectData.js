export async function getGithubData(repository) {
    let response = await fetch(
      `https://api.github.com/repos/jfinley6/${repository}/commits`
    );
    let user = await response.json();
    return user
};

export const projectData = [
  {
    name: "Reddit Clone",
    technologies: [
      "Ruby on Rails",
      "JavaScript",
      "Bootstrap",
      "PostgreSQL",
      "Git",
    ],
    description:
      "A site similar to reddit where you can sign in, create communities and posts, and comment on user's posts",
    image: "./reddit_clone.png",
    source: "https://github.com/jfinley6/ruby-on-rails-reddit-clone",
    demo: "https://reddit-clone-rails.herokuapp.com",
    repository: "ruby-on-rails-reddit-clone",
  },
  {
    name: "Reddit Keyword Monitor",
    technologies: [
      "Ruby on Rails",
      "JavaScript",
      "Tailwind",
      "PostgreSQL",
      "Git",
    ],
    description:
      "A tool used to monitor subreddits for specific keywords. Any matches will send the user an email with the matching post. Used to secure free concert tickets.",
    image: "./reddit_keyword_monitor.png",
    source: "https://github.com/jfinley6/reddit-keyword-monitor",
    demo: "",
    repository: "reddit-keyword-monitor",
  },
  {
    name: "React Weather Browser",
    technologies: ["React", "JavaScript", "Tailwind", "Vercel", "Git"],
    description:
      "A weather browser for current weather in cities across the United States",
    image: "./react_weather_browser.png",
    source: "https://github.com/jfinley6/react-weather-browser",
    demo: "http://react-weather-browser.vercel.app/",
    repository: "react-weather-browser"
  },
];

export default projectData;
