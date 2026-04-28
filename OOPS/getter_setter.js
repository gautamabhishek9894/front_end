let person = {
    f_name: "Manish",
    l_name: "Parab",

    set setName(value) {
        const [f, l] = value.split(" ");
        this.f_name = f;
        this.l_name = l;
    },

    get fullName() {
        return this.f_name + " " + this.l_name;
    }
};

person.setName = "Meet Paste";

console.log(person.fullName);