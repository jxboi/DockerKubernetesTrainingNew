<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-semibold text-blue-600 mb-4">Introduction to Kubernetes</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      Kubernetes, often referred to as K8s, is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. It simplifies the complexities involved in running applications across a distributed system by grouping containers into logical units, making it easier to manage.
    </p>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Why Kubernetes?</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      As developers adopted containers (like Docker) to package and run applications consistently across environments, they soon faced the challenge of managing containers at scale. Running a few containers is manageable, but when hundreds or thousands of containers are needed across many machines, manual intervention is no longer feasible.
    </p>
    <p class="text-gray-700 leading-relaxed mb-4">
      This is where Kubernetes comes in. Kubernetes provides the orchestration necessary to automate the deployment, scaling, and operation of containers across a cluster of machines. It takes care of monitoring the health of your applications, ensuring they are running as expected, and scaling them up or down based on demand.
    </p>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">How Kubernetes Works</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      At the heart of Kubernetes is the concept of a cluster. A Kubernetes cluster consists of two main components:
    </p>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Master Node:</strong>  &nbsp;The control plane manages the cluster's scheduling, state, scaling, and updates.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Worker Nodes:</strong>  &nbsp;The machines (virtual or physical) where the actual containerized applications run.
      </li>
    </ul>
    <!-- Image Reference with Click Event -->
    <img 
      src="../assets/images/kubernetes_architecture.png" 
      alt="Kubernetes Architecture" 
      class="mb-4 cursor-pointer" 
      @click="showModal = true" 
    />

    <p class="text-gray-700 leading-relaxed mb-4">
      Pods are the smallest and most basic deployable units in Kubernetes. A pod represents a single instance of a running process in your cluster, and it can contain one or more tightly coupled containers.
    </p>
    <p class="text-gray-700 leading-relaxed mb-4">
      Kubernetes manages pods across the cluster, ensuring that your application is running properly. It automatically balances the load across multiple containers, restarts containers if they fail, and even scales up or down based on traffic.
    </p>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Benefits of Kubernetes</h3>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Scalability:</strong>&nbsp; Kubernetes easily scales applications by adding or removing containers as needed.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Self-healing:</strong> &nbsp;If a container fails, Kubernetes can automatically restart or replace it.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Portability:</strong>&nbsp; Kubernetes is cloud-agnostic, running on any infrastructure—on-premises, cloud, or hybrid.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Service discovery & load balancing:</strong>&nbsp; Built-in traffic balancing and service discovery within the cluster.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Automation:</strong> &nbsp;Kubernetes automates operational tasks like deployments, rollouts, rollbacks, and monitoring.
      </li>
    </ul>
    <p class="text-gray-700 leading-relaxed mb-4">
      In essence, Kubernetes allows organizations to manage complex, containerized applications reliably and efficiently, ensuring high availability and scalability with minimal human intervention.
    </p>
  </div>
</template>

<script>
export const content = `
Kubernetes, often referred to as K8s, is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. It simplifies the complexities involved in running applications across a distributed system by grouping containers into logical units, making it easier to manage.

Kubernetes provides the orchestration necessary to automate the deployment, scaling, and operation of containers across a cluster of machines. It takes care of monitoring the health of your applications, ensuring they are running as expected, and scaling them up or down based on demand.

At the heart of Kubernetes is the concept of a cluster, consisting of a Master Node that manages the cluster's scheduling, state, scaling, and updates, and Worker Nodes where the actual containerized applications run.

Pods are the smallest and most basic deployable units in Kubernetes, representing a single instance of a running process in your cluster, and can contain one or more tightly coupled containers.

Kubernetes allows organizations to manage complex, containerized applications reliably and efficiently, ensuring high availability and scalability with minimal human intervention.
`;

export default {
  name: 'KubernetesIntroduction',
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
