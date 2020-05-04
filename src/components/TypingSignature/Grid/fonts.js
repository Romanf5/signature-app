import { v4 as uid  } from "uuid";

const fonts = {
    serif: [],
    hands: []
};

for(let i = 0; i < 18; i++) fonts.serif.push({ text: "Sophie Moore", id: uid() });
for(let i = 0; i < 18; i++) fonts.hands.push({ text: "Sophie Moore", id: uid() });

export default fonts;