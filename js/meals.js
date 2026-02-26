const navLinks = [
    { name: "Home", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Recipe", link: "#" },
    { name: "Catering", link: "#" },
    { name: "About", link: "#" },
    { name: "Awards", link: "#" },
    { name: "Feedback", link: "#" },
    { name: "Contact", link: "#" }
];

const karachiAreas = 
["Ancholi", "Gulshan-e-Iqbal", "DHA Phase 1-8", "Clifton", "PECHS",
"Gulistan-e-Jauhar", "Malir", "Bahria Town", "FB Area", "Saddar",
"North Nazimabad", "Nazimabad", "Defence View", "Korangi", "Landhi",
"Buffer Zone", "Karimabad", "Tariq Road", "North Karachi", "Sharfabad", 
"Lyari", "Kharadar", "Mehmoodabad", "Shah Faisal Colony", "Model Colony",
"Surjani Town", "New Karachi", "Orangi Town", "Gulberg", "Federal B Area",
"Scheme 33", "Saadi Town", "Gadap Town", "Hawksbay", "Keamari",
"Soldier Bazaar", "Garden East", "Garden West", "Jamshed Town",
"Ranchore Line", "Lines Area", "Metroville", "SITE Area",
"Banaras", "Paposh Nagar", "Gulshan-e-Maymar", "Shah Faisal Town",
];
const branchList = [
    { name: "Clifton Outlet", addr: "Clifton, Karachi" },
    { name: "DHA Outlet", addr: "DHA Phase 5, Karachi" },
    { name: "Gulshan-e-Iqbal Outlet", addr: "Gulshan-e-Iqbal, Karachi" },
    { name: "Gulistan-e-Jauhar Outlet", addr: "Gulistan-e-Jauhar, Karachi" },
    { name: "Saddar Outlet", addr: "Saddar, Karachi" },
    { name: "North Nazimabad Outlet", addr: "North Nazimabad, Karachi" },
    { name: "Nazimabad Outlet", addr: "Nazimabad, Karachi" },
    { name: "PECHS Outlet", addr: "PECHS, Karachi" },
    { name: "Tariq Road Outlet", addr: "Tariq Road, Karachi" },
    { name: "Bahadurabad Outlet", addr: "Bahadurabad, Karachi" },
    { name: "Malir Outlet", addr: "Malir, Karachi" },
    { name: "Shah Faisal Outlet", addr: "Shah Faisal Colony, Karachi" },
    { name: "Korangi Outlet", addr: "Korangi, Karachi" },
    { name: "Landhi Outlet", addr: "Landhi, Karachi" },
    { name: "Bahria Town Outlet", addr: "Bahria Town, Karachi" },
    { name: "Orangi Town Outlet", addr: "Orangi Town, Karachi" },
    { name: "Lyari Outlet", addr: "Lyari, Karachi" },
    { name: "Federal B Area Outlet", addr: "Federal B Area, Karachi" },
    { name: "Garden Outlet", addr: "Garden East, Karachi" },
    { name: "SITE Outlet", addr: "SITE Area, Karachi" }
];

let cart = [];
let cartTotal = 0;
let countdownInterval = null;
let orderConfirmed = false;

const headerDishesData = {
    meals: [
        { name: "Chicken Biryani", desc: "Fragrant basmati rice cooked with tender chicken pieces, aromatic spices, and saffron. A customer favorite that brings the authentic taste of Hyderabad to your table.", price: 1200, image: "../images/chicken-biryani.jpg" },
        { name: "Beef Biryani", desc: "Premium basmati rice layered with succulent beef chunks and traditional spices. Slow-cooked to perfection for that melt-in-your-mouth experience.", price: 1400, image: "../images/beef-biryani.jpg" },
        { name: "Mutton Biryani", desc: "Rich mutton pieces slow-cooked with long grain rice and royal spices. Our signature dish that has won awards for its authentic flavor.", price: 1800, image: "../images/mutton-biryani.jpg" },
        { name: "Chicken Pulao", desc: "Mildly spiced rice with juicy chicken, perfect for family dinners. A lighter option that doesn't compromise on taste.", price: 1100, image: "../images/chicken-pulao.jpg" },
        { name: "Beef Pulao", desc: "Fragrant rice with tender beef, cooked in traditional style. A hearty meal that satisfies every craving.", price: 1300, image: "../images/beef-pulao.jpg" },
        { name: "Chicken Karahi", desc: "Tangy tomato-based gravy with chicken pieces, cooked in wok. The perfect blend of spices that will leave you wanting more.", price: 1600, image: "../images/Chicken-Karahi.jpg" },
        { name: "Chicken Handi", desc: "Creamy desi style chicken cooked in clay pot with rich gravy. A royal dish that brings the flavors of old Lucknow.", price: 1550, image: "../images/chicken-handi.jpg" },
        { name: "Butter Chicken", desc: "Tender chicken in smooth buttery tomato gravy with cream. A North Indian classic that never disappoints.", price: 1500, image: "../images/butter-chicken.jpg" },
        { name: "Chicken Qorma", desc: "Yogurt-based mild gravy with chicken and aromatic spices. A Mughlai delicacy that's rich and flavorful.", price: 1450, image: "../images/chicken-qorma.jpg" },
        { name: "Beef Nihari", desc: "Slow-cooked beef stew with traditional spices, served with naan. A breakfast favorite that's now available all day.", price: 1400, image: "../images/beef-nihari.jpg" },
        { name: "Haleem", desc: "Nutritious lentil and meat dish cooked overnight for perfect texture. Packed with protein and authentic flavors.", price: 900, image: "../images/haleem.jpg" },
        { name: "White Karahi", desc: "Mild creamy chicken karahi with cashew and cream sauce. A unique twist on the traditional karahi.", price: 1650, image: "../images/white-karahi.jpg" },
        { name: "BBQ Platter", desc: "Mixed platter of tikka, kebab, and boti with salad and chutney. Perfect for sharing and experiencing our best BBQ items.", price: 2200, image: "../images/bbq-platter.jpg" },
        { name: "Desi Thali", desc: "Complete meal with rice, dal, sabzi, roti, raita, and dessert. A taste of everything in one platter.", price: 1700, image: "../images/desi-thali.jpg" },
        { name: "Steam Roast", desc: "Juicy roasted chicken with traditional masala and herbs. A whole chicken prepared to perfection.", price: 1500, image: "../images/steam-roast.jpg" },
        { name: "Cheeziest Lava Pizza", desc: "A fusion of Italian and desi flavors with a cheesy lava center. A unique pizza experience that's both indulgent and delicious.", price: 1200, image: "../images/cheeziest-lavapizza.jpg" },
    ],
    regular: [
        { name: "Daal Chawal", desc: "Classic comfort food - lentil curry served with steamed rice. Simple, wholesome, and satisfying.", price: 450, image: "../images/daal-chawal.jpg" },
        { name: "Mixed Sabzi", desc: "Seasonal vegetables cooked in traditional spices and herbs. A healthy option packed with nutrition.", price: 500, image: "../images/mixed-sabzi.jpg" },
        { name: "Aloo Palak", desc: "Spinach and potato curry with garlic and mild spices. A North Indian staple that's both healthy and delicious.", price: 480, image: "../images/aloo-palak.jpg" },
        { name: "Bhindi Masala", desc: "Spicy okra cooked with onions, tomatoes, and traditional masala. Crispy on the outside, tender inside.", price: 550, image: "../images/bhindi-masala.jpg" },
        { name: "Kari Pakora", desc: "Crispy pakoras served in tangy yogurt curry. A festive dish that's perfect for special occasions.", price: 600, image: "../images/kari-pakora.jpg" },
        { name: "Beef Qeema", desc: "Spiced ground beef cooked with peas and potatoes. A versatile dish that pairs perfectly with roti or rice.", price: 800, image: "../images/beef-qeema.jpg" },
        { name: "Chicken Curry", desc: "Homestyle chicken gravy perfect with rice or roti. Our most popular everyday curry.", price: 750, image: "../images/chicken-curry.jpg" },
        { name: "Aloo Qeema", desc: "Potato and ground beef curry with traditional spices. A hearty combination that's loved by all.", price: 780, image: "../images/aloo-qeema.jpg" },
        { name: "Lobia Masala", desc: "Black-eyed peas cooked in rich tomato gravy. A protein-packed vegetarian option.", price: 450, image: "../images/lobia-masala.jpg" },
        { name: "Mussalam Daal", desc: "Creamy lentil dish cooked with butter and cream. Rich, comforting, and absolutely delicious.", price: 400, image: "../images/mussalam-daal.jpg" },
        { name: "Chana Masala", desc: "Spicy chickpeas cooked with onions, tomatoes, and masala. A North Indian favorite that's full of flavor.", price: 480, image: "../images/channa-masala.jpg" },
        { name: "Baingan Bharta", desc: "Smoked eggplant mashed and cooked with spices. A rustic dish with a unique smoky flavor.", price: 500, image: "../images/baigan-bharta.jpg" },
        { name: "Tinda Masala", desc: "Apple gourd cooked in tangy tomato gravy. A unique vegetable preparation that's surprisingly delicious.", price: 450, image: "../images/tinda-masala.jpg" },
        { name: "Gobi Aloo", desc: "Cauliflower and potato curry with Indian spices. A classic combination that never gets old.", price: 480, image: "../images/gobi-aloo.jpg" },
        { name: "Daal Makhani", desc: "Rich black lentil curry cooked overnight with butter. A restaurant favorite that's worth the wait.", price: 650, image: "../images/daal-makhani.jpg" },
        { name: "Tandoor Roti", desc: "Freshly baked tandoor roti served with butter. A perfect accompaniment to any curry.", price: 50, image: "../images/tandoor-roti.jpg" },

    ],
    lunch: [
        { name: "Biryani Combo", desc: "Biryani + Raita + Salad + Soft Drink. The complete meal deal for biryani lovers.", price: 950, image: "../images/biryani-combo.jpg" },
        { name: "Karahi Combo", desc: "Chicken Karahi + 4 Naan + Salad + Raita. Perfect for sharing with family or friends.", price: 1200, image: "../images/karahi-combo.jpg" },
        { name: "Nihari Deal", desc: "Beef Nihari + 2 Naan + Salad + Pickles. A hearty meal that will keep you full for hours.", price: 900, image: "../images/nihari-deal.jpg" },
        { name: "Haleem Deal", desc: "Special Haleem + 2 Naan + Salad + Lemon. A nutritious and filling lunch option.", price: 700, image: "../images/haleem-deal.jpg" },
        { name: "BBQ Roll Platter", desc: " Chicken Rolls + Fries + Salad. Perfect for a quick and satisfying lunch.", price: 650, image: "../images/bbqroll-platter.jpg" },
        { name: "Qorma Combo", desc: "Chicken Qorma + 3 Roti + Raita. A royal lunch that won't break the bank.", price: 850, image: "../images/qorma-combo.jpg" },
        { name: "Pulao Deal", desc: "Chicken Pulao + 2 Seekh Kabab. A balanced meal with protein and carbs.", price: 800, image: "../images/pulao-deal.jpg" },
        { name: "Thali Special", desc: "Full Lunch Thali with 5 items + dessert. Experience a variety of flavors in one meal.", price: 1100, image: "../images/thali-special.jpg" },
        { name: "Daal Combo", desc: "Daal + Rice + fried masala pomfret + salad . Simple, satisfying, and light on the pocket.", price: 550, image: "../images/daal-combo.jpg" },
        { name: "Sabzi Combo", desc: "Mixed Sabzi + Papad + Rice + Cucumber Slices. A wholesome vegetarian lunch.", price: 500, image: "../images/sabzi-combo.jpg" },
        { name: "Handi Combo", desc: "Chicken Handi + Zeera Rice. Unique  and delicious, perfect for lunch.", price: 1000, image: "../images/handi-combo.jpg" },
        { name: "Steamed Deal", desc: "Steam Roast + Handi pulao  + Chilli + Raita  . A complete chicken meal.", price: 950, image: "../images/steamed-deal.jpg" },
        { name: "Shami Kabab Deal", desc: "Shami Kabab + Sindhi Biryani + Raita + Salad . A classic combo that's always a hit.", price: 450, image: "../images/shamikabab-deal.jpg" },
        { name: "Zinger Combo", desc: "Zinger Burger + Fries + Cold Drink. When you're craving something different.", price: 750, image: "../images/zinger-combo.jpg" },
        { name: "Club Sandwich", desc: "Classic Club Sandwich with fries. A light and tasty lunch option.", price: 600, image: "../images/club-sandwich.jpg" },
        { name: "Beef Burger Combo", desc: "Juicy Beef Burger + Fries + Personal Pizza Slice + Cold Drink + Signature Vinegar Sauce. A complete and satisfying meal combo.", price: 1200, image: "../images/beef-burger-combo.jpg" },
    ],
    snacks: [
        { name: "Samosa Chaat", desc: "Crispy samosas topped with chutneys, yogurt, and spices. A explosion of flavors in every bite.", price: 250, image: "../images/samosa-chaat.jpg" },
        { name: "Papri Chaat", desc: "Crispy dough wafers topped with potatoes, chutneys, and yogurt. Tangy, sweet, and spicy all at once.", price: 280, image: "../images/papri-chaat.jpg" },
        { name: "Dahi Baray", desc: "Soft lentil dumplings served in creamy yogurt with spices. A cooling snack for hot days.", price: 300, image: "../images/dahi-baray.jpg" },
        { name: "Gol Gappay", desc: "Crispy spheres filled with spicy tangy water. The ultimate street food experience.", price: 200, image: "../images/gol-gappay.jpg" },
        { name: "Chicken Rolls", desc: "Fried chicken wrapped in paratha with sauces. A handheld snack that's perfect on the go.", price: 150, image: "../images/chicken-rolls.jpg" },
        { name: "Beef Rolls", desc: "Spiced beef wrapped in paratha with chutney. Savory and satisfying.", price: 180, image: "../images/beef-rolls.jpg" },
        { name: "Fries", desc: "Crispy golden potato fries with seasoning. The perfect side snack.", price: 120, image: "../images/fries.jpg" },
        { name: "Masala Fries", desc: "Spiced potato fries with chaat masala. A desi twist on a classic favorite.", price: 150, image: "../images/masala-fries.jpg" },
        { name: "Pakora Platter", desc: "Mixed vegetable pakoras served with chutney. Perfect for tea time or rainy evenings.", price: 200, image: "../images/pakora-platter.jpg" },
        { name: "Fish Finger", desc: "Crispy fish fingers with tartar sauce. A British classic with a desi touch.", price: 400, image: "../images/fish-finger.jpg" },
        { name: "Chicken Wings", desc: "BBQ chicken wings with dip. Sticky, spicy, and finger-licking good.", price: 350, image: "../images/chicken-wings.jpg" },
        { name: "Samosa", desc: "Potato and pea filled pastry triangles. Our best-selling snack for generations.", price: 50, image: "../images/samosa.jpg" },
        { name: "Kabab Roll", desc: "Shami kabab wrapped in paratha with onions. A Karachi street food favorite.", price: 120, image: "../images/kabab-roll.jpg" },
        { name: "Cheezi Pasta", desc: "Creamy cheese pasta with vegetables and spices. A comfort food favorite.", price: 300, image: "../images/cheezi-pasta.jpg" },
        { name: "Soup Bowl", desc: "Hot chicken soup with vegetables and noodles. Comfort in a bowl.", price: 250, image: "../images/soup-bowl.jpg" },
        { name: "Chicken Grill Burger", desc: "Grilled chicken patty with lettuce and mayo in a bun. A lighter burger option that's still delicious.", price: 400, image: "../images/chicken-grill-burger.jpg" },
    ],
    dessert: [
        { name: "Kheer", desc: "Traditional rice pudding with nuts and cardamom. Creamy, sweet, and aromatic.", price: 250, image: "../images/kheer.jpg" },
        { name: "Gajar Halwa", desc: "Carrot halwa cooked in milk with nuts and ghee. A winter special that's available year-round.", price: 300, image: "../images/gajar-halwa.jpg" },
        { name: "Gulab Jamun", desc: "Sweet milk dumplings soaked in sugar syrup. Soft, spongy, and irresistibly sweet.", price: 150, image: "../images/gulab-jamun.jpg" },
        { name: "Ras Malai", desc: "Creamy cheese patties in sweetened milk. A Bengali delicacy that melts in your mouth.", price: 350, image: "../images/ras-malai.jpg" },
        { name: "Shahi Tukray", desc: "Bread pudding with saffron, nuts, and cream. A royal dessert fit for kings.", price: 280, image: "../images/shahi-tukray.jpg" },
        { name: "Ice Cream", desc: "Vanilla/Chocolate ice cream scoop. The perfect ending to any meal.", price: 200, image: "../images/ice-cream.jpg" },
        { name: "Brownie", desc: "Chocolate fudge brownie with nuts. Rich, gooey, and chocolatey.", price: 300, image: "../images/brownie.jpg" },
        { name: "Cake Slice", desc: "Creamy cake slice of the day. Freshly baked and delicious.", price: 250, image: "../images/cake-slice.jpg" },
        { name: "Kulfi", desc: "Traditional Indian ice cream with pistachio. Denser and creamier than regular ice cream.", price: 180, image: "../images/kulfi.jpg" },
        { name: "Fruit Salad", desc: "Fresh seasonal fruits with cream. Light, refreshing, and healthy.", price: 200, image: "../images/fruit-salad.jpg" },
        { name: "Custard", desc: "Fruit custard with vanilla flavor. A childhood favorite for many.", price: 150, image: "../images/custard.jpg" },
        { name: "Falooda", desc: "Royal falooda with vermicelli, nuts, and ice cream. A dessert drink that's a meal in itself.", price: 350, image: "../images/falooda.jpg" },
        { name: "Chocolate Shake", desc: "Thick chocolate milkshake with cream. For when you need a chocolate fix.", price: 280, image: "../images/chocolate-shake.jpg" },
        { name: "Jalebi", desc: "Hot crispy spirals soaked in sugar syrup. Best enjoyed fresh and warm.", price: 200, image: "../images/jalebi.jpg" },
        { name: "rasgulla", desc: "Soft cheese balls soaked in light sugar syrup. A Bengali sweet that's light and delicious.", price: 300, image: "../images/rasgulla.jpg" },
        { name: "ice gola", desc: "Shaved ice with flavored syrup. A popular street dessert to beat the heat.", price: 100, image: "../images/ice-gola.jpg" },
    ],
    beverages: [
        { name: "Lassi", desc: "Sweet/Salty yogurt drink, traditional style. The perfect accompaniment to spicy food.", price: 150, image: "../images/lassi.jpg" },
        { name: "Mint Margarita", desc: "Refreshing mint and lemon drink. Cool and revitalizing on hot days.", price: 200, image: "../images/mint-margarita.jpg" },
        { name: "Fresh Juice", desc: "Orange/Apple juice, freshly squeezed. Pure and natural refreshment.", price: 250, image: "../images/fresh-juice.jpg" },
        { name: "Milkshake", desc: "Banana/Strawberry thick milkshake. Creamy and satisfying.", price: 250, image: "../images/milkshake.jpg" },
        { name: "Cold Drink", desc: "Coke/Sprite 250ml can. Classic refreshment.", price: 80, image: "../images/cold-drink.jpg" },
        { name: "Mineral Water", desc: "Small/Large bottled water. Stay hydrated.", price: 50, image: "../images/mineral-water.jpg" },
        { name: "Tea", desc: "Hot traditional chai. The perfect cuppa for any time of day.", price: 60, image: "../images/tea.jpg" },
        { name: "Coffee", desc: "Hot coffee with milk/black. For the coffee lovers.", price: 150, image: "../images/coffee.jpg" },
        { name: "Lemonade", desc: "Fresh lemon drink with mint. Tangy and refreshing.", price: 100, image: "../images/lemonade.jpg" },
        { name: "cold coffee", desc: "Iced coffee with milk and ice. A cool way to enjoy your coffee.", price: 200, image: "../images/cold-coffee.jpg" },
        { name: "green tea", desc: "Hot green tea with lemon. A healthy and soothing beverage.", price: 120, image: "../images/green-tea.jpg" },
        { name: "hot chocolate", desc: "Rich hot chocolate with cream. A comforting drink for cold days.", price: 250, image: "../images/hot-chocolate.jpg" },
        { name: "Rooh Afza", desc: "Traditional rose flavored drink. A summer favorite.", price: 100, image: "../images/rooh-afza.jpg" },
        { name: "Doodh Soda", desc: "Milk soda with rose syrup. Unique and delicious.", price: 150, image: "../images/doodh-soda.jpg" },
        { name: "Special Shake", desc: "Chef special seasonal shake. Ask your server for today's flavor.", price: 350, image: "../images/special-shake.jpg" },
        { name: "kashmiri Chai", desc: "Spiced tea with cardamom and saffron. A fragrant and flavorful tea experience.", price: 180, image: "../images/kashmiri-chai.jpg" },
    ]
};

const menuData = {
    meals: {
        title: "Traditional Meals",
        subtitle: "Authentic Vinegar Biryani & Karahi",
        bannerImg: "../images/mealsbanner.jpg",
        items: headerDishesData.meals
    },
    regular: {
        title: "Daily Regulars",
        subtitle: "Fresh Daal, Sabzi & Curry",
        bannerImg: "../images/regularbanner.jpg",
        items: headerDishesData.regular
    },
    lunch: {
        title: "Lunch Special",
        subtitle: "Quick & Filling Combos",
        bannerImg: "../images/lunchbanner.jpg",
        items: headerDishesData.lunch
    },
    snacks: {
        title: "Evening Snacks",
        subtitle: "Spicy & Crispy Bites",
        bannerImg: "../images/snacksbanner.jpg",
        items: headerDishesData.snacks
    },
    dessert: {
        title: "Sweet Dessert",
        subtitle: "The Perfect Ending",
        bannerImg: "../images/dessertbanner.jpg",
        items: headerDishesData.dessert
    },
    beverages: {
        title: "Beverages",
        subtitle: "Chilled Drinks & Shakes",
        bannerImg: "../images/beveragesbanner.jpg",
        items: headerDishesData.beverages
    }
};

const fallbackImages = {
    "Chicken Biryani": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400",
    "Beef Biryani": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
    "Mutton Biryani": "https://images.unsplash.com/photo-1563379091339-03246963d9d6?w=400",
    "Chicken Karahi": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
    "Daal Chawal": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    "Samosa Chaat": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400",
    "Gulab Jamun": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
    "Lassi": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
    "default": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
};

$(document).ready(function() {
    initApp();

    setTimeout(() => { 
        $('#loader').fadeOut(); 
        openLocationModal();
    }, 2500);

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        
        if (scroll > 400) {
            $('.scroll-top-btn').addClass('show');
            $('#floatSearch').fadeIn();
        } else {
            $('.scroll-top-btn').removeClass('show');
            $('#floatSearch').fadeOut();
        }

        let currentSection = '';
        $('section').each(function() {
            let top = $(this).offset().top - 120;
            let bottom = top + $(this).outerHeight();
            let id = $(this).attr('id');
            if (scroll >= top && scroll < bottom) {
                currentSection = id;
                return false;
            }
        });
        
        if (currentSection) {
            $('.cat-item').removeClass('active');
            $(`.cat-item[data-target="${currentSection}"]`).addClass('active');
        }
    });

    $('.cat-item').on('click', function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        if (target) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 100
            }, 600);
        }
    });

    $('.scroll-top-btn').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $('#menuSearch').on('input', function() {
        searchDish();
    });

    $(document).on('click', function(e) {
        if ($(e.target).hasClass('custom-modal') && !$('#locationModal').is(':visible')) {
            closeDishModal();
            if ($('#cartModal').is(':visible')) toggleCart();
            if ($('#checkoutModal').is(':visible')) closeCheckoutModal();
            if ($('#orderConfirmModal').is(':visible')) closeOrderConfirm();
        }
        if (!$(e.target).closest('.loading-status-panel').length && !$(e.target).closest('#loadingStatusIcon').length) {
            $('#loadingStatusPanel').removeClass('active');
        }
    });
    
    $('#orderStatusIndicator').click(function() {
        if (orderConfirmed) {
            showOrderConfirmModal();
        }
    });
});

