---
title: "KYC hosted onboarding"
draft: false
role: "Product designer"
time: "2019.03 till 2019.07"
company: "Adyen"
description: "A hassle free KYC implementation to easily onboard users"
image: "adyen-title"
---
**[Adyen for platforms](https://www.adyen.com/our-solution/online-payments/marketplaces)** is an all-in-one solution for any platform business models to easily onboard users, move funds and payout to users. 

May 2018, I joined the team as a product designer. With a background in designing and engineering, I have always been passionate about simplifying complex technical problems through thoughtful design solutions.

One good example is **[Hosted onboarding page](https://docs.adyen.com/marketpay/onboarding-and-verification/hosted-onboarding-page)**. We built this customer-facing KYC app from ground up, it helps platforms to easily onboard their customers. Following I’ll walk you through the approaches we took and lessons learned.
### HOP: Fully hosted experience to easily onboard legal entities

I believe you have used at least one of the following services: Uber, eBay, Amazon, Airbnb and etc, but have you ever tried to sell, host or drive on platforms like those? If the answer is yes, how do you get paid from those platforms? You must have been through several steps to prove you are you, and you’re doing legitimate businesses. 

This process is known as KYC (Know your customer), to comply with government regulations, the payment solution providers like Adyen for platforms need to KYC every customers before processing payment on half of the platforms, the steps and requirements vary by countries and regions.  

Now Adyen for platforms serves over 40 different platforms and help them process payments for millions of end customers. To smoothly onboard everyone, we’ve built a fully hosted app to collect and verify the required information progressively from end customers.  


### What’s the problem here? 
From 2018 to 2019, we scaled 10x in terms of the number of end customers. How did they all get KYC-ed? Platforms will ask for the right information whenever Adyen need to perform checks, then pass the data via API to us. Once we got any results, we’ll inform platforms by API notifications. What are the problems with this approach?


1. **Unstable quality of collected data:** Platforms own the communication with end customers. If they failed to translate the API requirements into accurate messages to customers, we couldn't get qualified information to perform the check.
2. **Complicated regulatory landscape:** KYC requirements vary from different regions, it complicates the communication with end customers from different countries, especially if platforms lack the knowledge of local regulations.
3. **Extra dev resources requested:** Platforms need to invest in time and people to integrate with KYC API. It’s a key blocker for those who don’t have enough resources or want to launch fast. 

All these points made us think if Adyen could communicate directly with end customers to collect data and perform checks. Since we’re the expert of those KYC regulations, we can definitely do better in collecting qualified data and ch.


### Target platform

First, which platforms should we target at? Despite all the above-mentioned problems, a lot of enterprise-level platforms still prefer API because it provides a flexible way to fully customize the interfaces. So who might be interested in an alternative KYC solution, in which Adyen can directly communicate with end customers to finish KYC? 

{{< img src="/img/works/targetmarket.png" class="popup pointer" >}}

I segmented the platforms by their size and end-customer types and conducted interviews with several account managers and platforms for each segment. By the end, we decided to focus on mid-sized platforms working with business entities. 

A mid-sized platform normally have restricted resources to build everything from scratch. Also, targeting at business customers indicate they most likely have a limited number of end customers to onboard, it doesn’t worth the time and effort to build everything in-house for a small user base. 


### One solution for X types of platforms
Craft experiences for platforms mean you need to consider both platform and end customers, their concerns and focuses are quite different. 

For the end customers, they need to hand in sensitive information, they need to feel comfortable and confident enough to submit that information to a trustworthy data collector. Adyen was an unknown brand to most of them, so it's important to smoothly transit them between the original platform's experience and Adyen’s contexts. To achieve this, we need to align with platforms both visually and in content-wise. 

For platforms, if Adyen and themselves will be in direct communication with end customers, it’s crucial to always keep aligned with each other in terms of what has been communicated and how. Also, platforms still need to integrate with other APIs to enable payments, we need to thoroughly examine the holistic integration experience to make sure Adyen and platforms perfectly in sync. 

So the challenge becomes: HMW design a new KYC solution that could 



#### Examine exisiting onboarding flows
I took a step back and put myself in the customer’s shoes. Went through several onboarding flows to distinguish any shared partterns. 

{{< img src="/img/works/platformflows.png" class="popup pointer" >}}

Here are some key findings: 

**Continous KYC:** Platforms will collect minimal information to sign customer up. Then set up different tiers for further validation along the way. It’s continuous KYC progress. 
**Flexible KYC:** Different platforms have different flows to KYC their customers, some even made it part of funds payout flow.
**Immediate feedback is the key:** A lot of platforms failed to give immediate response to inform customers about the validation results, which delays the KYC progress and results in a lot of complaints from customers.  


#### Single page application 

Keep all the findings in mind, we grappled with different solutions and decided to go with a fully hosted single page application. 

What we don't want to do is to rebuild the platform's onboarding flow to accomodate our KYC process, it won't scale. Rather, we stayed clear from the platform's already established experience. How? With a fully hosted solution, Hop will serve as a standby verification step that can only be triggered when neccessary.

Here’s how we planed to integrate this single page application into the current API offering from a high level:

{{< img src="/img/works/usehopflow.png" class="popup pointer" >}}

### Interaction Design

Customers can only access to HOP when a specific KYC check need to be finished. By then, platforms will get notified by Adyen with a one-time usage HOP link. They can share this link with customers and once customers got redirected, HOP will start from there. 

#### User flow

Following demos how this app works from an end customer's point of view.
{{< img src="/img/works/hopuserflow.png" class="popup pointer" >}}

Checks were categorized into 3 basic types, each type contains several different steps. Each check stays independent, so that customers can drop off in between without missing any validation progress.


#### Visual style

Adyen is an unfamiliar brand for most of the end customers. When it comes to submitting sensitive data towards an unknow party, most people concerned about their privacy. How can we build the trust with them? 

[wip]


### Content strategy
Designing for customers from 15 different countries is challenging, especially working on such a product dealing with highly sensitive information, we need to make sure our content and language are clear and accurate. 

We involved UX copywriter from the very beginning of the product, she helped with defining the foundations of the words and tones we're applying in the entire product. 

#### Localisation
First, we localised the content, with the help of our compliance officer, we figured out the most accurate requirements for different countries. Then together with UX copywriter, we translated those requirements into concise and helpful strings to faciliate the verification process. 

Second, we planned to localise the languages. Considering we're mostly covering audiences from EU, we will start with DE, FR and ES. 

#### Build the brand
[WIP]

### Testing
If you're designing for B2B, recruit participants for user testing is not an easy thing. For this product, we're designing for both platforms and their end customers, we need to test with both audiences. 

At start, we just invited several internal people for the first round testing. They had basic knowlea gathered some valid feedbacks around the interactions and flows.

On the other hand, I actively promoted this product and my prototype with the sales and support team, they have the direct contact with platforms. By doing so, I successfully being invited to 2 merchant meetings, to present my design solutions. With direct chats with platforms, I gained in-depth insights around user onboarding and KYC flows.

### Analytic tracking
[WIP]

### Final 
**[Hosted onboarding page](https://docs.adyen.com/marketpay/onboarding-and-verification/hosted-onboarding-page)** 

