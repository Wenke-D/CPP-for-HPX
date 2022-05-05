# Standard Template Library (STL)

A program = data structure + algorithm

Programing is all about finding the appropriate data structure to model the reality in the context of your code and running through loops.

Once having your data structure and your own algorithm which dealing with the data structure, you could have your executive program.

STL consist of 3 parts: Algorithms, Containers and Iterators. Containers are the predefined and implemented data structures, Algorithms are the code we can deal with them. Regarding to Iterators, they are a little complex, we will explain it in the following section.

## Generic programing
Standard Template Library (STL) is a library, not a language feature. STL is a generic library for generic programming.

Generic programing allow us to write code independent of data type, specially to write algorithms while knowing nothing about the data structure we are working on. So the algorithm we wrote is usable with any data type that user might supply.
This gives us a flexible way of thinking about algorithm.
For example, when coping things we don't have to think about what type of data that is dealing with.

This has a nice side effect, whenever the existing algorithms don't have what you need, you can implement the algorithm using the predefined containers. Vice versa, if the container don't support what you actually want, you can use standard algorithms with your own container.

In the STL, Algorithms and Containers are nicely separated by generic programing. However, Containers and Algorithms can't completely independent from each other. In the end, Algorithms have to somehow be connected to Containers in a way. A algorithm has to be able to refer to the data stored in the source container. This connection is achieved by Iterators.

Iterators, in general, is a data type that is used to refer an item in a container.

::: tip
For readers with C background, Iterator is a generalized pointer in some sense. Pointer is a special iterator, you can use pointers correctly with standard algorithms. For example, you can pass the beginning of an array and its end to a sort algorithm.
:::

Finally, to have these 3 things work, all containers have to expose certain functionalities which are uniform across all containers. For instance, a container should be able to give you a iterator to its first element and one to its last element, so a copy algorithm could just spend the range of all elements. Usually, a container should following functionalities:
- Telling how many elements they currently store, they are empty or not.

- Adding new element to it

- Removing element to it

All the containers expose the same functions with the same names.

In the other side, all algorithms are written in terms of iterates and what algorithms usually expect to work on is a range. The range is two iterators, one pointing to the first element and one pointing to the location that is right after the last one.


## Iterators

### Range

In mathematics,
- For an open range [b, e), its size equals to (e - b), an empty open range is [b, b).
- For an close range [b, e], the size equals to (e - b + 1) and there is no way to represent an empty close range.

Iterator is close range, so an end iterator always points to an imaginary place right after the last element of the referred container. Thus, we can only use end iterator for comparison, because it doesn't refer to anything real element.

### Iterator category hierarchy

To have make iterators usable and let algorithms to deal with containers, iterators have to expose some functionalities that algorithm can rely on.

a) Iterators have different catagories

b) Different catagories have different properties and capabilities

Some algorithms only require weak iterators, others should require more strict properties from iterators, for example, for a copy algo, it copies current element then go to next one, so and it only needs retrieving element from the source, writing element to its destination and go to next one. On contrary, a sort algo need more thing, it has to be able to compare 2 arbitrary elements,so it need to be able to random access

::: tip
For Java developers, Java's IO classes have an elegant hierarchy too, you have a base class, and anything else are based on the base class in terms of conception and implementation. When doing generic programming, if you want to impose some restriction to the generic type, you can do it by setting its parent, that is extending a certain class or implementing a certain interface.

However, the hierarchy of iterator in C++ is only conceptional, we don't have a base abstract iterator class which provides us implementation and to which we can extend. When we define a generic function, we implicitly impose restrictions on the generic types by using the operations or calling its functions. When we calling the function, the compiler will check whether the concrete type support the operations that are need by the function. Hence, the restriction is imposed by deck type.

We will discuss generic programming in detail in the next chapter.
:::

For 2 iterators `i` and `j`, each type of iterator should supports the following operations.
#### Input iterator:

1. Comparison ` i == j `, where `j` don't have to be input iterator.
For example, you can use it to compare to the end iterator to see if you have arrived the end of a container.

1. Right deference ` lval = *i `, its semantic is the same as pointer, but only allows reading element.

1. Increment ` ++i `, moving the iterator to the next element.

