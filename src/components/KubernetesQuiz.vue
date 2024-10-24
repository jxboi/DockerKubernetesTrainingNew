<template>
    <div class="max-w-3xl mx-auto p-6">
      <h2 class="text-4xl font-bold text-blue-700 mb-6 text-center">Kubernetes Quiz</h2>
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
    name: 'KubernetesQuiz',
    data() {
      return {
        questions: [
          {
            text: 'What is a Kubernetes Pod?',
            options: [
              'A single instance of a running process in your cluster',
              'A type of container',
              'A service for managing containers',
              'A storage unit in Kubernetes',
            ],
            answer: 'A single instance of a running process in your cluster',
          },
          {
            text: 'What is the purpose of a Deployment in Kubernetes?',
            options: [
              'To manage the state of pods',
              'To provide persistent storage',
              'To manage the rollout of applications',
              'To monitor cluster health',
            ],
            answer: 'To manage the rollout of applications',
          },
          {
            text: 'What does a Service do in Kubernetes?',
            options: [
              'Provides a stable endpoint for accessing pods',
              'Manages the lifecycle of pods',
              'Stores configuration data',
              'Handles network traffic',
            ],
            answer: 'Provides a stable endpoint for accessing pods',
          },
          {
            text: 'What is a StatefulSet?',
            options: [
              'A way to manage stateless applications',
              'A controller for managing stateful applications',
              'A type of service',
              'A method for scaling applications',
            ],
            answer: 'A controller for managing stateful applications',
          },
          {
            text: 'What is the function of the kubelet?',
            options: [
              'To manage network communication',
              'To ensure containers are running in a pod',
              'To schedule pods on nodes',
              'To provide persistent storage',
            ],
            answer: 'To ensure containers are running in a pod',
          },
          {
            text: 'What is a ReplicaSet?',
            options: [
              'A way to manage application updates',
              'Ensures a specified number of pod replicas are running',
              'A type of service',
              'A method for monitoring pods',
            ],
            answer: 'Ensures a specified number of pod replicas are running',
          },
          {
            text: 'What is the purpose of a ConfigMap?',
            options: [
              'To store sensitive information',
              'To manage application secrets',
              'To store non-sensitive configuration data',
              'To provide persistent storage',
            ],
            answer: 'To store non-sensitive configuration data',
          },
          {
            text: 'What does the kubectl command do?',
            options: [
              'Manages Kubernetes clusters',
              'Deploys applications',
              'Monitors application performance',
              'All of the above',
            ],
            answer: 'All of the above',
          },
          {
            text: 'What is a DaemonSet?',
            options: [
              'Ensures that a specific pod runs on all nodes',
              'Manages the scaling of applications',
              'Provides persistent storage',
              'Monitors cluster health',
            ],
            answer: 'Ensures that a specific pod runs on all nodes',
          },
          {
            text: 'What is the role of the API Server in Kubernetes?',
            options: [
              'To manage the state of the cluster',
              'To expose the Kubernetes API',
              'To schedule pods',
              'To monitor application performance',
            ],
            answer: 'To expose the Kubernetes API',
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
      },
    },
    created() {
      // Shuffle questions if needed
    },
};
</script>

<style scoped>
/* Using Tailwind CSS for styling */
</style>
