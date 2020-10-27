const STRINGS = {
    TITLE: 'Baby Nutrition Shop',
    SCREENS: {
        HOME: 'Baby Nutrition Shop',
        ABOUT: "About",
        EXIT: "Exit"
    },
}

const URLS = {
    ROOT:"https://webstore.ftssol.com/",
    HOMEPAGE: "https://webstore.ftssol.com/cygnuswsca_babynutrition/en/",
    ABOUT_US: "https://webstore.ftssol.com/cygnuswsca_babynutrition/content/4-about-us"
}

const COLORS = {
    PRIMARY_COLOR: "#0096ab",
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