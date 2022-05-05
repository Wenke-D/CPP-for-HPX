#include <cmath>
#include <iostream>
#include <typeinfo>

// #region coordinate
template <typename T> struct coordinate { T x, y; };
// #endregion coordinate

// #region distance1
/**
 * Calculates square of arbitrary type
 */
template <typename T> auto sqr(T val) { return val * val; }

template <typename T> T distance(coordinate<T> c1, coordinate<T> c2) {
    return std::sqrt(sqr(c1.x - c2.x) + sqr(c2.y - c2.y));
}
// #endregion distance1

// #region distance2
// since C++11
template <typename T, typename U>
auto distance2(coordinate<T> c1, coordinate<U> c2)
-> decltype(std::sqrt(sqr(c1.x - c2.x) + sqr(c2.y - c2.y))) {
    return std::sqrt(sqr(c1.x - c2.x) + sqr(c2.y - c2.y));
}
// #endregion distance2

// #region distance3
// since C++14
template <typename T, typename U>
decltype(auto) distance3(coordinate<T> c1, coordinate<U> c2) {
    return std::sqrt(sqr(c1.x - c2.x) + sqr(c2.y - c2.y));
}
// #endregion distance3

int main() {
    // #region uc1
    coordinate<int> c1 = {1, 2};
    coordinate<int> c2 = {2, 8};
    coordinate<double> c3 = {1.0, 2.2};
    coordinate<double> c4 = {6.1, 7.8};

    // #endregion uc1

    // #region ud1
    int d1 = distance(c1, c2);
    double d2 = distance(c3, c4);

    // #endregion ud1

    // #region ud2
    coordinate<int> c5 = {1, 2};
    coordinate<float> c6 = {3.3, 4.4};
    coordinate<double> c7 = {5.5, 6.6};
    distance2(c5, c6);
    distance2(c6, c7);

    // #endregion ud2
}
