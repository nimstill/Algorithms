#include <cstdio>
#include <cstring>
#include <cstdlib>
#include <algorithm>

using namespace std;
int gcd(int a, int b){
	int tmp;
	while(b){
		tmp = b; b = a % b; a = tmp;
	}
	return a;
}

int main()
{
	int n, a;
	while(scanf("%d%d",&n,&a) != EOF){
		for(int i = 0,x; i < n; ++i){
			scanf("%d",&x);
			if(x <= a) a += x;
			else a += gcd(x,a); 
		}
		printf("%d\n", a);
	}
	return 0;
}