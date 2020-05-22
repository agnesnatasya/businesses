const apiKey = 'si8VwkGU-_GGEuCWh1AR3bEfPj2H6eB-n5w55HY5wTBoSAOAEnvdSy4CfqfsAeTj6yFaErOdHcSpnb6lJvC71juXlnZy3KEaniGeC4p5uTr0kJtgwD5JXuUIygusXnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => response.json()
    ).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => (
          {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
      }
    });
  }
};

export default Yelp;
