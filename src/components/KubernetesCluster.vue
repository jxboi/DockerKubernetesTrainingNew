<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-semibold text-blue-600 mb-4">Understanding Kubernetes Clusters</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      A Kubernetes cluster is a set of nodes that run containerized applications. It provides the environment for deploying, managing, and scaling applications in a reliable and efficient manner.
    </p>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Components of a Kubernetes Cluster</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      A Kubernetes cluster consists of the following main components:
    </p>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Control Plane:</strong> &nbsp;Manages the cluster and is responsible for the overall state of the cluster.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Nodes:</strong> &nbsp;The worker machines that run the applications and services.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">
          <svg class="w-1.5 h-1.5 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </span>
        <strong>Pods:</strong> &nbsp;The smallest deployable units that can contain one or more containers.
      </li>
    </ul>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Understanding Master and Worker Nodes</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      In a Kubernetes cluster, there are two main types of nodes: master nodes and worker nodes.
    </p>
    <h4 class="text-md font-semibold text-light-gray bg-light-gray mb-1">Master Node</h4>
    <p class="text-gray-700 leading-relaxed mb-3">
      The master node is responsible for managing the Kubernetes cluster. It controls the scheduling of applications, monitors the cluster state, and manages the API server, etcd (the cluster's database), and controller manager. 
      <br>
      <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        It runs the <strong>kube-controller-manager</strong>, which regulates the state of the cluster by managing controllers, and the <strong>kube-scheduler</strong>, which assigns workloads to worker nodes based on resource availability.
      </div>
    </p>
    <h4 class="text-md font-semibold text-light-gray bg-light-gray mb-1">Worker Node</h4>
    <p class="text-gray-700 leading-relaxed mb-2">
      Worker nodes are the machines that run the applications and services. They receive instructions from the master node and execute the workloads. Each worker node contains the necessary components to run pods, including the container runtime, kubelet, and kube-proxy. 
      <br>
      <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
        Worker nodes also run the <strong>kubelet</strong>, which ensures that containers are running in a pod, and the <strong>kube-proxy</strong>, which manages network communication to and from the pods.
      </div>
    </p>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Control Plane</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      The control plane is a set of components that manage the Kubernetes cluster. It includes the master node and is responsible for maintaining the desired state of the cluster, making decisions about scheduling, scaling, and managing the lifecycle of applications.
    </p>
    {{ edit_1 }}
    <h4 class="text-md font-semibold text-light-gray bg-light-gray mb-1">Components of the Control Plane</h4>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">Component</th>
          <th class="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2"><strong>API Server</strong></td>
          <td class="border border-gray-300 px-4 py-2">The API server is the entry point for all the REST commands used to control the cluster. It exposes the Kubernetes API.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2"><strong>etcd</strong></td>
          <td class="border border-gray-300 px-4 py-2">etcd is a distributed key-value store that holds all the cluster data, including the configuration and state of the cluster.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2"><strong>Controller Manager</strong></td>
          <td class="border border-gray-300 px-4 py-2">The controller manager is responsible for regulating the state of the cluster. It manages controllers that handle routine tasks.</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2"><strong>Scheduler</strong></td>
          <td class="border border-gray-300 px-4 py-2">The scheduler assigns work to the worker nodes based on resource availability and other constraints.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h3 class="text-xl font-semibold text-blue-600 mb-2">Common Kubernetes Commands</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      Here are some common commands used to interact with a Kubernetes cluster:
    </p>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl get nodes:</strong> &nbsp;Lists all nodes in the cluster.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl get pods:</strong> &nbsp;Lists all pods running in the cluster.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl describe nodes:</strong> &nbsp;Displays detailed information about each node in the cluster.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl apply -f &lt;file&gt;:</strong> &nbsp;Applies a configuration change to a resource.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl delete pod &lt;pod-name&gt;:</strong> &nbsp;Deletes a specified pod.
      </li>
    </ul>

  </div>
</template>

<script>
export const content = `
  <h2>Understanding Kubernetes Clusters</h2>
  <p>A Kubernetes cluster is a set of nodes that run containerized applications. It provides the environment for deploying, managing, and scaling applications in a reliable and efficient manner.</p>
  <h3>Components of a Kubernetes Cluster</h3>
  <p>A Kubernetes cluster consists of the following main components:</p>
  <ul>
    <li><strong>Control Plane:</strong> Manages the cluster and is responsible for the overall state of the cluster.</li>
    <li><strong>Nodes:</strong> The worker machines that run the applications and services.</li>
    <li><strong>Pods:</strong> The smallest deployable units that can contain one or more containers.</li>
  </ul>
`;

export default {
  name: 'KubernetesCluster',
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

