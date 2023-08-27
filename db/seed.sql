\c products_db;

INSERT INTO cookie_candy (product_name, product_type, calories, price, last_updated, url, is_favorite) VALUES
('Peanut Butter Cookie', 'cookie', 142, 2.49, NOW(),'https://sallysbakingaddiction.com/wp-content/uploads/2013/02/peanut-butter-chocolate-swirl-cookies-2.jpg', true),
('Chocolate Chip Cookie', 'cookie', 135, 1.99, NOW(),'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/4bc5edb86285aadc28069f51d9e98974.jpg', false),
('Vegan Cookie', 'cookie', 135, 2.99, NOW(),'https://thebigmansworld.com/wp-content/uploads/2022/10/vegan-cookie-recipes.jpg', true),
('Homemade Lollipops', 'candy', 100, 0.99, NOW(), 'https://www.thespruceeats.com/thmb/7wC9mUcN_4s2-GS0Ya3e4wxcgwU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lollipops-521375-hero-01-867964a42c3e4f32ad48384322b69ebe.jpg', false),
('Gummy Candy', 'candy', 110, 0.99, NOW(), 'https://i.insider.com/5a4681bd0fa373560a8b45af?width=700', true),
('Christmas Butter ', 'cookie', 110, 1.49, NOW(), 'https://drivemehungry.com/wp-content/uploads/2020/07/christmas-butter-cookies-11.jpg', true),
('Nougat', 'candy', 90, 0.99, NOW(), 'https://aprettylifeinthesuburbs.com/wp-content/uploads/2018/11/Easy-Christmas-Gumdrop-Nougat-Candy-F.jpg', true),
('Hard Candy', 'candy', 10, 0.09, NOW(), 'https://media.istockphoto.com/id/1311070270/photo/colorful-candies.jpg?s=612x612&w=0&k=20&c=tC0LXVegKNjzyoCzSvdn1kZizfphs8dMvtUFyPd0rVA=', true),
('Cake Mix', 'cookie', 120, 1.99, NOW(), 'https://hips.hearstapps.com/hmg-prod/images/cake-mix-cookies-recipe-1631637167.jpg?crop=1xw:0.8434864104967198xh;center,top&resize=1200:*', true),
('Gummy Lychee', 'candy', 20, 0.09, NOW(), 'https://www.linsmarkethawaii.com/cdn/shop/products/GummyLychee2_1024x1024.jpg?v=1584920149', true),
('Sweet Watermelon Slices', 'candy', 20, 0.09, NOW(), 'https://www.candyconceptsinc.com/cdn-cgi/image/quality%3D85/assets/images/Sweet-Watermelon-Slices.jpg', true),
('Fudgy Chocolate', 'cookie', 100, 0.99, NOW(), 'https://simplelivingrecipes.com/wp-content/uploads/2022/03/fudgy-chocolate-cookies-with-cocoa-powder-s.jpg', true),
('Gummy Fruit', 'candy', 20, 0.09, NOW(), 'https://cdn.shopify.com/s/files/1/0944/8142/products/21_CABOTS_BULK_1-32.jpg?v=1619052538', true);
