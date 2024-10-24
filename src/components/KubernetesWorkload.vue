<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-semibold text-blue-600 mb-4">Understanding Kubernetes Workloads</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      In Kubernetes, a workload is a resource that runs on the cluster. It represents the application and its components, managing how they are deployed, scaled, and maintained.
    </p>
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
    <h4 class="text-lg font-semibold text-blue-500 mb-2">Application Layer:</h4>
    <ul class="ml-6 mb-4">
      <li><strong>Ingress:</strong> Manages external access to services within the cluster, allowing HTTP and HTTPS traffic routing.</li>
      <li><strong>Service:</strong> Provides a stable endpoint for accessing a set of pods, enabling load balancing and service discovery.</li>
      <li><strong>ConfigMap:</strong> Stores non-sensitive configuration data in key-value pairs, which can be consumed by applications at runtime.</li>
      <li><strong>Secret:</strong> Safely stores sensitive information, such as passwords and tokens, ensuring they are not exposed in the application code.</li>
    </ul>
    <h4 class="text-lg font-semibold text-blue-500 mb-2">Workload Controllers:</h4>
    <ul class="ml-6 mb-4">
      <li><strong>Deployment:</strong> Automatically manages the rollout and scaling of stateless applications, ensuring the desired number of replicas are running.</li>
      <li><strong>StatefulSet:</strong> Manages the deployment of stateful applications, providing unique network identities and stable storage for each pod.</li>
      <li><strong>DaemonSet:</strong> Ensures that a specific pod runs on all or a subset of nodes, typically used for logging or monitoring agents.</li>
      <li><strong>Job/CronJob:</strong> Manages batch processing tasks that run to completion, with CronJobs allowing for scheduled executions.</li>
    </ul>
    <h4 class="text-lg font-semibold text-blue-500 mb-2">Pod Management:</h4>
    <ul class="ml-6 mb-4">
      <li><strong>ReplicaSet:</strong> Ensures that a specified number of pod replicas are running at any given time, providing high availability.</li>
      <li><strong>Pods:</strong> The smallest deployable units in Kubernetes, encapsulating one or more containers that share storage and network resources.</li>
    </ul>
    <h4 class="text-lg font-semibold text-blue-500 mb-2">Storage:</h4>
    <ul class="ml-6 mb-4">
      <li><strong>PersistentVolume:</strong> Represents a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned.</li>
      <li><strong>PersistentVolumeClaim:</strong> A request for storage by a user, specifying size and access modes, which binds to a suitable PersistentVolume.</li>
    </ul>
    
    {{ edit_2 }}

  </div>
</template>

<script>
export const content = `
Kubernetes workloads are essential components that manage the deployment, scaling, and maintenance of applications within a Kubernetes cluster. The main types of workloads include Deployments, StatefulSets, DaemonSets, and Jobs, each serving different purposes in application management. Understanding how these workloads interact with other Kubernetes resources is crucial for effective cluster management.

Application Layer:
- Ingress: Manages external access to services within the cluster, allowing HTTP and HTTPS traffic routing.
- Service: Provides a stable endpoint for accessing a set of pods, enabling load balancing and service discovery.
- ConfigMap: Stores non-sensitive configuration data in key-value pairs, which can be consumed by applications at runtime.
- Secret: Safely stores sensitive information, such as passwords and tokens, ensuring they are not exposed in the application code.

Workload Controllers:
- Deployment: Automatically manages the rollout and scaling of stateless applications, ensuring the desired number of replicas are running.
- StatefulSet: Manages the deployment of stateful applications, providing unique network identities and stable storage for each pod.
- DaemonSet: Ensures that a specific pod runs on all or a subset of nodes, typically used for logging or monitoring agents.
- Job/CronJob: Manages batch processing tasks that run to completion, with CronJobs allowing for scheduled executions.

Pod Management:
- ReplicaSet: Ensures that a specified number of pod replicas are running at any given time, providing high availability.
- Pods: The smallest deployable units in Kubernetes, encapsulating one or more containers that share storage and network resources.

Storage:
- PersistentVolume: Represents a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned.
- PersistentVolumeClaim: A request for storage by a user, specifying size and access modes, which binds to a suitable PersistentVolume.
`;
export default {
  name: 'KubernetesWorkload',
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