function initApp() {
    let navHtml = '';
    navLinks.forEach(link => {
        navHtml += `<a href="${link.link}">${link.name}</a>`;
    });
    $('#mainNavLinks').html(navHtml);

    let menuHtml = '';
    Object.keys(menuData).forEach(key => {
        let cat = menuData[key];
        menuHtml += `
            <section id="${key}" class="menu-group pt-5">
                <div class="cat-banner" style="background-image: url('${cat.bannerImg}')">
                    <div class="banner-content">
                        <h2>${cat.title}</h2>
                        <p>${cat.subtitle}</p>
                    </div>
                </div>
                <div class="row g-3" id="${key}-items"></div>
            </section>
        `;
    });
    $('#menu-container').html(menuHtml);

    Object.keys(menuData).forEach(key => {
        let itemsHtml = '';
        menuData[key].items.forEach(item => {
            const fallbackUrl = fallbackImages[item.name] || fallbackImages["default"];
            const imageUrl = item.image || fallbackUrl;
            
            itemsHtml += `
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="food-card" onclick="openDishModal('${item.name.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\'")}', ${item.price})">
                        <div class="food-img" style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;">
                        </div>
                        <div class="food-body">
                            <p class="food-title">${item.name}</p>
                            <span class="food-price">PKR ${item.price}</span>
                            <button class="btn-add-item" onclick="event.stopPropagation(); addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})">Add to Cart</button>
                        </div>
                    </div>
                </div>`;
        });
        $(`#${key}-items`).html(itemsHtml);
    });

    populateAreas();
    toggleType('delivery');
}

