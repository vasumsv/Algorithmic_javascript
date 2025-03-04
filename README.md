# Algorithmic_javascript
<br>

> ## This is open-source Project and Part HACKTOBERFEST 2022

#### <font color='green'> Contribute to open source and make the world *A Better Place* </font>

#### Feel free to give a pull request. It should not be spam or invalid. It will be accepted and will be merged if it's valid PR

##### PS:You will also WIN cool T-shirt from Digital Ocean If you do FOUR successful Pull Requests with.

> # Hurry Up and Start Coding! :)


<br>

> ### [Sign In Here To start Hacking](https://hacktoberfest.com/) <br>

<br>

#### Sign-in on their website before contributing to repository
<br>

#### Event Details

 Hacktoberfest® is open to everyone in our global community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge.
* Hacktoberfest is a celebration open to everyone in our global community.

* Pull requests can be made in any GitHub-hosted repositories/projects.

* You can sign up anytime between October 1 and October 31.

<br>

#### Rules

* To earn your Hacktoberfest tee or tree reward, you must register and make four valid pull requests (PRs) between October 1-31 (in any time zone). 
* PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate.
* This year, the first 70,000 participants who successfully complete the challenge will be eligible to receive a prize. 

<br>

#### Quality Standards

In line with Hacktoberfest values **(Quantity is fun, quality is key)** , here you are provided examples of pull requests that we consider to be low-quality contributions (which we discourage).

* Pull requests that are automated (e.g. scripted opening pull requests to remove whitespace/fix typos/optimize images).

