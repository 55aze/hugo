---
title: "Izumi EditView"
draft: false
role: "UX/UI Design"
time: "2017.08 to 2017.11"
company: "HERE"
description: " Design one workspace for different users"
image: "izumi1"
---
# What is Izumi?

Early last Spring, I started my full-time career as a Designer in [HERE](https://www.here.com/en), which provides map services to millions of users all over the world both on their [Phones](https://play.google.com/store/apps/details?id=com.here.app.maps&hl=en) or in their cars. 

In such a big international company, **Izumi** is the tool designed to properly localise our products, in able to reach out all our users in every corner of the world. I'm the Product Designer specialised in user experience for such a platform. 

With hundreds of users from both HERE employee to external Localisation agencies work on this platform on the daily base, it is crucial to take into consideration users in the first place.

# Team setting
#### Agile and iterative

- 6 developers 
- 1 product owner
- 3 localisation managers (experts in internationalisation)
- 1 designer (**ME**)
- 2-week sprint, daily stand up catch up

I'm the only designer here in the team, I closely work with peoples from different backgrounds: Front-end experts, business expert and also localisation experts. Also, I'm part of the design community, peer review is also a really good chance to learn from other designers.


----------

# What is Izumi Editview ?

As a localisation platform, Izumi Editview is the most used page in users daily life. Below is a simplified lifecycle of localisation process, you could see that the highlighted parts are all done in Editview:

{{< img src="/img/works/flow.png" class="popup pointer" >}}



# What did I inherit?

{{< img src="/img/works/izumi2.png" class="popup pointer" >}}

{{< img src="https://memegenerator.net/img/instances/400x/65613242/this-is-my-confused-face.jpg" >}}


#### Wow! Such a long menu on the top, but... as a translator, I just care about where can I finish my translation work !?

So the biggest issue here is that this page is designed for **EVERYBODY**, from editors, copywriters, developers ... to translator and tester. Everybody looks at the exact same interface and struggle to finish their work here.

----------

# Research First!
#### Who is your user and what do they want?

I talked with 6 peoples, at least 1 representative in each role, including HERE employees and external agencies users, trying to not only took down their complaints about Editview but also observe what’s their natural behaviours and opinions while working.

#### Some Findings

- External users are overwhelmed with the irrelevant and sensitive information, struggle to focus on their work
- The working process to create a new string in Izumi is tedious for designers
- Managers want to have an overview of localisation process which is unclear in current Izumi


# Limitations and design brief

I presented these research findings with developers and localisation managers, we distinguished some limitations and wrote down the design brief:

#### How might we

- Remove the chaos from user interface
- Customize the user interface for different roles
- Clearly reflect the localisation status for manangers
- Improve the overall look and feel to make it looks consistent and clean


----------
# Ideation

To help users focus on their own tasks, we tried to categorize izumi workflow in 3 different stages:

1. **Authoring**: Desginers and copywriters need to create and approve UI strings for translation, Authoring is their working space

2. **Translation**: When strings are ready for translation, project manager will send them out to external agencies. Translators and external agency managers will work in translation stage;

3. **Testing**: The same as translation, when translation is done, testers and agency managers will test the results in testing stage.

Depending on different user roles, people will see different user interface which help them only to only focus on their tasks. 

# UI Design

I worked with front-end developer together created an universal style guide called "[kao](/works/kao)", which contains style, atomics and react-based components.

{{< img src="/img/works/kao.png" class="pointer dim link bn" link= "/works/kao">}}


A good design system really helped me to smoothly communicate with developers and also ensured that I could always take consideration the overall look and feel to keep consistent with my old designs.



{{< img src="/img/works/translator-editview.png" class="popup pointer" >}}

{{< img src="/img/works/designer-editview.png" class="popup pointer" >}}

{{< img src="/img/works/pm-editview.png" class="popup pointer" >}}



# Test and Iterations 

After deployed this new version of edit view, I sat with several HERE designers and copywriter when they were using Izumi edtiview to finish their work. In general users are happy with this refreshment, still they're complaing it requires a lot of tedious and manual work. 

For the next step, I'm looking forward to combine design tools together with Izumi. "[Sketch](https://www.sketchapp.com/)" is a quite good example, it provides all the required information for creating a string, once the Izumi API is ready, it's possible to automate this process.  

<!-- # Take Away

#### Listen to your users, think in their shoes and put them in the center!!!

To be honest, I was totally overwhelmed by the initial desig -->