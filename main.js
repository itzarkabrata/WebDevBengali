const flashcardsData = [
    {
      word: 'Serendipity',
      meaning:
        'The occurrence and development of events by chance in a happy or beneficial way',
    },
    { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
    { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
    { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
    {
      word: 'Quixotic',
      meaning: 'Extremely idealistic; unrealistic and impractical',
    },
    {
      word: 'Pernicious',
      meaning: 'Having a harmful effect, especially in a gradual or subtle way',
    },
    { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
    {
      word: 'Resilience',
      meaning: 'The capacity to recover quickly from difficulties; toughness',
    },
    {
      word: 'Ineffable',
      meaning: 'Too great or extreme to be expressed or described in words',
    },
    {
      word: 'Sycophant',
      meaning:
        'A person who acts obsequiously toward someone important in order to gain advantage',
    },
  ];
  
  const cardContainer = document.getElementById('card-container');
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const doneButton = document.getElementById('done-button');
  const scoreEle = document.getElementById('score-card');
  const commentScore = document.getElementById('comment-score');
  
  
  const handleStart = () => {
    let score = 10;
    scoreEle.innerHTML = "Score - "+score;
    commentScore.innerHTML = "";
    cardContainer.innerHTML = '';
    commentScore.classList.add('hidden');
    flashcardsData.forEach((item) => {
      //* Card add section
      const cardElement = document.createElement('div'); 
      cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
      cardElement.innerText = item.word;
      cardContainer.appendChild(cardElement);
  
      //* Card click event
      cardElement.addEventListener('click', () => {
        console.log(item.word);
        cardElement.classList.add('border-red-500');
        cardElement.innerText = item.meaning;
        score = score - 1;
        scoreEle.innerHTML = "Score - "+score;
      });
    });
  
    resetButton.classList.remove('hidden');
    doneButton.classList.remove('hidden');
    startButton.classList.add('hidden');
  };
  
  const handleReset = () => {
    cardContainer.innerHTML = '';
    scoreEle.innerHTML = "Score - "+10;
    startButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
    doneButton.classList.add('hidden');
  };

  const handleDone = ()=>{
    const elements = document.getElementsByClassName('border-red-500');
    let arr = [];
    for (let iterator of elements) {
        arr.push(iterator.innerText);
    }
    cardContainer.innerHTML = '';
    console.log(arr);
    const filterData = flashcardsData.filter((e)=>{
        return arr.includes(e.meaning);
    })
    console.log(filterData);
    filterData.forEach((item)=>{
        const newcardElement = document.createElement('div');
        const newcardElement1 = document.createElement('h3');
        const newcardElement2 = document.createElement('p');
        newcardElement.className = 'border-2 border-red-500 rounded-md p-5 h-full';
        newcardElement1.innerHTML = item.word;
        newcardElement2.innerHTML = item.meaning;
        newcardElement.appendChild(newcardElement1);
        newcardElement.appendChild(newcardElement2);
        cardContainer.appendChild(newcardElement);
    })
    commentScore.innerHTML = "You have done "+arr.length+" wrong answers";
    scoreEle.innerHTML = "Score - "+(10-arr.length);
    commentScore.classList.remove('hidden');
    

    doneButton.classList.add('hidden');
    startButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
  };