* Pull requests that are disruptive (e.g. taking someone else's branch/commits and making a pull request).

* Pull requests that are regarded by a project maintainer as a hindrance vs. helping.

* Something that's clearly an attempt to simply +1 your pull request count for October.

**Last but not least, one pull request to fix a typo is fine, but 5 pull requests to remove a stray whitespace is not.**
<br>

> ## Refer to [HacktoberFest](https://hacktoberfest.com/) Website for detailed information

<br>

__If you want to contribute then follow theses steps__
>1.fork the repo. <br>2.take the algorithm which you want to add to list<br> 3.Make sure it's not repeated. <br> 4. Be ready with your code in *JAVASCRIPT* <br>5.Add code file in folder and name the folder with problem name. e.g If you are adding Factorial code and it is sixth in  serial number then Folder Name becomes **Factorial_6** <br> 6.The added algorithm should have following sub-sections <br>
    > 5.1 A short Introduction <br>
    > 5.2 The challenge<br>
    > 5.3 Algorithmic thinking<br>
    > 5.4 Code Implementation <br> 
    6. add two hr tags after each problem in README.md file <br>
    
### Star the repository If you enjoyed contributing to open source projects.
<br>

__Algorithms practiced using JS__

## List of problems
1. String reversing  
2. Vowel counter 
3. Finding the Most Recurring Character
4. Sentence Capitalization
5. Palindromes
6. Pig Latin 
7. Deep Compare
8. Binary Search Tree
9. Numbers to Roman Numerals
10. Caesar Cipher
11. Lexicographically equal or not
12. Fizz Buzz
13. Shortest Path(Dijkstras)
14. Plus Minus

## Explanation
<b>1. String reversing</b>
 <p>The string reversal algorithm is perhaps the most common JavaScript code challenge on the internet. In this article, we explore various string reversal techniques as a good number of string manipulation algorithms are dependent on ones ability to reverse a string. </p> <br>

__The challenge:__ Given a string of text, write an algorithm that returns the text received in a reversed format. E.g

<hr>

```js
 reverseString('algorithm')
 // should return "mhtirogla"
```

<hr>

__Algorithmic Thinking:__
<p>
The process here is quite simple and straight forward. Our function will receive only one parameter i.e the string to be reversed.

Next, we would have to manipulate the characters in this string logically in order to return the string in reverse.
</p>

__Code Implementation:__
We will now explore ways to solve this challenge below. They are:

    1.Chaining in-built methods
    2.Using a For-loop

*1.Chaining in-built methods:*

        
    The **.split()** method is used to split a string into an array of characters. It receives one argument which specifies the separator that determines where every split occurs.


    The .reverse() method reverses the order of the elements in an array


    The **.join()** method is used to combine the elements of an array into a string. It receives one argument which specifies the separator. When none is supplied, it defaults to a comma.


<p> In the code snippet below we use these methods to create a one-line solution by chaining them in succession to split the received text into an array of characters, reverse the order of array’s elements and join the elements of the reversed array to produce the reversed text.</p>

```js
    function reverseString(text){
        return text.split("").reverse().join("")
    }
```

*2.For-Loop Way:*

<p> For loops are used to execute a piece of code as long as a condition is met. In the solution below, we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order. See how this is done below</p>

```js
    function reverseString(text){
        let result;

        for(let i=text.length-1;i>=0,i--){
            result+=text[i];
        }
        return result;
    }
```



<hr>
<hr>
<b>2. Vowel counter </b>

<p>Here we will be working with strings and arrays. The main challenge is given in The challenge section below.Let's find it </p>

__The challenge:__ <p>You are given a string of text containing zero or more vowels in it,count the number of vowels that can be found in given text. For example:</p>

    ```js
    vowelCounter("Hacktoberfest is very Nice") //will return 8
    ```


__Algorithmic Thinking:__ <p> After reading the problem statement, __ given text of string__ must be in your mind. Let's go further to explore</p>

> A function is a block of organized, reusable code that is used to perform a single, related action. They may or may not accepts value as parameter for computational tasks. The values are also called as Arguments.

*Let's Breakdown the approach* 

* write a function which receives a parameter called "text". It should be string of any desired length which is to be passed in function as an argument.

* create a counter to count vowels

* Next, we need to scan the string and search for the vowels ('a','e','i','o','u')

* Function will return the number of vowels found. So you have to use __*return*__ function which stops the the function execution and returns a value.
<br>

__Code Implementation:__ 
<p> We are going to use Two approaches for solving this problem:</p>

    1. Using Iterative approach
    2. Using Regular Expression

1.Using Iterative approach:  
<br>
```js
const vowel = ["a", "e", "i", "o", "u"];

function vowelcnt(text) {
    let counter = 0;

    //Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowel.includes(letter)) {
            counter++;
        }
    }

    // Return number of vowels

    return counter;
}

console.log(vowelcnt("i love HacktoberFest"))
```

**Breaking-down the steps:**

* Firstly, we declard const vowel which is array of five vowels. 
* We declare a function and initialize the counter.
* We make use of For loop to itearte over the given string. Next, we convert the all letters of string to lowercase as we don't want to miss out on uppercase letters.
* In for loop,use if to check if selected letter is included in the array of vowels which we declared earlier. We call *includes()* method on array of vowels to check whether the array includes selected letter or not.

* If the condition is true, we increment the counter.
* After looping through, counter is returned which gives the counte of vowels found in given string.






<hr>
<hr>
<b>3. Finding the Most Recurring Characterg</b>

<p> In this challenge, we will be dealing with strings, arrays and objects. We will learn to manipulate these data types using various methods that'd bring us to a working solution in the end.</p>

__The challenge:__ Given a string of text, find and return the most recurring character. e.g

```js
maxRecurringChar('aabacada') // will return 'a'
``` 

__Algorithmic Thinking:__ <p> From the challenge statement, we can infer that our function has only one parameter; the string of text.<br> We need to somehow keep track of every character in the string as well as the number of times it exists. <br> This we would describe as character mapping. Once we successfully create such a map, we can easily determine which character has the highest occurence. </p>
<br>

__Code Implementation:__

We need to keep track of every character in the string as well as the number of times it exists.

The main concept we need here is character mapping. Our aim is to map characters to the number of times they exist.

for example: In string "success" <br>
* s=3
* u=1
* c=2
* e=1

*To implement this, an objet can be used.We loop through string received & add each character to a character map object as a key & the number of times it exists as a value*

```js
  let charmap = {
       s:3,
       u:1,
       c:2,
       e:1
  }
```

**Let's implement it**

```js

/* 
maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for---in loop.

maxChar is used to store the character with the highest value on every iteration.

*/
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxRecurringChar('success'))
//  will return 's' because it is occuring 3 times
```


<hr>
<hr>

<b>4. Sentence Capitalization</b>
<p> Often during presentation situation arises where we need to manipulate the letter casing of strings within our application. Javascript offers two popular methods designed for this purpose:

    1.toUpperCase(): this method returns the string passed in as an argument converted in uppercase letters. <br>
    
    2.toLowerCase(): this method returns the string passed in as an argument converted to lowercase letters. 

__The challenge:__ Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g
```js
capitalSentence("a cat and a dog") // would return "A Cat And A Dog"
```


__Algorithmic Thinking:__ <p>
At a glance this may seem like a very simple challenge, but it actually isn’t when considered carefully.

Working through the challenge, it seems that we need to write a function that'd receive the sentence to be converted as an argument 
Next,we go through every word in sentence and capitilize every first letter of word. This brings concept of LOOP to mind
 </p>


__Code Implementation:__

1. Using .forEach Method:
    The .forEach method in javascript runs a provided function on each element within array

    ```js
    function sentenceCap(text) {
    let wordArray = text.toLowerCase().split(' ')

    let capsarray = []

    wordArray.forEach(word => {
        capsarray.push(word[0].toUpperCase()+ word.slice(1) )    
    });

    return capsarray.join(' ')
    
    }
    console.log(sentenceCap("ARTIFICIAL")) 
    //will return Artificial
    ```

<p> 

* We call the .toLowerCase() method on the string of text received to convert the entire sentence to lowercase. We also chain the .split() method in sequence to divide the lowercase sentence into an array of words as shown below. This array is stored as wordsArray
</p>
<p>

* Next, using the .foreach() method, we iterate through every word(element) in the array and execute a function on it. 
* The function takes the first letter of the word and turns it to uppercase using the .toUpperCase() method. To retrieve the remaining part of the word in lowercase, we use the .slice() method to slice the string starting from position 1 till the end.

* We combine the transformed first letter and the sliced section together to form the capitalized word which we push into our array of capitalized words capsArray.

* After this process has being carried out for every word, capsArray now holds the capitalized version of every word in the sentence

* Finally .join() method is used. Then We pass in an empty space as the separator. This gives us the capitalized sentence which we return in conclusion.
</p>


2. Using .map and .slice method:
    The .map method is used to create a new array with the results gotten from calling a provided function on every element in the array on which it is called.

    ```js   
    function capSentence(text) {
        let wordsArray = text.toLowerCase().split(' ')
        let capsArray = wordsArray.map(word=>{
            return word[0].toUpperCase() + word.slice(1)
    })
        return capsArray.join(' ')
    }

3. Using .map() and .replace() method:

    ```js
    function capSentence(text){
        let wordsArray =text.toLowerCase().split(' ')
        let capsArray = wordsArray.map(word=>{
            return word.replace(word[0],word[0].toUpperCase())
        } )

        return capsArray.join(' ')
    }
    ```

<hr>
<hr>


<b>5. Palindromes </b>
   
*What is a Palindrome:* A palindrome is a word, number, or other sequence of characters which reads the same backward as forward, such as "madam" or "racecar". <br>

__The challenge:__ <p>Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g </p>

```js
    palindromeChecker('racecar') // will return true
```

__Algorithmic Thinking:__ <p> According to challenge,"Given a string of text" implies that our funciton must have string-typed parameter which we call "text" <br><br>
Next we will have to check if the string is paindrome or not. To do this we have to reverse the string and compare that rerverser string with the original one(i.e the one which is passed as argument) <br> <br>
Finally , we return True or False depending on the result of evaluation. <br><br>
True: when it's palindrom <br>
False: Otherwise </p>

__code Implementation:__ <p>  In this challenge, we'd consider two, yet three ways to implement this as highlighted below:

    1. An Intuitive Approach
    2. Looping Through and Comparing Characters
    3. Looping Through and Comparing Characters(Optimized)


</p>

1. An Intuitive Approach:
    ```js
    
    function palindromeCheck(text){
        var reverseText= text.toLowerCase().split(' ').reverse().join(' ' )

        return text=== reverseText
    }
    ```
    __Other Example:__
    
    ```js
    // Usign First Intuitive Method

    function palindrome_check(text) {
    // for types other than string like int, float, double, etc
    if(typeof text !== 'string') {
        text = text.toString();
    }
    
    var reversedText= text.toLowerCase().split('').reverse().join('')
    return text === reversedText;
    }

   console.log(palindrome_check(4.4))
    ```
    
Let's unveil the "mysteries":

* Firstly, the function accepts the string that is to be tested
* Next, all the letters are converted to lowercase,then <font color="red" >.split()</font> method is called on string that is received as text 
* Next, we call <font color="red" > .reverse()</font> to re-order the array elements in reverse.

* After that <font color="red" >.join()</font> is called on reversed array to form a whole string.
<br>


2. Looping Through and Comparing Characters:

        This could be a bit confusing than the previous implementation.
        We will break it into simple steps.Stay in the game. 
* For example, If we have to test string "machine", we will compare "m" with "e", because if the string is reversed then "e" will take m's position

* Similarly, "a" will be compared to "n".

* Let's Jump to code.


    ```js
    function palindromeChecker(text) {
        let charArray = text.toLowerCase().split('')

        let result = charArray.every((letter, index) => {
            return letter === charArray[charArray.length - index - 1];
    })

        return result
    }
    ```

Let's review it:
* First we convert the string to lowercase and after it we use <font color="red" >.split()</font> method 

* We use special array method <font color="red" >.every()</font>  to loop through array & perform our check. In fact,<font color="red" >.every()</font>
method tests whether all elements pass the test or not which is implemented by provided function

* Here, provided function accepts two parameters: current letter and index. Read more about every function [here](https://www.geeksforgeeks.org/javascript-array-every-method/).

* In <font color="red" >.every()</font> method, it will return true if test passes all cases and will return false if it didn't.

> Did you notice any problem?There is problem with this implementation if we think performanace wise



3. Looping Through and Comparing Characters(Optimized):


    ```js
    function palindromeChecker(text) {
        var textLen = text.length;
        for (var i = 0; i < textLen/2; i++) {
            if (text[i] !== text[textLen - 1 - i]) {
                return false;
            }
        }
    return true;
    }
    ```
<hr>
<hr>

<b>6. Pig Latin Translator</b>

For specific information on Pig Latin, view this [article](https://en.wikipedia.org/wiki/Pig_Latin).

__The challenge:__ <p>Convert a string of text into Pig Latin.</p>


__Algorithmic Thinking:__

We will consider two(2) ways to implement this function in JavaScript. They are:

An imperative approach
A declarative approach
Before going ahead to implement both solutions, it’d be helpful to gain a better understanding of the two terms used above.

Imperative vs Declarative
Very often, we find these terms thrown around like they are very simple concepts everyone should know. However, the difference is usually not much obvious to most.

Simply put, an imperative style of programming is one which specifies how things get done. Although this might sound like what you do each time you write code, there's a difference to it. Imagine you were to add an array of numbers and return the sum, there are different ways you could approach the problem. One way could be writing a forloop that'd go over each element in the array and cumulatively add every element to an accumulator until the final sum is reached. That is imperative. You are specifying how things get done.

On the other hand, a declarative approach would abstract this process, allowing you to specify what should be done rather than how. Thus, you may use the .reduce() method on the array to reduce every element to a final value by returning the sum within the call back.

[Source](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/pig-latin)

__code Implementation:__ 

1. Imperative Approach

We start by converting the received string str to lowercase. This is to prevent any casing related errors during comparison(“a” does not equal “A”).

```js
    // Convert string to lowercase
    str = str.toLowerCase()
```

Next, we initialize two variables:

```js
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
```

vowels - containing the five English vowels
vowelIndex - for storing the index at which the first vowel in the word is found. It is initialized to 0.

We use an if…else statement to check if the first letter of the word can be found within our vowels array by calling the .includes() method on the array while passing it the first letter of the string str[0]. If it is found, this returns true, which implies that the first letter is a vowel. Hence, we simply add "``way``" to the end of the string and return the result as the Pig Latin equivalent.


```js
    if (vowels.includes(str[0])) {
        // If first letter is a vowel
        return str + "way";
    } else {
        ...
    }
```

If the statement evaluates to false, it signifies that the starting character is a consonant. Hence, we use a for…of loop to iterate through the string to identify the position of the first vowel. When we locate the first vowel, we use the .indexOf() method to retrieve it’s position in the string and store it into the variable vowelIndex. After this step we terminate the loop using the break statement.

```js
    // If the first letter isn't a vowel i.e is a consonant
        for (let char of str) {
            // Loop through until the first vowel is found
            if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = str.indexOf(char);
                break;
            }
        }
