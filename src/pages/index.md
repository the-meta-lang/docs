---
layout: ../layouts/Layout.astro
title: Meta
description: A programming language for those who want to achieve performance and cleanliness!
section: Getting Started
slug: /
---

Metalang is a compiler writing language that was inspired by Val Schorre's seminal paper [META II, a Syntax-Oriented Compiler Writing Language](https://dl.acm.org/doi/10.1145/800257.808896) written in 1964, and yes, it really shows... 

Although Metalang was originally based on META II, it has since undergone extensive modifications to better suit the needs of modern developers.

With Metalang, you can easily create high performance Compilers. The language features an intuitive syntax and a range of powerful tools. Whether you're an experienced developer or just getting started exploring the world of Compilers, Metalang is a great choice.

Metalang was designed with simplicity and ease-of-use in mind, making it an ideal choice for projects of all sizes. So, if you're looking for a reliable and efficient compiler writing language, Metalang is definitely worth checking out.

```gy
// SECTION: Functions, Generics, Static Typing

// Declare a function that takes a closure as an argument
fn map<T, U>(arr: [T], f: fn(T) -> U) -> [U] {
  let mut result = [];
  for element in arr {
    let mapped_element = f(element);
    result.push(mapped_element);
  }
  return result;
}

// Use the function with a closure
let numbers = [1, 2, 3];
let squared_numbers = map(numbers, |n| n * n);
// Same as using map(numbers, :*)
print(squared_numbers);	
```