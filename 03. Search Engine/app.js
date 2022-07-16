
const data = [
    {
        id: 1,
        title: "Flow of Control",
        intro: "As in most programming languages, Java handles flow of control with branching and looping statements. Java branching and looping statements are the same as in the C and C++ languages and are very similar to those in other programming languages."
    },
    {
        id: 2,
        title: "Defining Classes I",
        intro: "Classes are the single most important language feature that facilitates object-oriented programming (OOP), the dominant programming methodology in use today. You have already been using predefined classes."
    },
    {
        id: 3,
        title: "Defining Classes II",
        intro: "This chapter is a continuation of Chapter 4. It covers the rest of the core material ondefining classes.We start by discussing static methods and static variables, which aremethods and variables that belong to the class as a whole and not to particular objects."
    },
    {
        id: 4,
        title: "Arrays",
        intro: "An array is a data structure used to process a collection of data that is all of the sametype, such as a list of numbers of type double or a list of strings.In this chapter, weintroduce you to the basics of defining and using arrays in Java."
    },
    {
        id: 5,
        title: "Inheritance",
        intro: "Object-oriented programming (OOP) is a popular and powerful programmingphilosophy.One of the main techniques of OOP is known as inheritance.Inheritancemeans that a very general form of a class can be defined and compiled.Later, morespecialized versions of that class may be defined by starting with the already defined classand adding more specialized instance variables and methods."
    },
    {
        id: 7,
        title: "Exception Handling",
        intro: "One way to divide the task of designing and coding a method is to code two main cases separately: the case where nothing unusual happens and the case where exceptional things happen.Once you have the program working for the case where things always go smoothly, you can then code the second case where notable things can happen.In Java, there is a way to mirror this approach in your code.Write your code more or less as if nothing very unusual happens.After that, use the Java exception handling facilities to add code for those unusual cases."
    },
    {
        id: 8,
        title: "Polymorphism and Abstract Classes",
        intro: "The three main programming mechanisms that constitute object-oriented programming(OOP) are encapsulation, inheritance, andpolymorphism.We have already covered thefirst two.In this chapter, we discuss polymorphism.Polymorphism refers to the abilityto associate many meanings to one method name by means of a special mechanismknown as late binding or dynamic binding."
    },
    {
        id: 9,
        title: "File System Input and Output",
        intro: "In this chapter, we explain how you can write your programs to take input from a file and send output to a file.This chapter covers the most common ways of doing file I/ O in Java.However, it is not an exhaustive study of Java I / O classes.The Java I / O class library contains bewilderingly many classes, and an exhaustive treatment of all of them would be a book by itself."
    },
    {
        id: 10,
        title: "Recursion",
        intro: "A method definition that includes a call to itself is said to be recursive. Like most modern programming languages, Java allows methods to be recursive; if used with a little care, this can be a useful programming technique.In this chapter, we introduce the basic techniques needed for defining successful recursive methods.There is nothing in this chapter that is truly unique to Java.If you are already familiar with recursion, you can safely skip this chapter.No new Java elements are introduced here."
    },
    {
        id: 11,
        title: "Interfaces and Inner Classes",
        intro: "A Java interface specifies a set of methods that any class that implements the interface must have.An interface is itself a type, which allows you to define methods with parameters of an interface type and then have the code apply to all classes that implement the interface.One way to view an interface is as an extreme form of an abstract class.However, as you will see, an interface allows you to do more than an abstract class allows you to do.Interfaces are Java’s way of approximating multiple inheritance.You cannot have multiple base classes in Java, but interfaces allow you to approximate the power of multiple base classes."
    },
    {
        id: 12,
        title: "Generics and the ArrayList Class",
        intro: "Beginning with version 5.0, Java allows class and method definitions that include parameters for types.Such definitions are called generics.Generic programming with a type parameter allows you to write code that applies to any class.For example, youcan define a class for a list of items of type T, where T is a type parameter."
    },
    {
        id: 13,
        title: "Linked Data Structures",
        intro: "A linked data structure consists of capsules of data, known as nodes, which are connected via what are known as links.These links can be viewed as arrows and thought of as one- way passages from one node to another.The simplest kind of linked data structure consists of a single chain of nodes, each connected to the next by a link; this is known as a linked list.A sample linked list can be depicted as shown in Display 15.1.In Display 15.1,the nodes are represented by boxes that can each hold two kinds of data, a string and an integer, as in a shopping list.The links are depicted as arrows, which reflect the fact that your code must traverse the linked list in one direction without backing up. So there is a first node, a second node, and so on up to the last node.The first node is called the head node."
    },
    {
        id: 14,
        title: "Collections, Maps, and Iterators",
        intro: "A collection is a data structure for holding elements. For example, an ArrayList<T> object is a collection.Java has a repertoire of interfaces and classes that give a uniform treatment of collections.An iterator is an object that cycles through all the elements in a collection.In this chapter, we discuss collections and iterators."
    },
    {
        id: 15,
        title: "Multithreading",
        intro: "A thread is a separate computation process. In Java, you can have programs with multiple threads.You can think of the threads as computations that execute in parallel.On a computer with enough processors, the threads might indeed execute in parallel.However, in most normal computing situations, the threads do not really do this.Instead, the computer switches resources between threads so that each thread in turn does a little bit of computing.To the user, this looks like the processes are executing in parallel."
    },
    {
        id: 16,
        title: "Networking with Stream Sockets",
        intro: "When computers want to communicate with each other over a network, each computer must speak the same “language.” In other words, the computers need to communicate using the same protocol.One of the most common protocols today is TCP, or the Transmission Control Protocol.For example, the HTTP protocol used to transmit Web pages is based on TCP."
    },
    {
        id: 17,
        title: "Java and Database Connections",
        intro: "As an example of how Java has been extended to interact with other software systems,in this section, we will briefly describe how Java interacts with database management systems.This introduction is just enough for you to construct and manipulate databases at a fairly basic level.The intent of this section is to introduce some common database manipulations to let you know what kinds of things are available to you for database programming in Java."
    },
    {
        id: 2,
        title: "Collections",
        intro: "A Java collection is a class that holds objects. This concept is made precise by the Collection<T> interface.A Java collection is any class that implements the Collection<T> interface."
    },
]
const listEl = document.getElementById('list');
const inputField = document.getElementById('input-field');
console.log(data);

inputField.addEventListener('keyup', function (el) {

    const searchValue = el.target.value.toLowerCase();

    const responseData = data.filter(element => {
        const { title, intro, id } = element
        return title.toLowerCase().includes(searchValue) ||
            intro.toLowerCase().includes(searchValue)

    })
    display(responseData)
})

function display(data) {
    let template = ''
    let responseData = data.map(element => {
        const { title, intro, id } = element
        return `
                <li>
                <div class="title">
                    <h2>${title}</h2>
                </div>
                <div class="details">
                    <p>${intro.slice(0, 400)} <span>${checkLength(intro)}</span></p>
                </div>
            </li>
        
        `
    }).join('');

    listEl.innerHTML = responseData;
}

function checkLength(sentence) {
    if (sentence.length > 400)
        return `<a href="details.html" >read more...</a>`
    return ""
}

display(data)