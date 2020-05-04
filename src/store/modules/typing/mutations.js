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
    }
}