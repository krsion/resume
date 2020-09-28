<template>
  <v-container id="content">
    <h1>Experience</h1>
    <v-card tile outlined class="my-2" v-for="job in jobs" :key="job.title">
      <v-card-title>
        <strong>{{ job.title }}{{ ",\xa0" }} </strong>
        {{ job.company }}
      </v-card-title>
      <v-card-subtitle>
        {{ job.from }}<span v-if="job.to"> – </span>{{ job.to }} ({{
          job.time
        }}), {{ job.place }}
      </v-card-subtitle>
      <v-card-text>
        <ul>
          <li v-for="(detail, i) in job.details" v-html="detail" :key="i"></li>
        </ul>
      </v-card-text>
    </v-card>

    <h1>Education</h1>
    <v-card
      tile
      outlined
      class="my-2"
      v-for="school in schools"
      :key="school.name"
    >
      <v-card-title>{{ school.name }}</v-card-title>
      <v-card-subtitle>
        {{ school.from }} – {{ school.to
        }}<span v-if="school.time"> ({{ school.time }})</span>,
        {{ school.place }}
        <h3>{{ school.field }}</h3>
      </v-card-subtitle>
    </v-card>

    <h1>Skills</h1>
    <v-card tile outlined class="my-2">
      <v-card-text>
        <ul>
          <li v-for="(skill, i) in skills" v-html="skill" :key="i"></li>
        </ul>
      </v-card-text>
    </v-card>

    <h1>Languages</h1>
    <v-card tile outlined class="my-2">
      <v-card-text>
        <ul>
          <li v-for="language in languages" :key="language.name">
            <strong>{{ language.name }}</strong> - {{ language.level }}
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
#content {
  margin: auto;
  max-width: 600px;
}
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>

<script>
import resumeData from "./resumeData.js";
export default {
  name: "Resume",
  data: () => resumeData,
};
</script>