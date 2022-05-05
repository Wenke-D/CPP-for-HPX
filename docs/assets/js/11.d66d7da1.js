(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{428:function(t,e,a){"use strict";a.r(e);var n=a(62),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"standard-template-library-stl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-template-library-stl"}},[t._v("#")]),t._v(" Standard Template Library (STL)")]),t._v(" "),a("p",[t._v("A program = data structure + algorithm")]),t._v(" "),a("p",[t._v("Programing is all about finding the appropriate data structure to model the reality in the context of your code and running through loops.")]),t._v(" "),a("p",[t._v("Once having your data structure and your own algorithm which dealing with the data structure, you could have your executive program.")]),t._v(" "),a("p",[t._v("STL consist of 3 parts: Algorithms, Containers and Iterators. Containers are the predefined and implemented data structures, Algorithms are the code we can deal with them. Regarding to Iterators, they are a little complex, we will explain it in the following section.")]),t._v(" "),a("h2",{attrs:{id:"generic-programing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-programing"}},[t._v("#")]),t._v(" Generic programing")]),t._v(" "),a("p",[t._v("Standard Template Library (STL) is a library, not a language feature. STL is a generic library for generic programming.")]),t._v(" "),a("p",[t._v("Generic programing allow us to write code independent of data type, specially to write algorithms while knowing nothing about the data structure we are working on. So the algorithm we wrote is usable with any data type that user might supply.\nThis gives us a flexible way of thinking about algorithm.\nFor example, when coping things we don't have to think about what type of data that is dealing with.")]),t._v(" "),a("p",[t._v("This has a nice side effect, whenever the existing algorithms don't have what you need, you can implement the algorithm using the predefined containers. Vice versa, if the container don't support what you actually want, you can use standard algorithms with your own container.")]),t._v(" "),a("p",[t._v("In the STL, Algorithms and Containers are nicely separated by generic programing. However, Containers and Algorithms can't completely independent from each other. In the end, Algorithms have to somehow be connected to Containers in a way. A algorithm has to be able to refer to the data stored in the source container. This connection is achieved by Iterators.")]),t._v(" "),a("p",[t._v("Iterators, in general, is a data type that is used to refer an item in a container.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For readers with C background, Iterator is a generalized pointer in some sense. Pointer is a special iterator, you can use pointers correctly with standard algorithms. For example, you can pass the beginning of an array and its end to a sort algorithm.")])]),t._v(" "),a("p",[t._v("Finally, to have these 3 things work, all containers have to expose certain functionalities which are uniform across all containers. For instance, a container should be able to give you a iterator to its first element and one to its last element, so a copy algorithm could just spend the range of all elements. Usually, a container should following functionalities:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Telling how many elements they currently store, they are empty or not.")])]),t._v(" "),a("li",[a("p",[t._v("Adding new element to it")])]),t._v(" "),a("li",[a("p",[t._v("Removing element to it")])])]),t._v(" "),a("p",[t._v("All the containers expose the same functions with the same names.")]),t._v(" "),a("p",[t._v("In the other side, all algorithms are written in terms of iterates and what algorithms usually expect to work on is a range. The range is two iterators, one pointing to the first element and one pointing to the location that is right after the last one.")]),t._v(" "),a("h2",{attrs:{id:"iterators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterators"}},[t._v("#")]),t._v(" Iterators")]),t._v(" "),a("h3",{attrs:{id:"range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#range"}},[t._v("#")]),t._v(" Range")]),t._v(" "),a("p",[t._v("In mathematics,")]),t._v(" "),a("ul",[a("li",[t._v("For an open range [b, e), its size equals to (e - b), an empty open range is [b, b).")]),t._v(" "),a("li",[t._v("For an close range [b, e], the size equals to (e - b + 1) and there is no way to represent an empty close range.")])]),t._v(" "),a("p",[t._v("Iterator is close range, so an end iterator always points to an imaginary place right after the last element of the referred container. Thus, we can only use end iterator for comparison, because it doesn't refer to anything real element.")]),t._v(" "),a("h3",{attrs:{id:"iterator-category-hierarchy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterator-category-hierarchy"}},[t._v("#")]),t._v(" Iterator category hierarchy")]),t._v(" "),a("p",[t._v("To have make iterators usable and let algorithms to deal with containers, iterators have to expose some functionalities that algorithm can rely on.")]),t._v(" "),a("p",[t._v("a) Iterators have different catagories")]),t._v(" "),a("p",[t._v("b) Different catagories have different properties and capabilities")]),t._v(" "),a("p",[t._v("Some algorithms only require weak iterators, others should require more strict properties from iterators, for example, for a copy algo, it copies current element then go to next one, so and it only needs retrieving element from the source, writing element to its destination and go to next one. On contrary, a sort algo need more thing, it has to be able to compare 2 arbitrary elements,so it need to be able to random access")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For Java developers, Java's IO classes have an elegant hierarchy too, you have a base class, and anything else are based on the base class in terms of conception and implementation. When doing generic programming, if you want to impose some restriction to the generic type, you can do it by setting its parent, that is extending a certain class or implementing a certain interface.")]),t._v(" "),a("p",[t._v("However, the hierarchy of iterator in C++ is only conceptional, we don't have a base abstract iterator class which provides us implementation and to which we can extend. When we define a generic function, we implicitly impose restrictions on the generic types by using the operations or calling its functions. When we calling the function, the compiler will check whether the concrete type support the operations that are need by the function. Hence, the restriction is imposed by deck type.")]),t._v(" "),a("p",[t._v("We will discuss generic programming in detail in the next chapter.")])]),t._v(" "),a("p",[t._v("For 2 iterators "),a("code",[t._v("i")]),t._v(" and "),a("code",[t._v("j")]),t._v(", each type of iterator should supports the following operations.")]),t._v(" "),a("h4",{attrs:{id:"input-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-iterator"}},[t._v("#")]),t._v(" Input iterator:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Comparison "),a("code",[t._v("i == j")]),t._v(", where "),a("code",[t._v("j")]),t._v(" don't have to be input iterator.\nFor example, you can use it to compare to the end iterator to see if you have arrived the end of a container.")])]),t._v(" "),a("li",[a("p",[t._v("Right deference "),a("code",[t._v("lval = *i")]),t._v(", its semantic is the same as pointer, but only allows reading element.")])]),t._v(" "),a("li",[a("p",[t._v("Increment "),a("code",[t._v("++i")]),t._v(", moving the iterator to the next element.")])])]),t._v(" "),a("p",[t._v("The input iterator is a one-way stream, we can't go back on it. For instance, keyboard can be abstracted as an input iterator, where we can't access to the input data in the past, and we can only read data from keyboard but can't write value to it.")]),t._v(" "),a("h4",{attrs:{id:"output-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-iterator"}},[t._v("#")]),t._v(" Output iterator:")]),t._v(" "),a("ol",[a("li",[t._v("Comparison, same as the input iterator.")]),t._v(" "),a("li",[t._v("Left deference "),a("code",[t._v("*i = rval")]),t._v(", it can only be put at the left side of an assignment for writing element to the container that the iterator refers to.")]),t._v(" "),a("li",[t._v("Increment "),a("code",[t._v("++i")]),t._v(", moving the iterator to the next element.")])]),t._v(" "),a("p",[t._v("Output iterator is also an one-way stream. An example of the output iterator would be standard output, we can only write data to screen but can't read from it.")]),t._v(" "),a("h4",{attrs:{id:"forward-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-iterator"}},[t._v("#")]),t._v(" Forward iterator")]),t._v(" "),a("p",[t._v("Combining input iterator and output iterator, we have forward iterator.\nEverything that input iterator and output iterator have.")]),t._v(" "),a("ol",[a("li",[t._v("Comparison "),a("code",[t._v("i == j")]),t._v(", same as before.")]),t._v(" "),a("li",[t._v("Deference "),a("code",[t._v("*i")]),t._v(", right and left side of "),a("code",[t._v("=")]),t._v(" are both fine.")]),t._v(" "),a("li",[t._v("Increment "),a("code",[t._v("i++")]),t._v(", as usual moving the iterator to the next element.")]),t._v(" "),a("li",[t._v("Time travel "),a("code",[t._v("j = i; ++i; ++j")]),t._v(", we can copy a forward iterator then use it later.")])]),t._v(" "),a("h4",{attrs:{id:"bidirectional-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bidirectional-iterator"}},[t._v("#")]),t._v(" Bidirectional iterator")]),t._v(" "),a("p",[t._v("Besides abilities mentioned before, bidirectional iterators can do decrement "),a("code",[t._v("--j")]),t._v(" / "),a("code",[t._v("j--")]),t._v(". This means we can go 2 directions on the iterator.")]),t._v(" "),a("h4",{attrs:{id:"random-access-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-access-iterator"}},[t._v("#")]),t._v(" Random access iterator")]),t._v(" "),a("p",[t._v("Plus the previous abilities, random access iterator can jump: "),a("code",[t._v("i += N")]),t._v(" or "),a("code",[t._v("i -= N")]),t._v(", it allows us to skip elements by arbitrary number. Since we jump, we can access element by offset "),a("code",[t._v("i[n]")]),t._v(' where n is an arbitrary number.\nOne would say "hey, since all the previous iterators support increment, we can repeat it N times to have the same effect as '),a("code",[t._v("i += N")]),t._v('". This is true, but C++ standard has an additional restriction on random access iterator, the complexity. The time complexity of jump operation should be O(1), independent from the size of the step. So if we repeat increment, its time complexity will be O(N).')]),t._v(" "),a("p",[t._v("We can see a plain pointer in C as a C++ random access iterator which doesn't pointer to any specific container but over the memory space.")]),t._v(" "),a("h3",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("Each stronger iterator has the properties of weaker iterators. For examples, we can use time travel on a random access iterator.")]),t._v(" "),a("p",[t._v("A more serious definition of iterator category can be found "),a("a",{attrs:{href:"https://www.cplusplus.com/reference/iterator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#containers"}},[t._v("#")]),t._v(" Containers")]),t._v(" "),a("p",[t._v("In this section, for each iterator category, we will discuss some containers in the STL whose iterator belongs to that category.")]),t._v(" "),a("p",[t._v("First, there is no container whose iterator is just an input iterator or output iterator.")]),t._v(" "),a("h3",{attrs:{id:"linked-list-std-forward-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linked-list-std-forward-list"}},[t._v("#")]),t._v(" Linked list & "),a("code",[t._v("std::forward_list")])]),t._v(" "),a("p",[t._v("The iterator of the linked list is a forward iterator. In the linked list, each element knows where is the next one, so all elements is linked in one direction. When we have a iterator to the first element, all we can do is to go to the next element. We can't go back, there is no way to know where is the previous element. We can also copy a iterator, make it point to the same element, then use it later. Increment of the iterator means jump to the next element by following the chain between elements.")]),t._v(" "),a("p",[t._v("Usually, the chain between element is built by pointers, each element have the address to the next one. The implementation of the linked list in the STL called "),a("code",[t._v("std::forward_list")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"bidirectional-list-std-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bidirectional-list-std-list"}},[t._v("#")]),t._v(" Bidirectional list & "),a("code",[t._v("std::list")])]),t._v(" "),a("p",[t._v("By adding a reverse chain between elements of linked list, we have the bidirectional list. In bidirectional list, we also know the previous element of the current one, as result, we can decrease the iterator to access the previous element. The implementation of such a data structure in the STL is "),a("code",[t._v("std::list")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree"}},[t._v("#")]),t._v(" Tree")]),t._v(" "),a("p",[t._v("Another surprising data structure whose iterator is bidirectional iterator is tree. Remember when we traverse a tree, we can go to its children from one node, and get back to the node later. So the iterator of the tree is necessarily bidirectional iterator.")]),t._v(" "),a("p",[t._v("Tree based containers in the STL are "),a("code",[t._v("std::map")]),t._v(" and "),a("code",[t._v("std::set")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"array-vector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-vector"}},[t._v("#")]),t._v(" Array & Vector")]),t._v(" "),a("p",[t._v("A vector is an array with dynamic length. Elements of array and vector span in the memory space continuously.")]),t._v(" "),a("p",[t._v("In the STL, vectors are implemented as "),a("code",[t._v("std::vector")]),t._v(" and arrays are implemented as "),a("code",[t._v("std::array")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"conclusion-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-2"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("We can see, even containers and algorithm is relatively independent, but essentially, iterator know about the internals of containers. Almost every algorithms use iterators to refer to the next element, iterator has to know the detail of the container so that it could perform the right operation depending on the data structure. So the iterators are very specific to the containers, and that's why iterator category are very tightly coupled to the container.")]),t._v(" "),a("h2",{attrs:{id:"together-with-algorithms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#together-with-algorithms"}},[t._v("#")]),t._v(" Together with Algorithms")]),t._v(" "),a("p",[t._v("In this section, let's see how to use algorithm on containers with iterators.")]),t._v(" "),a("p",[t._v("Here we define a template function "),a("code",[t._v("my_copy")])]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("In")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Out")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("In begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" In end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Out out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("begin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("out "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        out"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        begin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("This template function is the same as "),a("code",[t._v("std::copy")]),t._v(", it's a simple algorithm which copies all elements of a container to another. As said before, algorithms don't interact directly with containers, it reads and write elements by iterators. The copy algorithm needs 2 iterators, a source iterator which provides elements and indicates the copy range, begin and end, and a destination iterator to which we can write elements.")]),t._v(" "),a("p",[t._v("In the definition of the function, 3 operations are applied on the 2 parameters "),a("code",[t._v("begin")]),t._v(" and "),a("code",[t._v("end")]),t._v(" :")]),t._v(" "),a("ol",[a("li",[t._v("Comparison in line 3")]),t._v(" "),a("li",[t._v("Right deference in line 4")]),t._v(" "),a("li",[t._v("Increment in line 6")])]),t._v(" "),a("p",[t._v("As "),a("code",[t._v("begin")]),t._v(" and "),a("code",[t._v("end")]),t._v(" are both of the generic type "),a("code",[t._v("In")]),t._v(", this means, as long as the concrete type we use supports these operations when we call the function , it will work.\nSame for "),a("code",[t._v("Out")]),t._v(", we use "),a("strong",[t._v("left deference")]),t._v(" (line 4), "),a("strong",[t._v("increment")]),t._v(" (line 5) on the parameter "),a("code",[t._v("out")]),t._v(". As it's of generic type "),a("code",[t._v("Out")]),t._v(", when we call the function with a type supporting these 2 operations, everything will be fine. Actually, we are demanding "),a("code",[t._v("In")]),t._v(" should be an input iterator and "),a("code",[t._v("Out")]),t._v(" should be an output iterator by deck typing.")]),t._v(" "),a("p",[t._v("Another constrain we add is that the second argument has to be the same type as the first one.")]),t._v(" "),a("p",[t._v("Here is an example of how to use the template function.")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("v1.begin()")]),t._v(" returns the iterator pointing to the first element of "),a("code",[t._v("v1")]),t._v(", "),a("code",[t._v("v1.end()")]),t._v(" gives us the iterator pointing to the end of the "),a("code",[t._v("v1")]),t._v(", a virtual place right after the last element. We use these 2 iterators to specify the range to be copied.\n"),a("code",[t._v("v2.begin()")]),t._v(" points to the where we want to put the data, the first element of "),a("code",[t._v("v2")]),t._v(".\nWhat compiler will do for us. It looks the call of "),a("code",[t._v("my_copy")]),t._v(" and see we defined a template for "),a("code",[t._v("my_copy")]),t._v(". It doesn't know what type "),a("code",[t._v("In")]),t._v(" and "),a("code",[t._v("Out")]),t._v(" are in the template, maybe a pointer or an int iterator or whatever. But the compiler knows the types of the passed arguments, they are iterators exposed by vectors. So it replaces the generic type "),a("code",[t._v("In")]),t._v(" with the type of the iterator of vector and the same for "),a("code",[t._v("Out")]),t._v(", the type of "),a("code",[t._v("v2.begin()")]),t._v(". In another word, the compiler introduces those types for us. We could think of this like a macro replacement on the generic types.\nThe compiler then generates the proper function based on concrete type at moment of calling.")]),t._v(" "),a("p",[t._v("These code works, because everything fits, the constrains imposed by the operations and by the parameters.\nAfter the execution of the code, "),a("code",[t._v("v2")]),t._v(" will contain 1 2 3 4 5 6.")]),t._v(" "),a("p",[t._v("Here is another example which doesn't work.")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wrong code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("This doesn't work because "),a("code",[t._v("int")]),t._v(" doesn't support deference. The compiler will replace "),a("code",[t._v("In")]),t._v(" by "),a("code",[t._v("int")]),t._v(" and Out by "),a("code",[t._v("int")]),t._v(" too.\nAlthough we can perform increment and comparison on the type "),a("code",[t._v("int")]),t._v(", "),a("code",[t._v("int")]),t._v(" doesn't support deference.")]),t._v(" "),a("p",[t._v("another example with list with vector")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("As said before, we can consider pointer as special iterator, here's the example of using it with "),a("code",[t._v("my_copy")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" array1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstd"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[t._v("#")]),t._v(" Discussion")]),t._v(" "),a("p",[t._v("A template function actually is not a function, it's a recipe for making a function. In our case, essentially it tells the compiler that we are not defining a concrete function which does copy operation on a specific type, but we are defining how a copy function should look like whenever we use it with a specific type. And let compiler generate the function for us and figure out what those concrete types are in the context of the call.")]),t._v(" "),a("p",[t._v("That's why one would say generic programing is template programing. This means writing code which is oblivious of concrete data type. Whenever we use that code, the compiler will instantiate the code for the particular data type. Meanwhile, this doesn't have overhead for runtime performance, everything happens in compile time.")]),t._v(" "),a("p",[t._v("Be careful about inserting and deleting element in a container, depending on the data structure of the container, the existing iterator may become invalid. For example for a list, if we remove a element from it, all existing iterators will be stable except the one pointing to the removed iterator. Generally, we shouldn't rely on iterators once we start adding and removing element or event reordering things.")]),t._v(" "),a("h2",{attrs:{id:"back-to-hpx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-hpx"}},[t._v("#")]),t._v(" Back to HPX")]),t._v(" "),a("p",[t._v("HPX use a lot of template programing.")]),t._v(" "),a("p",[t._v("Template is also the reason why people think of C++ template programing is hard. Whenever we do something wrong, we will have megabyte of error messages from the compiler. The reason is that if we use a template function A which calls an template function B which calls a template function C and so on iteratively, and the lowermost template function runs into an error because the type passed in doesn't support the operation requested. The compiler will tell you \" Hey, I found the error there, by the way it's the context of this, and this is in context of that thing, and that is in the context of another thing \" repeatably.\nThis give us a very long error messages. And It can only tell us something went wrong but can't tell us what went wrong.Because the initial call is far away from the error spot. Future version of C++ (C++ 20) will improve that by supporting a feature called "),a("strong",[t._v("concept")]),t._v(", it can restrain the data type of the template. So in our case, we can explicitly demand the first argument has to be an input iterator, and it allows the compiler to give us the error message in the top level, this will make error message short.")]),t._v(" "),a("p",[t._v("Don't be afraid when you start using HPX when you see these error message. It's fairly easy to navigate in these error messages, the trick is to scan from the top to bottom until you find the word "),a("strong",[t._v("error")]),t._v(", then you go back until you find the first line refers to your own code, that's where the error code is. Every thing below is what HPX do, you don't have to care about them.")])])}),[],!1,null,null,null);e.default=s.exports}}]);