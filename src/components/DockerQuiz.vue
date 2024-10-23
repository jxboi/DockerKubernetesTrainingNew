<template>
    <div class="max-w-3xl mx-auto p-6">
      <h2 class="text-4xl font-bold text-blue-700 mb-6 text-center">Docker Quiz</h2>
      <div v-if="!quizCompleted">
        <!-- Progress Bar -->
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            class="bg-blue-600 h-2.5 rounded-full"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <!-- Question Card -->
        <div class="p-6 bg-white shadow rounded-lg">
          <h4 class="text-lg font-medium text-gray-800">
            Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
          </h4>
          <p class="mt-2 text-gray-700">{{ currentQuestion.text }}</p>
          <div class="mt-4 space-y-2">
            <label
              v-for="(option, i) in currentQuestion.options"
              :key="i"
              class="flex items-center"
            >
              <input
                type="radio"
                :value="option"
                v-model="userAnswers[currentQuestionIndex]"
                class="form-radio h-4 w-4 text-blue-600"
              />
              <span class="ml-2 text-gray-700">{{ option }}</span>
            </label>
          </div>
        </div>
        <!-- Navigation Buttons -->
        <div class="flex justify-between items-center mt-6">
          <button
            @click="prevQuestion"
            :disabled="currentQuestionIndex === 0"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium"
          >
            Previous
          </button>
          <button
            @click="nextQuestion"
            :disabled="!userAnswers[currentQuestionIndex]"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            {{ isLastQuestion ? 'Submit Quiz' : 'Next' }}
          </button>
        </div>
      </div>
      <!-- Quiz Completion Summary -->
      <div v-else class="mt-8">
        <h3 class="text-3xl font-semibold text-gray-800 text-center">
          Your Score: {{ score }} / {{ questions.length }}
        </h3>
        <div class="mt-6 space-y-6">
          <div
            v-for="(question, index) in questions"
            :key="index"
            class="p-6 bg-white shadow rounded-lg"
          >
            <h4 class="text-lg font-medium text-gray-800">
              {{ index + 1 }}. {{ question.text }}
            </h4>
            <p
              :class="{
                'text-green-600': userAnswers[index] === question.answer,
                'text-red-600': userAnswers[index] !== question.answer,
              }"
              class="mt-2"
            >
              <strong>Your answer:</strong> {{ userAnswers[index] }}
            </p>
            <p v-if="userAnswers[index] !== question.answer" class="text-gray-800">
              <strong>Correct answer:</strong> {{ question.answer }}
            </p>
          </div>
        </div>
        <div class="text-center">
          <p class="text-lg text-gray-600 mt-4">
            Thank you for completing the quiz!
          </p>
          <button
            @click="retakeQuiz"
            class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export const content = `

`;

  export default {
    name: 'DockerQuiz',
    data() {
      return {
        questions: [
          {
            text: 'What is Docker?',
            options: [
              'A tool for managing virtual machines',
              'An open-source platform for automating application deployment',
              'A programming language',
              'A cloud service provider',
            ],
            answer: 'An open-source platform for automating application deployment',
          },
          {
            text: 'What is a Docker image?',
            options: [
              'A running instance of a container',
              'A read-only template for creating containers',
              'A command to run a container',
              'A type of virtual machine',
            ],
            answer: 'A read-only template for creating containers',
          },
          {
            text: 'What command is used to start a container?',
            options: [
              'docker start',
              'docker run',
              'docker create',
              'docker launch',
            ],
            answer: 'docker run',
          },
          {
            text: 'What is Docker Compose used for?',
            options: [
              'To create Docker images',
              'To manage multi-container Docker applications',
              'To run a single container',
              'To monitor container performance',
            ],
            answer: 'To manage multi-container Docker applications',
          },
          {
            text: 'Which command is used to stop a running container?',
            options: [
              'docker stop',
              'docker pause',
              'docker exit',
              'docker terminate',
            ],
            answer: 'docker stop',
          },
          {
            text: 'What does the Dockerfile contain?',
            options: [
              'Instructions to build a Docker image',
              'A list of running containers',
              'Configuration for Docker daemon',
              'A log of Docker commands',
            ],
            answer: 'Instructions to build a Docker image',
          },
          {
            text: 'What is the purpose of the RUN command in a Dockerfile?',
            options: [
              'To execute commands in a new layer on top of the current image',
              'To copy files into the image',
              'To set environment variables',
              'To specify the default command to run',
            ],
            answer: 'To execute commands in a new layer on top of the current image',
          },
          {
            text: 'What is the command to remove a stopped container?',
            options: [
              'docker rm',
              'docker delete',
              'docker stop',
              'docker clear',
            ],
            answer: 'docker rm',
          },
          {
            text: 'What does the docker ps command do?',
            options: [
              'Lists all Docker images',
              'Lists all running containers',
              'Shows Docker system information',
              'Removes unused data',
            ],
            answer: 'Lists all running containers',
          },
          {
            text: 'What is the purpose of the ENV command in a Dockerfile?',
            options: [
              'To set environment variables',
              'To specify the base image',
              'To run commands',
              'To copy files',
            ],
            answer: 'To set environment variables',
          },
        ],
        userAnswers: [],
        currentQuestionIndex: 0,
        quizCompleted: false,
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
      progressPercentage() {
        return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
      },
      isLastQuestion() {
        return this.currentQuestionIndex === this.questions.length - 1;
      },
      score() {
        return this.userAnswers.reduce((total, answer, index) => {
          return total + (answer === this.questions[index].answer ? 1 : 0);
        }, 0);
      },
    },
    methods: {
      nextQuestion() {
        if (this.isLastQuestion) {
          this.quizCompleted = true;
        } else {
          this.currentQuestionIndex++;
        }
      },
      prevQuestion() {
        if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
        }
      },
      retakeQuiz() {
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
        this.quizCompleted = false;
        // Reshuffle questions and options
        this.shuffleQuestionsAndOptions();
      },
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      },
      shuffleQuestionsAndOptions() {
        // Shuffle questions
        this.shuffleArray(this.questions);
        // Shuffle options within each question
        this.questions.forEach((question) => {
          this.shuffleArray(question.options);
        });
      },
    },
    created() {
      // Shuffle questions and options when component is created
      this.shuffleQuestionsAndOptions();
    },
  };
  </script>
  
  <style scoped>
  /* Using Tailwind CSS for styling */
  </style>
  