function populateAreas() {
    let sel = $('#areaSelect').empty().append('<option value="">Select Area...</option>');
    karachiAreas.forEach(a => sel.append(`<option value="${a}">${a}</option>`));
}

function openDishModal(name, description, price) {
    let imageUrl = "";
    
    for (let category in headerDishesData) {
        const dish = headerDishesData[category].find(d => d.name === name);
        if (dish) {
            imageUrl = dish.image || fallbackImages[name] || fallbackImages["default"];
            break;
        }
    }
    
    if (!imageUrl) {
        imageUrl = fallbackImages[name] || fallbackImages["default"];
    }
    
    const modalContent = `
        <div class="dish-modal-content">
            <div class="dish-modal-img" style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;">
            </div>
            <h3 class="dish-modal-title">${name}</h3>
            <p class="dish-modal-desc">${description}</p>
            <div class="dish-modal-price">PKR ${price}</div>
            <button class="btn-confirm-select" onclick="addToCart('${name.replace(/'/g, "\\'")}', ${price}); closeDishModal()">
                Add to Cart
            </button>
        </div>
    `;
    
    $('#dishModalContent').html(modalContent);
    $('#dishModal').fadeIn().css('display', 'flex');
}

function closeDishModal() {
    $('#dishModal').fadeOut();
}

