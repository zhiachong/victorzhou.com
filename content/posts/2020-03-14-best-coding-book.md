---
title: Best Book for Coding Interviews
date: '2020-03-14T12:00:00.000Z'
template: 'post'
draft: false
slug: '/blog/best-book-for-coding/'
img: './media-link/2020-01-01/how-to-be-successful.png'
isML: false
isWeb: true
isSeries: false
category: 'Interview Prep'
tags:
  - 'How To'
  - 'Interview Prep'
  - 'Resume'
  - 'Python'
  - 'Job Search'
description: 'Is this the best book for coding interview prep? I say...'
guestAuthor: ''
guestCoAuthor: ''
guestAuthorLink: ''
canonical: https://medium.com/@zhiachong/how-to-become-a-rockstar-engineer-e785b09cc104
prev: '/blog/how-to-write-a-great-resume/'
next: '/blog/how-to-write-a-great-resume/'
discussLinkTwitter: ''
discussLinkHN: ''
discussLinkReddit: ''
popularity: 1004
---

# Is This The Best Book for Coding Interview Preparation?

[![Zhia Chong](https://miro.medium.com/fit/c/56/56/0*EZPINFjFIrRRp-9G.jpg)](https://medium.com/@zhiachong?source=post_page-----33264fa82b72--------------------------------)[

#### Zhia Chong

](https://medium.com/@zhiachong?source=post_page-----33264fa82b72--------------------------------)[

#### Mar 14·6 min read

](https://medium.com/@zhiachong/is-this-the-best-book-for-coding-interview-preparation-33264fa82b72?source=post_page-----33264fa82b72--------------------------------)

<img alt="Image for post" class="dv gx dw gy w" src="https://miro.medium.com/max/3456/1\*aEcUKEZzN7l6D6W9HnMeOw.png" width="1728" height="2304" srcSet="https://miro.medium.com/max/552/1\*aEcUKEZzN7l6D6W9HnMeOw.png 276w, https://miro.medium.com/max/1000/1\*aEcUKEZzN7l6D6W9HnMeOw.png 500w" sizes="500px"/>

Technical coding interviews are notoriously difficult — almost borderline quiz-like for those unprepared. It can sometimes be a daunting task to navigate all the technical coding preparation resources available online, and one might ask: _is there a single book/resource that best prepares for technical coding interviews?_

_Best_, is relative of course in this case. If you’re looking for a book that will teach you how to solve any coding question, guides you on how to design something like Instagram that scales to a billion users, and makes your sandwich while you’re at it, then this book definitely isn’t it. But for polishing your technical chops and making sure you’re well prepared to face the programming challenges in an interview, this book comes darn close to it.

In today’s book review, I go over in _detail_ the **good** and the **bad** of one of the top-selling books on Amazon for technical coding interviews: [Elements of Programming Interviews](https://amzn.to/2Q6m9xB) (a.k.a _EPI_, and it’ll be referred to as such in the rest of this article).

<img alt="Image for post" class="dv gx dw gy w" src="https://miro.medium.com/max/2556/1\*HrabnKvr0v48ijl-\_Z1n1Q.png" width="1278" height="1640" srcSet="https://miro.medium.com/max/552/1\*HrabnKvr0v48ijl-\_Z1n1Q.png 276w, https://miro.medium.com/max/1104/1\*HrabnKvr0v48ijl-\_Z1n1Q.png 552w, https://miro.medium.com/max/1280/1\*HrabnKvr0v48ijl-\_Z1n1Q.png 640w, https://miro.medium.com/max/1400/1\*HrabnKvr0v48ijl-\_Z1n1Q.png 700w" sizes="700px"/>

Elements of Programming Interviews

# What is this book about?

EPI is a book that focuses on preparing for technical software engineering interviews that are commonly asked at tech companies. If you’re looking for a position as a software engineer, this book will have something for you.

EPI was written by 3 folks who’ve worked across some of the best-known tech companies in the world, the likes of Facebook, Google, Uber, and Microsoft. The authors have very strong technical backgrounds, and this is evidenced by the technical focus in the contents of the book.

The book itself is highly technical in nature and deep dives into fundamental computer science. The types of technical coding questions vary widely from string manipulation to graph traversals. The book also offers concrete tips and tricks for solving specific types of coding problems, and includes a cheatsheet to help ace technical questions.

# The Good

In short: EPI is a highly technical book that is well suited for anyone looking to prepare for technical coding questions that revolve around data structures and algorithms.

The things that I particularly enjoyed:

- has many questions (300+) with detailed answers, compared to another popular book (CTCI) that only has 170+
- comes in 3 different versions: Java, Python and C++. Suitable for people who want to use language of their choice
- has a great cheatsheet (Chapter 4) that summarizes all the techniques and data structures you’d need
- covers in detail every single data structure you need, algorithms you should know, techniques you should know in a simple, understandable format
- covers relevant technical topics you might get asked in a coding interview, like what is TCP/IP, how Internet works, how to capture relationships between different entities in schema design

Those are some of the top-level points I enjoyed about the book. What I _really_ enjoy is that the answers are very, _very_ well constructed. The answers often take a brute force/simplistic approach to the problems. The authors then provide concrete examples of how you can improve on the brute force approach. With each iteration, the authors point out where the limitations are and how you can solve them with incremental optimizations.

For example, EPI explains how to detect a cycle in a linked list. The first approach: use a hash map to store every node you traverse, and then check against the hash map to see if you’ve seen it. This does the job, albeit it takes additional space (so-called O(N) space complexity and O(N) time complexity). EPI points out that the additional space is not required, and suggests that detecting cycles in a linked list can be done without additional space by manipulating the pointers instead. EPI takes that same approach in explaining almost all the questions, so everyone can understand how to get from a rough solution to an optimized one.

For someone who’s rusty and looking to start preparing for interviews, EPI does a great job — every chapter starts off with a summary of the data structure or algorithm that you will learn, why the data structure is special, what are the strengths/weaknesses of said data structure and what you need to take note of.

In short, EPI is the notebook I wished I had when I was preparing for technical interviews. This is the book I’d give a friend who’s looking to prepare for technical interviews — aside from my best-selling [interviewing course](https://docs.google.com/document/d/1ppHix7p9knzaal-Edn3GHQMcx1MM_USY6zPcsbBpR3U/edit) (Acing The Tech Interview), which prepares any candidate for the entire interview experience from resume preparation, behavioral questions to how to solve coding problems creatively. Classes fill up fast, so book your slot [here](https://zhiachong.com/courses/) today.

# The Bad

EPI has its downsides as well. Being a highly technical book, this means the book has its focus set on coding questions.

This, inadvertently, means that the book falls short in terms of other aspects of the technical interview process which are, arguably, just as important — offer negotiation, how to write a persuasive resume, what to do when you get an offer, how to handle behavioral questions etc.

In addition, the book goes into deep detail with data structures and algorithms, but only provides a high-level overview, to the point of being confusing due to lack of context, of various other important concepts like SQL, NoSQL, how to design a proper schema for a simple application and more. The book sort of covers SQL design by explaining how to structure tables to capture entity relationships, but it does not explain more about JOINs or how to query the tables properly. I think understanding the _what_ (SQL tables) is just as important as the _how_ (queries).

EPI also has a chapter on systems designs, but the chapter does not cover distributed designs. I would’ve liked it better if the book had described in more details what distributed systems are or where to find more information about these.

# Is this a good book for me?

If you have ~\$40 to spare and a big appetite to learn, I’d say so.

The book sells for \$36 on average (there are 3 versions). This book is highly rated on Amazon.com, with an average of 4.53 stars across all 3 versions. The stats are as follows:

On [Amazon.com](https://amzn.to/2Q6m9xB):

<img alt="Image for post" class="dv gx dw gy w" src="https://miro.medium.com/max/3788/1\*hcA7BERAhmwNL-Z9tll1dQ.png" width="1894" height="1114" srcSet="https://miro.medium.com/max/552/1\*hcA7BERAhmwNL-Z9tll1dQ.png 276w, https://miro.medium.com/max/1104/1\*hcA7BERAhmwNL-Z9tll1dQ.png 552w, https://miro.medium.com/max/1280/1\*hcA7BERAhmwNL-Z9tll1dQ.png 640w, https://miro.medium.com/max/1400/1\*hcA7BERAhmwNL-Z9tll1dQ.png 700w" sizes="700px"/>

Versions of EPI on Amazon.com

3 versions (as of March 12):

- Python: 169 ratings 4.3 ave
- Java: 203 ratings 4.6 ave
- C++: 436 ratings 4.7 ave

In aggregate, there were a total of 808 reviews.

Some of the reviews:

> “.. the best algorithm/data structure I ever took”
>
> “the code is of high quality, using meaningful variable names”
>
> “this is a must-have book”

# Now, should you buy it?

I think that **EPI is one of the best resources to prepare for technical coding interviews, bar none.** Regardless of your experience level, there’s something in there for you. I particularly enjoy reading the book for its clear and concise explanations, and I use this book as a reference in my programming course.

If you want all the data structures, algorithms you need to know in a single, easy-to-read book, then EPI is the book for you.

<img alt="Image for post" class="dv gx dw gy w" src="https://miro.medium.com/max/2508/1\*9foCcsPPFO9AiOlnTKpvOw.png" width="1254" height="1606" srcSet="https://miro.medium.com/max/552/1\*9foCcsPPFO9AiOlnTKpvOw.png 276w, https://miro.medium.com/max/1104/1\*9foCcsPPFO9AiOlnTKpvOw.png 552w, https://miro.medium.com/max/1280/1\*9foCcsPPFO9AiOlnTKpvOw.png 640w, https://miro.medium.com/max/1400/1\*9foCcsPPFO9AiOlnTKpvOw.png 700w" sizes="700px"/>

Designing Data Intensive Applications

For distributed systems designs, I recommend looking elsewhere. A good start is [Designing Data Intensive Applications](https://amzn.to/2Q6m9xB).

I love it for the depth and insights, and I recommend it to many students who are taking my [courses](http://bit.ly/interviewcourses) as well.

If you enjoyed this article, consider supporting me on BuyMeACoffee here 🙂 (coffee helps me write): [https://www.buymeacoffee.com/zhiachong](https://www.buymeacoffee.com/zhiachong)

# Resources I Recommend

[Designing Data Intensive Applications](https://amzn.to/33fcvOp) — great resource for learning about distributed systems and how large-scale systems work.

[Acing The Technical Interview](https://docs.google.com/document/d/1ppHix7p9knzaal-Edn3GHQMcx1MM_USY6zPcsbBpR3U/edit) — my best-selling personal coaching course on how to ace technical interviews. We cover resume review, technical coding interview, behavioral questions and more.

[Acing The Distributed Systems Design Interview](https://docs.google.com/document/d/1PeK69h4H82rwKjhactiE_sAIorCcZgXgXTY7k-nXpnE/edit#heading=h.hs0b333nsxch) — my personal coaching course on designing large scale distributed systems. Learn about how to design features like Instagram Stories, Groupon, movie streaming sites like Netflix at scale.
