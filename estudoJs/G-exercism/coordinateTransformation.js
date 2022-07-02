export function translate2d(dx, dy) {
    return function (x, y) {
      return [x+dx, y+dy]
    }
}

export function scale2d(sx, sy) {
    return function(x,y) {
      return [sx * x,sy * y]
    }
}

export function composeTransform(f, g) {
    return function(x, y) {
        resultF = f(x,y)
        g(resultF[0], resultF[1])
    }
}

