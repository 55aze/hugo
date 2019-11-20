---
title: "Izumi Dashboard"
draft: false
role: "UX/UI Design, User research"
time: "2017.12 till 2018.02"
company: "HERE"
description: "Design a better navigation system"
image: "dashboard"
---

## What is Izumi?

Early 2017, I started my full-time career as a Designer in [HERE](https://www.here.com/en), which provides map services to millions of users all over the world both on their [Phones](https://play.google.com/store/apps/details?id=com.here.app.maps&hl=en) or in their cars. 

In such a big international company, **Izumi** is the tool designed to properly localise our products, in able to reach out all our users in every corner of the world. I'm the Product Designer specialised in user experience for such a platform. 

With hundreds of users from both HERE employee to external Localisation agencies work on this platform on the daily base, it is crucial to take into consideration users in the first place.


#### Team setting
#### Agile and iterative

- 6 developers 
- 1 product owner
- 3 localisation managers (experts in internationalisation)
- 1 designer (**ME**)
- 2-week sprint, daily stand up 

I'm the only designer here in the team, I closely work with peoples from different backgrounds: Front-end experts, business expert and also localisation experts. Also, I'm part of the design community, peer review is also a really good chance to learn from other designers.


----------

### What is the current problem?

Izmui was seeded by 2 developers with basic functions several years ago. In the past several years, a lot of new features were added. It became more and more powerful while in the meantime, we also heard more and more compliants:

> "Hey, where can I change the language settings for this project? "
> "What is this for? "
> "Hey why the translation shows up here?"
> "Can I create a new user? How and where?"


People are struggling with the overwhelming contents and messy information structure, 2 main problems should be noticed:

#### Platform features mixed with projects features

How do we structure our menu items nowadays? We just throw them into whichever corner of the top menu bar in Izumi.(At least they are still available. :P) When switching roles or projects in Izumi, these menu items will be partially hidden or seen. So I always heard people are complaining they can't find the item they're looking for, this even happened to me several times.

{{< img src="/img/works/project-platform.png" class="popup pointer" >}}

#### Information overload

No summary, no dashboard, Izumi directly link you into the editview once you selected one project. It screaming to the user "Hey that's what we offer, just digest it!" In dealing with this problem, [Shneiderman's information-seeking mantra](http://www.infovis-wiki.net/index.php/Visual_Information-Seeking_Mantra) provides a guideline:

> "Overview first, zoom and filter, then details-on-demand. -- Shneiderman's mantra

Overview presents a general information and guides people towards interested sections; Zoom and filter allow user focus on particular areas of interest; finally, evil on-demand details ensure the user can get as close as possible to the raw data and equip them to find whatever they're hunting for. These 3 levels all together empower the user to achieve their goal smoothly, while Izumi just skipped the first 2.

#### Design space

1. Sitemap restructure: Izumi could be a powerful tool as long as user can successfully find what they want

2. Bring back hierarchy in Izumi: "Overview first, zoom and filter, then details-on-demand."

### Concentrate on users' needs

I explored several ways to help me sort out the information logically. One interesting method -- "[OOUX](https://alistapart.com/article/object-oriented-ux)" borrowed the idea in programming and treat your design content as an object. These objects could contain meta data, links and another or more objects, which helps you better understand how each object interact with others.

I applied this method in Izumi design as well:


{{< img src="/img/works/dashboard-ooux.png" class="popup pointer" >}}





Then I figured out that it's too much information for me to digest since we have 10 different users, I decide to come back to basic -- **Concentrate on User's Needs**

I took an **application distilling** process for each user, it helps me distinguished the most important sections to include in the dashboard for different users.

#### How did I do that?

1. Went through every user's (10 in total) use cases in Izumi, wrote down all user scenarios and corresponding flows first;

2. Then look into these flows, try to distinguish the needed "features", "navigations" and "metrics" blocks to accomplish these flows;

3. Finally, get together everybody's blocks, try to sort and arrange them in different pages; 

After the second step, I could already get the desired blocks for users, below is an example for designer: 

{{< img src="/img/works/dashboard-designer.png" class="popup pointer" >}}

By the end of this exercise, I sorted out the most needed blocks and also categoried them in different pages: 


{{< img src="/img/works/dashboard-card sort.png" class="popup pointer" >}}

After talk with the project owner, I started with the design of **project dashboard** page first.


#### Ideation (Working in progress)

I'm now working on Design solutions ideations. 

{{< img src="/img/works/dashboard-wip.png" class="popup pointer" >}}


## To be continued...