<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Interacting with Docker Images Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Interacting with Docker Images</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Docker images are the foundation of containers. Here are some common commands to interact with Docker images:
      </p>
      <ul class="list-none text-gray-700 space-y-1 mt-2">
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker save:</strong> <span class="ml-2">Save an image to a tar archive.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker load:</strong> <span class="ml-2">Load an image from a tar archive.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker inspect:</strong> <span class="ml-2">Return low-level information on an image or container.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker tag:</strong> <span class="ml-2">Tag an image with a new name.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker pull:</strong> <span class="ml-2">Download an image from a registry.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker images:</strong> <span class="ml-2">List all available images on your local machine.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker rmi:</strong> <span class="ml-2">Remove an image from your local machine.</span>
        </li>
      </ul>
    </section>

    <!-- Interacting with Docker Containers Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Interacting with Docker Containers</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Once you have images, you can create and manage containers. Here are some essential commands:
      </p>
      <ul class="list-none text-gray-700 space-y-1 mt-2">
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker run:</strong> <span class="ml-2">Create and start a container from an image.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker ps:</strong> <span class="ml-2">List all running containers.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker stop:</strong> <span class="ml-2">Stop a running container.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker rm:</strong> <span class="ml-2">Remove a stopped container.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker attach:</strong> <span class="ml-2">Attach to a running container's standard input, output, and error streams.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>docker exec:</strong> <span class="ml-2">Run a command in a running container.</span>
        </li>
      </ul>
    </section>

    <!-- Different States of Docker Containers Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Different States of Docker Containers</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Docker containers can be in various states depending on their lifecycle. Here are the common states:
      </p>
      <ul class="list-none text-gray-700 space-y-1 mt-2">
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Created:</strong> <span class="ml-2">The container has been created but not started.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Running:</strong> <span class="ml-2">The container is currently running.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Paused:</strong> <span class="ml-2">The container is paused and not processing any tasks.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Exited:</strong> <span class="ml-2">The container has stopped running, either due to completion or an error.</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Dead:</strong> <span class="ml-2">The container has failed and cannot be restarted.</span>
        </li>
      </ul>
    </section>

    <!-- Running a Container with Different Parameters Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Running a Container with Different Parameters</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        You can customize how you run a Docker container using various parameters. Here are some common examples:
      </p>
      <ul class="list-none text-gray-700 space-y-1 mt-2">
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Run in detached mode:</strong> <span class="ml-2">docker run -d &lt;image_name&gt;</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Run with a specific name:</strong> <span class="ml-2">docker run --name &lt;container_name&gt; &lt;image_name&gt;</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Run with port mapping:</strong> <span class="ml-2">docker run -p &lt;host_port&gt;:&lt;container_port&gt; &lt;image_name&gt;</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Run with environment variables:</strong> <span class="ml-2">docker run -e &lt;VAR_NAME&gt;=&lt;value&gt; &lt;image_name&gt;</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Run with volume mapping:</strong> <span class="ml-2">docker run -v &lt;host_path&gt;:&lt;container_path&gt; &lt;image_name&gt;</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Run with entrypoint:</strong> <span class="ml-2">docker run --entrypoint &lt;entrypoint_command&gt; &lt;image_name&gt;</span>
        </li>
        <li class="flex items-center">
          <span class="text-blue-600 mt-0.5 mr-2">➔</span>
          <strong>Change working directory:</strong> <span class="ml-2">docker run -w &lt;working_directory&gt; &lt;image_name&gt;</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export const content = `
Interacting with Docker Images

Docker images are the foundation of containers. Here are some common commands to interact with Docker images:

- docker save: Save an image to a tar archive.
- docker load: Load an image from a tar archive.
- docker inspect: Return low-level information on an image or container.
- docker tag: Tag an image with a new name.
- docker pull: Download an image from a registry.
- docker images: List all available images on your local machine.
- docker rmi: Remove an image from your local machine.

Interacting with Docker Containers

Once you have images, you can create and manage containers. Here are some essential commands:

- docker run: Create and start a container from an image.
- docker ps: List all running containers.
- docker stop: Stop a running container.
- docker rm: Remove a stopped container.
- docker attach: Attach to a running container's standard input, output, and error streams.
- docker exec: Run a command in a running container.

Different States of Docker Containers

Docker containers can be in various states depending on their lifecycle. Here are the common states:

- Created: The container has been created but not started.
- Running: The container is currently running.
- Paused: The container is paused and not processing any tasks.
- Exited: The container has stopped running, either due to completion or an error.
- Dead: The container has failed and cannot be restarted.

Running a Container with Different Parameters

You can customize how you run a Docker container using various parameters. Here are some common examples:

- Run in detached mode: docker run -d <image_name>
- Run with a specific name: docker run --name <container_name> <image_name>
- Run with port mapping: docker run -p <host_port>:<container_port> <image_name>
- Run with environment variables: docker run -e <VAR_NAME>=<value> <image_name>
- Run with volume mapping: docker run -v <host_path>:<container_path> <image_name>
- Run with entrypoint: docker run --entrypoint <entrypoint_command> <image_name>
- Change working directory: docker run -w <working_directory> <image_name>
`;

export default {
  name: 'DockerInteractions',
};
</script>

<style scoped>
/* No additional styles needed; using Tailwind CSS */
</style>
