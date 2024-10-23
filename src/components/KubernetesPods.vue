<template>
    <div class="max-w-4xl mx-auto p-6">
      <h2 class="text-2xl font-semibold text-blue-600 mb-4">Understanding Kubernetes Pods</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        In Kubernetes, a pod is the smallest and simplest deployable unit. It represents a single instance of a running process in your cluster and can contain one or more tightly coupled containers that share resources like networking and storage.
      </p>
  
      <h3 class="text-xl font-semibold text-blue-600 mb-2">Single-Container vs. Multi-Container Pods</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        - <strong>Single-Container Pod:</strong> Typically, pods run a single container, which is common for simple applications or microservices. It is ideal when one process handles the application’s logic.
        <br>
        - <strong>Multi-Container Pod:</strong> Pods can also run multiple containers that work together as a single unit. These containers can share the same resources and storage, making them useful for cases like logging sidecars, proxy containers, or application components that need to work closely together.
      </p>
  
      <h3 class="text-xl font-semibold text-blue-600 mb-2">Pods and Replication</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Kubernetes is designed for scalable, resilient applications. To achieve high availability, you can run multiple replicas of a pod across nodes in the cluster. These replicas distribute load and ensure that if one pod fails, others can take over, providing uninterrupted service.
      </p>
  
      <h3 class="text-xl font-semibold text-blue-600 mb-2">Controllers in Kubernetes</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Kubernetes uses <strong>controllers</strong> to manage the state of pods and ensure the system remains in the desired state. Controllers continuously monitor the cluster and take corrective action when the actual state deviates from the intended state. Common controllers include:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li><strong>ReplicationController/ReplicaSet:</strong> Ensures the specified number of pod replicas are running at all times.</li>
        <li><strong>Deployment:</strong> Manages rolling updates and rollbacks for your pods, ensuring minimal downtime during updates.</li>
        <li><strong>DaemonSet:</strong> Ensures a pod runs on all (or selected) nodes, typically for running background services like logging or monitoring.</li>
        <li><strong>StatefulSet:</strong> Manages stateful applications, ensuring pod identity and persistent storage across restarts.</li>
      </ul>
  
      <h3 class="text-xl font-semibold text-blue-600 mb-2">Pod Volumes</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Pods are ephemeral by nature, meaning that when they are deleted, their data is lost unless specifically stored elsewhere. Kubernetes uses <strong>volumes</strong> to provide persistent storage for pods. Volumes allow data to outlive the lifecycle of a single pod and be shared between containers in a pod. Common use cases include:
      </p>
      <ul class="list-disc list-inside text-gray-700">
        <li>Storing configuration files or secrets that are shared across containers.</li>
        <li>Persisting logs or application data that need to survive pod restarts.</li>
        <li>Using external storage systems like AWS EBS, NFS, or persistent volume claims (PVCs) for long-term storage.</li>
      </ul>
    </div>
  </template>
  
  <script>
  export const content = `
<h2>Understanding Kubernetes Pods</h2>
<p>
    In Kubernetes, a pod is the smallest and simplest deployable unit. It represents a single instance of a running process in your cluster and can contain one or more tightly coupled containers that share resources like networking and storage.
</p>

<h3>Single-Container vs. Multi-Container Pods</h3>
<p>
    - <strong>Single-Container Pod:</strong> Typically, pods run a single container, which is common for simple applications or microservices. It is ideal when one process handles the application’s logic.
    <br>
    - <strong>Multi-Container Pod:</strong> Pods can also run multiple containers that work together as a single unit. These containers can share the same resources and storage, making them useful for cases like logging sidecars, proxy containers, or application components that need to work closely together.
</p>

<h3>Pods and Replication</h3>
<p>
    Kubernetes is designed for scalable, resilient applications. To achieve high availability, you can run multiple replicas of a pod across nodes in the cluster. These replicas distribute load and ensure that if one pod fails, others can take over, providing uninterrupted service.
</p>

<h3>Controllers in Kubernetes</h3>
<p>
    Kubernetes uses <strong>controllers</strong> to manage the state of pods and ensure the system remains in the desired state. Controllers continuously monitor the cluster and take corrective action when the actual state deviates from the intended state. Common controllers include:
</p>
<ul>
    <li><strong>ReplicationController/ReplicaSet:</strong> Ensures the specified number of pod replicas are running at all times.</li>
    <li><strong>Deployment:</strong> Manages rolling updates and rollbacks for your pods, ensuring minimal downtime during updates.</li>
    <li><strong>DaemonSet:</strong> Ensures a pod runs on all (or selected) nodes, typically for running background services like logging or monitoring.</li>
    <li><strong>StatefulSet:</strong> Manages stateful applications, ensuring pod identity and persistent storage across restarts.</li>
</ul>

<h3>Pod Volumes</h3>
<p>
    Pods are ephemeral by nature, meaning that when they are deleted, their data is lost unless specifically stored elsewhere. Kubernetes uses <strong>volumes</strong> to provide persistent storage for pods. Volumes allow data to outlive the lifecycle of a single pod and be shared between containers in a pod. Common use cases include:
</p>
<ul>
    <li>Storing configuration files or secrets that are shared across containers.</li>
    <li>Persisting logs or application data that need to survive pod restarts.</li>
    <li>Using external storage systems like AWS EBS, NFS, or persistent volume claims (PVCs) for long-term storage.</li>
</ul>
`;

export default {
    name: 'KubernetesPods',
};
</script>
  
<style scoped>
/* Add any component-specific styles here */
</style>
