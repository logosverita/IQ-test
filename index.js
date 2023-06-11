const { Button, CircularProgress, Grid, LinearProgress, Paper, Typography, CardMedia, TextField } = MaterialUI;
// Sample questions for the quiz
const sampleQuestions = [
  {
    question: 'image/q1.gif', // Replace with the URL of your question image
    choices: [
      { image: 'image/q1-a.gif', value: '1' },
      { image: 'image/q1-b.gif', value: '2' },
      { image: 'image/q1-c.gif', value: '3' },
      { image: 'image/q1-d.gif', value: '4' },
      { image: 'image/q1-e.gif', value: '5' },
      { image: 'image/q1-f.gif', value: '6' },
      { image: 'image/q1-g.gif', value: '7' },
      { image: 'image/q1-h.gif', value: '8' },
    ],
    answer: '5',
    score: 1,
  },
  {
    question: 'image/q2.gif', // Replace with the URL of your question image
    choices: [
      { image: 'image/q2-a.gif', value: '1' },
      { image: 'image/q2-b.gif', value: '2' },
      { image: 'image/q2-c.gif', value: '3' },
      { image: 'image/q2-d.gif', value: '4' },
      { image: 'image/q2-e.gif', value: '5' },
      { image: 'image/q2-f.gif', value: '6' },
      { image: 'image/q2-g.gif', value: '7' },
      { image: 'image/q2-h.gif', value: '8' },
    ],
    answer: '5',
    score: 1,
  },
  {
    question: 'image/q3.gif',
    choices: [
      { image: 'image/q3-a.gif', value: '1' },
      { image: 'image/q3-b.gif', value: '2' },
      { image: 'image/q3-c.gif', value: '3' },
      { image: 'image/q3-d.gif', value: '4' },
      { image: 'image/q3-e.gif', value: '5' },
      { image: 'image/q3-f.gif', value: '6' },
      { image: 'image/q3-g.gif', value: '7' },
      { image: 'image/q3-h.gif', value: '8' },
    ],
    answer: '1', // Fill in the correct answer value
    score: 1,
  },
  {
    question: 'image/q4.gif',
    choices: [
      { image: 'image/q4-a.gif', value: '1' },
      { image: 'image/q4-b.gif', value: '2' },
      { image: 'image/q4-c.gif', value: '3' },
      { image: 'image/q4-d.gif', value: '4' },
      { image: 'image/q4-e.gif', value: '5' },
      { image: 'image/q4-f.gif', value: '6' },
      { image: 'image/q4-g.gif', value: '7' },
      { image: 'image/q4-h.gif', value: '8' },
    ],
    answer: '4', // Fill in the correct answer value
    score: 1,
  },
  {
    question: 'image/q5.gif',
    choices: [
      { image: 'image/q5-a.gif', value: '1' },
      { image: 'image/q5-b.gif', value: '2' },
      { image: 'image/q5-c.gif', value: '3' },
      { image: 'image/q5-d.gif', value: '4' },
      { image: 'image/q5-e.gif', value: '5' },
      { image: 'image/q5-f.gif', value: '6' },
      { image: 'image/q5-g.gif', value: '7' },
      { image: 'image/q5-h.gif', value: '8' },
    ],
    answer: '3', // Fill in the correct answer value
    score: 1,
  },
  {
    question: 'image/q6.gif',
    choices: [
      { image: 'image/q6-a.gif', value: '1' },
      { image: 'image/q6-b.gif', value: '2' },
      { image: 'image/q6-c.gif', value: '3' },
      { image: 'image/q6-d.gif', value: '4' },
      { image: 'image/q6-e.gif', value: '5' },
      { image: 'image/q6-f.gif', value: '6' },
      { image: 'image/q6-g.gif', value: '7' },
      { image: 'image/q6-h.gif', value: '8' },
    ],
    answer: '6', // Fill in the correct answer value
    score: 1,
  },
  {
    question: 'image/q7.gif',
    choices: [
      { image: 'image/q7-a.gif', value: '1' },
      { image: 'image/q7-b.gif', value: '2' },
      { image: 'image/q7-c.gif', value: '3' },
      { image: 'image/q7-d.gif', value: '4' },
      { image: 'image/q7-e.gif', value: '5' },
      { image: 'image/q7-f.gif', value: '6' },
      { image: 'image/q7-g.gif', value: '7' },
      { image: 'image/q7-h.gif', value: '8' }
    ],
    answer: '8', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q8.gif',
    choices: [
      { image: 'image/q8-a.gif', value: '1' },
      { image: 'image/q8-b.gif', value: '2' },
      { image: 'image/q8-c.gif', value: '3' },
      { image: 'image/q8-d.gif', value: '4' },
      { image: 'image/q8-e.gif', value: '5' },
      { image: 'image/q8-f.gif', value: '6' },
      { image: 'image/q8-g.gif', value: '7' },
      { image: 'image/q8-h.gif', value: '8' }
    ],
    answer: '8', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q9.gif',
    choices: [
      { image: 'image/q9-a.gif', value: '1' },
      { image: 'image/q9-b.gif', value: '2' },
      { image: 'image/q9-c.gif', value: '3' },
      { image: 'image/q9-d.gif', value: '4' },
      { image: 'image/q9-e.gif', value: '5' },
      { image: 'image/q9-f.gif', value: '6' },
      { image: 'image/q9-g.gif', value: '7' },
      { image: 'image/q9-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q10.gif',
    choices: [
      { image: 'image/q10-a.gif', value: '1' },
      { image: 'image/q10-b.gif', value: '2' },
      { image: 'image/q10-c.gif', value: '3' },
      { image: 'image/q10-d.gif', value: '4' },
      { image: 'image/q10-e.gif', value: '5' },
      { image: 'image/q10-f.gif', value: '6' },
      { image: 'image/q10-g.gif', value: '7' },
      { image: 'image/q10-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q11.gif',
    choices: [
      { image: 'image/q11-a.gif', value: '1' },
      { image: 'image/q11-b.gif', value: '2' },
      { image: 'image/q11-c.gif', value: '3' },
      { image: 'image/q11-d.gif', value: '4' },
      { image: 'image/q11-e.gif', value: '5' },
      { image: 'image/q11-f.gif', value: '6' },
      { image: 'image/q11-g.gif', value: '7' },
      { image: 'image/q11-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q12.gif',
    choices: [
      { image: 'image/q12-a.gif', value: '1' },
      { image: 'image/q12-b.gif', value: '2' },
      { image: 'image/q12-c.gif', value: '3' },
      { image: 'image/q12-d.gif', value: '4' },
      { image: 'image/q12-e.gif', value: '5' },
      { image: 'image/q12-f.gif', value: '6' },
      { image: 'image/q12-g.gif', value: '7' },
      { image: 'image/q12-h.gif', value: '8' }
    ],
    answer: '5', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q13.gif',
    choices: [
      { image: 'image/q13-a.gif', value: '1' },
      { image: 'image/q13-b.gif', value: '2' },
      { image: 'image/q13-c.gif', value: '3' },
      { image: 'image/q13-d.gif', value: '4' },
      { image: 'image/q13-e.gif', value: '5' },
      { image: 'image/q13-f.gif', value: '6' },
      { image: 'image/q13-g.gif', value: '7' },
      { image: 'image/q13-h.gif', value: '8' }
    ],
    answer: '7', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q14.gif',
    choices: [
      { image: 'image/q14-a.gif', value: '1' },
      { image: 'image/q14-b.gif', value: '2' },
      { image: 'image/q14-c.gif', value: '3' },
      { image: 'image/q14-d.gif', value: '4' },
      { image: 'image/q14-e.gif', value: '5' },
      { image: 'image/q14-f.gif', value: '6' },
      { image: 'image/q14-g.gif', value: '7' },
      { image: 'image/q14-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q15.gif',
    choices: [
      { image: 'image/q15-a.gif', value: '1' },
      { image: 'image/q15-b.gif', value: '2' },
      { image: 'image/q15-c.gif', value: '3' },
      { image: 'image/q15-d.gif', value: '4' },
      { image: 'image/q15-e.gif', value: '5' },
      { image: 'image/q15-f.gif', value: '6' },
      { image: 'image/q15-g.gif', value: '7' },
      { image: 'image/q15-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 1,
  },{
    question: 'image/q16.gif',
    choices: [
      { image: 'image/q16-a.gif', value: '1' },
      { image: 'image/q16-b.gif', value: '2' },
      { image: 'image/q16-c.gif', value: '3' },
      { image: 'image/q16-d.gif', value: '4' },
      { image: 'image/q16-e.gif', value: '5' },
      { image: 'image/q16-f.gif', value: '6' },
      { image: 'image/q16-g.gif', value: '7' },
      { image: 'image/q16-h.gif', value: '8' }
    ],
    answer: '1', // Replace X with the correct answer
    score: 1,
  },{
    question: 'image/q17.gif',
    choices: [
      { image: 'image/q17-a.gif', value: '1' },
      { image: 'image/q17-b.gif', value: '2' },
      { image: 'image/q17-c.gif', value: '3' },
      { image: 'image/q17-d.gif', value: '4' },
      { image: 'image/q17-e.gif', value: '5' },
      { image: 'image/q17-f.gif', value: '6' },
      { image: 'image/q17-g.gif', value: '7' },
      { image: 'image/q17-h.gif', value: '8' }
    ],
    answer: '7', // Replace X with the correct answer
    score: 1,
  },{
    question: 'image/q18.gif',
    choices: [
      { image: 'image/q18-a.gif', value: '1' },
      { image: 'image/q18-b.gif', value: '2' },
      { image: 'image/q18-c.gif', value: '3' },
      { image: 'image/q18-d.gif', value: '4' },
      { image: 'image/q18-e.gif', value: '5' },
      { image: 'image/q18-f.gif', value: '6' },
      { image: 'image/q18-g.gif', value: '7' },
      { image: 'image/q18-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 1,
  },{
    question: 'image/q19.gif',
    choices: [
      { image: 'image/q19-a.gif', value: '1' },
      { image: 'image/q19-b.gif', value: '2' },
      { image: 'image/q19-c.gif', value: '3' },
      { image: 'image/q19-d.gif', value: '4' },
      { image: 'image/q19-e.gif', value: '5' },
      { image: 'image/q19-f.gif', value: '6' },
      { image: 'image/q19-g.gif', value: '7' },
      { image: 'image/q19-h.gif', value: '8' }
    ],
    answer: '5', // Replace X with the correct answer
    score: 1,
  },{
    question: 'image/q20.gif',
    choices: [
      { image: 'image/q20-a.gif', value: '1' },
      { image: 'image/q20-b.gif', value: '2' },
      { image: 'image/q20-c.gif', value: '3' },
      { image: 'image/q20-d.gif', value: '4' },
      { image: 'image/q20-e.gif', value: '5' },
      { image: 'image/q20-f.gif', value: '6' },
      { image: 'image/q20-g.gif', value: '7' },
      { image: 'image/q20-h.gif', value: '8' }
    ],
    answer: '4', // Replace X with the correct answer
    score: 1,
  },{
    question: 'image/q21.gif',
    choices: [
      { image: 'image/q21-a.gif', value: '1' },
      { image: 'image/q21-b.gif', value: '2' },
      { image: 'image/q21-c.gif', value: '3' },
      { image: 'image/q21-d.gif', value: '4' },
      { image: 'image/q21-e.gif', value: '5' },
      { image: 'image/q21-f.gif', value: '6' },
      { image: 'image/q21-g.gif', value: '7' },
      { image: 'image/q21-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q22.gif',
    choices: [
      { image: 'image/q22-a.gif', value: '1' },
      { image: 'image/q22-b.gif', value: '2' },
      { image: 'image/q22-c.gif', value: '3' },
      { image: 'image/q22-d.gif', value: '4' },
      { image: 'image/q22-e.gif', value: '5' },
      { image: 'image/q22-f.gif', value: '6' },
      { image: 'image/q22-g.gif', value: '7' },
      { image: 'image/q22-h.gif', value: '8' }
    ],
    answer: '5', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q23.gif',
    choices: [
      { image: 'image/q23-a.gif', value: '1' },
      { image: 'image/q23-b.gif', value: '2' },
      { image: 'image/q23-c.gif', value: '3' },
      { image: 'image/q23-d.gif', value: '4' },
      { image: 'image/q23-e.gif', value: '5' },
      { image: 'image/q23-f.gif', value: '6' },
      { image: 'image/q23-g.gif', value: '7' },
      { image: 'image/q23-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 2,
  },
  {
    question: 'image/q24.gif',
    choices: [
      { image: 'image/q24-a.gif', value: '1' },
      { image: 'image/q24-b.gif', value: '2' },
      { image: 'image/q24-c.gif', value: '3' },
      { image: 'image/q24-d.gif', value: '4' },
      { image: 'image/q24-e.gif', value: '5' },
      { image: 'image/q24-f.gif', value: '6' },
      { image: 'image/q24-g.gif', value: '7' },
      { image: 'image/q24-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 1,
  },
  {
    question: 'image/q25.gif',
    choices: [
      { image: 'image/q25-a.gif', value: '1' },
      { image: 'image/q25-b.gif', value: '2' },
      { image: 'image/q25-c.gif', value: '3' },
      { image: 'image/q25-d.gif', value: '4' },
      { image: 'image/q25-e.gif', value: '5' },
      { image: 'image/q25-f.gif', value: '6' },
      { image: 'image/q25-g.gif', value: '7' },
      { image: 'image/q25-h.gif', value: '8' }
    ],
    answer: '7', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q26.gif',
    choices: [
      { image: 'image/q26-a.gif', value: '1' },
      { image: 'image/q26-b.gif', value: '2' },
      { image: 'image/q26-c.gif', value: '3' },
      { image: 'image/q26-d.gif', value: '4' },
      { image: 'image/q26-e.gif', value: '5' },
      { image: 'image/q26-f.gif', value: '6' },
      { image: 'image/q26-g.gif', value: '7' },
      { image: 'image/q26-h.gif', value: '8' }
    ],
    answer: '8', // Replace X with the correct answer
    score: 2,
  },
  {
    question: 'image/q27.gif',
    choices: [
      { image: 'image/q27-a.gif', value: '1' },
      { image: 'image/q27-b.gif', value: '2' },
      { image: 'image/q27-c.gif', value: '3' },
      { image: 'image/q27-d.gif', value: '4' },
      { image: 'image/q27-e.gif', value: '5' },
      { image: 'image/q27-f.gif', value: '6' },
      { image: 'image/q27-g.gif', value: '7' },
      { image: 'image/q27-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q28.gif',
    choices: [
      { image: 'image/q28-a.gif', value: '1' },
      { image: 'image/q28-b.gif', value: '2' },
      { image: 'image/q28-c.gif', value: '3' },
      { image: 'image/q28-d.gif', value: '4' },
      { image: 'image/q28-e.gif', value: '5' },
      { image: 'image/q28-f.gif', value: '6' },
      { image: 'image/q28-g.gif', value: '7' },
      { image: 'image/q28-h.gif', value: '8' }
    ],
    answer: '1', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q29.gif',
    choices: [
      { image: 'image/q29-a.gif', value: '1' },
      { image: 'image/q29-b.gif', value: '2' },
      { image: 'image/q29-c.gif', value: '3' },
      { image: 'image/q29-d.gif', value: '4' },
      { image: 'image/q29-e.gif', value: '5' },
      { image: 'image/q29-f.gif', value: '6' },
      { image: 'image/q29-g.gif', value: '7' },
      { image: 'image/q29-h.gif', value: '8' }
    ],
    answer: '1', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q30.gif',
    choices: [
      { image: 'image/q30-a.gif', value: '1' },
      { image: 'image/q30-b.gif', value: '2' },
      { image: 'image/q30-c.gif', value: '3' },
      { image: 'image/q30-d.gif', value: '4' },
      { image: 'image/q30-e.gif', value: '5' },
      { image: 'image/q30-f.gif', value: '6' },
      { image: 'image/q30-g.gif', value: '7' },
      { image: 'image/q30-h.gif', value: '8' }
    ],
    answer: '4', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q31.gif',
    choices: [
      { image: 'image/q31-a.gif', value: '1' },
      { image: 'image/q31-b.gif', value: '2' },
      { image: 'image/q31-c.gif', value: '3' },
      { image: 'image/q31-d.gif', value: '4' },
      { image: 'image/q31-e.gif', value: '5' },
      { image: 'image/q31-f.gif', value: '6' },
      { image: 'image/q31-g.gif', value: '7' },
      { image: 'image/q31-h.gif', value: '8' }
    ],
    answer: '6', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q32.gif',
    choices: [
      { image: 'image/q32-a.gif', value: '1' },
      { image: 'image/q32-b.gif', value: '2' },
      { image: 'image/q32-c.gif', value: '3' },
      { image: 'image/q32-d.gif', value: '4' },
      { image: 'image/q32-e.gif', value: '5' },
      { image: 'image/q32-f.gif', value: '6' },
      { image: 'image/q32-g.gif', value: '7' },
      { image: 'image/q32-h.gif', value: '8' }
    ],
    answer: '5', // Replace X with the correct answer
    score: 2,
  },{
    question: 'image/q33.gif',
    choices: [
      { image: 'image/q33-a.gif', value: '1' },
      { image: 'image/q33-b.gif', value: '2' },
      { image: 'image/q33-c.gif', value: '3' },
      { image: 'image/q33-d.gif', value: '4' },
      { image: 'image/q33-e.gif', value: '5' },
      { image: 'image/q33-f.gif', value: '6' },
      { image: 'image/q33-g.gif', value: '7' },
      { image: 'image/q33-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 3,
  },
  {
    question: 'image/q34.gif',
    choices: [
      { image: 'image/q34-a.gif', value: '1' },
      { image: 'image/q34-b.gif', value: '2' },
      { image: 'image/q34-c.gif', value: '3' },
      { image: 'image/q34-d.gif', value: '4' },
      { image: 'image/q34-e.gif', value: '5' },
      { image: 'image/q34-f.gif', value: '6' },
      { image: 'image/q34-g.gif', value: '7' },
      { image: 'image/q34-h.gif', value: '8' }
    ],
    answer: '2', // Replace X with the correct answer
    score: 3,
  },  
  {
    question: 'image/q35.gif',
    choices: [
      { image: 'image/q35-a.gif', value: '1' },
      { image: 'image/q35-b.gif', value: '2' },
      { image: 'image/q35-c.gif', value: '3' },
      { image: 'image/q35-d.gif', value: '4' },
      { image: 'image/q35-e.gif', value: '5' },
      { image: 'image/q35-f.gif', value: '6' },
      { image: 'image/q35-g.gif', value: '7' },
      { image: 'image/q35-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 3,
  },  
  {
    question: 'image/q36.gif',
    choices: [
      { image: 'image/q36-a.gif', value: '1' },
      { image: 'image/q36-b.gif', value: '2' },
      { image: 'image/q36-c.gif', value: '3' },
      { image: 'image/q36-d.gif', value: '4' },
      { image: 'image/q36-e.gif', value: '5' },
      { image: 'image/q36-f.gif', value: '6' },
      { image: 'image/q36-g.gif', value: '7' },
      { image: 'image/q36-h.gif', value: '8' }
    ],
    answer: '3', // Replace X with the correct answer
    score: 3,
  },  
  {
    question: 'image/q37.gif',
    choices: [
      { image: 'image/q37-a.gif', value: '1' },
      { image: 'image/q37-b.gif', value: '2' },
      { image: 'image/q37-c.gif', value: '3' },
      { image: 'image/q37-d.gif', value: '4' },
      { image: 'image/q37-e.gif', value: '5' },
      { image: 'image/q37-f.gif', value: '6' },
      { image: 'image/q37-g.gif', value: '7' },
      { image: 'image/q37-h.gif', value: '8' },
    ],
    answer: '1', // Fill in the correct answer value
    score: 3,
  },  
  {
    question: 'image/q38.gif',
    choices: [
      { image: 'image/q38-a.gif', value: '1' },
      { image: 'image/q38-b.gif', value: '2' },
      { image: 'image/q38-c.gif', value: '3' },
      { image: 'image/q38-d.gif', value: '4' },
      { image: 'image/q38-e.gif', value: '5' },
      { image: 'image/q38-f.gif', value: '6' },
      { image: 'image/q38-g.gif', value: '7' },
      { image: 'image/q38-h.gif', value: '8' },
    ],
    answer: '1', // Fill in the correct answer value
    score: 3,
  }
];



class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedAnswers: Array(sampleQuestions.length).fill(null),
      showResults: false,
    };
  }

  handleAnswerSelect = (choice) => {
    const { currentQuestionIndex, selectedAnswers } = this.state;
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = choice;
    this.setState({ selectedAnswers: updatedAnswers });
  };

  handleNextQuestion = () => {
    const { currentQuestionIndex } = this.state;
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
      this.setState({ showResults: true });
    }
  };
  handlePreviousQuestion = () => {
    if (this.state.currentQuestionIndex > 0) {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex - 1,
      }));
    }
  };
  

  handleHomeClick = () => {
    this.setState({
      currentQuestionIndex: 0,
      selectedAnswers: Array(sampleQuestions.length).fill(null),
      showResults: false,
    });
  };


  calculateScore = () => {
    const { selectedAnswers } = this.state;
    let score = 80;
    sampleQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score += question.score; // Add the score for the correct answer
      }
    });
    return score;
  };

  getPraiseComment(score) {
    const messages = [
      {
        min: 80,
        max: 99,
        text: '知能は努力と学習で伸びるということを忘れないでください。スコアに納得できない場合は再挑戦をしましょう！',
      },
      {
        min: 100,
        max: 109,
        text: 'おめでとうございます！これは、あなたが平均以上の知性を持っていることを示すもので、人生の多くの分野で貴重な財産となります。あなたの認知能力は、批判的に考え、問題を解決し、新しい状況に容易に適応することを可能にします。この調子で、自分の可能性を追求し続けましょう！目標を達成するためには、知性だけでなく、献身的な努力も欠かせないということを忘れないでください。',
      },
      {
        min: 110,
        max: 119,
        text: "おめでとうございます！あなたの認知能力は非常に高く、人口の上位10％に入る知能であることを示しています。あなたは問題解決や批判的思考に秀でる可能性を持っており、これらのスキルはあなたが偉大なことを達成するのに役立つと思います。これからも素晴らしい仕事を続けてください！"
      },
      {
        min: 120,
        max: 129,
        text:"おめでとうございます！IQ120という数値は、あなたが人口の上位10％の知能を持つことを意味します。あなたの認知能力は、複雑な課題に取り組み、革新的な解決策を見出すのにきっと役立つことでしょう。あなたの知性を育み、卓越した能力を発揮するために努力を続けてください。"
      },
      {
        min: 130,
        max: 139,
        text:"おめでとうございます！これは本当に素晴らしい成果です。あなたの批判的思考と問題解決能力は素晴らしく、社会に大きく貢献する可能性を持っています。これからも知性を育み、努力を続けてください。また、あなたは秘密のサークルに入会する資格を得ました。公式LINEに『入会』と入力してください。"
      },
      {
        min: 140,
        max: 140,
        text: "おめでとうございます！あなたの知能レベルは、人口の上位0.4%に位置する、稀で特別なものです。あなたの認知能力は、複雑な課題に容易に取り組み、創造的に考え、革新的な解決策を見出すことを可能にします。あなたは社会に大きく貢献する可能性を持っています。私たちは、あなたが何を成し遂げるか楽しみにしています。これからも、あなたの知性を生かし、チャンスを掴んでください!また、あなたは秘密のサークルに入会する資格を得ました。公式LINEに『入会』と入力してください。"
      }
    ];
  
    for (const message of messages) {
      if (score >= message.min && score <= message.max) {
        return message.text;
      }
    }
  }

  

  

  render() {
    const { currentQuestionIndex, selectedAnswers, showResults } = this.state;
    const question = sampleQuestions[currentQuestionIndex];

    if (showResults) {
      const score = this.calculateScore();
      const praiseComment = this.getPraiseComment(score);
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Results</h1>
          <p>Your IQ score: {score}</p>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <p>{praiseComment}</p>
          </div>
          <Button variant="contained" color="primary" onClick={this.handleHomeClick}>
            Home
          </Button>
        </div>
        
      );
    }

    return (
      <div className="quiz-container">
         <div className="question-progress" style={{ textAlign: 'center' }}>
          <LinearProgress
              variant="determinate"
              value={(currentQuestionIndex / sampleQuestions.length) * 100}
              style={{ width: '50%', display: 'inline-block' }}
            />
        </div>
        <div className="question-container">
        <Typography variant="h6">
          第{currentQuestionIndex + 1}問 / {sampleQuestions.length}
        </Typography>
        <CardMedia
          component="img"
          alt="Question image"
          height="300"
          image={question.question} // Display the question image
          title="Question image"
          style={{
            marginBottom: '1rem',
          }}
        />
      </div>

        <div className="choices-container">
          {question.choices.map((choice, index) => (
            <div key={index}>
              <CardMedia
                component="img"
                alt={`Choice ${index + 1} image`}
                height="65"
                image={choice.image}
                title={`Choice ${index + 1} image`}
                onClick={() => this.handleAnswerSelect(choice.value)}
                style={{
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: selectedAnswers[currentQuestionIndex] === choice.value ? '#3f51b5' : 'transparent',
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handlePreviousQuestion}
            style={{ marginRight: '10px' }} // Add marginRight here
          >
           &lt;&lt; 前の質問
          </Button>
          <Button variant="contained" color="secondary" onClick={this.handleNextQuestion}>
            {currentQuestionIndex === sampleQuestions.length - 1 ? '回答を提出してスコアを得る' : '次の質問 >>'}
          </Button>
       </div>
      </div>
    );
  }
}

/*
function generateFormattedAccessCode(length, segmentLength) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';

  for (let i = 1; i <= length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));

    if (i % segmentLength === 0 && i < length) {
      result += '-';
    }
  }

  return result;
}
const formattedAccessCode = generateFormattedAccessCode(16, 4);
console.log(formattedAccessCode);
*/


const singleAccessCode = 'AH2S-PW7X-DDT5-NUD7'; // Replace with your access code

class AccessCodeForm extends React.Component {
  state = {
    accessCode: '',
    isValid: false,
  };

  handleChange = (event) => {
    this.setState({ accessCode: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { accessCode } = this.state;
    const isValid = accessCode === singleAccessCode;

    if (isValid) {
      this.setState({ isValid: true });
      this.props.onAccessCodeValid();
    } else {
      alert('Invalid access code. Please try again.');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ textAlign: 'center', marginTop: '2rem' }}>
        <TextField
          label="Access Code"
          value={this.state.accessCode}
          onChange={this.handleChange}
          style={{ marginBottom: '1rem' }}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    hasAccess: false,
  };

  // grantAccess = () => {
  //   this.setState({ hasAccess: true });
  // };
  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const prevAccessKey = params.get('prev_access_key');
    if (prevAccessKey === '6pfqpit7sbsdeicx55t6vnj7v7hh89x3') {
      this.setState({ hasAccess: true });
    }
  }
  render() {
    if (!this.state.hasAccess) {
      return (
        <div style={{ padding: '1em', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            アクセス制限について
          </Typography>
          <Typography variant="body1">
          申し訳ありませんが、このサイトにはアクセスできません。アクセス権があると思われる場合は、提供されたURLをご確認ください。
          </Typography>
        </div>
      );
    }
    return <Quiz />;
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
