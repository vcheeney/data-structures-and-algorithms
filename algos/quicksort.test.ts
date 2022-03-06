import { quicksortRecursive } from "./quicksort";

describe("quicksort", () => {
  it("should sort the array", () => {
    const arr = [1, 15, 6, 9, 3, 42, 21];
    quicksortRecursive(arr);
    for (let i = 0; i + 1 < arr.length; i++) {
      expect(arr[i] <= arr[i + 1]).toBe(true);
    }
  });

  it("should sort the array", () => {
    const arr = [
      1034, 1916, 632, 748, 1620, 1528, 210, 1123, 1056, 291, 1385, 1417, 1404,
      857, 1719, 321, 232, 1332, 1940, 1939, 1174, 985, 424, 1967, 1978, 1235,
      232, 1021, 1214, 1172, 990, 415, 1383, 1299, 1490, 1465, 1104, 437, 884,
      61, 1831, 1233, 478, 1821, 255, 131, 511, 277, 1984, 80, 446, 1036, 1566,
      1117, 1873, 851, 110, 617, 1526, 1212, 555, 1023, 1646, 637, 710, 495,
      765, 1493, 1653, 1988, 328, 452, 1626, 73, 1549, 705, 1381, 97, 470, 416,
      1692, 163, 904, 1998, 1291, 130, 493, 1739, 572, 1971, 1669, 567, 1218,
      1966, 1815, 1447, 1532, 1501, 850, 1259, 664, 284, 223, 1220, 1049, 506,
      1101, 1042, 400, 1985, 1693, 1607, 1002, 1357, 1991, 1269, 1993, 673,
      1271, 1563, 1024, 315, 1628, 163, 838, 1673, 1096, 1041, 961, 532, 1089,
      376, 1744, 1748, 815, 1111, 1425, 42, 439, 1734, 671, 510, 1359, 364,
      1300, 697, 1195, 564, 246, 1996, 1726, 1161, 1716, 826, 191, 889, 1572,
      1237, 578, 891, 1155, 420, 768, 364, 1030, 979, 1819, 1077, 1937, 1330,
      1194, 1722, 1670, 525, 1305, 1764, 42, 1929, 1036, 1047, 976, 1761, 390,
      1126, 161, 1621, 1719, 1451, 34, 216, 654, 1948, 414, 1585, 902, 867, 937,
      1070, 1181, 1263, 1547, 381, 133, 1216, 226, 1805, 1377, 173, 858, 1490,
      192, 560, 1887, 1504, 143, 1383, 1120, 476, 305, 671, 542, 730, 1824, 536,
      932, 1551, 1835, 161, 1787, 1380, 476, 1554, 101, 1283, 591, 632, 170,
      669, 1457, 814, 834, 913, 226, 1854, 1658, 738, 607, 1948, 1534, 1686,
      1191, 740, 538, 441, 539, 1299, 1321, 208, 182, 1882, 1338, 5, 1954, 1747,
      365, 1244, 284, 54, 1322, 922, 641, 1107, 883, 1961, 1737, 1743, 111,
      1276, 874, 1498, 286, 1201, 1700, 1602, 1506, 394, 442, 534, 243, 1721,
      831, 1244, 1664, 640, 1998, 1104, 1069, 735, 1396, 259, 1236, 976, 960,
      1908, 7, 1543, 32, 869, 673, 760, 1840, 337, 159, 167, 658, 474, 416,
      1977, 597, 1303, 1128, 735, 377, 1777, 756, 101, 251, 1317, 1349, 1619,
      226, 1396, 207, 802, 1663, 746, 308, 545, 1825, 627, 1853, 1652, 1912,
      921, 332, 1083, 173, 169, 880, 207, 1737, 319, 445, 1641, 1239, 1792, 648,
      800, 75, 715, 110, 1908, 1588, 514, 1553, 1813, 409, 461, 1483, 548, 357,
      1780, 1110, 1393, 1965, 82, 1167, 1557, 1019, 1581, 240, 1728, 623, 1958,
      1544, 166, 297, 1367, 1926, 1404, 1106, 346, 1465, 1533, 1978, 57, 1406,
      874, 647, 851, 458, 723, 90, 354, 18, 838, 1777, 1965, 1859, 1989, 261,
      580, 713, 1188, 82, 1472, 726, 1920, 409, 1280, 217, 113, 1714, 1969,
      1727, 741, 817, 355, 448, 1836, 602, 1601, 244, 1668, 1138, 234, 175,
      1706, 725, 902, 1042, 860, 605, 1800, 1943, 1848, 1905, 1973, 86, 1515,
      1683, 1384, 1371, 911, 254, 116, 1971, 1803, 606, 420, 988, 226, 370,
      1954, 949, 1117, 1724, 1516, 178, 1512, 202, 145, 87, 668, 1381, 672, 727,
      1111, 479, 1950, 202, 1263, 1405, 195, 1750, 1032, 1793, 278, 1307, 305,
      855, 1387, 1905, 229, 1924, 284, 841, 15, 493, 1571,
    ];

    quicksortRecursive(arr);
    console.log(arr);
    for (let i = 0; i + 1 < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        console.log(i);
      }
      expect(arr[i] <= arr[i + 1]).toBe(true);
    }
  });
});
