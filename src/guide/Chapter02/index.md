# Template Programing

Last time we discussed iterators, containers and algorithms, and we started to talk about the template function. We defined a template function called `my_copy` which allow the compiler to generate a real function based on the concrete type at moment of call. The real function copies element by iterators. In the beginning of this chapter we will still use this template function.

<<< @/src/guide/Chapter02/t_f.cpp#my_copy

This was how we called the function

<<< @/src/guide/Chapter02/t_f.cpp#vtv

## More Flexibility with Iterators

However, as you may noticed, in the copy function, we assumed the destination has enough place for incoming elements. If destination don't have enough places, the code will crashed. Luckily it's true in our code, we initialized the `v2` with 10 spaces.

This is somehow annoying, as we know, the vector has the ability to grow on demand. Is there anyway we can copy elements to an empty vector and let it grow?
The problem here is, as mentioned in the previous chapter, while algorithms don't know and don't have to know the detail of the container, how we can use ability of containers. The answer is still the same: iterators.

<<< @/src/guide/Chapter02/t_f.cpp#vtv_empty

`std::back_inserter` is function which takes a container as argument and returns a iterator. When the iterator is dereferenced, it will call the `insert` / `push_back` method of the underlying container referred by the iterator. This function doesn't rely on any particular container, it only requires the container has a `insert` or `push_back` method. In `my_copy` function, we use `*out = *begin` to assign data to the destination container. When `out` is dereferenced, it will call the `insert` / `push_back` of the container to insert the element. So this creates new element in the container as we go and it will make the vector grow as large as we need.

We use the example to show that, even the `copy` is not aware what actually is going inside the container, as all other algorithms defined in the header `<algorithms>`. All it knows is there is an iterator pointing to a space of a container and it's user's job to make sure the destination container has enough space. None of them know anything about the container, all of them work with element on iterator. If we want to work with containers, we have to get help of iterators, like the one we showed. We use special iterator to manipulate containers.


## Template Function

Now, let's write another function to check whether a give word is a **palindrome** or not. A **palindrome** is a sequence of characters which reads the same backward as forward, such as 'madam'.

Intuitively, we will need a `for` loop to check whether each character are equal. But, think twice what we really want to do with the `for` loop and go check **standard algorithms** library, because we may find what we want there. There are 2 reasons to use a standard algorithm instead of writing one by ourselves.
1. We often get messed up by `for` loops, especially dealing with ranges, but with **standard algorithms**, the chances are slim.
1. This is main reason. If we can use standard algorithms for something, then making that thing parallel running it on a multiprocessor system, is nothing but to change namespace to `std::parallel` with the same argument.
That's a huge advantage. Parallelization always has pay back, changing namespace is definitely a small cost as all the standard algorithm have a parallel version.

That's why whenever we can use a **standard algorithm**, just go for it.

<<< @/src/guide/Chapter02/t_f.cpp#is_p1

`std::string` is also a container, it's very similar to vector with additional characteristic for C-like `char` type. We can think of `std::string` as a `vector<char>`. So we can treat string as the same way as `std::vector` and apply any standard algorithms on it.

`std::equal` takes 2 ranges and sees whether they are equal or not. `s.rbegin()` points to the last char of the string, when we increase it, it go backwards on the string.

### Faster

We can do it better, we don't have to check the whole string, half of it will be enough. So we need to replace `s.end()` by an iterator pointing to the middle of the string.

<<< @/src/guide/Chapter02/t_f.cpp#is_p2

The keyword `auto` is a C++ 11 feature, it tells the compiler _"Hey, why I have to tell you what type is the assigned variable, you know better than me. It's a some fancy iterator of an container, but I don't really care, just write it for me"_. By `auto`, compiler will **deduce** that type for us, we don't need to explicitly write it out.

In our case, `std::string` is a sequence of char, it spares in the memory space continuously. Obviously the iterator of `std::string` supports random access operation, we can use `i += N` on it. 

### More Abstraction

But if we make our `is_palindrome` a template function and remove limitation on the container of characters. So the argument could be a vector of char, a list of char, a tree of char and so on. Please recall the hierarchy of iterators, only **random access iterator** supports jump operation. However, in our case, nobody could tell inside the `is_palindrome` what the category of the passed iterator is. If we use jump directly without check, if the passed container is a list, this fail. because the iter of list doesn't support jump.

<<< @/src/guide/Chapter02/t_f.cpp#is_p3

