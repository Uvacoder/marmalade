/**
 * @type import('./src/types/marmalade').Config
 */
const config = {
  meta: {
    title: "Marmalade 🍊",
    description: "Another opinionated JAMstack starter.",
    author: "Joe Bell",
    url: "https://marmalade.joebell.co.uk",
    avatar: "",
    social: {
      github: "joe-bell",
      instagram: "joebell",
      twitter: "joebell_",
    },
  },
  navigation: [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/joebell_",
      external: true,
    },
    {
      title: "GitHub",
      url: "https://github.com/joe-bell/",
      external: true,
    },
  ],
};

module.exports = config;