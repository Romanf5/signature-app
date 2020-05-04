import { v4 as uid  } from "uuid";

const fonts = {
    serif: [
        "Manropes",
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
    hands: []
};

for(let i = 0; i < 18; i++) fonts.hands.push({ text: "Sophie Moore", id: uid() });

export default {
    ...fonts,
    serif: fonts.serif.map((name) => ({ name, id: uid() }))
}