<template>
    <nav class="navbar" data-testid="navbar">
        <div class="navbar__container">
            <a class="navbar__logo" data-testid="logo">DM</a>
            <div class="navbar__controls">
                <div class="search" data-testid="search-bar">
                    <input class="search__input" type="text" placeholder="Search...">
                    <img class="search__icon" src="../../assets/search-normal.png" alt="search">
                </div>
                <img src="../../assets/like.png" alt="like" class="navbar__action" data-testid="like-icon">
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
.navbar {
    $self: &;
    background-color: #FFFFFF;
    border: 1px solid rgba(195, 212, 233, 0.4);
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }
    
    &__logo {
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
        margin-right: 20px;
        color: #3563E9;
    }
    
    &__controls {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }
    
    &__action {
        height: 44px;
        margin-left: 60px;
    }
}

.search {
    position: relative;
    width: 60vw;
    height: 44px;
    margin-right: 10px;
    
    &__input {
        width: 100%;
        height: 100%;
        border-radius: 70px;
        border: 1px solid rgba(195, 212, 233, 0.4);
        padding-left: 50px;
        color: #596780;
        font-weight: 500;
        font-size: 14px;
    }
    
    &__icon {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        height: 20px;
        pointer-events: none;
    }
}
</style>