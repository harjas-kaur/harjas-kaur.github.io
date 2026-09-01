---
# Leave the homepage title empty to use the site title
title: ''
summary: 'Portfolio and project work by Harjas Kaur'
date: 2026-09-01
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: |
        I am a developer who enjoys turning ideas into practical web apps, tools, and data-driven experiences.
      button:
        text: View Projects
        url: /projects/
      headings:
        about: 'About'
        education: 'Background'
        interests: 'Interests'
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: markdown
    content:
      title: 'About Me'
      subtitle: ''
      text: |-
        I’m Harjas Kaur, a full-stack developer and data enthusiast with a passion for building polished digital experiences. My work blends front-end design, backend logic, and experimentation in Python, JavaScript, and machine learning.

        I enjoy building projects that are useful, visually engaging, and grounded in real-world problem solving.
    design:
      columns: '1'

  - block: collection
    id: projects
    content:
      title: Featured Projects
      filters:
        folders:
          - projects
    design:
      view: article-grid
      columns: 3
      show_date: false
      show_read_time: false
      show_read_more: false

  - block: markdown
    content:
      title: 'GitHub Focus'
      subtitle: ''
      text: |-
        My public work includes front-end experiments, full-stack web applications, and data analysis projects that emphasize clarity, usability, and rapid iteration.

        Explore my GitHub repositories for recent prototypes, practical tools, and continuously evolving product ideas.
    design:
      columns: '1'
---
