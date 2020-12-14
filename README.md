# Quiz system

## Team

- Anton Timchenko (@AntAndTim)
- Kamilya Timchenko (@kamtim)

## Description

The project provides a system for creating quizzes for students.

As today there are lots of operating systems to use, the project is implemented as the web application to support both desktop and mobile platforms.

The goal is to create a convenient way for both students and teachers to demonstrate and check their knowledge online.

## Project management

- GitHub - code hosting, review tool.
- ~GitHub Projects - backlog, current milestones and issue tracking.~ Jira, same purposes, link: https://map-projects-team4.atlassian.net/
- Telegram - communications.
- Planning poker - estimation.

## Technological stack

- Java 11 - backend language.
- Maven - backend build tool.
- Spring - backend framework.
- TypeScript - frontend language.
- React - frontend framework.
- GitHub Actions - CI/CD.
- GitHub Wiki - documentation.

## Process management

- Daily meetings - 7 PM
- Planning - Monday 1 PM
- Sprint review - Friday 7 PM
- Sprint retrospective - Sunday 7 PM

Results for the retrospective will be documented in wiki.

## Deployment

You can find our UI at https://map-projects-team4.herokuapp.com/

Our backend can be found at https://map-projects-team4-back.herokuapp.com/ and its documentation at https://map-projects-team4-back.herokuapp.com/swagger-ui.html

[Here](https://antandtim.me/map-projects-team4) you can find reports about our tests

Additional docks for deploy can be found in subfolders `quiz_front`, `quiz_back`

## For stakeholders

[Here](https://map-projects-team4.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=QUIZ&atlOrigin=eyJpIjoiMThkMzE5YWZhYzRhNGU2NTgzNDM4MGM1MmY4ZDg1NDAiLCJwIjoiaiJ9) you can find our active sprint board.

[Here](https://map-projects-team4.atlassian.net/secure/RapidBoard.jspa?projectKey=QUIZ&rapidView=1&view=planning.nodetail&atlOrigin=eyJpIjoiZmVkNmM3ODk3Mjg1NGY1MWJkMTZiYjEyOTgxNzk0ZDUiLCJwIjoiaiJ9) you can find our current backlog.

[Here](https://map-projects-team4.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=QUIZ&view=reporting&chart=sprintRetrospective&sprint=2&atlOrigin=eyJpIjoiYzYwNDAyM2VkODI2NGFmMDkzNGU3N2UyYTAwYTA3MjciLCJwIjoiaiJ9) you can find sprint reports.

## Developer documentation

Documentation can be found in subfolders `quiz_front`, `quiz_back` containing docs for frontend and backend.

### Branching and commit policies

To correctly integrate with Jira, developer should strictly follow the following workflow:
1. Create a task in Jira in case it is not created
1. Create a branch from main, which should be named in form feature||bug||docs||build||hotfix/JIRA-TASK-ID e.g. feature/QUIZ-29
1. Start adding commits to the branch following the [conventional commits guide](https://www.conventionalcommits.org/) with a slight change of that you should put jira keu inside brackets e.g. docs(QUIZ-29): added some docs
1. Finally create a pull request as following feature||bug||docs||build||hotfix(JIRA-TASK-ID): summary e.g. docs(QUIZ-29): added docs

If you follow these rules, Jira will show your commits, branches and PRs.

## Sprint Evaluations

![Sprint Evaluations](https://docs.google.com/spreadsheets/d/e/2PACX-1vTXIhfQzTkLutk3Wp2zWwAcCXQe7GZCZGWMZHp4nMPAgInjsxWohwH5hxwd4N9iyATx-H-QBAiTGWlj/pubchart?oid=234185997&format=image)
