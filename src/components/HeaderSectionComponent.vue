<template>
    <div class="mainHeader">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 20px;">
        <!-- Logo Section -->
        <div class="brandLogo">
            <div class="brandText">
                <p class="brandName">Melon</p>
                <p class="brandTagline">Mart & Grocery</p>
            </div>
        </div>

        <!-- Search Box -->
        <div class="searchSection">
            <input type="text" placeholder="Search products..." class="searchInput" />
        </div>

        <!-- User Menu Section -->
        <div class="userMenu">
            <div class="menuGroup">
                <div class="menuItem">
                    <!-- Account SVG -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#7E7E7E" stroke-width="2"/>
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22" stroke="#7E7E7E" stroke-width="2"/>
                    </svg>
                    <span>Account</span>
                </div>
                <div class="menuItem">
                    <!-- Compare SVG -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 3H18V21H6V3Z" stroke="#7E7E7E" stroke-width="2"/>
                        <path d="M9 3V21" stroke="#7E7E7E" stroke-width="2"/>
                        <path d="M15 3V21" stroke="#7E7E7E" stroke-width="2"/>
                    </svg>
                    <span>Compare</span>
                </div>
                <div class="menuItem">
                    <!-- Wishlist SVG -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21L10.55 19.84C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 19.84L12 21Z" stroke="#7E7E7E" stroke-width="2"/>
                    </svg>
                    <span>Wishlist</span>
                </div>
                <div class="menuItem">
                    <!-- Cart SVG -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6H18L16.5 18H7.5L6 6Z" stroke="#7E7E7E" stroke-width="2"/>
                        <path d="M7 6H17" stroke="#7E7E7E" stroke-width="2"/>
                    </svg>
                    <span>Cart</span>
                </div>
            </div>
        </div>
        </div>
        

        <!-- Navigation Categories and Support -->
        <div class="navigationBar">
            <button class="categoryButton">
                <!-- Category Icon SVG -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L20 12" stroke="white" stroke-width="2"/>
                    <path d="M12 4L12 20" stroke="white" stroke-width="2"/>
                </svg>
                <p>Explore Categories</p>
                <!-- Dropdown Icon SVG -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L8 12H16L12 16Z" fill="white"/>
                </svg>
            </button>

            <!-- Navigation Links -->
            <div class="navLinks">
                <div class="navItem">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C9.23858 5 7 7.23858 7 10H5C5 6.13401 7.13401 3 10 3C12.866 3 15 5.13401 15 8H17C17 4.13401 14.866 1 12 1Z" stroke="#1B1B1B" stroke-width="2"/>
                    </svg>
                    <span>Hot Deals</span>
                </div>
                <div class="navItem">
                    <span>Home</span>
                </div>
                <div class="navItem">
                    <span>Food</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L8 12H16L12 16Z" fill="#1B1B1B"/>
                    </svg>
                </div>
                <div class="navItem">
                    <span>Vegetables</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L8 12H16L12 16Z" fill="#1B1B1B"/>
                    </svg>
                </div>
                <div class="navItem">
                    <span>Drink</span>
                </div>
                <div class="navItem">
                    <span>Cookies</span>
                </div>
                <div class="navItem">
                    <span>Meat & Seafood</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L8 12H16L12 16Z" fill="#1B1B1B"/>
                    </svg>
                </div>
                <div class="navItem">
                    <span>Bakery</span>
                </div>
                <!-- Support Information -->
                <div class="supportSection">
                    <div class="supportDetails">
                        <p class="hotlineNumber">099 777 888</p>
                        <p class="supportText">24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderSection',
};
</script>

<style scoped>
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Montserrat:wght@300..900&display=swap');

/* Main Header Container */
.mainHeader {
    width: 100%;
    height: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* Logo Section */
.brandLogo {
    display: flex;
    gap: 15px;
}

.brandText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.brandName {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: #3BB77E;
}

.brandTagline {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #253D4E;
}

/* Search Section */
.searchSection {
    position: absolute;
    left: 300px;
}

.searchInput {
    width: 400px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 14px;
}

/* User Menu */
.userMenu {
    margin-top: 20px;
}

.menuGroup {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.menuItem {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #7E7E7E;
    cursor: pointer;
}

/* Navigation Bar */
.navigationBar {
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
}

.categoryButton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 250px;
    height: 45px;
    border-radius: 8px;
    border: none;
    background-color: #3BB77E;
    color: white;
    font-size: 14px;
}

.navLinks {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 35px;
}

.navItem {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #1B1B1B;
    font-weight: 600;
    cursor: pointer;
}

.supportSection {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.hotlineNumber {
    color: #3BB77E;
    font-weight: 600;
    font-size: 24px;
}

.supportText {
    color: #7E7E7E;
    font-size: 12px;
}
</style>