```

At the last line, we use the .slice() method to manipulate the string to generate the Pig Latin equivalent.

```js
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
```

2. Declarative Approach

In this approach, we implement a very concise solution to this challenge by combining the .replace() method and regular expressions to transform the received string into its Pig Latin equivalent.


Our solution comprises mainly of two parts as analyzed below:

```js
 str.replace(/^([aeiouy])(._)/, '$1$2way')
```

The first .replace statement specifies a replacement to be carried out if the word begins with a vowel. This is specified in the first bracket within the_ *.replace()* method call i.e *([aeiou])*. The second bracket *(.*)* refers to every other character after the vowel. Thus, the expression specifies a pattern for words beginning with a vowel and followed by anything else. When this case is matched, a new string in the format of '``$1$2way``' is generated and used to replace the original srtring. $1 here refers to the first bracket and $2, the second bracket. This means that we simply take the word as it was and affix "``way``" to the end.

```js
 str.replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
```

The second .replace statement specifies that if the word does not start with a vowel i.e ^([aeiouy]+), and is followed by anything else (``*.*)*, it should be replaced with a string formatted in the order '$2$1ay``'. The plus sign in ^([aeiouy]+) caters for a situation where there is a consonant cluster. Thus it represents every non-vowel character at the start of the word. '$2$1ay' generates the new string in the order of remaining characters + consonant cluster + '``ay``'. This gives the Pig Latin equivalent.

```js
function pigLatin_declarative(str) {
    return str
        .replace(/^([aeiouy])(._)/, '$1$2way')
        .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}
