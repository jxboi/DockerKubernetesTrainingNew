<template>
  <div class="max-w-4xl mx-auto p-6">
    <h3 class="text-2xl font-semibold text-blue-600 mb-4">Understanding Docker Compose</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      Docker Compose is a tool that allows you to define and manage multi-container Docker applications. With Docker Compose, you can configure your application services, networks, and volumes in a single YAML file, making it easier to manage complex applications.
    </p>
    
    <h4 class="text-xl font-semibold text-blue-600 mb-2">Purpose of Docker Compose</h4>
    <p class="text-gray-700 leading-relaxed mb-4">
      The primary purpose of Docker Compose is to simplify the process of running multiple Docker containers as a single application. It allows you to:
    </p>
    <ul class="list-none text-gray-700 space-y-1 mt-2">
      <li class="flex items-center">
        <strong>1. Define Services:</strong> <span class="ml-2">Easily define the services that make up your application in a single file.</span>
      </li>
      <li class="flex items-center">
        <strong>2. Manage Dependencies:</strong> <span class="ml-2">Automatically manage the dependencies between services.</span>
      </li>
      <li class="flex items-center">
        <strong>3. Simplify Commands:</strong> <span class="ml-2">Use simple commands to start, stop, and manage your application.</span>
      </li>
    </ul>
    <br>
    <h4 class="text-xl font-semibold text-blue-600 mb-2">How to Use Docker Compose</h4>

    <ol class="list-decimal text-gray-700 space-y-1 mt-2 ml-4">
      <li class="mb-2">Create a <code>docker-compose.yml</code> file in your project directory.</li>
      <li class="mb-2">Define your services, networks, and volumes in the YAML file.</li>
      <li class="mb-2">Run <code>docker-compose up</code> to start your application.</li>
      <li class="mb-2">Use <code>docker-compose down</code> to stop and remove the containers.</li>
    </ol>
    <br>
    <h4 class="text-xl font-semibold text-blue-600 mb-2">Example of a Docker Compose YAML File</h4>
    <p class="text-gray-700 leading-relaxed mb-4">
      Below is an example of a simple <code>docker-compose.yml</code> file that defines a web application with a frontend and a backend service:
    </p>
    <pre class="bg-gray-100 px-6 py-0 rounded">
      <code>
version: '3'
services:
  frontend:
    image: my-frontend-image
    ports:
      - "8080:80"
  backend:
    image: my-backend-image
    ports:
      - "5000:5000"
    depends_on:
      - database
  database:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
      </code>
    </pre>
  </div>
</template>

<script>
export const content = `
Docker Compose is a powerful tool for defining and running multi-container Docker applications. 
It allows you to manage your application services, networks, and volumes in a single YAML file, 
making it easier to orchestrate complex applications.

Purpose:
- Simplifies the process of running multiple Docker containers as a single application.
- Automatically manages dependencies between services.
- Provides simple commands to start, stop, and manage your application.

Usage:
1. Create a docker-compose.yml file in your project directory.
2. Define your services, networks, and volumes in the YAML file.
3. Run docker-compose up to start your application.
4. Use docker-compose down to stop and remove the containers.

Example:
A simple docker-compose.yml file defining a web application with a frontend, backend, and database services.
`;

export default {
  name: 'DockerCompose',
};
</script>

<style scoped>
/* No additional styles needed; using Tailwind CSS */
</style>
