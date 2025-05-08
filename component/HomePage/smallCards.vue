<template>
    <div class="small-card" data-testid="small-card">
        <div class="small-card__header">
            <div class="small-card__title">
                <h3 class="small-card__heading">{{ car.title }}</h3>
                <p class="small-card__subtitle">{{ car.subtitle }}</p>
            </div>
            <img src="../../assets/Like1.png" alt="like" class="small-card__like-btn" data-testid="like-icon">
        </div>
        <div class="small-card__image">
            <img :src="car.image" :alt="car.title" data-testid="car-image">
        </div>
        <div class="small-card__info">
            <a class="small-card__icons-container">
                <img src="../../assets/gas-station.png" alt="Fuel" class="small-card__icons">
                {{ car.fuelCapacity }}
            </a>
            <a class="small-card__icons-container">
                <img src="../../assets/Car.png" alt="Transmission" class="icons">
                {{ car.transmission }}
            </a>
            <a class="small-card__icons-container">
                <img src="../../assets/profile-2user.png" alt="Capacity" class="icons">
                {{ car.capacity }}
            </a>
        </div>
        <div class="small-card__footer">
            <div style="display: flex; align-items: center;">
                <a class="small-card__price">${{ car.price }}/</a>
                <p>day</p>
            </div>
            <button class="small-card__rent-btn" data-testid="rent-button">Rent Now</button>
        </div>
    </div>
</template>


<script setup lang="ts">
// Define the interface for our car data
interface CarData {
    title: string;
    subtitle: string;
    image: string;
    fuelCapacity: string;
    transmission: string;
    capacity: string;
    price: number;
}

// Define props with validation
const props = defineProps<{
    car: CarData
}>()
</script>


<style lang="scss" scoped>
.small-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 304px;
    height: 388px;
    background-color: #f0f0f0;
    border-radius: 8px;
    border: 1px solid #ccc;
    overflow: hidden;
    padding: 12px;
    box-sizing: border-box;
    
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 8px;
    }
    
    &__heading {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 4px 0;
    }
    
    &__subtitle {
        font-size: 12px;
        margin: 0;
        color: #666;
    }
    
    &__like-btn {
        // padding: 4px 8px;
        // font-size: 12px;
        // background-color: #3563E9;
        // color: white;
        // border: none;
        // border-radius: 4px;
        // cursor: pointer;
    }
    
    &__image {
        width: 100%;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
    }
    
    &__info {
        width: 100%;
        padding: 8px 0;
        display: flex;
        justify-content: space-around;

    }
    
    &__footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
    }
    
    &__rent-btn {
        padding: 4px 10px;
        font-size: 12px;
        background-color: #3563E9;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    
    &__icons-container {
        margin-bottom: 4px;
        text-align: center;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -2%;
        vertical-align: middle;
        color: #90A3BF;
        display: flex;
    }
    h3{
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -3%;
        vertical-align: middle;

    }
    p{
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -2%;
        vertical-align: middle;
        color: #90A3BF;
    }
    &__price {
        margin: 0;
        color: black;
        font-weight: 700;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0%;
        vertical-align: middle;

    }
    
    
button{
    display: flex;
    align-items: center;
    width: 120px;
    height: 44px;
    border-radius: 4px;
    gap: 8px;
    padding: 20px;
    background-color: #3563E9;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #2a4bb8;
    }
}
}
</style>