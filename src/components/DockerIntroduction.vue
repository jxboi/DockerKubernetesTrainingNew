<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- What is Docker Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">What is Docker?</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Docker is an open-source platform that automates the deployment, scaling, and management of applications within lightweight containers. It enables developers to package applications with all the necessary components, such as libraries and dependencies, and ship them out as a single package.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Docker provides the ability to package and run an application in a loosely isolated environment called a container. Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's currently installed on the host.
      </p>
    </section>

    <!-- Images vs. Containers Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Docker Images vs. Docker Containers</h3>

      <!-- Improved Explanation -->
      <p class="text-gray-700 leading-relaxed mb-6">
        Understanding the difference between Docker images and Docker containers is fundamental to using Docker effectively. In simple terms, a Docker image is a blueprint for creating containers, while a Docker container is a runnable instance of an image.
      </p>

      <!-- Side-by-Side Comparison -->
      <div class="mt-6">
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left">Docker Images</th>
              <th class="px-4 py-2 text-left">Docker Containers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">
                <p>Docker images are read-only templates that contain instructions for creating Docker containers. They are built from a set of layers that represent filesystem differences.</p>
              </td>
              <td class="px-4 py-2">
                <p>Docker containers are live, running instances of Docker images. They are isolated environments where applications are executed.</p>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-2">
                <p><strong>Key Characteristics:</strong></p>
                <ul class="list-none text-gray-700 space-y-1 mt-2">
                  <li class="flex items-center">
                    <span class="text-blue-600 mt-0.5 mr-2">
                      <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    Built from Dockerfiles containing instructions.
                  </li>
                  <li class="flex items-center">
                    <span class="text-blue-600 mt-0.5 mr-2">
                      <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    Read-only and immutable.
                  </li>
                  <li class="flex items-center">
                    <span class="text-blue-600 mt-0.5 mr-2">
                      <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    Stored in registries like Docker Hub.
                  </li>
                </ul>
              </td>
              <td class="px-4 py-2">
                <p><strong>Key Characteristics:</strong></p>
                <ul class="list-none text-gray-700 space-y-1 mt-2">
                  <li class="flex items-center">
                    <span class="text-blue-600 mt-0.5 mr-2">
                      <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    Created from Docker images.
                  </li>
                  <li class="flex items-center">
                    <span class="text-blue-600 mt-0.5 mr-2">
                      <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    Have a writable layer on top of the image.
                  </li>
                  <li class="flex items-center">
                    <span class="text-blue-600 mt-0.5 mr-2">
                      <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    Can be started, stopped, and deleted.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Additional Explanation -->
      <div class="mt-6">
        <p class="text-gray-700 leading-relaxed">
          Think of a Docker image as a blueprint or template, and a Docker container as a house built from that blueprint. Multiple containers can be created from a single image, each functioning independently.
        </p>
      </div>
    </section>

    <!-- How Docker Works Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">How Docker Works</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Docker uses a client-server architecture. The Docker client communicates with the Docker daemon, which does the heavy lifting of building, running, and distributing containers.
      </p>

      <!-- Image Reference with Click Event -->
      <img 
        src="../assets/images/docker_architecture.PNG" 
        alt="Docker Architecture" 
        class="mb-4 cursor-pointer" 
        @click="showModal = true" 
      />

      <p class="text-gray-700 leading-relaxed mb-2">
        <strong>Core Components:</strong>
      </p>
      <ul class="list-none text-gray-700 space-y-1 mt-2">
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">
            <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" />
            </svg>
          </span>
          <strong>Docker Client:</strong>&nbsp;The interface through which users interact with Docker.
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">
            <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" />
            </svg>
          </span>
          <strong>Docker Daemon:</strong>&nbsp;Runs on the host machine and manages Docker objects.
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">
            <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" />
            </svg>
          </span>
          <strong>Docker Registry:</strong>&nbsp;Stores Docker images (e.g., Docker Hub).
        </li>
      </ul>
    </section>

    <!-- Modal for Expanded Image -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div class="bg-transparent p-0">
        <span class="absolute top-4 right-4 text-white cursor-pointer" @click="showModal = false">✖</span>
        <img 
          src="../assets/images/docker_architecture.PNG" 
          alt="Docker Architecture" 
          class="w-full h-full object-contain" 
        />
      </div>
    </div>
  </div>
</template>

<script>
export const content = `
What is Docker?

Docker is an open-source platform that automates the deployment, scaling, and management of applications within lightweight containers. It enables developers to package applications with all the necessary components, such as libraries and dependencies, and ship them out as a single package.

Docker provides the ability to package and run an application in a loosely isolated environment called a container. Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's currently installed on the host.

Docker Images vs. Docker Containers

Understanding the difference between Docker images and Docker containers is fundamental to using Docker effectively. In simple terms, a Docker image is a blueprint for creating containers, while a Docker container is a runnable instance of an image.

**Docker Images:**

- Docker images are read-only templates that contain instructions for creating Docker containers. They are built from a set of layers that represent filesystem differences.

  **Key Characteristics:**

  - Built from Dockerfiles containing instructions.
  - Read-only and immutable.
  - Stored in registries like Docker Hub.

**Docker Containers:**

- Docker containers are live, running instances of Docker images. They are isolated environments where applications are executed.

  **Key Characteristics:**

  - Created from Docker images.
  - Have a writable layer on top of the image.
  - Can be started, stopped, and deleted.

Think of a Docker image as a blueprint or template, and a Docker container as a house built from that blueprint. Multiple containers can be created from a single image, each functioning independently.

How Docker Works

Docker uses a client-server architecture. The Docker client communicates with the Docker daemon, which does the heavy lifting of building, running, and distributing containers.

**Core Components:**

- **Docker Client:** The interface through which users interact with Docker.
- **Docker Daemon:** Runs on the host machine and manages Docker objects.
- **Docker Registry:** Stores Docker images (e.g., Docker Hub).
`;

export default {
  name: 'DockerIntroduction',
  data() {
    return {
      showModal: false, // State to control modal visibility
    };
  },
};
</script>

<style scoped>
/* No additional styles needed; using Tailwind CSS */
</style>
