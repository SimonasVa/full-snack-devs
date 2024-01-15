function trapecijosPlotas (a, b, c, d) {
    const h = Math.abs(b - c); 
    const area = ((a + d) / 2) * h;
    return area;
}



function TrapecijaTaip(a, b, c, d) {
    
    if (a > 0 && b > 0 && c > 0 && d > 0) {
       if (a < b + c + d && b < a + c + d && c < a + b + d && d < a + b + c) {
      return true; 
    }
    }
    return false; 
}









