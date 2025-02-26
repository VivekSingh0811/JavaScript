const course = {
    coursename: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh Sir"
}

// suppose if we  want to print the course for 3 times...then we will need to type three print statements, which is totally fine...but if we want a clean code then there is one more way to do it...

// const {courseInstructor} = course;
// console.log(courseInstructor) //now we dont have to write course.courseInstructor...we can even chang the key-name...
const {courseInstructor: Instructor} = course;
console.log(Instructor)



// Below is DESTRUCTURING of objects...
// const navbar = ({company}) => {

// }

// navbar(company = "Vivek")

