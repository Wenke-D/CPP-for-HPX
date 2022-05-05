#include <cmath>
#include <iostream>
#include <list>
#include <string>
#include <vector>

/**
 * This file contains examples about template function
 * 
 */


/**
 * Override << for printing vector to stdout.
 */
template <typename T>
std::ostream &operator<<(std::ostream &o, std::vector<T> &v) {
    for (auto &ele : v)
        o << ele << ' ';
    return o;
}


// #region my_copy
template <typename In, typename Out>
void my_copy(In begin, In end, Out out) {
    while (begin != end) {
        *out = *begin;
        out++;
        begin++;
    }
}

// #endregion my_copy

// #region is_p1
bool is_palindrome(std::string s) {
    return std::equal(s.begin(), s.end(), s.rbegin());
}

// #endregion is_p1

// #region is_p2
bool is_palindrome2(std::string s) {
    auto middle = s.begin();
    middle += s.size() / 2;
    return std::equal(s.begin(), middle, s.rbegin());
}

// #endregion is_p2

// #region is_p3
template <typename Container>
bool is_palindrome3(Container s) {
    auto middle = s.begin();
    std::advance(middle, s.size() / 2);
    return std::equal(s.begin(), middle, s.rbegin());
}

// #endregion is_p3

int main(int argc, char const *argv[]) {

    // #region vtv
    std::vector<int> v1 = {1, 2, 3, 4, 5, 6};
    std::vector<int> v2(10);

    my_copy(v1.begin(), v1.end(), v2.begin());

    // #endregion vtv

    // #region vtv_empty
    std::vector<int> v3 = {1, 2, 3, 4, 5, 6};
    std::vector<int> v4;

    my_copy(v1.begin(), v1.end(), std::back_inserter(v4));

    // #endregion vtv_empty
    std::cout << v4 << std::endl;





    // #region c_is_p1
    std::cout << is_palindrome("HelleH") << std::endl;
    std::cout << is_palindrome("Hello") << std::endl;

    // #endregion c_is_p1

    std::cout << is_palindrome2("HelleH") << std::endl;
    std::cout << is_palindrome2("Hello") << std::endl;
    
    // #endregion c_is_p2
    
    // #endregion c_is_p3
    std::cout << is_palindrome3(std::string("HelleH")) << std::endl;

    std::list<char> l1 = {'m', 'a', 'd', 'a', 'm'};
    std::cout << is_palindrome3(l1) << std::endl;

    // #endregion c_is_p3
    return 0;
}