Except `std::advance`. this function advances a iterator by the N step. One would say _"we can do increment with a loop for any iterators. Why we need advance ?"_ There are two reasons:
- As we said, whenever we can use a standard algorithm, use it.
- For random access iterators, whey can jump in O(1), it's more efficient.

`std::advance` can determine whether it's a random access iterator or not, then increase the iterator in the best way.
Moreover, it checks the category at compile time, then the code of right increment operation will be generated by the compiler. So in the executable, there is no condition before the increment operation. This is power of template, we can generate code depending on our need.

We will reveal the magic of `std::advance` in the next chapter. To understand that, first we need to introduce template class first.

## Template Class

We have seem template function and write some by ourselves. But about `std::vector`, `std::list` what are they ? They are not template functions, they are types with the generic type.
 So C++ has to have facilities allowing us build type with template ,and it's the template class. 
Just as the template function is not a real function, the template class is only a recipe to generate class.

<<< @/src/guide/Chapter02/t_c.cpp#coordinate

Here we defined a template class with a generic type `T`. It has 2 members, x and y of type `T`. We can use it with float, double, int and so on. It can generate a real coordinate class at compile time depending on the concrete type. For instances:

<<< @/src/guide/Chapter02/t_c.cpp#uc1

We created a coordinate using `int` and one using `double`.

Now, let's write a function calculating the distance of 2 coordinates. Of course, in OOP we shall write a member method for that. But, for illustration purpose, let's write it as a function.

<<< @/src/guide/Chapter02/t_c.cpp#distance1

What do we see here?
1. We can ask compiler to do partial pattern matching. We limit the argument type, this template function only accepts the call with 2 coordinates which contain the same type. 
1. We can declare that generic type as the return type of the function. This means whatever the compiler match as the generic type `T`, it will be the return type.

Here are 2 examples:

<<< @/src/guide/Chapter02/t_c.cpp#ud1

As you can see, `c1` and `c2` are coordinates of `int`, so the return type of their distance is `int` as well. And same for `c3` and `c4`.

```cpp
distance(c1, c3); // compile error
```
The compiler will complain this line, because `c1` and `c3` are not coordinates with the same type.



## Arrow Declaration and `decltype`

What if we allow using 2 types to calculate distance ?

```cpp

template <typename T, typename U>
? distance2(coordinate<T> c1, coordinate<U> c2) {
    return std::sqrt(sqr(c1.x - c2.x) + sqr(c2.y - c2.y));
}

```
So the function will look like this. Here `?` is **not** a  valid keyword. What should we put to replace `?`, in another word, what is the return type of the function ?

Actually we have no idea, at least we don't know it while defining the function. For example, this how will we use the function.

<<< @/src/guide/Chapter02/t_c.cpp#ud2

The type of the first result (line 4) is `float`, the second one (line 5) is `double`.

When will we know the type of the return value ? The answer is at the moment we use that template function in our code. Here, according to the instruction in the function and the type conversion rule, the calculation between `int` and `float` will have `float`, `float` with `double` is `double`. So the return type will be known, when compiler tries to generate a real function based on our template at compile time. That is to say, the compiler knows the return type. As result, we can tell the compiler _" Hey, the return type is what you know when you compile it."_

<<< @/src/guide/Chapter02/t_c.cpp#distance2

**C++11** introduced another syntax to declare a function, **trailing return type**. We can declare the return type after parameters with an **arrow**. Attention, in that case we need to write a `auto` at the old place just for valid syntax purpose.

`decltype` keyword is another C++11 feature. It accepts a expression and declares the type of that expression as a type. In our case, the type we need is the type of the distance formula. So we put it in the `decltype`. This is how we tell the compiler to use the type of the expression as the return type of the function.

One would say, why can't I just use the old syntax, put the whole `decltype(...)` thing at the beginning of the function declaration. We can't, because, we used arguments in the expression, and at the beginning of the declaration, compiler don't know what are they. So we have to take the trailing version.

This is a little tedious. We have written that expression in the return statement, why on the earth we have to write it again and specify that again. That's true, it's stupid, but it's not that stupid. So since **C++14**, we can be more concise.

<<< @/src/guide/Chapter02/t_c.cpp#distance3

`decltype(auto)` tells the compiler _" Figure out the type for us please and declare that type as the return type, we don't care what it is."_. The `auto` here does **not** have the same semantic as the one before. This one is for type deduction, the last one is to fit syntax.

We have seem several examples of template programing in this chapter. Still, there a lot of tricks on templates. In the next chapter, we gonna learn the mechanism of `std::advance` and write one by ourselves.














