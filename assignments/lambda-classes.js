// CODE here for your Lambda Classes
class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.location = personInfo.location;
        this.age = personInfo.age;
        this.gender = personInfo.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instStats) {
        super(instStats);
        this.favLanguage = instStats.favLanguage;
        this.specialty = instStats.specialty;
        this.catchPhrase = instStats.catchPhrase;
    }
    demo() {
        return `Today we are learning about memes`
    }
    grade() {
        return `${this.name} receives a perfect score on memes`
    }
}

class Student extends Person {
    constructor(stu) {
        super(stu);
        this.previousBackground = stu.previousBackground;
        this.className = stu.className;
        this.favSubjects = stu.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for memes`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on memes`
    }
}

class ProjectManager extends Instructor {
    constructor(proMan) {
        super(proMan);
        this.gradClassName = proMan.gradClassName;
        this.favInstructor = proMan.favInstructor;
    }
    standUp() {
        return `${this.name} announces to general, @channel standy times!`
    }
    debugsCode() {
        return `${this.name} debugs {student.name} code on memes.`
    }
}


// People

const jim = new Person({
    name: 'Jim',
    location: 'North Kingstown',
    age: 22,
    gender: 'male'
})

const joe = new Person({
    name: 'Joe',
    location: 'West Warwick',
    age: 24,
    gender: 'male'
})


// Instructors

const dana = new Instructor({
    name: 'Dana',
    location: 'East Greenwich',
    age: 35,
    gender: 'female',
    favLanguage: 'Javascript',
    specialty: 'Waffle Making',
    catchPhrase: 'Does not compute'
})

const donny = new Instructor({
    name: 'Donny',
    location: 'Lincoln',
    age: 53,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Fishing',
    catchPhrase: 'Do not pass go'
})

// Students

const alex = new Student({
    name: 'Alex',
    location: 'Austin',
    age: 49,
    gender: 'male',
    previousBackground: 'Scientist',
    className: 'WEB8',
    favSubjects: ["Math", "Science", "Economics", "Business"]
})

const john = new Student({
    name: 'John',
    location: 'Westerly',
    age: 29,
    gender: 'male',
    previousBackground: 'Mortgages',
    className: 'WEB18',
    favSubjects: ["Audio editing", "Communications", "Finance", "Music Theory"]
})

// Project Managers

const mike = new ProjectManager({
    name: 'Mike',
    location: 'Middletown',
    age: 34,
    gender: 'male',
    gradClassName: 'WEB14',
    favInstructor: 'James'
})

const michelle = new ProjectManager({
    name: 'Michelle',
    location: 'Newport',
    age: 31,
    gender: 'female',
    gradClassName: 'WEB16',
    favInstructor: 'Mike'
})