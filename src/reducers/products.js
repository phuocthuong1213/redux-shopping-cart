var initialState = [
    {
        id: 1,
        name: 'Iphone 11',
        images: 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-400x460.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Iphone 11 Pro Max',
        images: 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 1500,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: 'Điện thoại iPhone SE 256GB',
        images: 'https://cdn.tgdd.vn/Products/Images/42/222631/iphone-se-256gb-2020-261820-101806-400x460.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 2000,
        inventory: 5,
        rating: 2
    }

];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;