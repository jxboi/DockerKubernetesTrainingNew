<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Creating Custom Containers Section -->
    <section class="mb-12">
      <h3 class="text-2xl font-semibold text-blue-600 mb-4">Creating Custom Containers</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Custom containers allow you to tailor your environment for specific applications. Here are the steps to create a custom container:
      </p>
      <p class="text-gray-700 leading-relaxed mb-4">
        Building custom containers is essential because it enables you to create a consistent and reproducible environment that meets the specific requirements of your application. This ensures that your application runs smoothly across different systems and reduces the risk of compatibility issues.
      </p>
      <ul class="list-none text-gray-700 space-y-1 mt-2">
        <li class="flex items-center">
          <strong>Step 1:</strong> <span class="ml-2">Create a Dockerfile with your application requirements.</span>
        </li>
        <li class="flex items-center">
          <strong>Step 2:</strong> <span class="ml-2">Build the image using <code>docker build -t &lt;image_name&gt;</code></span>
        </li>
        <li class="flex items-center">
          <strong>Step 3:</strong> <span class="ml-2">Run the container using <code>docker run &lt;image_name&gt;</code></span>
        </li>
        <li class="flex items-center">
          <strong>Step 4:</strong> <span class="ml-2">Customize the container with environment variables and volume mappings.</span>
        </li>
      </ul>
      <!-- Added section for customizing the build image -->
      <section class="mt-8">
        <h4 class="text-xl font-semibold text-blue-600 mb-2">Customizing the Build Image</h4>
        <p class="text-gray-700 leading-relaxed mb-4">
          To customize your build image, you can modify the Dockerfile to include specific instructions that suit your application's needs. Here are some common ways to customize your image:
        </p>
        <ul class="list-none text-gray-700 space-y-1 mt-2">
          <li class="flex items-center">
            <strong>1. Base Image:</strong> <span class="ml-2">Choose a base image that fits your application.</span>
          </li>
          <li class="flex items-center">
            <strong>2. Install Dependencies:</strong> <span class="ml-2">Use <code>RUN</code> commands to install necessary packages, e.g., <code>RUN npm install</code>.</span>
          </li>
          <li class="flex items-center">
            <strong>3. Copy Files:</strong> <span class="ml-2">Use <code>COPY</code> to add your application files to the image, e.g., <code>COPY . /app</code>.</span>
          </li>
          <li class="flex items-center">
            <strong>4. Set Environment Variables:</strong> <span class="ml-2">Use <code>ENV</code> to set environment variables needed for your application.</span>
          </li>
        </ul>
      </section>
      <!-- Added section for explaining Dockerfile -->
      <section class="mt-8">
        <h4 class="text-xl font-semibold text-blue-600 mb-2">Understanding the Dockerfile</h4>
        <p class="text-gray-700 leading-relaxed mb-4">
          A Dockerfile is a text document that contains all the commands to assemble an image. It serves as a blueprint for creating Docker images. Each command in a Dockerfile creates a layer in the image, and these layers are cached for efficiency.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Here’s how to interpret a Dockerfile:
        </p>
        <ul class="list-none text-gray-700 space-y-1 mt-2">
          <li class="flex items-center">
            <strong>FROM:</strong> <span class="ml-2">Specifies the base image to use for the new image.</span>
          </li>
          <li class="flex items-center">
            <strong>RUN:</strong> <span class="ml-2">Executes commands in a new layer on top of the current image and commits the results.</span>
          </li>
          <li class="flex items-center">
            <strong>COPY:</strong> <span class="ml-2">Copies files from the host filesystem into the image.</span>
          </li>
          <li class="flex items-center">
            <strong>ENV:</strong> <span class="ml-2">Sets environment variables in the image.</span>
          </li>
          <li class="flex items-center">
            <strong>CMD:</strong> <span class="ml-2">Specifies the default command to run when a container is started from the image.</span>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export const content = `
Creating Custom Containers
Custom containers allow you to tailor your environment for specific applications. Here are the steps to create a custom container:
1. Create a Dockerfile with your application requirements.
2. Build the image using docker build -t <image_name>
3. Run the container using docker run <image_name>
4. Customize the container with environment variables and volume mappings.

Customizing the Build Image
To customize your build image, you can modify the Dockerfile to include specific instructions that suit your application's needs. Common ways to customize your image include choosing a base image, installing dependencies, copying files, and setting environment variables.

Understanding the Dockerfile
A Dockerfile is a text document that contains all the commands to assemble an image. It serves as a blueprint for creating Docker images, with each command creating a layer in the image.
`;

export default {
  name: 'CustomContainer',
};
</script>

<style scoped>
/* No additional styles needed; using Tailwind CSS */
</style>
