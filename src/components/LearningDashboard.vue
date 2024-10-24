<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1 shadow-md flex items-center relative">
      <h1 class="text-xl tracking-tight ml-3 flex-1">Docker & Kubernetes</h1>
      <div class="mr-3">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="rounded px-2 py-1 text-black"
          @input="searchContent"
          ref="searchInput"
        />
      </div>

      <!-- Search Results Popup -->
      <div
        v-if="showSearchResults"
        ref="searchPopup"
        class="absolute top-full right-3 bg-white shadow-md rounded w-96 max-h-96 overflow-y-auto z-50 mt-2"
      >
        <ul>
          <li
            v-for="(result, index) in searchResults"
            :key="index"
            class="p-2 border-b hover:bg-gray-100 cursor-pointer"
            @click="goToSection(result.key)"
          >
            <h3 class="font-semibold text-gray-800">{{ result.title }}</h3>
            <p class="text-sm text-gray-600">{{ result.excerpt }}</p>
          </li>
        </ul>
      </div>
    </header>

    <!-- Main content -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <nav class="w-64 bg-white p-6 border-r overflow-y-auto">
        <ul>
          <li class="mb-8">
            <h3 class="text-lg font-semibold text-gray-900">Docker</h3>
            <ul class="mt-4 ml-4">
              <li
                v-for="(item, index) in dockerSections"
                :key="index"
                class="mb-3"
              >
                <a
                  href="#"
                  class="block text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  :class="{ 'text-blue-500 font-medium': currentSection === item.key }"
                  @click.prevent="currentSection = item.key"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </li>
          <li class="mb-8">
            <h3 class="text-lg font-semibold text-gray-900">Kubernetes</h3>
            <ul class="mt-4 ml-4">
              <li
                v-for="(item, index) in kubernetesSections"
                :key="index"
                class="mb-3"
              >
                <a
                  href="#"
                  class="block text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  :class="{ 'text-blue-500 font-medium': currentSection === item.key }"
                  @click.prevent="currentSection = item.key"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- Content Area -->
      <div class="flex-1 p-8 overflow-y-auto">
        <!-- Breadcrumbs -->
        <nav class="text-sm mb-4" aria-label="Breadcrumb">
          <ol class="list-none p-0 inline-flex">
            <li
              v-for="(crumb, index) in breadcrumbs"
              :key="index"
              class="flex items-center"
            >
              <a
                href="#"
                class="text-gray-500 hover:text-blue-600"
                @click.prevent="goToSection(crumb.key)"
              >
                {{ crumb.title }}
              </a>
              <span
                v-if="index < breadcrumbs.length - 1"
                class="mx-2 text-gray-400"
                >/</span
              >
            </li>
          </ol>
        </nav>
        <!-- Dynamic Content Rendering -->
        <component :is="currentComponent"></component>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-100 text-gray-600 p-4 text-center">
      © 2023 Learning Dashboard. All rights reserved.
    </footer>
  </div>
</template>

<script>
import DockerQuiz, {
  content as dockerQuizContent,
} from './DockerQuiz.vue';
import DockerIntroduction, {
  content as dockerIntroductionContent,
} from './DockerIntroduction.vue';
import DockerInteractions, {
  content as dockerInteractionsContent,
} from './DockerInteractions.vue';
import DockerCustomContainer, {
  content as dockerCustomContainerContent,
} from './DockerCustomContainer.vue';
import DockerCompose, {
  content as dockerComposeContent,
} from './DockerCompose.vue';
import KubernetesIntroduction, {
  content as kubernetesIntroductionContent,
} from './KubernetesIntroduction.vue';
import KubernetesCluster, {
  content as kubernetesClusterContent,
} from './KubernetesCluster.vue';
import KubernetesObjects, {
  content as kubernetesObjectsContent,
} from './KubernetesObjects.vue';
import KubernetesPods, {
  content as kubernetesPodsContent,
} from './KubernetesPods.vue';
import KubernetesWorkload, {
  content as kubernetesWorkloadContent,
} from './KubernetesWorkload.vue';
import KubernetesQuiz, {
  content as kubernetesQuizContent,
} from './KubernetesQuiz.vue';

