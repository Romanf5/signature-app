export default {
    setText(state, text) {
        state.currentText = text;
    },
    setColor(state, color) {
        state.currentColor = color;
    },
    setFont(state, font) {
        state.currentFont = font;
    },
    setReady(state, isReady) {
        state.readyForDownload = isReady;
    },
    setType(state, type) {
        state.fontType = type;
    },
    refresh(state) {
        state.currentFont = "";
        state.currentColor = "#0B2034";
        state.currentText = "";
        state.fontType = null;
        state.readyForDownload = false;
    }
}