```

Note that we chain both .replace() methods in succession such that both cases are tested and only the one that matches will be evaluated further.

[Source](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/pig-latin)


<hr>
<hr>

<b>7. Deep Comparison </b>

Comparing objects can be troublesome, not to mention multi-dimensional objects/arrays. Here is something simple to help.

__The challenge:__ <p> - JS Objects, contrary to the way we perceive it, are simply pointers to the data stored, rather than the actual data itself. Thus, to compare objects/arrays a and b we cannot just use normal comparison operators.</p> 
```js 
a === b //false
```
<p> - Use of multidimensional objects/arrays is possible, making it difficult to compare simply by iteration since we don't know the depth of a value. </p>

<p> - Different data types like Dates and undefined must also be taken into consideration. <p>
 
 <p>Given the above, return a boolean signifying whether a and b are equivalent in content. </p>

__Algorithmic Thinking:__ <p>As we would be comparing each item contained in the objects, a loop may be the first instinct to solving it. However, with the potential of multidimensional iterables, we would have to disect nested arrays in the same way when we encounter them. A combination of iteration and recursion is therefore necessary. So for each item of the array a data type check is necessary as well, to allow execution of a relevant comparison.
 
 Breaking it down:
 * check if ```a === b```
 * check if ```a``` and ```b``` are both iterable
 * iterate over ```a``` using keys and call deepCompare recursively
</p>


__code Implementation:__ <p> 

Firstly, we'll do the most simple check of ```a === b``` to avoid unnecessary complexity. This will process all of the equal literal values for us.

```js 
if(a === b) return true
```

Then comes the interesting part! There are several data types we need to look out for: Objects, Arrays(which JS treats as an object), and Dates(which is also treated as an object!), thus all we have to do is check if both a and b are of type object. If not, we can just return false as they didn't pass the ```a === b``` test.

```js 
if(typeof a === "object" && typeof b === "object")...
```

Note that we use ```===``` here to differentiate between data types strictly.

Next, we can process the dates first, as that doesn't require iteration. Make sure to compare ```Date.valueOf()``` instead of the date object itself.

```js 
if(a instanceof Date && b instanceof Date) return a.valueOf() === b.valueOf() 
```

Lastly, by taking the keys of the iterables we can compare the length of ```a``` and ```b```, then make use of built-in Array.some method to check if any values of the two iterables don't match.

```js
//get keys/index of object/array a
const keysA = Object.keys(a)

//make sure a and b are the same length
if(keysA.length !== Object.keys(b).length) return false
   
//Array.some() iterates through the values in an array and stops executing nested code until there is one that returns true
//in this case that would be when there is one different value between a and b
return !keysA.some( key => { 
  //run deepCompare recursively
  return !deepCompare(a[key], b[key])
})
 ```


Put it all together, and we have

```js
const deepCompare = (a, b) => {
  if(a === b) return true

  if(typeof a === "object" && typeof b === "object")
  {
    if(a instanceof Date && b instanceof Date) return a.valueOf() === b.valueOf()
    else 
    {
      const keysA = Object.keys(a)
      if(keysA.length !== Object.keys(b).length) return false
      return !keysA.some( key => {
        return !deepCompare(a[key], b[key])
      })
    }
  }
  else return false
}

deepCompare(1, 2) 
//false

deepCompare({"first": 1, "second": 2}, {"first": 1, "second": 2})
//true

deepCompare([1, "2", 3.0], [1, "2", 3])
//false

const arr = [1, 2, "3", [{4: "5", 6: 7}, 8.0, new Date(), undefined]]
deepCompare(arr, [1, 2, "3", [{4: "5", 6: 7}, 8.0, new Date(), undefined]]) 
//true

  ```
  
It's that simple! Hope this helps.
</p>
<hr>
<hr>


=======
<b>8. Binary Search Tree </b>  
Building, traversing or finding values in Binary Search Trees

__The challenge:__ <p> 

The challange is to build a Binary Search Tree, traverse across the tree or find a value in the BST using JavaScript Language.  
Rather than dealing with complex problem statements on Binary Search Trees, this program focuses on providing a clean overview of how to Build a Binary Tree using the concepts of Object Oriented Programming in JavaScript Language.

The functions that have been implemented in the program are as follows:

```js
// 1. For adding new value in the Binary Search Tree

add(val) // val is the value passed as a parameter to be added in the BST

// 2. For Inorder Traversal of the BST

inorder_traversal() // User calls this function
inorder(temp)  // helper function

// 2. For Preorder Traversal of the BST

preorder_traversal() // User calls this function
preorder(temp)  // helper function

// 2. For Postorder Traversal of the BST

