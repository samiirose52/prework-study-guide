var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
<<<<<<< HEAD
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

function selectTopics() {
if (randomTopic === 'HTML') {
 console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
 console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
 console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopics();

function listTopics() {
=======
>>>>>>> 69243af13a586de875e94be5f7f242858883b2cd
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
<<<<<<< HEAD
selectTopic();
=======
selectTopic();
>>>>>>> 69243af13a586de875e94be5f7f242858883b2cd
