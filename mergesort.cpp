#include <iostream>
#include <vector>
using namespace std;

// Merge two sorted halves
void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp;
    int i = left, j = mid + 1;

    while(i <= mid && j <= right) {
        if(arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }

    while(i <= mid) temp.push_back(arr[i++]);
    while(j <= right) temp.push_back(arr[j++]);

    for(int k = 0; k < temp.size(); ++k)
        arr[left + k] = temp[k];
}

// Recursive Merge Sort function
void mergeSort(vector<int>& arr, int left, int right) {
    if(left >= right) return;
    int mid = left + (right - left) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

// Driver code
int main() {
    vector<int> arr = {5, 2, 9, 1, 6, 3};

    mergeSort(arr, 0, arr.size() - 1);

    cout << "Sorted array: ";
    for(int num : arr)
        cout << num << " ";
    cout << endl;

    return 0;
}
