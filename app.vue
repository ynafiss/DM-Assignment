<script setup lang="ts">
import NavBar from './component/HomePage/navBar.vue';
import CarCards from './component/HomePage/CarCard.vue';
import smallCards from './component/HomePage/smallCards.vue';


const sampleCar = {
  title: 'Koenigsegg',
  subtitle: 'Sport',
  image: '../../assets/car.png',
  fuelCapacity: '90L',
  transmission: 'Manual',
  capacity: '2 People',
  price: 99.00
};
</script>

<template>
  <section class="home">
    <NavBar />
    <CarCards />
    <smallCards :car="sampleCar" />
  </section>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  font-family: "Plus Jakarta Sans", sans-serif;
}

:root{
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: black;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  height: 100vh;
  background-color: #f0f0f0;
}

body{
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

</style>