postorder_traversal() // User calls this function
postorder(temp)  // helper function
```
</p>


__Algorithmic Thinking:__ <p> 

1. **_Building the tree:_**  
A Binary Search Tree is a Tree Data Structure such that every node of the tree has less than or equal to 2 children (namely left and right), such that every single node holding values, smaller than a Node X, are to the left of Node X, whereas all nodes holding values greater than a Node X are to the right of Node X.  

                                   Node X  
                             (Storing val = 5)
                                   /   \  
                                  /     \  
                       This branch       This branch  
                         has nodes       has nodes  
                            having       having  
                           val < 5       val > 5

On similar grounds, here is an example of a Binary Search Tree:

                                     5
                                   /   \
                                  2     7
                                 / \   / \
                                1   3 6   9

Hence this is what has to be taken care of while building a BST!  

We can use a recursion algorithm to build a tree:

    1. For every node: Check if to-be-added value is equal to the value that the node stores. If this is true, then we increase the count of that Node.  
    
    2. Else If to-be-added value is smaller than the node value then we go to the left subtree.  
    
    3. Else (to-be-added value is greater than node value) we go to the right subtree.


2. **_Inorder Traversal:_**  

This traversal ensures that the left subtree is printed before the root node, and the right subtree is printed after the root node.

3. _**Preorder Traversal:**_  

This traversal ensures that the root node is printed before the left subtree and right subtree.

4. _**Postorder Traversal:**_  

This traversal ensures that the root node is printed in the end, that is, after left subtree and right subtree gets printed.

5. **_Finding a value in the tree:_**  

This problem can be conquered using a recursion logic:  

    1. If value of the node is equal to to-be-founded value, then return the count of the node.  
    
    2. Else if to-be-founded value is smaller than value of the root node, then go to left subtree.  
    
    3. Else (to-be-founded value is greater than value of the root node), go to right subtree.  
    
    4. if root node is NULL, then to-be-founded value does not exist in the tree, hence return 0.

</p>


__Code Implementation:__ <p>

For complete code check out the Binary Search Tree Folder, here I am showing snippets of code on which the algorithms are based.

0. **_The Node Class_**

```js
class Node{
    constructor(val){
        this.val = val         // storing value
        this.left = null       // address of the left child
        this.right = null      // address of the right child
        this.count = 1         // count of the occurence of this.val in the node
    }
}
```

1. **_Building the tree:_**  

```js
  if (val == temp.val){
    temp.count += 1
    return
  }
  else if (val < temp.val){
    temp = temp.left
  }
  else{
    temp = temp.right
  }
```

2. **_Inorder Traversal:_**  

```js
 // printing the left subtree
 this.inorder(temp.left)
 
 // printing value of the node for all the counts
 for (let index = 0; index < temp.count; index++) {
 console.log(temp.val + " ")
 }
 
 // printing the right subtree
 this.inorder(temp.right)
 
 return
```

3. _**Preorder Traversal:**_  

```js
 // printing value of the node for all the counts
 for (let index = 0; index < temp.count; index++) {
 console.log(temp.val + " ")
 }
 
 // printing the left subtree
 this.inorder(temp.left)
 
 // printing the right subtree
 this.inorder(temp.right)
 
 return
```

4. **_Postorder Traversal:_**  

```js
 // printing the left subtree
 this.inorder(temp.left)
 
 // printing the right subtree
 this.inorder(temp.right)
 
 // printing value of the node for all the counts
 for (let index = 0; index < temp.count; index++) {
 console.log(temp.val + " ")
 }
 
 return
```

5. **_Finding a value in the tree:_**  

```js
if(val == temp.val){ // if val is equal to current node value
  return temp.count
}
else if (val < temp.val){ // if val is less than current node value
  return this.find_val(val, temp.left)
}
else{ // if val is greater than current node value
  return this.find_val(val, temp.right)
}
```
</p>

<hr>
<hr>

<b>9. Numbers to Roman Numerals </b>

__The challenge:__ <p>Convert a regular number to a Roman Numeral</p>


__Algorithmic Thinking:__ <p>You want to convert a number to a roman numeral... the trick to this problem is to kind of "split" the problem to individual digits. Instead of doing some weird convoluted solution, you should see that each digit would map to a string value and they only "add up".

**Example**
- DXXXII = 532
    - Now, let's think about this example step by step. Let's take 500 out of 532. What is 500 in roman numeral? `500 = D`, right? We "append" that to our "string". now we evaluate 32... so 32 is essentially 30 + 2, so we take out 30 this time. `30 = XXX`, then append to "string". And finally, we have 2... you can't really "destructure" 2 any further so we have `2 = II`, and then append to string...
    - now we have `"D" + "XXX" + "II" = 532`, YAY!!!
</p>


__code Implementation:__ <p>

__Example1:__

```javascript
// A regular number
const num = 3;

// convert a number from 0 - 3000 to a roman numeral  
function convertToRomanNumeral(number) {
    // 0, 1, 2, 3, 4, ..., 9
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    // 0, 10, 20, 30, 40, ..., 90
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    // 0, 100, 200, 300, 400, ..., 900
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    // 0, 1000, 2000, 3000
    const thousands = ['', 'M', 'MM', 'MMM']

    // get the value of digit in the thousandth postion (e.g. 3576 => 3) and accesses at index of the value of the digit (e.g. 3576 => thousands[3] = 'MMM')
    const thousandthDigit = thousands[Math.floor(number / 1000)];

    // get the value of digit in the hundredth postion (e.g. 3576 => 5) and accesses at index of the value of the digit (e.g. 3576 => hundreds[5] = 'D')
    const hundredthDigit = hundreds[Math.floor((number % 1000) / 100)];

    // get the value of digit in the tenth postion (e.g. 3576 => 7) and accesses at index of the value of the digit (e.g. 3576 => tens[7] = 'LXx')
    const tenthDigit = tens[Math.floor((number % 100) / 10)];

    // get the value of digit in the oneth postion (e.g. 3576 => 6) and accesses at index of the value of the digit (e.g. 3576 => ones[6] = 'VI')
    const onethDigit = ones[Math.floor((number % 10) / 1)];

    // combines the individual strings into one and returns...
    return thousandthDigit + hundredthDigit + tenthDigit + onethDigit;
}

console.log(convertToRomanNumeral(40));

/*
    I = 1
    V = 5
    X = 10
    L = 50
    C = 100
    D = 500
    M = 1000

    examples...
    II = 2
    III = 3
    IV = 4
    VI = 6
    IX = 9

    The algorithm or the plan
*/
```
__Example2:__

```js
/* Numbers to Roman Numerals using maps */