function openLocationModal() {
    $('#locationModal').fadeIn().css('display', 'flex');
    $('#locationError').hide();
}

function closeLocationModal() {
    $('#locationModal').fadeOut();
}

function confirmLocation() {
    let selectedArea = $('#areaSelect').val();
    if (selectedArea && selectedArea !== "") {
        $('#currentLoc').text(selectedArea);
        $('#locationError').hide();
        closeLocationModal();
        return true;
    } else {
        $('#locationError').show();
        return false;
    }
}

function scrollManual(val) {
    const scroller = document.getElementById('topScroller');
    scroller.scrollBy({ 
        left: val, 
        behavior: 'smooth' 
    });
}

function scrollToSection(sectionId) {
    $('html, body').animate({
        scrollTop: $(`#${sectionId}`).offset().top - 100
    }, 600);
}

function searchDish() {
    let val = $('#menuSearch').val().toLowerCase().trim();
    let found = false;
    
    $('.food-card').parent().hide();
    
    if (val === '') {
        $('.food-card').parent().show();
        $('#noResult').hide();
        return;
    }
    
    $('.food-card').each(function() {
        let name = $(this).find('.food-title').text().toLowerCase();
        if (name.includes(val)) {
            $(this).parent().show();
            found = true;
        }
    });
    
    $('section').each(function() {
        let sectionId = $(this).attr('id');
        let visibleItems = $(`#${sectionId} .food-card:visible`).length;
        if (visibleItems > 0) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    
    if (found) {
        $('#noResult').hide();
    } else {
        $('#noResult').show();
    }
}

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCartUI();
    
    let feedback = $('<div class="cart-feedback" style="position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 10px 20px; border-radius: 5px; z-index: 10000;">Added to cart!</div>');
    $('body').append(feedback);
    setTimeout(() => feedback.remove(), 2000);
}

function updateCartUI() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    $('#cartCount').text(totalItems);
    
    let cartHtml = '';
    cartTotal = 0;
    
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;
        
        cartHtml += `
            <div class="cart-item">
                <div>
                    <div class="fw-bold">${item.name}</div>
                    <div class="small">PKR ${item.price} x ${item.quantity}</div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold">PKR ${itemTotal}</span>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>`;
    });
    
    $('#cartItemsList').html(cartHtml || "<p class='text-center text-muted py-4'>Your cart is empty</p>");
    $('#subtotalAmount').text('Rs. ' + cartTotal);
    $('#orderTotal').text("Total: Rs. " + cartTotal);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    $('#cartModal').fadeToggle().css('display', 'flex');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    toggleCart();
    $('#checkoutModal').fadeIn().css('display', 'flex');
    $('#checkoutError').hide();
}

