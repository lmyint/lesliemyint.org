---
title: "Graph-based knowledge representations"
date: "2022-12-07"
lastmod: "2022-12-07"
---

Academics, we are at the precipice of a revolution in how we interact with content.

Soon, books and articles will no longer be the dominant ways of interacting with concepts and ideas.

A movement towards interconnected, graph-based interfaces to content is taking shape.

## The limitations of linear forms

When I refer to books and articles, I really just mean linear representations of content: a beginning and an end with content in between that is consumed in order. This is the default mode when we engage with books, blog posts, news articles, journal articles, and even videos.

What is so bad about linearity?

- I've [[The quest to find invisible giants-the myth of progress|written previously]] on the drawbacks of linearity as an academic learning a new area through journal articles. Essentially, journal articles paradoxically suffer from a simultaneous redundancy and dearth of background information. Redundancy arises because introduction sections across articles in a given area are needlessly similar. Dearth arises when articles on complex topics don't provide easy access to background that would make the subject more accessible.
- For the same reasons, linearity is also a problem for students. Standard course materials (readings, videos) are self-contained linear representations of information. However, students come into a course/learning experience with huge variation in background knowledge and preparation and inevitably need more than what these resources can offer. Students with poorer preparation need easy access to more background on prerequisite material, and students with good understanding need easy access to additional concepts to continue being challenged.


## The promise of graphs

Graph-based tools for navigating information have long been popular (e.g., Wikipedia), but only recently have creators been able to create such information systems themselves using graph-based note-taking tools like [Roam](https://roamresearch.com/) and [Obsidian](https://obsidian.md/). The simple but pivotal feature to [bidirectionally link](https://maggieappleton.com/bidirectionals) notes unlocks enormous potential for navigating between ideas.

Graphs-based writing tools make it possible for creators and knowledge workers to build representations of knowledge that are:

- **Compact:** Does the same idea resurface in multiple areas? No need to reinvent the wheel each time---just link to the note for that idea in the note for each area. This saves time for both creators and consumers.
- **Flexibly navigated:** Inherent in a graph structure is the ability to immediately see and jump to related ideas. This is way too hard with books and scholarly journal articles.
- **Easier to verify/check:** A refactored knowledge representation is like a system of unit tests in software engineering. Each note should ideally represent an atomic concept/idea: one that can't be broken down any further. These should be easier to check than long pieces of writing. The network structure also makes explicit the dependence between notes. Checking the assumptions behind an idea amounts to visiting the ancestors of a note, and checking the consequences of an idea amounts to visiting its descendants.
- **Useful for understanding the trajectory of learning:** The sequence of notes visited offers valuable insight into a learner's background and interests. Recommender systems have huge potential here.

Knowledge workers and creatives have already embraced the idea of [digital gardening](https://maggieappleton.com/garden-history). I'm excited to see the authors at [Scaling Synthesis](https://scalingsynthesis.com/) advocate similarly for [graph-based systems](https://scalingsynthesis.com/Q-What-is-a-decentralized-discourse-graph/) for synthesizing ideas in academia.

## The vision

Let's build information systems that will safeguard human knowledge rather than rely on existing systems that exclude and muddle.

- Publishing research in a knowledge graph rather than (only) journal articles
	- I think this has the potential to remove the toxic competition of academia, address the replication crisis, hasten the production of high-quality knowledge, foster collaboration, and increase the surface area for serendipitous insights.
- Design opportunities for interfacing with graph-based systems (phrased in terms of user questions)
	- Which notes have I visited? How are they connected to what I've been reading recently?
	- How can I store personal metadata (notes, reactions) on both notes and edges (links) between notes?
	- What is the quickest way to get up to speed on concept X?
	- What note should I read next?

## Challenges for publishing applied analyses

Graph publishing for applied analyses: needs more thought. Works well for intro and possibly results. For methods: can in part work by referring to methodology nodes but evaluating a study’s methods requires a holistic view. Think about this more by writing down the problems with Methods sections right now—also the scientific process and collaboration more generally
