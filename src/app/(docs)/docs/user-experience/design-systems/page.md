---
title: Design Systems
nextjs:
  metadata:
    title: Design Systems
    description: A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
---

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

The goal of a design system is to create a consistent user experience across all applications, regardless of the platform or device. This consistency helps to build trust with users and makes it easier for them to navigate and interact with your products. Design systems also help to speed up the development process by providing a library of pre-built components that can be easily reused.

Once considered a nice-to-have for large organizations, a design system is becoming a requirement for any team generating interfaces with AI. See [why it matters more and more with AI](#why-design-systems-matter-more-and-more-with-ai) below.

A good design system should include the following elements:

- **Design principles**: The core values and beliefs that guide the design of the system.
- **Typography**: The fonts and styles used in the system.
- **Color palette**: The colors used in the system, including primary, secondary, and accent colors.
- **Spacing and layout**: The spacing and layout guidelines used in the system.
- **Components**: The reusable components that make up the system, such as buttons, forms, and navigation bars.
- **Guidelines**: The rules and best practices for using the system, such as accessibility standards and responsive design guidelines.

## Key of success

The experience shows that a design system can work only if

- it is maintained by both designers and developers.
- It is important to keep the design system up to date and make sure that all team members are using the latest version of the components.
- a team is in charge of maintaining the design system
- it is well documented and easy to use

## Why design systems matter more and more with AI

Generating a user interface has never been so cheap. With tools like [Copilot](https://github.com/features/copilot), [v0.dev](https://v0.dev/) or any coding agent (see the [AI section](/docs/productivity/ai) of this guide), a developer can produce screens faster than a team can review them. The bottleneck moved from _writing_ the UI to _keeping it coherent_, and that is exactly the problem a design system solves.

Without a design system, an AI assistant has no reference to follow. It will invent its own spacing, its own shades of blue and its own button, slightly different on every screen it generates. The result looks fine in isolation and inconsistent as a whole. Because the generation is fast, the inconsistency spreads much faster than it used to.

With a design system, the situation is reversed:

- **The design system becomes the prompt**: components, tokens and guidelines give the model a vocabulary to reuse instead of a blank page. `<Button variant="primary" />` is a much stronger instruction than "make a nice blue button".
- **It constrains the output**: the model composes existing components rather than creating new ones. Reviews become shorter because there is a clear rule to check against: does this screen use the system or not?
- **Documentation becomes context**: the same documentation you write for your team is the context you give to the model. A well documented design system, with usage examples and do/don't, is directly reusable by AI tools (rules files, MCP servers, Storybook stories, Figma libraries).
- **Accessibility and quality are enforced by construction**: focus states, contrasts, keyboard navigation and responsive behaviour are solved once in the components, instead of being re-invented (and forgotten) in every generated screen.
- **Refactoring at scale stays possible**: when the design changes, you update the components, not the hundreds of screens the AI generated.

{% callout %}
AI is a good reason to invest in a design system, but it does not replace the team maintaining it. A design system built by an AI without designers and developers owning it will drift exactly like the code it was supposed to keep consistent.
{% /callout %}

In practice, the more your team relies on AI to build interfaces, the more the design system is worth the investment. Start it early: it is much easier to grow a system alongside the product than to bring back consistency to a codebase where every screen was generated with its own rules.

## Tools

- [Storybook](https://storybook.js.org/): a good to present
- [Figma](https://www.figma.com/)
- [Mui](https://mui.com/): the library is very customizable and fits very well to create a design system

## Useful links:

- https://www.nngroup.com/articles/design-systems-101/
- https://www.invisionapp.com/inside-design/guide-to-design-systems/
