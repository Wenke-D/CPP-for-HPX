# Template Meta Programing

In the previous chapter, we presented the template system of C++, including template function and template class. About the template class, we implemented one named `coordinated<T>`. In this chapter we gonna still focus on template class.

```cpp
template <typename T> struct coordinate { T x, y; };
```

This usage is what the template class was invented for, defining types based on various generic type, so that we could use it in different contexts. Almost every standard container, such as `std::vector`, `std::list`, is parametrizable with template type.

The template become a C++ standard at 1998. Then a guy found something that template was not designed for. He discovered that template system is **Turing-Complete**. Loosely speaking, Turing-completeness means a system has the minimum set of necessary operations allowing the system to perform universal computation. The fact that template is turing complete means one can perform computation at compile time.

This was surprising at that moment. That guy showed a program which printed prime numbers in the compiler generated error message during compile time, then the program failed to be compiled (which proved that the computation really happened at compile time). We call programing at compile time: **template meta programing**(TMP). This was the starting point of template meta programing ,and it completely went off today. One usage of the template meta-programing is the code generation during compile time, whose examples have been shown in previous chapters.

At this chapter, as many examples we gonna use have a counterpart with the same name in standard template library under the namespace `std`, we will put our example under the namespace `my` to distinguish from them.

## Meta Function

First of all, let's see how to define and call functions in TMP. We will show a simple example of numerical computation, **factorial** calculation at compile time. For illustration purpose, we gonna do it in the old way (before C++11), some modern C++ features can simplify it, we will talk about them later.

<<< @/src/guide/Chapter03/code.cpp#factorial

We defined a template class named `factorial`. It takes an integer as template parameter instead of a type (line 1). This is valid, C++ allows us declaring `integer`, `long`, `bool` etc... as template parameter. So, for each integer argument, we will have a different type. For instances, `factorial<1>` and `factorial<2>` are 2 **independent** types. This allows us encoding integers into types.

As result, we can use types to represent integers, and this is the basis for computation at compile time. Because the compiler can't do input, output nor assign variable. All we can do is to generate types as variables so that we could program. Since we can't change type, the variable is immutable. This feels like functional programing(FP), as we can't change the value of a variable in FP either.

This is exactly how we are going to use template for computation. Whenever we need a new variable, we create a new type represent that variable. So calculating factorial is essentially creating a sequence of types representing each factorial when the factorial is unfolded recursively. So each time we multiple, we create a new type as the operand.

In term of syntax, this is a template class, but we use it as a function. So we call it **meta function**, meta means that it runs at compile time. Now we can define parameters and pass arguments to it. But what is the return value of that function ? People have come up a pure convention for return value. For a meta function for numerical computation, we will **always** define a `static` member called `value` and make it `const` as a variable. In our case, the return value is integer, so the `value` is of type `int`. We get the return value of the meta function by access this member, for example `10!` is `factorial<10>::value`. As it's a convention, whenever seeing a template class with a `value` as its member, we could just assume the template class is meta function for numerical operations.

## Branch and Specialization

So in the body of the meta function, we use `N * factorial <N-1>::value` to recursively calculate the factorial of N. But this is not enough, we need to find a way to stop at `1!`, otherwise the compilation will never stop. In another world, we need to be able to make decision, so we need some thing like a `if` statement.

<<< @/src/guide/Chapter03/code.cpp#factorial


This is done by **template specialization** (line 6).
In addition to the main template, we supply another specialization of the template which will be used when the integer argument is equal to 1. Whenever we use `factorial<1>`, the compile will not use the main template but the specialization. This give us a break point, it will go down till N is equal to 1 and then go back to give us the final result.

It's called specialization, because we provide special templates for one or more template arguments. For all other value, the compile still chooses the original template. We can provide as many template specializations as we want. The compile performs the pattern matching to find the one best matching the argument.

::: tip
For some of you know functional programing, this is very similar to the following `ocaml` code.

```ocaml
let rec factorial n = match n with
  |1 -> 1
  |x -> x * factorial (n-1)
;;
```

:::

<<< @/src/guide/Chapter03/code.cpp#u_factorial

This is how we call the function in our code. After the compilation, the factorial<10>::value will become 3628800.

For some of you who doubt that this is really happening at compile time? We can check the generated assembly code. The argument for g++ to generate assembly code is `-S`.

```armasm{3}
	movl	%edi, -4(%rbp)
	movq	%rsi, -16(%rbp)
	movl	$3628800, %esi
	leaq	_ZSt4cout(%rip), %rdi
	call	_ZNSolsEi@PLT
```
In our case, we can see there is no loop nor multiplication, the result is directly written in the assembly code (line 3).

Template specialization is very powerful and we will use it over and over again. Besides, there are some limitation on the template argument. As we said, `int`, `long`, `bool` etc... can be template parameters, but we can't declare real numbers as template parameter, including `float`, `double` and their variants. Because they are not complete type, some numbers can't be represented precisely. Since the compiler use pattern matching to choose the template, we can't use have some template that may or may not be chosen. But nowadays, with `constexpr` (C++11), this becomes possible too, so a full complete programing at compile time. We will talk about it in detail in the future.


## Type Computation 

Another thing we can do with meta function is type computation. Instead of calculations of some values, meta function can return a type.

