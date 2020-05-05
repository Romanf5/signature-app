import { v4 as uid  } from "uuid";

const fonts = {
    serif: [
        "Manrope",
        "DM Sans",
        "Karla",
        "Open Sans",
        "Muli",
        "Montserrat",
        "Inter",
        "Raleway",
        "Poppins",
        "Noto Sans",
        "PT Sans",
        "Dosis",
        "Overpass",
        "Lato",
        "Sarabun",
        "Orienta",
        "Manjari",
        "Thasadith"
    ],
    hands: [
        "Sacramento",
        "Kalam",
        "La Belle Aurore",
        "Gochi Hand",
        "Caveat",
        "Marck Script",
        "Handlee",
        "Nothing You Could Do",
        "Covered By Your Grace",
        "Just Another Hand",
        "Shadows Into Light",
        "Bad Script",
        "Yellowtail",
        "Dancing Script",
        "Great Vibes",
        "Qwigley",
        "Bilbo Swash Caps",
        "Stalemate"
    ]
};

export default {
    hands: fonts.hands.map((name) => ({ name, id: uid() })),
    serif: fonts.serif.map((name) => ({ name, id: uid() }))
}