The input iterator is a one-way stream, we can't go back on it. For instance, keyboard can be abstracted as an input iterator, where we can't access to the input data in the past, and we can only read data from keyboard but can't write value to it.


#### Output iterator:

1. Comparison, same as the input iterator.
1. Left deference `*i = rval`, it can only be put at the left side of an assignment for writing element to the container that the iterator refers to.
1. Increment ` ++i `, moving the iterator to the next element.

Output iterator is also an one-way stream. An example of the output iterator would be standard output, we can only write data to screen but can't read from it.


#### Forward iterator
Combining input iterator and output iterator, we have forward iterator.
Everything that input iterator and output iterator have.

1. Comparison ` i == j `, same as before.
1. Deference ` *i `, right and left side of `=` are both fine.
1. Increment ` i++ `, as usual moving the iterator to the next element. 
1. Time travel ` j = i; ++i; ++j `, we can copy a forward iterator then use it later.

#### Bidirectional iterator
Besides abilities mentioned before, bidirectional iterators can do decrement ` --j ` / `j--`. This means we can go 2 directions on the iterator.


#### Random access iterator
Plus the previous abilities, random access iterator can jump: `i += N` or `i -= N`, it allows us to skip elements by arbitrary number. Since we jump, we can access element by offset `i[n]` where n is an arbitrary number.
One would say "hey, since all the previous iterators support increment, we can repeat it N times to have the same effect as `i += N`". This is true, but C++ standard has an additional restriction on random access iterator, the complexity. The time complexity of jump operation should be O(1), independent from the size of the step. So if we repeat increment, its time complexity will be O(N).

We can see a plain pointer in C as a C++ random access iterator which doesn't pointer to any specific container but over the memory space.

### Conclusion
Each stronger iterator has the properties of weaker iterators. For examples, we can use time travel on a random access iterator.

