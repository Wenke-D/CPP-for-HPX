# Introduction

The present tutorial is for reducing the difficulty of HPX at C++ side.
We found that most problems HPX beginners have is because of they have problems with C++. People who is good at C++, have no problem for HPX, they just come in and begin to work on HPX.

In this tutorial, we will talk about C++ techniques used in HPX including language features and libraries.

## Prerequisite
- For readers that have a crouse introduction to (traditional) C++.

- For readers that have programing experience in other languages, particularly generic programing in Java (Hint: you will see the huge difference between the two languages).

Of course, you have interests in learning HPX. Otherwise, we recommend you read [this](https://github.com/changkun/modern-cpp-tutorial).

## How this lecture goes

Most C++ lectures teach C++ by taking C as a basis and talking about it in the whole semester. In the end of the semester, they say "hey by the way there's something extra you can put in your C code, like structures, classes and all the other stuffs supported by C++. So almost nobody look C++ as an independent language.

C++ has to be taught in the other way around. For examples, we believe pointers can be introduced in the last lecture. Because there is no need for pointers, whenever you want to write a pointer, you are doing something wrong. If you look at the source code of HPX, you will find little pointers. Besides, whenever you want to use a pointer, please please please wrap it into a type, we will talk about how to do that latter.

You might wonder why we are so adamant about pointers, one of the reason is that 99% of all security vulnerabilities and industry are caused by that people thinking they're more intelligent than they are and screwed up the pointers they used for their code. Almost all problem in C code and C++ code are caused by people not dealing with pointers properly. So, just get rid of pointers and you get rid of 99% of all possible bugs you might create in your life.

## Why HPX chooses C++
One would say that C++ is the most complex language around and why we choose it, how about the languages that might be easier to use. Here are reasons:

1. It allow us to go to binary level in machine, we can manipulate single bit with it. This feature is important, because sometime we really need to get as close as possible to hardwares. This is something that people can't do almost with any other languages. Of course, we have C and Rust but they are very similar to C++, but most of the others languages have no direct means to directly talk to hardware.

2. C++ has the ability to build very high level abstraction without paying a runtime performance penalty.
So you can build abstractions in C++ which doesn't consume any runtime performance.

3. C++ is the only main-stream languages that has these abilities. The only language we know that has the same abilities called P which was designed to overcome some of obstacles that is of interest of C++. It has it own community and people do work with it, but it's by no means comparable in terms of market share to what C++ has.

Of course, there is no free lunch. The high abstraction without runtime performance penalty comes with a cost: the long compile time to optimize away the abstraction layers that we built. But this cost is acceptable, because we compile it once and run the application much more times, specially when you reached a certain stability development stage.


## Organization
The content of this comes from 2 parts, each lecture is merely a text recording of the [series](https://www.youtube.com/watch?v=asGZTCR53KY&list=PL7vEgTL3FalY2eBxud1wsfz8OKvE9sd_z) of C++ for HPX lectures given by Professor [Hartmut Kaiser](https://www.lsu.edu/eng/cse/people/faculty/kaiser.php) at [LSU](https://www.lsu.edu/index.php). The content of the series is excellent but the quality of the video is not that satisfying. Hence the present tutorial is an reorganization of the series.

Another part of this tutorial is for readers having knowledge of other programing languages. For some features of C++ or HPX, we will explain it by comparing it with other language, such as Java, C, Ocaml and Javascript, as an complement.