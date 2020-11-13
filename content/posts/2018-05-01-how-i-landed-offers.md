---
title: How I Landed Offers from Microsoft, Amazon, and Twitter without an Ivy League degree
date: '2018-05-01T12:00:00.000Z'
template: 'post'
draft: false
slug: '/blog/how-i-landed-offers/'
img: './media-link/2020-01-01/how-to-be-successful.png'
isML: false
isWeb: true
isSeries: false
category: 'How To'
tags:
  - 'How To'
  - 'Interview Prep'
  - 'Resume'
  - 'Python'
  - 'Job Search'
description: 'My experience interviewing at major tech companies in Silicon Valley.'
guestAuthor: ''
guestCoAuthor: ''
guestAuthorLink: ''
canonical: https://medium.com/swlh/how-i-landed-offers-from-microsoft-amazon-and-twitter-without-an-ivy-league-degree-d62cfe286eb8
prev: '/blog/how-to-write-a-great-resume/'
next: '/blog/how-to-write-a-great-resume/'
discussLinkTwitter: ''
discussLinkHN: ''
discussLinkReddit: ''
popularity: 5000
---

<figure>![](https://cdn-images-1.medium.com/max/2600/1*QuyFfwka5D5j7Z2IR4mcCQ.png)</figure>This is for those of you out there who are about to start your job search and who may be worried that you can’t land a top-tier tech job without a Stanford CS degree. Someone told you that you’re not good enough to get a job at Microsoft or Facebook. But I’m here to tell you that you can get that job. Here’s how I did it, and landed my dream job at Twitter.

**10/11/2020**: Read more about my courses [here](https://docs.google.com/document/d/1PeK69h4H82rwKjhactiE_sAIorCcZgXgXTY7k-nXpnE/edit?usp=sharing) to learn how I prepared.

### What this article covers:

- My background
- How I landed interviews with top tech companies in the world: Facebook Google, Amazon, LinkedIn, Microsoft, Twitter, Pinterest, Snapchat, and others.
- How I landed multiple offers as a full-time software engineer
- Learnings from my interview experience
- Subscribe [here](http://eepurl.com/dnt9Sf) for more article updates from me

This will be about ~30 minute read, so grab a coffee/tea and enjoy.

# My Background

I did not graduate from an Ivy league school. I went to a community college in Idaho for two years, and then finished my CS degree in a small Catholic university.

I started learning computer science in my junior year of college, because it sounded fun to me at the time. The only thing resembling a computer I had growing up was a Chinese copycat of Nintendo SNES. Even then, it would break every time I put a tape in it.

To support myself through college, I took multiple part-time jobs like cleaning floors and working stand-up concessions.

When I graduated, I didn’t have a job lined up. I applied to as many big tech companies as I could, and had the good fortune of landing a few phone interviews.

At this point, I didn’t have a single notion of what a technical screen would be like, much less how to prepare for it. I headed into these interviews thinking that the interviewer would ask me what a linked list or binary tree was.

I **didn’t pass** any of those interviews.

# Moving forward

I didn’t delve too much into whether I was good. I knew that I could learn things fast. I just needed an opportunity.

As the saying goes, **cast your net far and wide**. So that’s what I did.

## Hacking my way to a job

What I did next is something I’m particularly proud of. I wrote a simple Python script that scraped job listings on Craigslist with titles containing a list of keywords, and collected the emails in a spreadsheet. For the actual war story, you can read my latest article [here](https://zhiachong.com/2018/05/24/how-i-automated-my-job-search-by-building-a-web-crawler/).

It wasn’t the smartest solution, but people who post on Craigslist are surprisingly accurate with their titles.

Craigslist, however, didn’t like people scraping their website. To work around this, I ran my script through a VPN and had a timer that would pause the script every few minutes or so. It wasn’t perfect, but it worked well enough.

## The Results?

At the end of it, I collected about 500 emails from around San Francisco, Portland, Spokane, and Seattle. I filtered the results by how specific and recent they were, and kept improving it by adding more and more features.

As it turned out, there were a few bots in the market already that crawled Craigslist and sent out automated emails. These were mostly offshore companies that were looking to pitch their company to the US market.

One of my workarounds was that I crafted emails that used keywords from their listings in the title of my emails. I then added more details using the body of the postings to make it seem more personable. I did a quick A/B test, and the replies I received had increased quite a bit from around 2–3% to 10%.

Out of the 500 or so emails, I received about 50 replies, and landed phone screens with a small percentage of those. I stopped at 500 because I was short on time and needed to finalize a job as soon as possible. I was optimizing for results rather than reach at that point.

# The Startup Journey

As luck would have it, I finally landed a job at a startup in Seattle as a junior software engineer. The startup was located in Kirkland at the time, so I had to take a 45-min bus ride to make it in time for the interview.

I then stayed there for the next 3.5 years, where I learned a great deal of stuff like Amazon AWS, EC2, DynamoDB, SQS, and Docker. I grew a lot during this period. I learned how to write modular, maintainable code. I learned how to reason about software design. And I learned how to handle people problems.

I was working next to a group of smart people who held jobs at Microsoft, Amazon, and LinkedIn, and I tried to be the “sponge” in the group. I absorbed anything and everything they threw at me. I believe this made a huge impact in my career.

# What I learned

###

### During my stint at the startup, I worked almost exclusively on backend development, with some dev-ops in between. I started out writing some functions to add/modify a feature that were mostly small in scope. But it was a great opportunity to understand the codebase and get some code reviews.

A year into it, I started owning parts of the codebase, and then I was tasked with turning a set of features into a service.

That was the start of the SOA phase for the startup. We started turning various components of the site into services, and that’s how I started learning more about RESTful services, authentication, AWS services, pub-sub, distributed systems and so forth.

The interesting part here is that _I didn’t learn about any of these through books or formal education._ Rather, I needed to get that set of features done and there were the bottlenecks.

So I thought, let’s go solve it!

There were many times where I was stuck in analysis paralysis — a state where I over-analyzed scenarios and ended up not able to make progress.

Those trying times were the **greatest** learning opportunities. I started to learn feature scoping, negotiations, monitoring, alerting, and documentation. Each step of the process revealed more things I needed to learn. I grew the most during these past 2–3 years, both as an individual and software engineer.

# **How I prepared for my interviews**

After suffering through my first job search, I told myself that I must be prepared in future interviews.

I started preparing for interviews by charting out an overview of what I was good at, bad at, and where I could improve. I broke it down into three categories: **data structures, algorithms, and system design.**

Having worked in PHP for most of my professional career, and C++ in college, I wanted to try something a little simpler and less verbose for interviewing.

For this reason, I picked Python. It is a great language to learn, easy to pick up, supports many data structures out of the box, and can be written quickly on the whiteboard. I learned Python by going through Youtube tutorials like [these](https://www.youtube.com/watch?v=Z1Yd7upQsXY), and also reading their documentation. I recommend using Python 3 instead of 2.

Also, another reason why I picked Python is that it’s highly readable and easy to write on a whiteboard. Here’s a trivial comparison between C++ and Python.

A C++ program to sort in descending order:

```
#include <bits/stdc++.h>
using namespace std;
int main() { int arr[] = {1,10,0,4,5} int n = size(arr)/sizeof(arr[0]); sort(arr, arr + n, greater()); for (int i = 0; i < n; i++) { cout << arr[i] << " "; } return 0; }
```

Compare that with Python’s version:

```
a = [1,2,4,5,1000]<br></br>a.sort(reverse=True)<br></br>print a
```

Much cleaner.

I’ve received feedback from interviewers to **err on the side of brevity** in an interview. In a 45-minute interview, you want to use most of your time solving the actual problem.

**Pro tip:** pick a language that’s less verbose so that you can write the code more quickly on the whiteboard

# Preparation mode

I spent about a week going through simple challenges on LeetCode, HackerRank, and Project Euler to familiarize myself with their interfaces, and to get used to writing code in Python.

The first week gave me insights into my competence level at certain programming languages. I spent another week going through some design challenges like “design X” and **went as wide and deep as I could.**

## Prepare for System Design

This was a lot of fun for me, because I often looked at iOS apps and tried to figure out how they did it. For example, how would you build Instagram from scratch?

My background is in API designs and service-oriented architecture. So I took this opportunity to show how I would design my own version of Instagram. And because I have some iOS programming experience from my side-projects, I could talk a little bit about callbacks and push/long-polls here.

I started the conversation with some features I’d like to have on my own version of Instagram: likes, upload a photo, and a simple timeline. Feature scoping enabled me to build a very solid API because I know these scenarios well.

I then drew some pictures of a high-level design, of how the client would interact with the backend, and of how the backend would store the data.

I started small, and then added more components where needed and proactively sought where the bottlenecks were. I made educated guesses (read **educated, not blind guesses**) on what the requirements would be, and how each technology would fit in well. And also equally important, what technologies would _not fit well._

For example, why would you use Cassandra over MySQL to store certain information (hint: scale, speed of development, schema reviews), why use OAuth over simple authentication, Redis vs Memcached for caching data, streaming vs batch processing, and so on.

There are many areas you can explore here, so typically a one-hour session is not enough. To do well on these questions, you have to read and learn about trade-offs. Pros and cons of technologies in the industry. For this, I recommend a site like [HighScalability](http://highscalability.com/all-time-favorites/).

Take it like a typical brainstorming session with a coworker, so explore _as widely and as deeply_ as you can.

## Understanding Your Strengths and Flaws

It’s crucial to know that these design interviews are meant to explore how much you know and how well you know it, and it’s **an opportunity for you to shine.** I watched this Youtube [video](https://www.youtube.com/watch?v=ZgdS0EUmn70) from an ex-Facebook engineer about how to solve design problems, and it gave me insights that helped me tremendously with my design interviews. My two main learnings from it: **drive the design conversation,** and **show what you know**.

I listed out my competency level for: **data structures** (linked list, hash map, binary tree, binary search tree, heap, array), **algorithms** (binary search, hashing, dynamic programming, sorting), and **language-specific syntax and libraries** (like sort, lambda for Python, appending, indexing).

I picked the area I was worst at, and started working on it: **algorithms**.

## Preparing for Algorithms

Algorithms have never been my forte. It’s been a while since my college days, and I didn’t spend much time doing binary search in my day-to-day career. I had an inkling of how each algorithm would perform, and in what scenarios to use them. But I wasn’t 100% comfortable with writing a binary search in under 10 mins. On a whiteboard. In front of an interviewer.

I also picked up a bunch of fine-point markers from [Amazon](https://www.amazon.com/86601-Low-Odor-Markers-Assorted-8-Count/dp/B000Z88D2E/ref=sr_1_3?ie=UTF8&qid=1518801079&sr=8-3&keywords=white+board+pens), which work amazingly well. Perhaps it’s just me, but the fine-point markers in interviewing rooms usually don’t work at all. I’d usually scramble for 2–3 mins looking for a working pen, and that’s 2–3 mins you can’t afford to waste. Plus, fine-point markers allow you to write 5–8 lines of code on a typical whiteboard vs thicker ones. 🙂

**Pro tip: Get your own set of fine-point markers**

I got a whiteboard from Costco for \$50, some books from Amazon (listed in the tools I recommend section below), and started my coding practice. I made sure I ramped up on binary search, recursion, dynamic programming, BFS and DFS. A lot of interviewing questions revolved around recursion and binary search or some variations of it.

The best interviewing questions I’ve seen had many different solutions to them, and there’s an additional layer added on top as you progress through.

One Google question I had was related to file-system directories, and how to traverse them (hint: recursion). I solved that relatively quickly, and the interviewer asked how to identify a missing file in that directory. That was a little more difficult, but I got through it. And we then moved into how to rebuild the directory, how to serialize/deserialize it, and we spent a good chunk of time debating how file directories work underneath the hood. It was a very enjoyable session for me.

### Thank you

Thank you for reading thus far 🙂 If you enjoyed this article, please consider buying me a coffee here (coffee helps me write): <https://www.buymeacoffee.com/zhiachong>

# Interviewing at top-tier companies

It was a nerve-wrecking experience, to say the least. And what a roller-coaster ride.

I allocated my time in the following manner: **20% resume, 20% research and 60% interview preparation.**

## Resume Preparation

I spent 20% of my time fixing up my resume, which hadn’t been updated in at least three years. I took a hard look at the stuff I’ve done in the past, and picked projects I handled end-to-end, **regardless of complexity.**

The reason for doing this is two-fold. Taking a project from start to completion demands discipline and leadership — two of the traits I’d like to be identified with.

Secondly, ownership of a project end-to-end means I can talk about each aspect of the project **at length and in depth.** This proved critical in helping me navigate my design round at Twitter, where they grilled me hard on not only the designs of my projects, but also the decisions behind them.

## Research on companies

20% of my time was used for research. Research in this case meant doing due diligence on companies I was interested in and reaching out for referrals. Having referrals helps with return calls.

From my experience, I sent out 20 or so cold messages to startups and mid-stage companies, and only heard back from a handful. But, almost all the companies I was referred to by an existing employee sent me a message within a week. This is anecdotal, but there’s value to be had there.

I am not that sociable, and I didn’t know many people who’d be able to refer me to a company I was interested in. To solve that problem, I went on LinkedIn. They have a search functionality that I used to search for 1st and 2nd-level connections. 2nd-level connections are people who’re one hop away from your immediate circle. In other words, we have mutual friends who can **vouch for my credibility**.

<figure>![](https://cdn-images-1.medium.com/max/2400/1*hJo9WP-_7tCpETM-_uMLcQ.png)<figcaption>LinkedIn Search</figcaption></figure>This is incredibly important, because cold-calling someone for a job is very, very hard, especially in today’s market. People tend to err on the side of caution when it comes to cold-callers. Using LinkedIn was super helpful for my research phase.

Looking back at all the companies I interviewed at, here are my thoughts on each of them:

- **Facebook/Google** — very mechanical. The standard interviewing process, and I didn’t feel any personal connection to them.
- **Pinterest** — not the best interviewing experience, but a cool product and company.
- **Microsoft** — loved the team and especially the manager and her manager. Standard interviewing questions, but very personable. Close-second choice. Your mileage may vary, though — each team at Microsoft interviews differently.
- **Amazon** — standard interviewing process. About 50% of the people love it, the others don’t.
- **Twitter** — incredibly fun and personal. Loved the interviewing process, gave a lot of emphasis on the individual and what I’d done in the past.
- **Snapchat** — cool office in LA, great bunch of people who decided to jump on the startup bandwagon. Felt like things were shrouded under a cloud of secrecy.
- **Lyft** — near to where I live, nice office, standard interviewing process. No strong feelings about it.

# Let’s talk about my favorite: Twitter

In many ways, I’d say Twitter’s interviewing style was hard. But at the same time, it was more interesting and personable than other companies I’ve interviewed at.

Their interviewing process starts with an introductory phone call with an engineering manager. That’s followed up by one or two technical phone screens, depending on how you perform. If you do well, they’ll fly you out to the office you’re interviewing for, which was Seattle in my case. There are three 1-hour-and-15-minute rounds, each with two interviewers.

The first two technical phone screens are the standard, run-of-the-mill technical screens where you solve coding problems on a shared coding doc.

The onsite rounds, however, are much more conversational and feel much less intimidating. The interviewers will ask you in-depth questions about your past projects, and they’ll grill you on what you’ve done in the past. If you claim ownership of a project, you should expect some questions about it. You’re encouraged to use them for references and to bounce ideas off of.

I never felt any pressure to magically come up with a fully working solution, and it felt highly collaborative.

## The others (Facebook, Google, Pinterest)

In comparison, interviewing at Facebook and Google felt much more mechanical. They have one or two technical phone screens, and five to six onsite coding rounds. Each round involves some coding on a whiteboard, and you’re expected to come up with a near-perfect solution in a reasonable amount of time.

Facebook has two coding rounds, one design round, and one behavioral round.

I went through an additional shadow round at the end of the day, which didn’t count towards my overall score.

Google had five coding rounds, none of which focused on designs, and not a single interviewer asked about my previous projects. I don’t necessarily think this is bad. But I think it felt very mechanical and didn’t give much opportunity for the engineer to show what they’re capable of. Some people do well in these scenarios, much like some students do well in exams.

I **did not enjoy** my interview with Pinterest. I think the product itself is interesting, and their engineering team seems to be working on very cool technical [problems](https://medium.com/@Pinterest_Engineering). But I definitely had a negative experience during my interview there.

Pinterest has three coding rounds and one design round. Of those four rounds, the design round was most disappointing to me. Here’s why:

The interviewer came in late, and he spent a few minutes glancing over my resume before proceeding to draw some APIs on the board. He gave a short description of what he expected the API to do, and asked how I would solve it. We clarified the features of the API, and I started describing my solution using the whiteboard. About 5 minutes into it, I turned around and **saw him taking a nap!**

Not cool.

I gave the recruiter my feedback in a survey, and I didn’t hear back from them after that.

I won’t delve into specifics of the questions I was asked during all the interviews. Instead, I’ll share some of the insights and useful tips I learned from my preparation process.

# What I learned:

- Be **honest** on your resume. Most companies _will_ ask you questions about your resume, and they can tell if you made it up. It’s better to be able to know **100% about one project than to know 10% about 10 different projects.**
- **Preparing for interviews is hard, especially during COVID. Use discount code [(zhia) to get 30% my course](https://gumroad.com/l/overcome-faang/zhia) on technical interviews virtually.**
- One-page resumes are **recommended**. This is especially true for tech companies, and it seems that the wisdom within the tech sphere is that you should reserve two pages and longer for post-doctoral work, or if you’ve done a lot of projects that you know and care deeply about.
- **Socialize and establish a network**. There’s a lot of competition for software engineering jobs, and these top tech companies are filtering through thousands of resumes a day. Having a referral will help you get some eyes on your resume.
- **Nail** your pitch. Every company that’s interested in you wants to know why you’re interested in them. **A bad answer**: I just need a job right now to pay bills. **A less-bad answer**: I was browsing online and found you guys. Sounds like you’re working on interesting things. **A good answer**: I know you’re doing some interesting work in X to achieve Y. I’ve done some work in the past and here’s what I learned about A, B, C that might be related to X. I am passionate about Y because blah. (_Don’t_ use this as a template. Instead, you should see the pattern here — do your research, use your background, and show the company why both of you would fit well together)

## Some more advice

Technical interviews are incredibly difficult, and sometimes it’s a hit-or-miss. The best opportunities, however, are reserved for those _who are prepared._

- **Prepare early, prepare _well_**. Everyone knows that they should prepare for an interview, but most don’t know how to do it _well_. As with anything worth doing, it takes deliberate practice to do well at something. And deliberate practice means you need to have a system.
- **Build a system** to practice technical skills. I started by rating myself from 1–10 on how good I was, and worked on the ones I was worst at. I spent days on different types of questions until I fully mastered each concept. And I **wrote notes daily on Evernote**. I had a note that serves as a brain dump for all things programming. It is full of programming tips &amp; tricks, common errors and misconceptions, frameworks for solving specific types of questions, and much more.

<figure>![](https://cdn-images-1.medium.com/max/2400/1*D34E4dmN6y-Bg8ZrB6YMDg.png)<figcaption>My Notebook</figcaption></figure>- **Keep a notebook** of things you’ve learned. I use both [Evernote](http://evernote.com) and [OneNote](http://onenote.com) to keep track of things. OneNote for technical stuff/code, because I like that I can easily format the note any way I like. I use Evernote for essays/thoughts. The image above shows a note I keep on architecture and system designs.

<figure>![](https://cdn-images-1.medium.com/max/2400/1*8jIzBtK4RajWQMmopfdvJQ.png)<figcaption>Evernote for thoughts/tips</figcaption></figure>- **Jot everything down**, even if you don’t think you’ll use it. I tend to forget very easily, so anything that I learn I write it down, including shell commands. I read technical blogs from time-to-time, and if I find anything interesting I jot it down on Evernote right away. I’ll revise it every week or month and reorganize accordingly. This has helped me tremendously over my career.
- **Get mock interviews**. This was definitely very valuable and I highly advise it. I had mock interviews with friends and tried to practice as much as I could. If you can’t find friends to practice with, then I recommend scheduling 1 with me. I will assess you on your coding and design skills. The best part of it is I’ll give you a score at the end of it with specific actionable items on how to improve.
- It’s **OK to fail. I failed multiple interviews during this whole process.** Sometimes you just have a bad day. It’s not the end of the world if you fail. Companies are biased towards saying no because it’s a lower risk for them. A false positive costs more than a false negative in the long run. The first few rejections definitely stung the most. I failed multiple phone screens when I first started interviewing, and my confidence level sunk. I had doubts in my mind about my abilities and started fearing that my skills weren’t relevant in today’s job market. However, I gave myself a tip: If you fail 10 times, then try 10 times more. *All you need is one success.* That reassurance gave me a lot of confidence to keep pushing through and when my first offer came through, the other offers came much more easily.

It took me about **2 months** of deliberate practice and preparation for my interviews. I spent about **20 hours/week, or 80 hours/month,** learning and writing notes on top of a full time job.

To build up my resume, it took 3.5 years of focused, deliberate work. I intentionally picked things that were tough and icky so that I could learn more than anyone else. Even though I don’t have a brand name university or top-tier tech company on my resume, I made up for it with a clear, thorough understanding of the projects I worked on. And this was possible because I researched and wrote down notes of everything I learned, and have a system to review them.

**Remember: the strong survives, the tough thrives.**

TL;DR: Don’t give up, set yourself up for opportunities, practice a lot, and stay hopeful. Focus on the process, and take a disciplined, dedicated approach to the process.

# Tools I Recommend

- [Designing Data-Intensive Applications](https://amzn.to/2I80wup): Awesome book for learning about scaling distributed systems! Highly recommended.
- My [mentorship program](https://zhiachong.com/courses/) to help you succeed as a software engineer.
- [Elements of Programming Interviews](http://amzn.to/2Dcs6Qd): Great for solving coding problems.
- [Cracking The Coding Interview](http://amzn.to/2Hj91OH): Great for covering foundational CS coding problems.
- [Daily Coding Problem.com](https://www.dailycodingproblem.com/zhiachong): This is a free-to-try website that offers free daily coding problems. You can sign up for interesting daily coding challenges, and you can pay for solutions if you want.
- [Dropbox](https://db.tt/tdUSP79S): I keep all my files, pictures, resume here. Easy access, installed once and available everywhere. Love it (If you sign up thru this link, both of us will get free 500MB!
- [CodeRunner](https://coderunnerapp.com/): I love this Mac app! I used this multiple times to run ad-hoc Python scripts/functions and it just works amazingly well.
- [Kafka the Guide](https://amzn.to/2D8FUxS): I used this book as a reference guide, and enjoyed it for the high-level description.
- [Overcoming FAANG](https://gumroad.com/l/overcome-faang/zhia): I believe virtual-interviews are the future. You need to prepare for it to survive and to thrive. Use discount code (zhia) to get 30% today.

# Thank you

Thank you for reading thus far 🙂 If you enjoyed this article, please consider buying me a coffee here (coffee helps me write): <https://www.buymeacoffee.com/zhiachong>
