export const content = {
  "Notes" : [
    {
      "index" : 1311,
      "Title" : "13.1.1 - Limits and which graphs are faster on going to infinity",
      "Content" : "Some graphs are faster than others. These are determined by the term with the highest degree, because when it goes to infinity all the other terms become irrelevant. Because of this, when considering which terms go towards infinity faster we can only consider the term with the highest degree.",
      "Files" : [],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1312,
      "Title" : "13.1.2 - Finding limits for polynomial fractions",
      "Content" : `There are multiple ways to find limits to infinity. One way is to ignore all digits except for the most significant digit of the numerator and the denominator. This is because as the value for x increases, the other less significant digits become less and less important. From this point, you can follow a few simple rules: \n \n - If the power of the numerator is larger than the power of the denominator, lim x->∞ of f(x) = ∞. \n - If the power of the numerator is smaller than the power of the denominator, lim x->∞ of f(x) = 0. \n  - If the power of the numerator and denominator are equal, lim x->∞ of f(x) is equal the the coefficient of the highest power digit of the numerator divided by the coefficient of the highest power digit of denominator \n \n For lim x-> -∞ of f(x): \n- If the power of the numerator is larger than the power of the denominator, subtract the exponent of the denominator from the exponent of the numerator (since when dividing exponents, you subtract them). If the number that you get is even, lim x-> -∞ of f(x) is equal to lim x->∞ of f(x) while if the number is odd, it is the opposite of lim x->∞ of f(x).\n - If the power of the numerator is exactly one more than the power of the denominator, the graph has a slant asymptote. Thus, lim x-> -∞ of f(x) is -∞.\n - If the power of the numerator is equal to the power of the denominator, lim x-> -∞ of f(x) would be the coefficient of the numerator divided by the coefficient of the denominator.\n - If the power of the numerator is less than the power of the denominator, lim x-> -∞ of f(x) = 0. \n \nThe second way to find limits to infinity is using the giant one (See figure 1.2.1). This method in the second step uses the great one: ‘denominator over the denominator’ of the original function to simplify the limit. In the second step it is the second factor. This gives the answer because it equals 1 and x * 1 = x for all x. `,
      "Files" : [
        {
          Number : "1.2.1",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589305891/misc/juarez/Annotation_2020-05-12_105036_vkkavy.png"
        }
      ],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1313,
      "Title" : "13.1.3 - Finding limits for undefined parts of functions",
      "Content" : "When direct substitution of x=a in lim x->a of f(x) leads to 0/0, we say that this result is inconclusive. We need to investigate further whether the numerator or the denominator approaches zero faster and/or if the terms leading to the indeterminate form can be eliminated. \n \n When direct substitution will lead to the so called indeterminate form, factoring of the numerator and reducing will be the way to solve. In Figure 1.3.1, the numerator is factored out and then simplified to get the answer.",
      "Files" : [
        {
          Number: "1.3.1",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589307770/misc/juarez/Annotation_2020-05-12_112231_eegq5n.png"
        }
      ],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1314,
      "Title" : "13.1.4 - Finding limits for functions that start with (1 + x)",
      "Content" : "Functions in the form of Figure 1.4.1 have a certain pattern shown in Figure 1.4.2.",
      "Files" : [
        {
          Number : "1.4.1",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589308050/misc/juarez/Annotation_2020-05-12_112720_tnm7ve.png"
        },
        {
          Number : "1.4.2",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589307961/misc/juarez/Annotation_2020-05-12_112548_iafjey.png"
        }
      ],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1321,
      "Title" : "13.2.1 - Finding the area under graphs with trapezoids",
      "Content" : "Using trapezoids can help you estimate the area under a graph more accurately than just right and left endpoints. It turns out, averaging the right endpoints with the left endpoint angles gives a result equal to the area found using trapezoids, taking away the need to calculate triangles and rectangles. ",
      "Files" : [],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1322,
      "Title" : "13.2.2 - Using left and right endpoints to get trapezoid area",
      "Content" : "You can use Sigma notation to signify the addition of left as well as right endpoints to make calculating trapezoid area faster (Figure 2.2.1). Using the same formula for the right points, we can easily average to get the sum.",
      "Files" : [
        {
          Number : "2.2.1",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589309083/misc/juarez/Annotation_2020-05-12_114434_qlql0q.png"
        }
      ],
      "Mistakes" : "",
      "Videos" : [
        {
          Link: "https://www.youtube.com/embed/1p0NHR5w0Lc"
        }
      ],
      "World" : ""
    },
    {
      "index" : 1323,
      "Title" : "13.2.3 - Area under the curve with a rocket",
      "Content" : "",
      "Files" : [],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1331,
      "Title" : "13.3.1 - Velocity and position graphs",
      "Content" : "Velocity is the speed of something in a given direction. Thus, the velocity is the slope of the position graph, since the position graph shows movement while velocity is the rate of movement. Additionally, you can find the total distance traveled by finding the area under the curve of the velocity graph, since distance is equal to rate x time, and in the velocity graph, the x axis is time while the y axis is velocity, or rate of change.",
      "Files" : [],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1332,
      "Title" : "13.3.2 - Velocity vs speed with position",
      "Content" : "Despite often being confused for each other, velocity and speed have a key difference: velocity includes direction, while speed does not. That means that velocity can be negative, while speed cannot. This is because while going in a linear pathway, going backwards can be interpreted as having a negative velocity, while speed does not account for directional movement, but only the rate of movement. So, in a position graph, both speed and velocity relate to the slope, but if the graph goes from a higher y value to a lower y value, velocity is negative while speed is not.",
      "Files" : [],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1333,
      "Title" : "13.3.3 - Slope functions",
      "Content" : "To find the slope of a function first find the derivative. You can find the derivative by using the equation in Figure 3.3.1. This is also the IROC of f(x) for any values of x.",
      "Files" : [
        {
          Number : "3.3.1",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589309643/misc/juarez/Annotation_2020-05-12_115351_kzkwnp.png"
        }
      ],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    },
    {
      "index" : 1334,
      "Title" : "13.3.4 - Finding derivatives",
      "Content" : "You can find the derivative of a function using the formula in Figure 3.3.1, where x is the x coordinate of the point that you want to find, and h will cancel out, and any remaining xs can be changed to 0s.",
      "Files" : [
        {
          Number : "3.3.1",
          Link: "https://res.cloudinary.com/drferrel/image/upload/v1589309643/misc/juarez/Annotation_2020-05-12_115351_kzkwnp.png"
        }
      ],
      "Mistakes" : "",
      "Videos" : [
        {
          Link: "https://www.youtube.com/embed/Hszu_Maneoo"
        }
      ],
      "World" : ""
    },
    {
      "index" : 1335,
      "Title" : "13.3.5 - Connecting the area under a curve with its slope",
      "Content" : "To be Finished......",
      "Files" : [],
      "Mistakes" : "",
      "Videos" : [],
      "World" : ""
    }
  ]
}
