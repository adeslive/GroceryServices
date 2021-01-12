const STRINGS = {
    TITLE: 'Grocery Services',
    SCREENS: {
        HOME: 'Grocery Services',
        ABOUT: "About",
        EXIT: "Exit"
    },
}

const URLS = {
    ROOT:"https://webstore.ftssol.com/",
    HOMEPAGE: "https://webstore.ftssol.com/CygnusWebStore_GroceryServices/",
    ABOUT_US: "https://www.grocsvcs.com/about-us/"
}

const COLORS = {
    PRIMARY_COLOR: "#326949",
    LOADER_BG_COLOR: 'rgba(255, 255, 255, 1.0)'
}

const IMAGES = {
    FLIP_IMAGE: require('./assets/flip.png'),
    NO_INTERNET: require('./assets/nointernet.png'),
    MENU: {
        HAMBURGUER: require('./assets/md-menu.png'),
        ARROWS: {
            LEFT: require('./assets/md-left-arrow.png'),
            RIGHT: ''
        }
    }
}

export {
    STRINGS,
    URLS,
    COLORS,
    IMAGES
}