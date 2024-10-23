<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-semibold text-blue-600 mb-4">Understanding Kubernetes Objects</h2>
    <p class="text-gray-700 leading-relaxed mb-4">
      Kubernetes objects are persistent entities in the Kubernetes system. They represent the state of your cluster and are used to describe the desired state of your applications and services.
    </p>
    
    <h3 class="text-xl font-semibold text-blue-600 mb-2">What are Kubernetes Objects?</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      Kubernetes objects are the building blocks of Kubernetes applications. They include various types of resources such as Pods, Services, Deployments, ReplicaSets, and more. Each object has a unique identifier and can be managed through the Kubernetes API.
    </p>

    <h3 class="text-xl font-semibold text-blue-600 mb-2">How to Work with Kubernetes Objects</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      You can create, update, delete, and retrieve Kubernetes objects using the <code>kubectl</code> command-line tool or through the Kubernetes API. The most common commands include:
    </p>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl create -f &lt;file&gt;:</strong> &nbsp;Creates a new object from a configuration file.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl apply -f &lt;file&gt;:</strong> &nbsp;Applies changes to an existing object.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl delete &lt;type&gt; &lt;name&gt;:</strong> &nbsp;Deletes a specified object.
      </li>
      <li class="flex items-center mb-2">
        <span class="text-blue-600 mt-0.5 mr-2">➔</span>
        <strong>kubectl get &lt;type&gt;:</strong> &nbsp;Lists all objects of a specified type.
      </li>
    </ul>

    <h3 class="text-xl font-semibold text-blue-600 mb-2">Kubernetes Object Fields</h3>
    <p class="text-gray-700 leading-relaxed mb-4">
      Each Kubernetes object has several important fields:
    </p>
    <ul class="ml-6 mb-4">
      <li class="flex items-center mb-2">
        <strong>apiVersion:</strong> &nbsp;Defines the version of the Kubernetes API that you are using to create or manage the object.
      </li>
      <li class="flex items-center mb-2">
        <strong>kind:</strong> &nbsp;Specifies the type of Kubernetes object (e.g., Pod, Service, Deployment).
      </li>
      <li class="flex items-center mb-2">
        <strong>namespace:</strong> &nbsp;Defines the namespace in which the object resides, allowing for resource isolation.
      </li>
      <li class="flex items-center mb-2">
        <strong>metadata:</strong> &nbsp;Information about the object, including its name, namespace, labels, and annotations.
      </li>
      <li class="flex items-center mb-2">
        <strong>spec:</strong> &nbsp;Defines the desired state and configuration of the object.
      </li>
      <li class="flex items-center mb-2">
        <strong>status:</strong> &nbsp;Reflects the current state of the object as managed by Kubernetes.
      </li>
    </ul>
  </div>
</template>

<script>
export const content = `
Understanding Kubernetes Objects

Kubernetes objects are persistent entities in the Kubernetes system. They represent the state of your cluster and are used to describe the desired state of your applications and services.

What are Kubernetes Objects?
Kubernetes objects are the building blocks of Kubernetes applications. They include various types of resources such as Pods, Services, Deployments, ReplicaSets, and more. Each object has a unique identifier and can be managed through the Kubernetes API.

How to Work with Kubernetes Objects
You can create, update, delete, and retrieve Kubernetes objects using the kubectl command-line tool or through the Kubernetes API. The most common commands include:
- kubectl create -f <file>: Creates a new object from a configuration file.
- kubectl apply -f <file>: Applies changes to an existing object.
- kubectl delete <type> <name>: Deletes a specified object.
- kubectl get <type>: Lists all objects of a specified type.

Kubernetes Object Fields
Each Kubernetes object has several important fields:
- apiVersion: Defines the version of the Kubernetes API that you are using to create or manage the object.
- kind: Specifies the type of Kubernetes object (e.g., Pod, Service, Deployment).
- namespace: Defines the namespace in which the object resides, allowing for resource isolation.
- metadata: Information about the object, including its name, namespace, labels, and annotations.
- spec: Defines the desired state and configuration of the object.
- status: Reflects the current state of the object as managed by Kubernetes.
`;

export default {
  name: 'KubernetesObjects',
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