A more serious definition of iterator category can be found [here](https://www.cplusplus.com/reference/iterator/)



## Containers
In this section, for each iterator category, we will discuss some containers in the STL whose iterator belongs to that category.

First, there is no container whose iterator is just an input iterator or output iterator.

### Linked list & `std::forward_list`
The iterator of the linked list is a forward iterator. In the linked list, each element knows where is the next one, so all elements is linked in one direction. When we have a iterator to the first element, all we can do is to go to the next element. We can't go back, there is no way to know where is the previous element. We can also copy a iterator, make it point to the same element, then use it later. Increment of the iterator means jump to the next element by following the chain between elements.

Usually, the chain between element is built by pointers, each element have the address to the next one. The implementation of the linked list in the STL called `std::forward_list`.


### Bidirectional list & `std::list`
By adding a reverse chain between elements of linked list, we have the bidirectional list. In bidirectional list, we also know the previous element of the current one, as result, we can decrease the iterator to access the previous element. The implementation of such a data structure in the STL is `std::list`.

### Tree
Another surprising data structure whose iterator is bidirectional iterator is tree. Remember when we traverse a tree, we can go to its children from one node, and get back to the node later. So the iterator of the tree is necessarily bidirectional iterator.

Tree based containers in the STL are `std::map` and `std::set`.

### Array & Vector
A vector is an array with dynamic length. Elements of array and vector span in the memory space continuously.

In the STL, vectors are implemented as `std::vector` and arrays are implemented as `std::array`.


### Conclusion
We can see, even containers and algorithm is relatively independent, but essentially, iterator know about the internals of containers. Almost every algorithms use iterators to refer to the next element, iterator has to know the detail of the container so that it could perform the right operation depending on the data structure. So the iterators are very specific to the containers, and that's why iterator category are very tightly coupled to the container.

## Together with Algorithms

In this section, let's see how to use algorithm on containers with iterators.

Here we define a template function `my_copy`

<<< @/src/guide/Chapter01/code.cpp#my_copy

This template function is the same as `std::copy`, it's a simple algorithm which copies all elements of a container to another. As said before, algorithms don't interact directly with containers, it reads and write elements by iterators. The copy algorithm needs 2 iterators, a source iterator which provides elements and indicates the copy range, begin and end, and a destination iterator to which we can write elements.

In the definition of the function, 3 operations are applied on the 2 parameters `begin` and `end` :
1. Comparison in line 3
1. Right deference in line 4
1. Increment in line 6

As `begin` and `end` are both of the generic type `In`, this means, as long as the concrete type we use supports these operations when we call the function , it will work.
Same for `Out`, we use **left deference** (line 4), **increment** (line 5) on the parameter `out`. As it's of generic type `Out`, when we call the function with a type supporting these 2 operations, everything will be fine. Actually, we are demanding `In` should be an input iterator and `Out` should be an output iterator by deck typing.

Another constrain we add is that the second argument has to be the same type as the first one.


Here is an example of how to use the template function.

<<< @/src/guide/Chapter01/code.cpp#vtv


`v1.begin()` returns the iterator pointing to the first element of `v1`, `v1.end()` gives us the iterator pointing to the end of the `v1`, a virtual place right after the last element. We use these 2 iterators to specify the range to be copied.
`v2.begin()` points to the where we want to put the data, the first element of `v2`.
What compiler will do for us. It looks the call of `my_copy` and see we defined a template for `my_copy`. It doesn't know what type `In` and `Out` are in the template, maybe a pointer or an int iterator or whatever. But the compiler knows the types of the passed arguments, they are iterators exposed by vectors. So it replaces the generic type `In` with the type of the iterator of vector and the same for `Out`, the type of `v2.begin()`. In another word, the compiler introduces those types for us. We could think of this like a macro replacement on the generic types.
The compiler then generates the proper function based on concrete type at moment of calling.

These code works, because everything fits, the constrains imposed by the operations and by the parameters.
After the execution of the code, `v2` will contain 1 2 3 4 5 6.


Here is another example which doesn't work.

```cpp
// wrong code
int i = 0, i2 = 4, j = 2;
my_copy(i, i2, j);
```

This doesn't work because `int` doesn't support deference. The compiler will replace `In` by `int` and Out by `int` too.
Although we can perform increment and comparison on the type `int`, `int` doesn't support deference.

another example with list with vector

<<< @/src/guide/Chapter01/code.cpp#ltv


As said before, we can consider pointer as special iterator, here's the example of using it with `my_copy`:

<<< @/src/guide/Chapter01/code.cpp#ptv

### Discussion
A template function actually is not a function, it's a recipe for making a function. In our case, essentially it tells the compiler that we are not defining a concrete function which does copy operation on a specific type, but we are defining how a copy function should look like whenever we use it with a specific type. And let compiler generate the function for us and figure out what those concrete types are in the context of the call.

That's why one would say generic programing is template programing. This means writing code which is oblivious of concrete data type. Whenever we use that code, the compiler will instantiate the code for the particular data type. Meanwhile, this doesn't have overhead for runtime performance, everything happens in compile time.

Be careful about inserting and deleting element in a container, depending on the data structure of the container, the existing iterator may become invalid. For example for a list, if we remove a element from it, all existing iterators will be stable except the one pointing to the removed iterator. Generally, we shouldn't rely on iterators once we start adding and removing element or event reordering things.


## Back to HPX

HPX use a lot of template programing.

Template is also the reason why people think of C++ template programing is hard. Whenever we do something wrong, we will have megabyte of error messages from the compiler. The reason is that if we use a template function A which calls an template function B which calls a template function C and so on iteratively, and the lowermost template function runs into an error because the type passed in doesn't support the operation requested. The compiler will tell you " Hey, I found the error there, by the way it's the context of this, and this is in context of that thing, and that is in the context of another thing " repeatably.
This give us a very long error messages. And It can only tell us something went wrong but can't tell us what went wrong.Because the initial call is far away from the error spot. Future version of C++ (C++ 20) will improve that by supporting a feature called **concept**, it can restrain the data type of the template. So in our case, we can explicitly demand the first argument has to be an input iterator, and it allows the compiler to give us the error message in the top level, this will make error message short.

Don't be afraid when you start using HPX when you see these error message. It's fairly easy to navigate in these error messages, the trick is to scan from the top to bottom until you find the word **error**, then you go back until you find the first line refers to your own code, that's where the error code is. Every thing below is what HPX do, you don't have to care about them.
