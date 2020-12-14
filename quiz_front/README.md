## Requirements

node - 14.15.1,
npm - 6.1.0,
jsdoc - 3.5.5,

## How to launch locally

1. Install dependencies `npm install`
2. Launch app `npm start`

## Documentation

Open locally `docs/index.html`

## Tests

For coverage view 
- locally run `npm run test`
- result in `coverage/lcov-report/index.html`

## How to use

### Quiz mode

Push the button for quiz start

![questions](./readmeImages/QuizButton.png)

At the beginning you see questioon with answers

![questions](./readmeImages/QuestionWithoutSelectiooons.png)

You should select answers
![questions](./readmeImages/QuizQuestion1.png)

And click on Answer button, then you see correctness of your answers
- Red color means that this answer is yours and your answer is incorrect
- Yellow color means that you didn't mention this answers and this answer is correct answer
![questions](./readmeImages/questionAnswered.png)

- Green color means that this answer is yours and your answer is correct
![questions](./readmeImages/questionWithGreen.png)

### Edit mode

Questions list with edit mode
You can open some question for edition or for view
Also you can create new one

![questions](./readmeImages/QuestionsList.png)

You can open question for view for checking 
how it will be seen in quiz
![questions](./readmeImages/questionDefault.png)

You can create question
![questions](./readmeImages/questionCreation.png)

You can change question text, 
answers text and add/delete answers
![questions](./readmeImages/questionEdition.png)
