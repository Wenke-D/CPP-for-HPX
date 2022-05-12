#include <iostream>
#include <list>
#include <map>
#include <type_traits>
#include <typeinfo>
#include <vector>

namespace my {

// #region factorial
template <int N> struct factorial {
    static int const value = N * factorial<N - 1>::value;
};

// template specialization
template <> struct factorial<1> { static int const value = 1; };

// #endregion factorial

// #region add_pointer
template <typename T> struct add_pointer { typedef T *type; };

// #endregion add_pointer

// #region remove_pointer
template <typename T> struct remove_pointer { typedef T type; };

template <typename T> struct remove_pointer<T *> { typedef T type; };
// #endregion remove_pointer

// #region no_pointer
template <typename T> struct no_pointer { typedef T type; };

template <typename T> struct no_pointer<T *> {
    typedef typename my_no_pointer<T>::type type;
};
// #endregion no_pointer

// #region make_map
template <typename K, typename V> struct make_map {
    typedef std::map<K, V> type;
};
// #endregion make_map

// #region if_
template <bool flag, typename T1, typename T2> struct if_ { typedef T1 type; };

template <typename T1, typename T2> struct if_<false, T1, T2> {
    typedef T2 type;
};
// #endregion if_

// #region true_false
struct true_type {
    static bool const value = true;
    typedef true_type type;
};

struct false_type {
    static bool const value = false;
    typedef false_type type;
};
// #endregion true_false

// #region is_pointer
template <typename T> struct is_pointer : false_type {};

template <typename T> struct is_pointer<T *> : true_type {};

// #endregion is_pointer

// #region is_same
template <typename T1, typename T2> struct is_same : false_type {};

template <typename T> struct is_same<T, T> : true_type {};
// #endregion is_same

} // namespace my

int main(int argc, char const *argv[]) {
    using namespace std;


    // #region u_factorial
    cout << my::factorial<10>::value << std::endl;
    // #endregion u_factorial

    // #region u_add_pointer
    my::add_pointer<int>::type x1;
    // #endregion u_add_pointer

    // #region u_remove_pointer
    my::remove_pointer<int *>::type x2;
    // #endregion u_remove_pointer

    // #region u_no_pointer
    my::no_pointer<int ****>::type x3;
    my::no_pointer<double>::type x4;
    // #endregion u_no_pointer

    // #region u_if_
    my::if_<true, int, bool> var1;
    my::if_<false, int, bool> var2;

    // #endregion u_if_


    // #region u_is_pointer
    my::is_pointer<int>::value;
    // #endregion u_is_pointer
    
    return 0;
}
