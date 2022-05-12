#include <iostream>
#include <vector>

namespace my {
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

// #region is_random_access_iterator0
template <typename Iter>
struct is_random_access_iterator0
    : if_<
        is_same<
            typename std::iterator_traits<Iter>::iterator_category,
            std::random_access_iterator_tag
        >::value,
        true_type,
        false_type
        > {};

// #endregion is_random_access_iterator0

// #region is_random_access_iterator
template <typename Iter>
struct is_random_access_iterator
    : is_same<typename std::iterator_traits<Iter>::iterator_category,
              std::random_access_iterator_tag> {};

// #endregion is_random_access_iterator

// #region advance

// for other iterators
template <typename Iter> void advance(Iter &iter, int n, false_type) {
    while (n--)
        iter++;
};

// for random access iterators
template <typename Iter> void advance(Iter &iter, int n, true_type) {
    iter += n;
};

// the main function
template <typename Iter> void advance(Iter &iter, int n) {
    advance(iter, n, typename is_random_access_iterator<Iter>::type());
};
// #endregion advance

} // namespace my

int main(int argc, char const *argv[]) {
    using namespace std;
    vector<int> v1 = {1, 2, 3, 4, 5};
    auto begin = v1.begin();
    auto end = v1.end();
    cout << begin - end << endl;

    my::advance(begin, 2);

    cout << begin - end << endl;

    return 0;
}
