class IG_Account {
    #likes;

    constructor(name, likes) {
        this.name = name;
        this.#likes = likes;
    }

    showLikes() {
        return this.#likes;
    }
}

let u1 = new IG_Account("Abhishek", 100);
console.log(u1.showLikes()); 