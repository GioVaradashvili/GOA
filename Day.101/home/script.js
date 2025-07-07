// დავალება 1: უნივერსიტეტის მონაცემები
const university = {
    name: "Tech University",
    departments: 5,
    website: "www.techuniversity.edu",
    ratings: {
        student1: 4.5,
        student2: 4.0,
        student3: 4.8
    }
};

// 1. გამოიტანეთ ობიექტის ყველა თვისება და მნიშვნელობა.
console.log(university);

// 2. შეამოწმეთ, გააჩნია თუ არა scholarship თვისება.
console.log('scholarship' in university);

// 3. დაამატეთ studentsCount ახალი ობიექტის გაერთიანებით.
const updatedUniversity = { ...university, studentsCount: 2000 };
console.log(updatedUniversity);

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.
Object.freeze(updatedUniversity);
updatedUniversity.name = "New Tech University"; // This will not change the object
console.log(updatedUniversity);

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedUniversity));

// დავალება 2: სპორტული კლუბის მონაცემები
const sportsClub = {
    clubName: "Eagles FC",
    sportType: "Football",
    foundedYear: 1990,
    achievements: {
        title1: "League Champion",
        title2: "Cup Winner",
        title3: "Super Cup Winner"
    }
};

// 1. გამოიტანეთ ობიექტის თვისებების სია.
console.log(Object.keys(sportsClub));

// 2. გამოიტანეთ ობიექტის მნიშვნელობების სია.
console.log(Object.values(sportsClub));

// 3. შეამოწმეთ, არსებობს თუ არა sponsors ველი.
console.log('sponsors' in sportsClub);

// 4. დაამატეთ ახალი თვისება stadiumCapacity ახალი ობიექტით გაერთიანების გზით.
const updatedSportsClub = { ...sportsClub, stadiumCapacity: 50000 };
console.log(updatedSportsClub);

// 5. გაყინეთ ობიექტი და სცადეთ მისი ცვლილება.
Object.freeze(updatedSportsClub);
updatedSportsClub.clubName = "New Eagles FC"; // This will not change the object
console.log(updatedSportsClub);

// 6. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedSportsClub));

// დავალება 3: სასტუმროს მართვა
const hotel = {
    hotelName: "Grand Hotel",
    stars: 5,
    location: "Downtown",
    guestReviews: {
        guest1: "Excellent service",
        guest2: "Very comfortable",
        guest3: "Great location"
    }
};

// 1. გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.
console.log(hotel);

// 2. შეამოწმეთ, გააჩნია თუ არა spa ველი.
console.log('spa' in hotel);

// 3. დაამატეთ roomsCount ახალი ობიექტის გაერთიანებით.
const updatedHotel = { ...hotel, roomsCount: 150 };
console.log(updatedHotel);

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.
Object.freeze(updatedHotel);
updatedHotel.hotelName = "New Grand Hotel"; // This will not change the object
console.log(updatedHotel);

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedHotel));

// დავალება 4: კინოს მონაცემთა ბაზა
const cinema = {
    cinemaName: "Cinema City",
    moviesCount: 10,
    location: "City Center",
    movieReviews: {
        user1: "Amazing experience",
        user2: "Good sound quality",
        user3: "Comfortable seats"
    }
};

// 1. გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.
console.log(cinema);

// 2. შეამოწმეთ, გააჩნია თუ არა vipSeats ველი.
console.log('vipSeats' in cinema);

// 3. დაამატეთ ticketPrice ახალი ობიექტის გაერთიანებით.
const updatedCinema = { ...cinema, ticketPrice: 15 };
console.log(updatedCinema);

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.
Object.freeze(updatedCinema);
updatedCinema.cinemaName = "New Cinema City"; // This will not change the object
console.log(updatedCinema);

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log(Object.isFrozen(updatedCinema));