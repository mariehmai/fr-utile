import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './exercices.module.css';

const exerciseCategories = [
  {
    id: 'vocabulaire',
    title: 'Vocabulaire',
    description: 'Testez votre connaissance des mots français',
    color: '#25c2a0',
    icon: '📚'
  },
  {
    id: 'conjugaison',
    title: 'Conjugaison',
    description: 'Pratiquez la conjugaison des verbes',
    color: '#1877f2',
    icon: '✍️'
  },
  {
    id: 'grammaire',
    title: 'Grammaire',
    description: 'Exercices de grammaire française',
    color: '#fd7e14',
    icon: '📝'
  }
];

const levelInfo = {
  'A1': {
    name: 'Débutant',
    description: 'Niveau débutant - Premiers mots et expressions',
    color: '#28a745',
    nextLevel: 'A2'
  },
  'A2': {
    name: 'Élémentaire',
    description: 'Niveau élémentaire - Communication simple',
    color: '#17a2b8',
    nextLevel: 'B1'
  },
  'B1': {
    name: 'Intermédiaire',
    description: 'Niveau intermédiaire - Autonomie partielle',
    color: '#fd7e14',
    nextLevel: 'B2'
  }
};

const exerciseData = {
  vocabulaire: [
    {
      id: 'vocab_animals',
      title: 'Les Animaux',
      level: 'A1',
      estimatedTime: '5 min',
      difficulty: 'Facile',
      questions: [
        {
          question: 'Quel est le mot français pour "cat"?',
          options: ['chien', 'chat', 'oiseau', 'poisson'],
          correct: 1,
          explanation: 'Un chat est un animal domestique félin. "Chien" = dog, "oiseau" = bird, "poisson" = fish.'
        },
        {
          question: 'Comment dit-on "dog" en français?',
          options: ['chat', 'chien', 'lapin', 'cheval'],
          correct: 1,
          explanation: 'Un chien est l\'ami fidèle de l\'homme. "Chat" = cat, "lapin" = rabbit, "cheval" = horse.'
        },
        {
          question: 'Que signifie "oiseau"?',
          options: ['fish', 'bird', 'rabbit', 'horse'],
          correct: 1,
          explanation: 'Un oiseau vole dans le ciel. "Fish" = poisson, "rabbit" = lapin, "horse" = cheval.'
        }
      ]
    },
    {
      id: 'vocab_colors',
      title: 'Les Couleurs',
      level: 'A1',
      estimatedTime: '4 min',
      difficulty: 'Facile',
      questions: [
        {
          question: 'Quelle est la couleur du ciel?',
          options: ['rouge', 'vert', 'bleu', 'jaune'],
          correct: 2,
          explanation: 'Le ciel est bleu. "Rouge" = red, "vert" = green, "jaune" = yellow.'
        },
        {
          question: 'Comment dit-on "red" en français?',
          options: ['bleu', 'rouge', 'vert', 'noir'],
          correct: 1,
          explanation: 'Rouge comme une tomate ou une rose. "Bleu" = blue, "vert" = green, "noir" = black.'
        },
        {
          question: 'Que signifie "blanc"?',
          options: ['black', 'white', 'brown', 'pink'],
          correct: 1,
          explanation: 'Blanc comme la neige. "Black" = noir, "brown" = marron, "pink" = rose.'
        }
      ]
    },
    {
      id: 'vocab_food',
      title: 'La Nourriture',
      level: 'A2',
      estimatedTime: '6 min',
      difficulty: 'Moyen',
      questions: [
        {
          question: 'Que mange-t-on au petit-déjeuner en France?',
          options: ['du pain avec du beurre', 'du riz', 'des pâtes', 'de la soupe'],
          correct: 0,
          explanation: 'Le petit-déjeuner français typique inclut du pain, des croissants, du beurre et de la confiture.'
        },
        {
          question: 'Comment dit-on "I am hungry" en français?',
          options: ['J\'ai soif', 'J\'ai faim', 'J\'ai froid', 'J\'ai chaud'],
          correct: 1,
          explanation: '"J\'ai faim" exprime la sensation de faim. "J\'ai soif" = thirsty, "J\'ai froid" = cold, "J\'ai chaud" = hot.'
        },
        {
          question: 'Où achète-t-on du pain frais?',
          options: ['à la pharmacie', 'à la boulangerie', 'à la banque', 'au cinéma'],
          correct: 1,
          explanation: 'La boulangerie est le magasin où on achète du pain, des croissants et des pâtisseries.'
        }
      ]
    }
  ],
  conjugaison: [
    {
      id: 'conj_etre',
      title: 'Verbe être au présent',
      level: 'A1',
      estimatedTime: '5 min',
      difficulty: 'Facile',
      questions: [
        {
          question: 'Je ... étudiant.',
          options: ['es', 'suis', 'est', 'sommes'],
          correct: 1,
          explanation: 'Avec "je", on utilise "suis". Je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.'
        },
        {
          question: 'Vous ... français.',
          options: ['êtes', 'es', 'est', 'sont'],
          correct: 0,
          explanation: 'Avec "vous", on utilise "êtes". Vous êtes poli, vous êtes français, vous êtes contents.'
        },
        {
          question: 'Ils ... à Paris.',
          options: ['es', 'est', 'êtes', 'sont'],
          correct: 3,
          explanation: 'Avec "ils/elles", on utilise "sont". Ils sont à Paris, elles sont gentilles.'
        }
      ]
    },
    {
      id: 'conj_avoir',
      title: 'Verbe avoir au présent',
      level: 'A1',
      estimatedTime: '5 min',
      difficulty: 'Facile',
      questions: [
        {
          question: 'Tu ... un chat.',
          options: ['ai', 'as', 'a', 'avez'],
          correct: 1,
          explanation: 'Avec "tu", on utilise "as". J\'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.'
        },
        {
          question: 'Nous ... une voiture.',
          options: ['ai', 'as', 'avons', 'ont'],
          correct: 2,
          explanation: 'Avec "nous", on utilise "avons". Nous avons une maison, nous avons des amis.'
        },
        {
          question: 'Elle ... 20 ans.',
          options: ['ai', 'as', 'a', 'ont'],
          correct: 2,
          explanation: 'Avec "il/elle", on utilise "a". Il a faim, elle a soif, on a chaud.'
        }
      ]
    },
    {
      id: 'conj_aller',
      title: 'Verbe aller au présent',
      level: 'A2',
      estimatedTime: '6 min',
      difficulty: 'Moyen',
      questions: [
        {
          question: 'Je ... au cinéma.',
          options: ['va', 'vas', 'vais', 'allez'],
          correct: 2,
          explanation: 'Avec "je", on utilise "vais". Je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.'
        },
        {
          question: 'Où ... -vous en vacances?',
          options: ['va', 'vas', 'allons', 'allez'],
          correct: 3,
          explanation: 'Avec "vous", on utilise "allez". "Où allez-vous?" est une question polie et formelle.'
        },
        {
          question: 'Mes amis ... à Paris.',
          options: ['va', 'allons', 'allez', 'vont'],
          correct: 3,
          explanation: 'Avec "ils/elles" (mes amis), on utilise "vont". Ils vont au travail, elles vont à l\'école.'
        }
      ]
    }
  ],
  grammaire: [
    {
      id: 'gram_articles',
      title: 'Les Articles',
      level: 'A1',
      estimatedTime: '4 min',
      difficulty: 'Facile',
      questions: [
        {
          question: '... chat mange.',
          options: ['Le', 'La', 'Les', 'Un'],
          correct: 0,
          explanation: '"Chat" est masculin singulier, donc "le chat". "La" pour féminin, "les" pour pluriel, "un" pour indéfini.'
        },
        {
          question: '... voiture est rouge.',
          options: ['Le', 'La', 'Les', 'Un'],
          correct: 1,
          explanation: '"Voiture" est féminin singulier, donc "la voiture". Les noms féminins prennent "la".'
        },
        {
          question: 'J\'ai ... pomme.',
          options: ['le', 'la', 'une', 'un'],
          correct: 2,
          explanation: '"Pomme" est féminin, avec l\'article indéfini "une pomme". "Un" pour masculin indéfini.'
        }
      ]
    },
    {
      id: 'gram_prepositions',
      title: 'Les Prépositions de lieu',
      level: 'A2',
      estimatedTime: '7 min',
      difficulty: 'Moyen',
      questions: [
        {
          question: 'Le livre est ... la table.',
          options: ['sur', 'sous', 'dans', 'avec'],
          correct: 0,
          explanation: '"Sur" indique que quelque chose est posé au-dessus. "Sous" = under, "dans" = in, "avec" = with.'
        },
        {
          question: 'Je vais ... France.',
          options: ['à', 'en', 'au', 'aux'],
          correct: 1,
          explanation: 'Avec les noms de pays féminins comme "France", on utilise "en". "Je vais en France, en Italie, en Allemagne."'
        },
        {
          question: 'Il habite ... Paris.',
          options: ['en', 'au', 'à', 'dans'],
          correct: 2,
          explanation: 'Avec les noms de villes, on utilise "à". "Il habite à Paris, à Londres, à Tokyo."'
        }
      ]
    }
  ]
};

