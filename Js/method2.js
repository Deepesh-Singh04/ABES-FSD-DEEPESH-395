const company = {
    first_name: "Tech",
    last_name: "Solutions",
    age: 34,
    fullName() {
        return `${this.first_name} ${this.last_name}`;
    },
    getAge() {
        return this.age;
    }
};

console.log(company.fullName());
console.log(company.getAge());