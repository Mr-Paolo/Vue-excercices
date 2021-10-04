const app = {
    data() {
        return {
            red: 0,
        }
    },
    methods: {
        yellowClick() {
            this.yellow = this.yellow + 1
            // this.yellow++ it's the same
        },
    }

}
