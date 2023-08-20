\c products_db;

INSERT INTO cookie_candy (product_name, product_type, calories, price, last_updated, url, is_favorite) VALUES
('Peanut Butter Cookie', 'cookie', 142, 2.49, NOW(),'https://sallysbakingaddiction.com/wp-content/uploads/2013/02/peanut-butter-chocolate-swirl-cookies-2.jpg', true),
('Chocolate Chip Cookie', 'cookie', 135, 1.99, NOW(),'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/4bc5edb86285aadc28069f51d9e98974.jpg', false),
('Vegan Cookie', 'cookie', 135, 2.99, NOW(),'https://thebigmansworld.com/wp-content/uploads/2022/10/vegan-cookie-recipes.jpg', true),
('Homemade Lollipops', 'candy', 100, 0.99, NOW(), 'https://www.thespruceeats.com/thmb/7wC9mUcN_4s2-GS0Ya3e4wxcgwU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lollipops-521375-hero-01-867964a42c3e4f32ad48384322b69ebe.jpg', false),
('Gummy Candy', 'candy', 110, 0.99, NOW(), 'https://i.insider.com/5a4681bd0fa373560a8b45af?width=700', true),
('Nougat', 'candy', 90, 0.99, NOW(), 'https://aprettylifeinthesuburbs.com/wp-content/uploads/2018/11/Easy-Christmas-Gumdrop-Nougat-Candy-F.jpg', true);
