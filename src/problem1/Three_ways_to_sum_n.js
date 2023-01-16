var sum_to_n_a = function(n) {
    // your code here
    if (n < 0) {
      return 0
    }
    var result = 0
    for (var i = 1; i <= n; i++) {
      result += i
    }
    return result
};

var sum_to_n_b = function(n) {
    // your code here
    if (n<=0) {
      return 0
    }
    return (1+n)*n/2
};

var sum_to_n_c = function(n) {
    // your code here
    if (n<=0) {
      return 0
    }
    var ans = 0
    var a = n
    var b = n+1
    while (b>0){
      if ((b&1)===1) {
        ans += a
      }
      a <<= 1
      b >>= 1
    }
    return ans>>1
};