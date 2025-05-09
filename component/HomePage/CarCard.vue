<template>
    <section class="card__container" data-testid="card-container">
        <div class="card card-1" data-testid="card-1">
            <div class="card__text">
                <h1 data-testid="card-1-heading">The Best Platform for Car Rental</h1>
                <p data-testid="card-1-description">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button data-testid="card-1-button">Rental Car</button>
            </div>
            <div class="card__img-container" data-testid="card-1-img-container">
                <img class="card__img" src="../../assets/car.png" alt="Example Image" data-testid="card-1-img" />
            </div>
        </div>
        <div class="card card-2" data-testid="card-2">
            <div class="card__text">
                <h1 data-testid="card-2-heading">Easy way to rent a car at a low price</h1>
                <p data-testid="card-2-description">Providing cheap car rental services and safe and comfortable facilities.</p>
                <button class="button-2" data-testid="card-2-button">Rental Car</button>
            </div>
            <div class="card__img-container" data-testid="card-2-img-container">
                <img class="card__img" src="../../assets/car2.png" alt="Example Image" data-testid="card-2-img" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">


.card__container {
    display: flex;
    justify-content: center;
    width: 1440px;
    height: 360px;
    padding: 20px;
    background-color: transparent;
    margin-top: 20px;
}

.card{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 640px;
    height: 360px;
    align-items: flex-start;
    color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    
    &-1 {
        background-image: url(../../assets/BG_1.png);
        margin-right: 15px;

    }
    &-2 {
        background-image: url(../../assets/BG_2.png);
        margin-left: 15px;

    }

    &__img-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 50%;
        margin-bottom: 20px;
    }
    &__img {
        width: 340px;
        height: auto;
        border-radius: 8px;
    }
    &__text{
        padding-left: 20px;
    }

}

h1{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    width: 284px;


}

p{
 
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -2%;
    vertical-align: middle;
    width: 284px;
    margin-top: -16px;
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


    position: absolute;
    bottom: 110px;
    &:hover {
        background-color: #2a4bb8;
    }
}

.button-2{
    background-color: #54A6FF;
}


</style>