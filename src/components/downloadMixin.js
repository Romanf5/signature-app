export default {
    data() {
        return {
            link: null,
            uri: null
        };
    },
    methods: {
        download() {
            if(this.link) {
                this.link.click();
                document.body.removeChild(this.link);
            } else window.open(this.uri);
        },
        makeLink(canvas) {
            const uri = canvas.toDataURL("image/png");
            this.link = document.createElement("a");
            if(typeof this.link.download === "string") {
                this.link.href = uri.replace("image/png", "image/octet-stream");
                this.link.download = "signature.png";
                document.body.appendChild(this.link);
            } else this.uri = uri;
        }
    }
};