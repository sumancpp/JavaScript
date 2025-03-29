const course = {
    name : "JS is hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor : instructor} = course;
console.log(instructor);

