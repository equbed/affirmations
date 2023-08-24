var quotes = [
  'Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill',
  'Strive not to be a success, but rather to be of value. –Albert Einstein',
  'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost',
  'I attribute my success to this: I never gave or took any excuse. –Florence Nightingale',
  'You miss 100% of the shots you don\’t take. –Wayne Gretzky',
  'The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart',
  'Every strike brings me closer to the next home run. –Babe Ruth',
  'Definiteness of purpose is the starting point of all achievement. –W. Clement Stone',
  'Life isn\'t about getting and having, it\'s about giving and being. –Kevin Kruse',
  'Life is what happens to you while you\’re busy making other plans. –John Lennon',
  'We become what we think about. –Earl Nightingale'

  ]

function newQuote() {
  var randomNumber=Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}