function closeCheckoutModal() {
    $('#checkoutModal').fadeOut();
}

function validateAndPlaceOrder() {
    let title = $('#titleSelect').val();
    let fullName = $('#fullName').val();
    let mobile = $('#mobileNumber').val();
    let address = $('#deliveryAddress').val();
    let payment = $('#paymentMethod').val();
    
    if (!title || !fullName || !mobile || !address || !payment) {
        $('#checkoutError').show();
        return;
    }
    
    $('#checkoutError').hide();
    closeCheckoutModal();
    placeOrder();
}

function placeOrder() {
    cart = [];
    orderConfirmed = true;
    updateCartUI();
    $('#orderConfirmModal').fadeIn().css('display', 'flex');
    startCountdown(30);
    $('#orderStatusBadge').show();
    $('#orderStatusIndicator').fadeIn();
    updateLoadingPanel();
}

function startCountdown(minutes) {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    let totalSeconds = minutes * 60;
    
    function updateTimer() {
        let mins = Math.floor(totalSeconds / 60);
        let secs = totalSeconds % 60;
        let timeString = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        $('#countdownTimer').text(timeString);
        $('#statusTimer').text(timeString);
        $('#loadingTimer').text(timeString);
        
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            $('#countdownTimer').text('00:00');
            $('#statusTimer').text('00:00');
            $('#loadingTimer').text('00:00');
            orderConfirmed = false;
            $('#orderStatusBadge').hide();
            setTimeout(() => {
                $('#orderStatusIndicator').fadeOut();
            }, 3000);
            updateLoadingPanel();
        }
        
        totalSeconds--;
    }
    
    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
}

