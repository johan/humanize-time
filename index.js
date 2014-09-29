// humanizeTime(123456789.012) => 3y 47w 4d 3h 33m 9s 12ms

module.exports = function humanizeTime(s, sep) {
  sep = sep || ' ';
  var units =
    { y: 60 * 60 * 24 * 365.25
    , w: 60 * 60 * 24 * 7
    , d: 60 * 60 * 24
    , h: 60 * 60
    , m: 60
    , s: 1
    }
  , a = '', _ = ''
  , unit, size, ms, n;

  if (s < 0) {
    s = -s;
    a = '-';
  }

  for (unit in units) {
    size = units[unit];
    if (s >= size) {
      n = Math.floor(s / size);
      s = (s % size);
      a += _ + n + unit;
      _ = sep;
    }
  }

  if (s && (ms = Math.round(s * 1000)))
    if (ms === 1000)
      a += _ + '1s';
    else
      a += _ + ms + 'ms';

  return a;
}
