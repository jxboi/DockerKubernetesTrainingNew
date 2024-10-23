<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-semibold text-blue-600 mb-4">Understanding Kubernetes Workloads</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      In Kubernetes, a workload is a resource that runs on the cluster. It represents the application and its components, managing how they are deployed, scaled, and maintained.
    </p>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Key Workload Types</h3>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Deployments:</strong> &nbsp;Manage stateless applications, ensuring the desired number of replicas are running.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>StatefulSets:</strong> &nbsp;Manage stateful applications, providing stable identities and persistent storage.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>DaemonSets:</strong> &nbsp;Ensure that a copy of a pod runs on all (or some) nodes in the cluster.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Jobs:</strong> &nbsp;Manage batch processing tasks that run to completion.
      </li>
    </ul>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">How Workloads Interact</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      Workloads interact with other Kubernetes components such as Services, which provide stable endpoints for accessing the workloads, and ConfigMaps or Secrets, which manage configuration data and sensitive information.
    </p>
    {{ edit_1 }}
    <img 
      src="../assets/images/kubernetes_workload.png" 
      alt="Kubernetes Workload Interaction" 
      class="mb-4 cursor-pointer" 
      @click="showModal = true" 
    />
    {{ edit_2 }}
    <p class="text-gray-700 leading-relaxed mb-4">
      Kubernetes also uses Controllers to monitor the state of workloads and ensure they match the desired state defined by the user.
    </p>
  </div>
</template>

<script>
export const content = `
Kubernetes workloads are essential components that manage the deployment, scaling, and maintenance of applications within a Kubernetes cluster. The main types of workloads include Deployments, StatefulSets, DaemonSets, and Jobs, each serving different purposes in application management. Understanding how these workloads interact with other Kubernetes resources is crucial for effective cluster management.
`;

export default {
  name: 'KubernetesWorkload',
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
