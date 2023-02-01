import DarkHorse from '../images/projects/DarkHorse.gif'
import Laura from '../images/projects/LaurasPage.gif'
import NWVeg from '../images/projects/nwveg.gif'
import Griffin from '../images/projects/GriffinOskar.gif'

const portfolioData = [
    {
        image: DarkHorse,
        link: 'https://darkhorsetours.herokuapp.com/',
        title: 'Dark Horse Tours',
        summary: 'Dark Horse is an app that allows bands to see the location of their fans. Fans will be asked to check in on a map so that artists can then see what cities they have the most fans in. After the cities are located the bands can use this information to help them to map out a successful tour.',
        tech: 'React, MongoDB, Leaflet, Express, Firebase, Axios, Materialze'
    },
    {
        image: Laura,
        link: 'https://laura-cullen.herokuapp.com/',
        title: 'Laura Cullen',
        summary: 'Laura Cullen is a modern artist who is always making new work and presenting in exhibits with her existing collection.',
        tech: 'React, MongoDB, Javascript, HTML, CSS'
    },
    {
        image: NWVeg,
        link: 'https://northwest-veg.herokuapp.com/',
        title: 'Northwest Veg',
        summary: 'We set out to build an application that allows users and facilities that are interested in incorporating a plant based diet into their programs and lives! We make it simple by providing informative articles, a recipes page that allows you to filter by ingredient(s) to help you make your desired meal, and having an accessible and easy to fill out form for interested facilites.',
        tech: 'MVC, Express, Handlebars, Materialize, MySQL, Node, Sequelize'
    },
    {
        image: Griffin,
        link: 'https://katnguyenn.github.io/Griffin-Oskar/',
        title: 'Griffin Oskar',
        summary: 'We set out to give a pop artist by the name of Griffin Oscar a place where fans can go to find out all of his latest information. Griffin is an amazing artist and producer with millions of streams on his songs but he did not have a website to link everything together. The goal for his site was to give him a place for fans, labels and managers to be able to find out everything there is to know about Griffin. He also wanted to start a mailing list and give tour updates.',
        tech: 'The page contains HTML, CSS, Materialize (CSS Framework), Javascript, jQuery and Node.'
    }
]

export default portfolioData