function closeOrderConfirm() {
    $('#orderConfirmModal').fadeOut();
}

function showOrderConfirmModal() {
    $('#orderConfirmModal').fadeIn().css('display', 'flex');
}

function toggleType(t) {
    $('.type-toggle button').removeClass('active');
    let sel = $('#areaSelect').empty().append('<option value="">Select Area...</option>');
    if(t === 'delivery') {
        $('#btnDel').addClass('active');
        karachiAreas.forEach(a => sel.append(`<option value="${a}">${a}</option>`));
    } else {
        $('#btnPick').addClass('active');
        branchList.forEach(b => sel.append(`<option value="${b.addr}">${b.name}</option>`));
    }
}

function scrollToSearch() {
    $('html, body').animate({ scrollTop: $('#menuSearch').offset().top - 120 }, 600);
    $('#menuSearch').focus();
}

function toggleLoadingPanel() {
    $('#loadingStatusPanel').toggleClass('active');
    updateLoadingPanel();
}

function closeLoadingPanel() {
    $('#loadingStatusPanel').removeClass('active');
}

function updateLoadingPanel() {
    if (orderConfirmed) {
        $('#loadingStatusMessage').text('Your order is on the way!');
        $('#loadingTimerContainer').show();
    } else {
        $('#loadingStatusMessage').text('No active orders');
        $('#loadingTimerContainer').hide();
    }
} 

