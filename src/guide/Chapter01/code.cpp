

#include <iostream>
#include <vector>
#include <list>


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

int main(int argc, char const *argv[]) {

    // #region vtv
    std::vector<int> v1 = {1, 2, 3, 4, 5, 6};
    std::vector<int> v2(10);

    my_copy(v1.begin(), v1.end(), v2.begin());

    // #endregion vtv



    // #region ltv
    std::list<int> l1 = {1, 2, 3, 4, 5, 6};
    std::vector<int> v3(10);

    my_copy(l1.begin(), l1.end(), v3.begin());
    
    // #endregion ltv


    // #region ptv
    int array1 [6] = {1, 2, 3, 4, 5, 6};
    std::vector<int> v4(10);

    my_copy(array1, array1+6, v4.begin());

    // #endregion ptv

    return 0;
}
