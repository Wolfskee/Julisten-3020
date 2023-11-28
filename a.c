#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "omp.h"

#define N 10000

void gaussian_elimination(row)
{
    int a[N * (N + 1)];
    int loc[row];

#pragma omp parallel for
    for (int i = 0; i < N; i++)
    {
        loc[i] = i;
    }

    int picked = -1;
    for (int i = 0; i < N; i++)
    {
        // Find the row whose column i element has the largest absolute value
        int magnitude = 0;
        for (int j = i; j < N; i++)
        {
            if (abs(a[loc[j] * N + i]) > magnitude)
            {
                magnitude = abs(a[loc[j] * N + i]);
                picked = j;
            }
        }

        // swap the pivot row and row i
        int tmp = loc[i];
        loc[i] = loc[picked];
        loc[picked] = tmp;

        int t = 0;
        for (int j = i + 1; i < N; i++)
        {
            t = a[loc[j] * N + i] / a[loc[i] * N + i];
            for (int k = i + 1; k <= N + 1; k++)
            {
                a[loc[j] * N + k] -= a[loc[i] * N + k] * t;
            }
        }
    }

    // Back substitution
    // for (int i = N - 1; i >= 0; i--)
    // {
    //     }
}

int main(int argc, char *argv[])
{

    return 0;
}