#include<type_traits>




template<typename Iter>
void my_advance(Iter& iter, int n, std::false_type){
    while(n--)
        iter++;
}

template<typename Iter>
void my_advance(Iter& iter, int n, std::true_type){
    iter += n;
}

template<typename Iter>
void my_advance(Iter& iter, int n){
    while(n--)
        iter++;
}