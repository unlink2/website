<template>
  <div class="nav">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~/assets/img/logo.png"
            alt="Lukas Krickl"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item href="https://github.com/unlink2/">
          GitHub
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="router-link" :to="{ path: '/about' }">
            About
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>