const roman = new Map(
    [
        [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'],
        [5, 'V'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'],
        [10, 'X'], [20, 'XX'], [30, 'XXX'], [40, 'XL'], 
        [50, 'L'], [60, 'LX'], [70, 'LXX'], [80, 'LXXX'], [90, 'XC'],
        [100, 'C'], [200, 'CC'], [300, 'CCC'], [400, 'CD'], 
        [500, 'D'], [600, 'DC'], [700, 'DCC'], [800, 'DCCC'], [900, 'CM'],        
        [1000, 'M'] , [2000, 'MM'], [3000, 'MMM']
    ]
);

function convertToRomanNumeralUsingMaps(number) {
    const thousandthDigit = Math.floor(number / 1000);
    const hundredthDigit = Math.floor((number % 1000) / 100);
    const tenthDigit = Math.floor((number % 100) / 10);
    const onethDigit = Math.floor((number % 10) / 1);

    return roman.get(thousandthDigit * 1000) + roman.get(hundredthDigit * 100) + roman.get(tenthDigit * 10) + roman.get(onethDigit * 1);
}

console.log(convertToRomanNumeralUsingMaps(3999));
```

It's very simple ones you realize it.
</p>
<hr>
<hr>

<b>10. Caesar Cipher </b>

__The challenge:__ <p> Given a string and a shift key, encrypt the string through Caesar Cipher.</p>

__Algorithmic Thinking:__ <p> This is a very simple algorithm that requires only a tiny bit of prerequisite knowledge regarding ASCII, and also some discretion when processing possible over 26 keys. Basically we just need to know that all chracters are stored as numbers in computer memory according to the ASCII standard: https://www.w3schools.com/charsets/ref_html_ascii.asp. And that the modulus function is our friend :)</p>


__code Implementation:__ <p>
 
So first of all we need to split the string into characters to be processed individually and convert it to ASCII codes. Then we must check whether the character is either uppercase or lowercase(everything else should be kept the same) then add the key to it accordingly. But it is not a simple matter of simply doing ```char + key``` because for example, by shifting X by 3 we should get A. However, X(88) + 3 equals to 91 which is "\[". Thus what we should be doing is:
 
```js
// js has built in String.charCodeAt() method to help us get the ASCII code 
// https://www.w3schools.com/jsref/jsref_charcodeat.asp
// the reverse is String.fromCharCode()
const char = charCodeAt("X")
const key = 3
```

__code Implementation:__ <p> </p>

<hr>
<hr>

<b>11. Lexicographically equal or not </b>

<p>Two strings are lexicographically equal if they are the same length and contain the same characters in the same positions.</p>

__The challenge:__ <p>Given two strings of text, write an algorithm to check whether the strings are lexicographically equal or not.
</p>

```js
 check_lexicographic("javascript","javascript")
 // should return "true"
```

__Algorithmic Thinking:__ <p>
* The function will recieve two parameters, the two strings of text which we have to compare. <br>
* Now, compare the length of the strings and the positions of each character in the strings.<br>
* Return whether they are lexicographically equal or not. </p>


__code Implementation:__ <p>

Code implementation is much strait forward. You just need to compare both the strings on the basis of their length and the positions of characters in the strings. <br>
>1.Compare length <br>
    2.Compare positions 
    
*1.Compare length:* <br>
    
* Check whether the given strings has same lenght or not by calling "check_length()" function.

* There is a built-in method "length". Using "str.length" you can find length of string "str".

```js
 var str = "Hello World!";
 var n = str.length;
 // should return "12"
```

*2.Compare positions:*
<br>

* Check whether the position of characters in the 2 given strings are same.
* Convert the 2 strings into array of their character, for doing this we can use "split()" method. <br>
* The *.split()* method is used to split a string into an array of characters. It receives one argument which specifies the separator that determines where every split occurs.

* Using for loop we're gonna check every character of one string with the corresponding character of another string. <br> 
* Have a look at the snippet below, you will get an idea.


```js
 for(let i=0;i<arr_str1.length;i++){
            if (arr_str1[i]===arr_str2[i]){
                count++;
            }
        }
```

* Here, the "count" variable is initialised with "0" and it will increase by "1" whenever the characters are same.


* Now, the last step is to check whether "count" variable is equal to the lenght of the strings or not, they are equal only when, when each and every characters of the strings are equal to their corresponding ones.


```js
 if (count===arr_str1.length){
            return true;
        }
        else{
            return false;
        }
```


</p>



<hr>
<hr>


<b>12. Fizz Buzz </b>

<p>
 
This is a relatively easy algorithm among the previously listed algorithms.

__The challenge:__ <p>Given a number as an input, print out every integer from 1 to that number. <br> 
 However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; <br>
 when it’s divisible by both 2 and 3, print out “Fizz Buzz”.</p>


__Algorithmic Thinking:__


For this algorithm, first we will create a function which checks whether a number is whole number or not. 
It will be useful while checking whether a no. is divisible by 2 or 3 or neither.

Next, we will take the number submitted by the user and loop over from 1 to that number.

If the iterating number (i) is divisible by 2 and 3, it will print out 'Fizz Buzz', if that is divisible by only 2, 'Fizz' will be printed out
while on being divisible by 3, 'Buzz' will be printed out and at last, if its not divisible by 2 and 3, 
the iterating number (i) itself will be printed out.


__code Implementation:__ 

We start by creating a function whole_num_check to check whether a given number n is a whole number or not.

```js

// function for checking whole number

function whole_num_check(n) 
{
    const num_test = (n - Math.floor(n) ===0); 
    // 3.40 - 3 = .40 === 0? false

    return num_test; //true or false
}

```
We select a html button tag with class 'submitBtn' and add an event listener to a function named 'fizzbuzz'.

```js

// click event 
document.querySelector('.submitBtn').addEventListener('click', fizzbuzz);

```

Now, we create a function 'fizzbuzz'.

```js

function fizzbuzz() {

 //code here

};

```

Inside the fizzbuzz function, we select the user's input value and convert it into a number. Also, we select the div tag to print text.

```js

// getting the number value

const number = parseInt(document.querySelector('input').value);

let textDiv = document.querySelector('.integers');

```
We loop over from 1 to the user input and check if the divisiblity of the interating number i by 2 and 3, using the whole_num_check function. We insert text in DOM accordingly.

```js
// loop to print the integers 
for(let i=1; i<= number; i++) {
    
    if(whole_num_check(i/2) && whole_num_check(i/3)) {

        textDiv.textContent += '   Fizz Buzz ';

    }
    else if (whole_num_check(i/2)) {
      
        textDiv.textContent += '   Fizz ';

    }
    else if (whole_num_check(i/3)) {
     
        textDiv.textContent += '   Buzz ';
        
    };
    else {
        textDiv.textContent += i;

    }

};

```
</p>

<hr>
<hr>

<b>12. Fizz Buzz </b>

<p>
 
This is a relatively easy algorithm among the previously listed algorithms.

__The challenge:__ <p>Given a number as an input, print out every integer from 1 to that number. <br> 
 However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; <br>
 when it’s divisible by both 2 and 3, print out “Fizz Buzz”.</p>


__Algorithmic Thinking:__


For this algorithm, first we will create a function which checks whether a number is whole number or not. 
It will be useful while checking whether a no. is divisible by 2 or 3 or neither.

Next, we will take the number submitted by the user and loop over from 1 to that number.

If the iterating number (i) is divisible by 2 and 3, it will print out 'Fizz Buzz', if that is divisible by only 2, 'Fizz' will be printed out
while on being divisible by 3, 'Buzz' will be printed out and at last, if its not divisible by 2 and 3, 
the iterating number (i) itself will be printed out.


__code Implementation:__ 

We start by creating a function whole_num_check to check whether a given number n is a whole number or not.

```js

// function for checking whole number

function whole_num_check(n) 
{
    const num_test = (n - Math.floor(n) ===0); 
    // 3.40 - 3 = .40 === 0? false

    return num_test; //true or false
}

```
We select a html button tag with class 'submitBtn' and add an event listener to a function named 'fizzbuzz'.

```js

// click event 
document.querySelector('.submitBtn').addEventListener('click', fizzbuzz);

```

Now, we create a function 'fizzbuzz'.

```js

function fizzbuzz() {

 //code here

};

```

Inside the fizzbuzz function, we select the user's input value and convert it into a number. Also, we select the div tag to print text.

```js

// getting the number value

const number = parseInt(document.querySelector('input').value);

let textDiv = document.querySelector('.integers');

```
We loop over from 1 to the user input and check if the divisiblity of the interating number i by 2 and 3, using the whole_num_check function. We insert text in DOM accordingly.

```js
// loop to print the integers 
for(let i=1; i<= number; i++) {
    
    if(whole_num_check(i/2) && whole_num_check(i/3)) {

        textDiv.textContent += '   Fizz Buzz ';

    }
    else if (whole_num_check(i/2)) {
      
        textDiv.textContent += '   Fizz ';

    }
    else if (whole_num_check(i/3)) {
     
        textDiv.textContent += '   Buzz ';
        
    };
    else {
        textDiv.textContent += i;

    }

};

```
</p>

<hr>
<hr>

<b>13. Shortest Path(Dijkstras) </b>

<p>
This is a javascript implementation of dijkstra's algorithm, to find the shortest path between two nodes in a graph.The graph is represented as an adjacency list. The algorithm is implemented using a min heap.

__The Challenge:__

Find the shortest path between two nodes in a graph.


__Algorithmic Thinking:__

1. Initialize the distance of all nodes to infinity.
2. Initialize the distance of the source node to 0.
3. Insert all the nodes into a min heap.
4. While the heap is not empty, do the following:
5. Extract the node with the minimum distance from the heap.
6. For each neighbor of the extracted node, do the following:
7. If the distance to the neighbor is greater than the distance to the extracted node plus the weight of the edge between them, then update the distance of the neighbor.
8. Insert the neighbor into the heap.
9. Repeat steps 4-8 until the heap is empty.
10. The distance array now contains the shortest distance from the source node to all other nodes in the graph.

__Implementation:__

It can be implemented using a min heap. [Using class or function], for this implementation, I will use the functional approach to implement the min heap

```js
const readline = require('readline');

/**
 * Explanation : This is a javascript implementation of dijkstra's algorithm
 *              to find the shortest path between two nodes in a graph.
 *             The graph is represented as an adjacency list.
 *              The algorithm is implemented using a min heap.
 *
 *
 * Sample Input :
 *  5 5
 * 1 2 1
 * 1 3 2
 * 2 3 1
 * 2 4 2
 *
 * Sample Output :
 * 1 2 1
 * 2 3 1
 * 3 4 2
 *
 * Time Complexity : O(ElogV)
 * Space Complexity : O(V)
 *
 *
 * Algorithm Thinking :
 *  1. Initialize the distance of all nodes to infinity.
 * 2. Initialize the distance of the source node to 0.
 * 3. Insert all the nodes into a min heap.
 * 4. While the heap is not empty, do the following:
 * 5. Extract the node with the minimum distance from the heap.
 * 6. For each neighbor of the extracted node, do the following:
 * 7. If the distance to the neighbor is greater than the distance to the
 * extracted node plus the weight of the edge between them, then update the
 * distance of the neighbor.
 * 8. Insert the neighbor into the heap.
 * 9. Repeat steps 4-8 until the heap is empty.
 * 10. The distance array now contains the shortest distance from the source
 * node to all other nodes in the graph.
 * 11. The algorithm is complete.
 *
 * Implementation :
 * It can be implemented using a min heap. [Using class or function]
 *
 * for this implementation, we will use the functional approach to implement the min heap
 */


const PriorityQueue = () => {
  const heap = [];

  const swap = (i, j) => {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  };

  const parent = (i) => Math.floor((i - 1) / 2);

  const left = (i) => 2 * i + 1;

  const right = (i) => 2 * i + 2;

  const heapify = (i) => {
    const l = left(i);
    const r = right(i);
    let smallest = i;

    if (l < heap.length && heap[l].weight < heap[smallest].weight) {
      smallest = l;
    }

    if (r < heap.length && heap[r].weight < heap[smallest].weight) {
      smallest = r;
    }

    if (smallest !== i) {
      swap(i, smallest);
      heapify(smallest);
    }
  };

  const insert = (node, weight) => {
    heap.push({ node, weight });
    let i = heap.length - 1;

    while (i !== 0 && heap[parent(i)].weight > heap[i].weight) {
      swap(i, parent(i));
      i = parent(i);
    }
  };

  const extractMin = () => {
    if (heap.length === 1) {
      return heap.pop().node;
    }

    const root = heap[0].node;
    heap[0] = heap.pop();
    heapify(0);

    return root;
  };

  const isEmpty = () => heap.length === 0;

  return {
    insert,
    extractMin,
    isEmpty,
  };
}
```
__Write dijkstra function:__

```js

const dijkstra = (graph, source) => {
  const dist = new Array(graph.length).fill(Infinity); // Initialize the distance of all nodes to infinity.
  dist[source] = 0; // Initialize the distance of the source node to 0.

  const pq = PriorityQueue(); // Insert all the nodes into a min heap.
  pq.insert(source, 0); // Insert the source node into the heap.

  while (!pq.isEmpty()) {  // While the heap is not empty, do the following:
    const u = pq.extractMin(); // Extract the node with the minimum distance from the heap.

    for (let i = 0; i < graph[u].length; i += 1) {  // For each neighbor of the extracted node, do the following:
      const v = graph[u][i].node; // For each neighbor of the extracted node, do the following:
      const weight = graph[u][i].weight; // For each neighbor of the extracted node, do the following:

      if (dist[v] > dist[u] + weight) {   // If the distance to the neighbor is greater than the distance to the extracted node plus the weight of the edge between them, then update the distance of the neighbor.
        dist[v] = dist[u] + weight; 
        pq.insert(v, dist[v]); // Insert the neighbor into the heap.
      }
    }
  }

  return dist;
}
```

__Create graph variable consisting all nodes and weight__

```js

const graph = [
  [{ node: 1, weight: 1 }, { node: 2, weight: 2 }],
  [{ node: 0, weight: 1 }, { node: 2, weight: 1 }, { node: 3, weight: 2 }],
  [{ node: 0, weight: 2 }, { node: 1, weight: 1 }, { node: 3, weight: 1 }],
  [{ node: 1, weight: 2 }, { node: 2, weight: 1 }],
  [{ node: 5, weight: 1 }],
  [{ node: 4, weight: 1 }],
  [{ node: 7, weight: 1 }, { node: 8, weight: 2 }, { node: 9, weight: 3 }],
  [{ node: 6, weight: 1 }, { node: 8, weight: 1 }],
];

const dist = dijkstra(graph, 6);

console.log(dist);

```
</p>


<hr>
<hr>


<b>14. Plus Minus </b>

In coding interviews we are asked Math-related problems. Hope this helps in any way. 

__The challenge:__ <p> - Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal. The function will not return a value; just prints to the console.</p> 

```js 
nums = [1, 1, 0, -1, -1] 
output = 
0.400000
0.400000
0.200000
```

__Algorithmic Thinking:__ <p>We will iterate over the input array once and keep track of the number of positive, negative and zeros. After we know how many of each we have we can perform the Math operation to divide by the length of the array and print out to 6 decimals. 
</p>


__code Implementation:__ <p> 
1. Edge case: first need to check if input array contains any elements. If no elements we just print out 0. 

    ```js 
    if(nums.length === 0) console.log(0); 
    ```

2. Initialize variables to keep track of the positive, negative and zeros. We start all at 0 and progressively increment its count.

    ```js 
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    ```

3. Iterate over input array once (i starts at 0 and runs until the end). 

    ```js 
    for(let i = 0; i < nums.length; i++) {
        // next code 
    }; 
    ```

4. Perform conditional statement and check if current element we're visiting is positive, negative or zero. 

    If current element is positive ? we increase count of positive. 

    If current element is negative ? we increase count of negative. 

    If current element is zero ? we increase count of zeros.

    ```js
    // check for positive
    if(nums[i] > 0) {
        positive++; 
    // check for negative
    } else if(nums[i] < 0) {
        negative++; 
    // check for zeros
    } else {
        zeros++; 
    }; 
    ```

5. After running the for loop we will begin to print out the ratios of positive, negative and zeros, with 6 decimal places. 

    Notes: 

    a) to get the ratio we will divide it by the length of input array

    b) use ```.toFixed(6)``` method to specify 6 decimal places

    ```js
    console.log((positive/nums.length).toFixed(6); 
    console.log((negative/nums.length).toFixed(6); 
    console.log((zeros/nums.length).toFixed(6); 
    ```

6. Altogether... 

    ```js
    function plusMinus(nums) {
        // edge case: if nums array is empty we return a 0
        if(nums.length === 0) console.log(0); 
        let positive = 0;
        let negative = 0;
        let zeros = 0; 
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) {
                positive++; 
            } else if(nums[i] < 0) {
                negative++; 
            } else {
                zeros++; 
            }; 
        };
        console.log((positive/nums.length).toFixed(6)); 
        console.log((negative/nums.length).toFixed(6)); 
        console.log((zeros/nums.length).toFixed(6)); 
    }; 

    console.log(plusMinus([1, 1, 0, -1, -1])); 
    // 0.400000
    // 0.400000
    // 0.200000
    ```
</p>


<hr>
<hr>