export default {
  name: 'LearningDashboard',
  components: {
    DockerQuiz,
    DockerIntroduction,
    DockerInteractions,
    DockerCustomContainer,
    DockerCompose,
    KubernetesIntroduction,
    KubernetesCluster,
    KubernetesObjects,
    KubernetesPods,
    KubernetesWorkload,
    KubernetesQuiz,
  },
  data() {
    return {
      currentSection: 'dockerIntroduction',
      searchQuery: '',
      showSearchResults: false,
      searchResults: [],
      // Map keys to content imported from components
      contentMap: {
        dockerIntroduction: dockerIntroductionContent,
        dockerInteractions: dockerInteractionsContent,
        dockerCustomContainer: dockerCustomContainerContent,
        dockerCompose: dockerComposeContent,
        dockerQuiz: dockerQuizContent,
        kubernetesIntroduction: kubernetesIntroductionContent,
        kubernetesCluster: kubernetesClusterContent,
        kubernetesObjects: kubernetesObjectsContent,
        kubernetesPods: kubernetesPodsContent,
        kubernetesWorkload: kubernetesWorkloadContent,
        kubernetesQuiz: kubernetesQuizContent,
      },
      dockerSections: [
        { key: 'dockerIntroduction', title: 'Introduction to Docker' },
        { key: 'dockerInteractions', title: 'Interacting with Docker' },
        {
          key: 'dockerCustomContainer',
          title: 'Creating Custom Docker Container',
        },
        { key: 'dockerCompose', title: 'Using Docker Compose' },
        { key: 'dockerQuiz', title: 'Docker Quiz' },
      ],
      kubernetesSections: [
        {
          key: 'kubernetesIntroduction',
          title: 'Introduction to Kubernetes',
        },
        { key: 'kubernetesCluster', title: 'Kubernetes Cluster' },
        { key: 'kubernetesObjects', title: 'Kubernetes Objects' },
        { key: 'kubernetesPods', title: 'Kubernetes Pods' },
        { key: 'kubernetesWorkload', title: 'Kubernetes Workload' },
        { key: 'kubernetesQuiz', title: 'Kubernetes Quiz' },
      ],
    };
  },
  computed: {
    currentComponent() {
      // Map the currentSection to the component name
      const componentMap = {
        dockerIntroduction: 'DockerIntroduction',
        dockerInteractions: 'DockerInteractions',
        dockerCustomContainer: 'DockerCustomContainer',
        dockerCompose: 'DockerCompose',
        dockerQuiz: 'DockerQuiz',
        kubernetesIntroduction: 'KubernetesIntroduction',
        kubernetesCluster: 'KubernetesCluster',
        kubernetesObjects: 'KubernetesObjects',
        kubernetesPods: 'KubernetesPods',
        kubernetesWorkload: 'KubernetesWorkload',
        kubernetesQuiz: 'KubernetesQuiz',
      };
      return componentMap[this.currentSection] || 'DockerIntroduction';
    },
    breadcrumbs() {
      const allSections = [
        ...this.dockerSections,
        ...this.kubernetesSections,
      ];
      const section = allSections.find(
        (item) => item.key === this.currentSection
      );
      return [
        { key: '', title: 'Home' },
        {
          key: this.currentSection,
          title: section ? section.title : '',
        },
      ];
    },
  },
  methods: {
    searchContent() {
      const query = this.searchQuery.trim().toLowerCase();
      if (query) {
        const results = [];
        for (const key in this.contentMap) {
          const content = this.contentMap[key];
          if (content && content.toLowerCase().includes(query)) {
            const startIndex = content.toLowerCase().indexOf(query);
            const excerpt = content.substr(
              Math.max(0, startIndex - 50),
              100
            );
            const title = this.getTitleByKey(key);
            results.push({
              key,
              title,
              excerpt: '...' + excerpt + '...',
            });
          }
        }
        this.searchResults = results;
        this.showSearchResults = results.length > 0;
      } else {
        this.searchResults = [];
        this.showSearchResults = false;
      }
    },
    getTitleByKey(key) {
      const allSections = [
        ...this.dockerSections,
        ...this.kubernetesSections,
      ];
      const section = allSections.find((item) => item.key === key);
      return section ? section.title : '';
    },
    goToSection(key) {
      if (key) {
        this.currentSection = key;
      } else {
        this.currentSection = 'dockerIntroduction';
      }
      this.showSearchResults = false;
      this.searchQuery = '';
    },
    handleClickOutside(event) {
      if (!this.showSearchResults) return;
      if (
        !this.$refs.searchPopup.contains(event.target) &&
        !this.$refs.searchInput.contains(event.target)
      ) {
        this.showSearchResults = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
/* Custom scrollbar for content area */
.flex-1::-webkit-scrollbar {
  width: 6px;
}
.flex-1::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.4);
  border-radius: 3px;
}
</style>
