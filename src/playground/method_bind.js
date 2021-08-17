const obj = {
  name: "Vickgram",
  getName() {
    return this.name;
  },
};

//1 option
// const getName = obj.getName.bind(obj);

//2 option
const getName = obj.getName.bind({ name: "Andrew" });
console.log(getName());
