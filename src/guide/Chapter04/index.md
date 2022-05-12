# Exercise: `my::advance`

Please recall, in the previous chapter, we used the smart function `std::advance` which advances an iterator intelligently based on the input iterator. If the iterator is a random access iterator, it will use jump operation, otherwise it will use increment operation. Now we have enough knowledge to write one by ourselves.

Same as the previous chapter, we define all the functions and classes under the namespace `my`.


Intuitively, to write the `advance`, we should be able to do 2 things:
- Distinguishing random access iterators from others 
- Then perform the right operation.

## Iterator Tag

Firstly, let's write a type traits which distinguish random access iterator. It returns `true_type` if the argument is a random access iterator, otherwise returns `false_type`.

<<< @/src/guide/Chapter04/code.cpp#is_random_access_iterator0
 
We named it `is_random_access_iterator0` because we will simply it later. This type traits have `Iter` as the argument and tells us whether `Iter` is a random access iterator.

This looks intimidating, but don't worry, let's take it down piece by piece. Essentially it's a template class which has a empty body and which inherits a **type** that presented by the following big expression (line 3 ~ 9). So, we only need to figure out what is the big type.

The first layer of the big type is the meta function `if_<bool, T1, T2>` which we defined in the last chapter. Here `T1` is `true_type` and `T2` is `false_type` respectively, and everything between is just a bool expression. So that is to say, when the `bool` is `true`, the `is_random_access_iterator` will inherit `true_type`, otherwise it inherit `false_type`. So all we need to know is when the `bool` is `true` ? 

`is_same<T1, T2>` is another type traits which checks whether `T1` equals to `T2` or not. In our case, `T1` is `std::iterator_traits<Iter>::iterator_category`, this is another type traits which returns the category of an iterator. The keyword `typename` tells the compiler that this is a type instead of a value. The category of the random access iterator named `std::random_access_iterator_tag`, that's why we put it as `T2`. So `is_same<..., ...>` will be `true_type` when `Iter` is the random access iterator. Furthermore, by accessing its value, the whole `bool` of the `if_<bool, ..., ...>` will be `true` when `Iter` is the random access iterator.

Combining everything together, we've got what we want. When `Iter` is a random access iterator, the type traits `is_random_access_iterator0` inherits `true_type`, otherwise inherits `false_type`. Now, we can use it to check the property of the iterator.

Do some of you see a little bit redundance here? That's very true. `is_same` returns `true_type` and `false_type` too, we don't need a `if_` wrapped it.

<<< @/src/guide/Chapter04/code.cpp#is_random_access_iterator

This is the type traits we need to distinguish random access iterator from others.



## Type Dispatch

Now we need to use the proper operation depending on the iterator, and the choice must be done at compile time.

<<< @/src/guide/Chapter04/code.cpp#advance

Here, we used a technique called type dispatch. The entrance of the third one, use can call it with a iterator and a number representing the step. Then to select the right function at compile time, we overloaded this function. The other 2 functions take the third argument, which is `true_type` and `false_type` respectively. Once the traits gives us an answer, one function will be called depending on the answer. One tricky thing is the parenthesis right after the traits. It's a construction, we construct an anonymous `true_type` or `false_type`, then the compiler will use the function overloading to choose the function. Since `true_type` and `false_type` are anonymous parameter in the first two function and they are not used, the overhead of the object construction will be optimized away by the compiler.