function ExerciseCard({ category, onClick }) {
  return (
    <div 
      className={clsx('card', styles.exerciseCard)}
      onClick={onClick}
      style={{ borderColor: category.color }}
    >
      <div className="card__header">
        <div className={styles.exerciseIcon} style={{ color: category.color }}>
          {category.icon}
        </div>
        <h3>{category.title}</h3>
      </div>
      <div className="card__body">
        <p>{category.description}</p>
      </div>
    </div>
  );
}

function ExerciseList({ categoryId, onSelectExercise, onBack }) {
  const exercises = exerciseData[categoryId] || [];
  const category = exerciseCategories.find(c => c.id === categoryId);

  const exercisesByLevel = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.level]) {
      acc[exercise.level] = [];
    }
    acc[exercise.level].push(exercise);
    return acc;
  }, {});

  const levels = Object.keys(exercisesByLevel).sort();

  return (
    <div>
      <div className={styles.backButton}>
        <button className="button button--secondary" onClick={onBack}>
          ← Retour aux catégories
        </button>
      </div>
      <h2 style={{ color: category.color }}>
        {category.icon} {category.title}
      </h2>
      
      {levels.map(level => (
        <div key={level} className={styles.levelSection}>
          <div className={styles.levelHeader} style={{ borderColor: levelInfo[level].color }}>
            <h3 style={{ color: levelInfo[level].color }}>
              Niveau {level} - {levelInfo[level].name}
            </h3>
            <p className={styles.levelDescription}>{levelInfo[level].description}</p>
          </div>
          
          <div className="row">
            {exercisesByLevel[level].map(exercise => (
              <div key={exercise.id} className="col col--6 margin-bottom--md">
                <div className="card">
                  <div className="card__header">
                    <div className={styles.exerciseHeader}>
                      <h4>{exercise.title}</h4>
                      <span 
                        className={clsx('badge', 'badge--primary')}
                        style={{ backgroundColor: levelInfo[level].color }}
                      >
                        {exercise.level}
                      </span>
                    </div>
                    <div className={styles.exerciseMetadata}>
                      <span className={styles.metadata}>⏱️ {exercise.estimatedTime}</span>
                      <span className={styles.metadata}>📊 {exercise.difficulty}</span>
                      <span className={styles.metadata}>❓ {exercise.questions.length} questions</span>
                    </div>
                  </div>
                  <div className="card__body">
                    <button 
                      className="button button--primary"
                      onClick={() => onSelectExercise(exercise)}
                    >
                      Commencer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className={styles.progressionInfo}>
        <h3>🎯 Votre progression</h3>
        <p>
          Complétez les exercices dans l'ordre pour progresser du niveau débutant vers des niveaux plus avancés.
          Après avoir maîtrisé les exercices A1, vous serez prêt pour le niveau A2 !
        </p>
      </div>
    </div>
  );
}

function ExerciseQuiz({ exercise, onBack, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    exercise.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const isAnswered = (questionIndex) => {
    return selectedAnswers.hasOwnProperty(questionIndex);
  };

  const allAnswered = exercise.questions.every((_, index) => isAnswered(index));

  if (showResults) {
    const percentage = Math.round((score / exercise.questions.length) * 100);
    const currentLevel = levelInfo[exercise.level];
    
    return (
      <div>
        <div className={styles.backButton}>
          <button className="button button--secondary" onClick={onBack}>
            ← Retour aux exercices
          </button>
        </div>
        <div className={styles.resultsContainer}>
          <h2>🎉 Résultats</h2>
          <div className={styles.scoreDisplay}>
            <h3>Score: {score}/{exercise.questions.length}</h3>
            <div className={styles.scoreBar}>
              <div 
                className={styles.scoreProgress}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <p>{percentage}%</p>
          </div>

          <div className={styles.levelFeedback}>
            <h3>📈 Évaluation de votre niveau</h3>
            <div className={styles.levelStatus} style={{ borderColor: currentLevel.color }}>
              <h4 style={{ color: currentLevel.color }}>
                Niveau {exercise.level} - {currentLevel.name}
              </h4>
              <p>{currentLevel.description}</p>
              
              {percentage >= 80 ? (
                <div className={styles.levelSuccess}>
                  <p>🌟 <strong>Excellent !</strong> Vous maîtrisez bien ce niveau.</p>
                  {currentLevel.nextLevel && (
                    <p>Vous êtes prêt(e) à passer au niveau <strong>{currentLevel.nextLevel}</strong> !</p>
                  )}
                </div>
              ) : percentage >= 60 ? (
                <div className={styles.levelProgress}>
                  <p>👍 <strong>Bien !</strong> Vous progressez dans ce niveau.</p>
                  <p>Continuez à pratiquer pour consolider vos acquis.</p>
                </div>
              ) : (
                <div className={styles.levelNeedsWork}>
                  <p>📚 <strong>À travailler !</strong> Ce niveau nécessite plus de pratique.</p>
                  <p>Relisez les explications et refaites l'exercice pour mieux comprendre.</p>
                </div>
              )}
            </div>
          </div>

          <h3>📝 Solutions détaillées</h3>
          {exercise.questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correct;
            return (
              <div key={index} className={styles.solutionCard}>
                <h4>Question {index + 1}: {question.question}</h4>
                <div className={styles.answerReview}>
                  {question.options.map((option, optIndex) => (
                    <div 
                      key={optIndex}
                      className={clsx(
                        styles.answerOption,
                        {
                          [styles.correct]: optIndex === question.correct,
                          [styles.incorrect]: optIndex === userAnswer && optIndex !== question.correct,
                          [styles.selected]: optIndex === userAnswer
                        }
                      )}
                    >
                      {optIndex === question.correct && '✅ '}
                      {optIndex === userAnswer && optIndex !== question.correct && '❌ '}
                      {option}
                    </div>
                  ))}
                </div>
                <div className={styles.explanation}>
                  <strong>Explication:</strong> {question.explanation}
                </div>
                <div className={clsx(styles.resultIndicator, {
                  [styles.correct]: isCorrect,
                  [styles.incorrect]: !isCorrect
                })}>
                  {isCorrect ? '✅ Correct' : '❌ Incorrect'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.backButton}>
        <button className="button button--secondary" onClick={onBack}>
          ← Retour aux exercices
        </button>
      </div>
      <div className={styles.quizContainer}>
        <h2>{exercise.title}</h2>
        <div className={styles.progress}>
          Question {currentQuestion + 1} sur {exercise.questions.length}
        </div>
        
        <div className={styles.questionCard}>
          <h3>{exercise.questions[currentQuestion].question}</h3>
          <div className={styles.options}>
            {exercise.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={clsx(
                  'button',
                  selectedAnswers[currentQuestion] === index ? 'button--primary' : 'button--outline button--primary'
                )}
                onClick={() => handleAnswerSelect(currentQuestion, index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <button 
            className="button button--secondary"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            ← Précédent
          </button>
          
          {currentQuestion < exercise.questions.length - 1 ? (
            <button 
              className="button button--primary"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={!isAnswered(currentQuestion)}
            >
              Suivant →
            </button>
          ) : (
            <button 
              className="button button--success"
              onClick={handleSubmit}
              disabled={!allAnswered}
            >
              Terminer l'exercice
            </button>
          )}
        </div>

        <div className={styles.answerStatus}>
          {exercise.questions.map((_, index) => (
            <span
              key={index}
              className={clsx(
                styles.questionDot,
                {
                  [styles.answered]: isAnswered(index),
                  [styles.current]: index === currentQuestion
                }
              )}
              onClick={() => setCurrentQuestion(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Exercices() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.id);
    setSelectedExercise(null);
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleBack = () => {
    if (selectedExercise) {
      setSelectedExercise(null);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <Layout
      title="Exercices"
      description="Exercices interactifs pour apprendre le français"
    >
      <div className="container margin-top--lg">
        {!selectedCategory ? (
          <>
            <h1>🎯 Exercices Interactifs</h1>
            <p className="margin-bottom--lg">
              Choisissez une catégorie d'exercices pour commencer à pratiquer !
            </p>
            <div className="row">
              {exerciseCategories.map(category => (
                <div key={category.id} className="col col--4 margin-bottom--md">
                  <ExerciseCard 
                    category={category}
                    onClick={() => handleCategorySelect(category)}
                  />
                </div>
              ))}
            </div>
          </>
        ) : selectedExercise ? (
          <ExerciseQuiz 
            exercise={selectedExercise}
            onBack={handleBack}
            onComplete={handleBack}
          />
        ) : (
          <ExerciseList 
            categoryId={selectedCategory}
            onSelectExercise={handleExerciseSelect}
            onBack={handleBack}
          />
        )}
      </div>
    </Layout>
  );
}