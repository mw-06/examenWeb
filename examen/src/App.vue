<template>

  <div id="app">

  <b-navbar type="primary" variant="primary">

    <b-navbar-nav>
      
      <b-navbar-brand>Examen</b-navbar-brand>
      
      <b-nav-item>
        <router-link to="/" style="color: white">Inicio</router-link> 
      </b-nav-item>
      
      <b-nav-item>
        <router-link to="/crear" style="color: white" >Agrega Auto</router-link> 
      </b-nav-item>

    </b-navbar-nav>
  </b-navbar>
    <router-view class="container mt-3"/>
  </div>

</template>



