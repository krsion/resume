<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      prominent
      flat
      src="https://picsum.photos/id/171/1920/1080?random"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <h1>{{ name }}</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
    <v-footer dark>
      <v-spacer></v-spacer>
      <a
        v-for="contact in contacts"
        :href="contact.content"
        :key="contact.icon"
        style="text-decoration: none"
        class="mx-3"
      >
        <v-icon x-large>{{ contact.icon }}</v-icon>
      </a>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import resumeData from "./resume.js";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => resumeData,
};
</script>