In certain scenarios, if we have a type, we want have its pointer type, such as getting `int*` from `int`. And we want that happened at compile time. We used some of these techniques in HPX. Because HPX is a very generic library. For example, `hpx::asnyc()` can work with arbitrary argument. Under the hood, there are a lot of type computations, so that it can run the right code depending on the input type. 

### adding pointer

The first example is a meta function which takes a type `T` as argument and generate the type `T*`.

<<< @/src/guide/Chapter03/code.cpp#add_pointer

According to the convention, when a meta function is for type computation, the member for return value will be named `type`.

As you can see , obviously when we have a T as argument, the return value of this function is T*.

<<< @/src/guide/Chapter03/code.cpp#u_add_pointer
The type of variable `x` is `int*` instead of `int`.
Also, one can use `typeid` keyword to retrieve information from a type.

### making map

<<< @/src/guide/Chapter03/code.cpp#make_map

This meta function returns a concrete map type based on template argument.

### removing pointer

We had a `add_pointer`, how about `remove_pointer` which removes the star if the type is a pointer.

<<< @/src/guide/Chapter03/code.cpp#remove_pointer

This meta function, here we still need a condition to check whether the argument is a pointer type or, so we need template specialization.

### no pointer
How about a `no_pointer`, which removes all stars on a type recursively.

<<< @/src/guide/Chapter03/code.cpp#no_pointer

Here we applied the same technique as the factorial. we call the specialized meta function recursively as long as there is at least a star. Then we jump out the recursion by the main template.

One thing we need to notice is the keyword `typename`, it hint the compile that the following expression is a type not a value, because in some cases, the compiler can't distinguish them. The compiler nowadays is good enough to tell if its needs that keyword or not.

<<< @/src/guide/Chapter03/code.cpp#u_no_pointer

`x3` and `x4` are of type `int` and `double` respectively.

So we can do nice type transformation by pattern matching. That is, we can choose template based on our need, and template specialization is really the key to that.

### partial specialization

<<< @/src/guide/Chapter03/code.cpp#if_

This meta function returns T1 when flag is true, otherwise returns T2. The main template which will be selected whenever the flag is true. When the flag is false, the specialization will be used. Please notice that the template can be partially specialized. The specialization only specify the **first** parameter of the main template.


<<< @/src/guide/Chapter03/code.cpp#u_if_

`var1` is of type `int`, and `var2` is a `bool`.


We need to emphasize again that all the computations above happened at compile time.

## True Type and False Type
Now we want to introduce 2 facilities that are so useful, that they are in standard now.
A type representing boolean value `true`, and one for boolean value `false`.

<<< @/src/guide/Chapter03/code.cpp#true_false

They are not template, simply structures. They are used to represent `true` and `false` in the type system. And since we want them to be true meta function, we not only give them a value but also a type as member. For lack of alternative, we just let them return themselves as the type. We can use them both for numerical computation and type computation. As you will see, these small tricks will be used everywhere.

## Type Traits

We already have meta functions for the numerical operation and type transformation, We can also have meta function for retrieving information from the type. For instance, the meta function `is_void<T>` to check if the `T` is `void` or not. These special meta function are called **type traits**, as they introspect the information of type.

All type traits in standard library return `std::true_type` or `std::false_type`. We are going to show how to write some of them. In our version, it will return `my::true_type` or `my::true_type`.

The first type traits is `is_pointer<T>`, it checks whether T is a pointer or not.

<<< @/src/guide/Chapter03/code.cpp#is_pointer

Essentially, we are making decision based on input, so the specialization shows itself again. The tricky part is how we gonna return `true_type` and `false_type`. We will use inherence, if `T` is a pointer, we gonna return `true_type` by deriving the meta function from `true_type`, otherwise deriving `false_type`. Whatever `true_type` / `false_type` have , the `is_pointer` will implicitly have it too. The reason this way works, is because essentially the meta funtion is template class.
 
<<< @/src/guide/Chapter03/code.cpp#u_is_pointer

The value of the above expression is `false`.

Here's another example, a type traits takes 2 template types as arguments and check whether they are the same or not.

<<< @/src/guide/Chapter03/code.cpp#is_same

Again, the specialization is used for conditional return, and we use inherence for the return value.

According to the convention, all standard type traits return `true_type` or `false_type`. Hence, next time when you see expressions like `is_xxx::type`, don't no need to digging in what it is. Because some them could be extremely complex, to query the information of type.
But, we can immediately know that it will give `true_type` or `false_type`. So, this is how we build the high level abstraction without understanding what is actually going on, and most of time we even don't want to understanding it because they are fairly trickly.

A funny fact, early days, when Boots invented all these mechanisms, the compiler was weak, old, and not conforming to the standard. As consequences, some implementations of type traits toke advantage of compiler bugs to do its job. They knew for this particular compiler, if we do it that way, it will do exactly what we want and there is no other way.

Type trait are widely used in HPX, for example `is_execution_policy`, we defined a lot customized ones in HPX to allow us inspecting the type for our own needs.

## Alias by `typedef`
C++ has two ways to define type alias, `typedef` and `using`. `using` is a more powerful feature.
HPX uses `typedef` for backward compatibility, to support the compiler that doesn't know `using`. Once we get rid of GCC 4.6, 4.7, we will switch to the new way.

We can't use `typedef` to defining template alisa, this is one reason that `using` was introduced.

___

The next chapter is an exercise. We gonna write the function `std::advance` by ourselves. The exercise will revise all the techniques we've learned before.







