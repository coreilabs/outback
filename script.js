const menuTypes=[{id:"all",label:"Todos"},{id:"menu-principal",label:"Menu principal"},{id:"lunch-menu",label:"Menu almoço"},{id:"billabong-hour",label:"Billabong Hour"},{id:"kids-menu",label:"Menu infantil"},{id:"bebidas",label:"Bebidas"},{id:"sobremesas",label:"Sobremesas"}];
const menuItems=[
  {
    "name": "Rodízio Versão Não Alcoólica",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/06/Rodizio-Nao-Alcoolico.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Rodízio Versão Alcoólica",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/06/Rodizio-Alcoolico.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Goleada",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/06/Outback_drink_goleada_.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Pontapé Inicial",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/06/Outback_drink_pontape_inicial.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Aussie Beef Quesadillas",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/03/Aussie-beef-quesadillas_800x800_Sem-Tarja.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Big Five Boomerang",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/11/Big-Five-Boomerang.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Bloomin’ Onion®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/BloominOnion_v2.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Aussie Cheese Fries ®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Aussie-Cheese-Fries.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Kookaburra Wings ®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Wings.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Super Wings",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Super-wings-2.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Firecracker Shrimp Nachos®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/FirecrackerShrimpNachos_AN_9964.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Chook’n Dillas",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/03/Chook-n-Dillas_800x800px_Sem-Tarja.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Royal Plant Barbecue",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/10/Royal-Plant-Barbecue-Tagme.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Junior Ribs For Two",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Jr-Ribs-For-2-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Ribs On The Barbie",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Ribs-On-The-Barbie-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Junior Ribs",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Junior-Ribs-Tagme.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Board from Down Under - Ribs & Steak",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2025/03/Tabua_RIBS_STEAK.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Victoria’s Filet",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/03/Victorias-Filet-Tagme.webp",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "The Outback Special 325g",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/11/The-Outback-Special-225g-e-325g-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "The Outback Special 225g",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/11/The-Outback-Special-225g-e-325g-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "New York Strip Steak",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/New-York-Strip-Steak.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "The Porterhouse",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/28_The-Porterhouse.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Rockhampton Ribeye",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Rockhampton-Ribeye-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Chicken Pasta Primavera",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/12/Chicken-Pasta-Primavera-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Toowoomba Pasta",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Towoomba-Pasta-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Pasta Primavera",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/OBK_PastaPrimavera.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Steakhouse Pasta",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Steakhouse-Pasta-450x450-1.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Chicken Fingers Jumbo",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/07/Chicken-Finger-Jumbo-Tagme-1.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Chicken On The Barbie",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/42_Chicken-on-the-Barbie_1.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Alice Springs Chicken ®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/12/Alice-Springs-Chicken-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "South American Salmon",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/South-American-Salmon-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Tilapia Filet",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Tilapia-Filet-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Grilled Fish & Shrimp Toowoomba",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Grilled-Fish-Shrimp-Toowoomba-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Picanha Bloomin' Burger",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/03/Picanha-Bloomin-Burger-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Aussie Plant Burger",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/01/Aussie-Plant-Burger-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Firecracker Shrimp Burger®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/11/Firecracker-Burger-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Ribs Double Decker",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/11/Ribs-Double-Decker-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "The Outbacker Burger",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/The-Outbacker-Burger-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Caesar Salad",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Caesar-Salad-Tagme.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "El Ranchito",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/El-Ranchito-Salad.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Salada Da Casa",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Salada-da-Casa-Tagme.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Walkabout Soup - Bowl",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Potato-Soup-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Walkabout Soup - Cup",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Potato-Soup-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Grilled Chicken Caesar Salad",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Grilled-Chicken-Caesar-Salad-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Herb Filet Caesar Salad",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/OUTBACK_LUNCH-MENU.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "El Rancho Salad",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/El-Rancho-Salad-Tagme.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Aussie Mac N’ Cheese",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Mac-and-Cheese.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Garlic Mashed Potato",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Garlic-Mashed-Potato.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Jacket Potato",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Jacket-Potato.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Legumes",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Legumes-ao-vapor.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Arroz Pilaf",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Arroz-Pilaf.jpg",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Fritas",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Fritas_Acompanhamento_1000x750.png",
    "menus": [
      "menu-principal",
      "lunch-menu"
    ]
  },
  {
    "name": "Strawberry Aussie Moon",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Strawberry-Aussie-Moon-Tagme-2.jpg",
    "menus": [
      "menu-principal",
      "kids-menu",
      "sobremesas"
    ]
  },
  {
    "name": "Chocolate Thunder From Down Under®",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Chocolate-Thunder-From-Down-Under-Tagme.jpg",
    "menus": [
      "menu-principal",
      "sobremesas"
    ]
  },
  {
    "name": "Cinnamon Oblivion",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Cinnamon-Oblivion-Tagme.jpg",
    "menus": [
      "menu-principal",
      "sobremesas"
    ]
  },
  {
    "name": "Havanna® Thunder",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Havanna-Thunder-Tagme.jpg",
    "menus": [
      "menu-principal",
      "sobremesas"
    ]
  },
  {
    "name": "Laramora (1L)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2021/08/Laramora-Leve-para-Casa.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Iced Tea Tradicional (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/12/Pink-Lemonade-500ml-1.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Iced Tea Tradicional 1L",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/12/Iced-Tea-1L.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Iced Tea Sabor 1L",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/12/Iced-Tea-1L.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Iced Tea Sabor (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/12/Pink-Lemonade-500ml.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Pink Lemonade 1L",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/12/Pink-Lemonade-1L.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Pink Lemonade (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/12/Pink-Lemonade-500ml-2.png",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Chopp Brahma Outback 1L",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/09/chopp_glower.jpg",
    "menus": [
      "menu-principal"
    ]
  },
  {
    "name": "Walkabout Soup - Cup",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Potato-Soup-Tagme.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Grilled Fish & Shrimp Toowoomba",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Grilled-Fish-Shrimp-Toowoomba-Tagme.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Peppercorn Filet",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2025/05/Peppercorn-Filet-Tagme.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Steak Mate’s Fettuccine ou na opção Ribs Desfiada",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Outback-Mate_s-Fettuccine.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Chicken Gorgonzola Sauce",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/06/Outback-Chicken-Gorgonzola-Sauce_crop2.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Tilapia Filet",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Tilapia-Filet-Tagme.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Steak Au Gratin",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Steak-au-gratin-Tagme.jpg",
    "menus": [
      "lunch-menu"
    ]
  },
  {
    "name": "Corona Long Neck (330ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/corona-long-neck-330ml.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Orange Summer Party (375ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/ORANGE-SUMMER-PARTY.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Coral Coast Negroni",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/CORAL-COAST-NEGRONI.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Cosmopolitan",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/Cosmopolitan.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Aperol Spritz",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/Aperol-Spritz.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "African Spirit",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/African-Spirit.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Moscow Mule Outback (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2021/10/Moscow-Mule-Tagme.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Beer Mule (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/10/Beer-Mule-Tagme.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Margarita Trio (200ml cada)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/11/Margarita-Trio-Tagme.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Strawberry Rita (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Strawberry-Rita-1.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Gold Coast Rita ® (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Gold-Coast-Rita-Tagme.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Mango G&T (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/10/Mango-GT.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Passion G&T (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/10/Passion-GT-Tagme.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Tanqueray & Tonic (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/10/Tanqueray-Tonic.jpg",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Cachaça",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/225x255_Caipirinhas-2.png",
    "menus": [
      "billabong-hour",
      "bebidas"
    ]
  },
  {
    "name": "Joey Fillet",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/JoeyFilet_1000x750.png",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Kid’s Chicken Fingers",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/kids-chicken-fingers.jpg",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Kid’s Grilled Chicken",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Kids-grilled-chiken_1000x750.png",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Legumes",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Legumes-ao-vapor.jpg",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Macaroo’N Cheese",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/MacaroonCheese_Acompanhamento_1000x750-675x750-1.jpg",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Kid’s Cheeseburger",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2024/07/kidsburger_batata-boomerang.png",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Macaroo’N Cheese",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/MacaroonNCheese_1000x750.png",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Milkshake",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/12/Milkshake-Chocolate-2.jpg",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Choco Pop Sundae",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Choco-Pop-Sundae-1-1.png",
    "menus": [
      "kids-menu"
    ]
  },
  {
    "name": "Tropical Summer Fresh",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2025/09/Tropical-Summer-Fresh-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Suco Limamora (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2021/08/Limamora-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Suco Maramora (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2021/08/Maramora-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Pink Lemonade (600ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/10/Pink-Lemonade-300ml-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Pink Lemonade (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2019/10/Pink-Lemonade-300ml-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Suco Laramora (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/LaraMora-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Iced Tea Tradicional",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Iced-Tea-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Iced Tea com Sabor",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Flavored-Teas-Trio-Mug-cmyk_tif_305x342.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Red Bull Energy Drink",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2025/09/energetico-red-bull-energy-drink-250ml.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Red Bull Tropical (250ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2023/03/energetico-red-bull-energy-drink-tropical-edition-250ml.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Red Bull Sugarfree (250ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2023/03/energetico-red-bull-energy-drink-sem-acucar-250ml.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Refrigerante (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Refri-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Café Espresso",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Cafe-Nespresso-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Água (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/agua_sem_gas.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Água com Gás (500ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/agua_com_gas.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Água Tônica",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Tonica-Schweppes-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Budweiser Long Neck (330ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2020/11/Budweiser-Tagme.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Chopp Brahma (340ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/Chopp_BRAHMA.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Orange Summer Party (375ml)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2026/02/ORANGE-SUMMER-PARTY.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "U by Undurraga - Taça 175ml",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2025/09/u_undurraga.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "U by Undurraga - Garrafa",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2025/09/u_undurraga.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Chandon (BRA)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Chandon-Reserve-Brut-750ml.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Undurraga U Sauvignon Blanc - taça 175ml",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Linha-U-Undurraga-Sauvignon-Blanc-1.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Undurraga U Sauvignon Blanc",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Linha-U-Undurraga-Sauvignon-Blanc-1.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Le Petit Cochonnet I.G.P. Pays Chardonnay",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Le-Petit-Cochonnet-1.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Las Perdices Rosé",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Las-Perdices-Rose.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Yellow Tail Shiraz",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2023/08/Yellow-Tail-Tinto-Shiraz.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Esteban Martín D.O.P. Cariñena Garnacha Syrah Tinto 2021",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2023/08/Estaban-Martin.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Vinho Outback - Taça 175ml",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/11/Vinho-Outback.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Vinho Outback (Garrafa)",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/12/Vinho-Outback.jpg",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Finca Las Moras Dadá Nº 391 Art Malbec - taça 175ml",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Finca-Las-Moras-Dada.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Finca Las Moras Dadá Nº 391 Art Malbec",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Finca-Las-Moras-Dada.png",
    "menus": [
      "bebidas"
    ]
  },
  {
    "name": "Clos de Los Siete",
    "image": "https://cdn.outback.com.br/wp-data/wp-content/uploads/2022/06/Clos-de-los-siete-1.png",
    "menus": [
      "bebidas"
    ]
  }
];
const productDescriptions=[
  "Uma experiência generosa, com reposição dos clássicos Outback durante *3 horas. Na versão não alcoólica, inclui exclusivamente Refrigerante ou Iced Tea de 500 ml. Tábua de rodízio contém: Ripas de Ribs com nosso icônico molho icônico Barbecue. Chicken Bola na Área, bites de frango desfiado com blend de queijos. Bloom Petals, pétalas de cebola crocantes. Fries Campeã, b atatas fritas douradinhas, cobertas com founduta de queijos e bacon. Nachos, crocantes e com os molhos Cheese Ranch, Blue Cheese Sriracha, Bloom Ranch. *Tempo máximo de consumo de 3 horas consecutivas por cliente participante, contado a partir do momento em que o consumidor se sentar à mesa.",
  "Uma experiência generosa, com reposição dos clássicos Outback durante * 3 horas. Na versão alcoólica, inclui exclusivamente chopp Brahma 340ml. Tábua de rodízio contém: Ripas de Ribs com nosso icônico molho icônico Barbecue. Chicken Bola na Área, bites de frango desfiado com blend de queijos. Bloom Petals, p étalas de cebola crocantes. Fries Campeã, b atatas fritas douradinhas, cobertas com founduta de queijos e bacon. Nachos, crocantes e com os molhos Cheese Ranch, Blue Cheese Sriracha, Bloom Ranch. *Tempo máximo de consumo de 3 horas consecutivas por cliente participante, contado a partir do momento em que o consumidor se sentar à mesa.",
  "Três drinks, três sabores e uma experiência completa. Amarelo: Vodka, Tangerina e limão com bubbles de maçã verde – cítrico, refrescante e surpreendente.",
  "Uma combinação refrescante de limão e tangerina com bubbles de maçã verde e um toque efervescente. O drink zero álcool perfeito para entrar no clima do jogo.",
  "Quesadillas c om pé talas de Bloomin ’ Onion, tiras de filet mi gnon, mix d e que i jos e tomat e.",
  "Um boomerang dos sabores favoritos do Outback! Uma surpreendente combinação de 3 Kookaburra Wings®, Aussie Cheese Fries®, 3 Billy Ribs, Firecracker Shrimp®, cerca de 85 gramas e pétalas de Bloomin’ Onion, acompanhados de molhos Bloom e tipo Blue Cheese. Adicione por um preço especial: + Molheira Extra de Cheese Ranch Sauce.",
  "Nossa famosa cebola gigante e dourada com o autêntico sabor do Outback. Acompanha nosso maravilhoso molho Bloom. Ideal para compartilhar. *Vegetariano – Esse produto não possui carne de origem animal mas contém ovo e leite.",
  "Nossas fritas com uma cobertura irresistível de mix de queijos e bacon. O toque final fica por conta do molho Ranch.",
  "10 coxinhas da asa de frango (cerca de 50g cada) empanadas com um blend de temperos à sua escolha. Servidas com molho tipo Blue Cheese e aipo crocante. Nas opções light, medium ou hot.",
  "15 coxinhas da asa de frango (cerca de 50g cada) empanadas com um blend de temperos à sua escolha. Servidas com molho tipo Blue Cheese e aipo crocante. Nas opções light, medium ou hot.",
  "Nosso Firecracker Shrimp Nachos&reg;: Deliciosos camarões empanados, cerca de 170 gramas e temperados com nosso molho Firecracker. Servidos com saborosas tortillas crocantes.",
  "Quesadillas recheadas com tiras de frango temperadas, cobertas com bacon, champignons e queijos.",
  "Inspirado na Ribs on the Barbie, a Royal Plant Barbecue é nossa versão tamanho júnior feita com 150g de mix de proteínas vegetais. Incrível! Sabor costela, toque defumado, empanada e finalizada com a combinação do molho Barbecue e molho vegetal sabor Cheddar.",
  "Duas suculentas Junior Ribs, com peso aproximado de 375g, servidas com dois acompanhamentos à sua escolha. CONTÉM GLÚTEN apenas na opção com molho Billabong.",
  "O carro-chefe da casa! A tradicional costela Outback, com cerca de 750g*, perfeita para compartilhar, preparada em chama aberta como manda a tradição australiana. Vem com as saborosas Cinnamon Apples*. CONTÉM GLÚTEN (apenas na opção com molho Billabong) *A Cinnamon Apples contém glúten e lactose.",
  "Essa versão traz meia costela suína, com cerca de 375g, grelhada em chama aberta e temperada com blend de especiarias. CONTÉM GLÚTEN (apenas na opção com molho Billabong).",
  "Nosso tradicional molho Barbecue com um toque agridoce, coberto de gergelim.",
  "Corte de filet mignon (aprox 200 g) servido com temperos Outback. Servido com molho Merlot.",
  "Nosso clássico miolo de Alcatra com sabor acentuado pelos temperos do Outback. *Consulte disponibilidade.",
  "Nosso clássico miolo de Alcatra com sabor acentuado pelos temperos do Outback. *Consulte disponibilidade.",
  "Corte nobre do contrafilé (aprox. 375 g), perfeitamente temperado e preparado na chapa.",
  "Corte nobre e macio em formato de T (aprox. 500g): o encontro delicioso de contra-filet e filet mignon. Preparado na chapa com um mix dos nossos temperos secretos. *Consulte disponibilidade.",
  "A parte mais gostosa da costela bovina (aprox. 325 g), preparada na chapa ou em chama aberta, com o bold flavour inconfundível da nossa mistura secreta de temperos.",
  "Fettuccine com legumes e tiras de frango grelhado, refogado com um cremoso molho Alfredo e coberto com queijo parmesão.",
  "Fettuccine com camarões e champignons, temperada com ervas finas, refogado ao molho Alfredo.",
  "Fettuccine com legumes, refogado com um cremoso molho Alfredo e coberto com queijo Parmesão.",
  "Fettuccine preparado com champignons, tomates frescos e cortes de filé-mignon. Refogado com um toque de vinho Chardonnay e black pepper. Adicione por um preço especial: + Topping de Bloom Petals.",
  "4 pedaços crocantes de peito de frango empanado para você mergulhar no delicioso molho Honey Mustard. Nas opções light, medium ou hot.",
  "Um suculento peito de frango grelhado em chama aberta, servido com o molho Barbecue.",
  "Suculento peito de frango grelhado e temperado, com aproximadamente 230g, coberto com bacon, champignons e um mix de queijos gratinados, servido com molho honey mustard.",
  "Cerca de 200g do nosso clássico salmão grelhado na versão Outback e servido com o delicioso molho Ranch.",
  "Cerca de 240g da nossa tilápia preparada na chapa e servida com molho Ranch.",
  "Nossa tilápia (cerca de 240g) preparada na chapa e coberta com uma combinação perfeita de camarões, champignon e molho Alfredo.",
  "Burger 100% picanha, cerca de 200g, no pão tipo brioche, com pétalas de Bloomin’ Onion, bacon grelhado e molho Flame, servido com nosso queijo tipo Emmenthal e mix de queijos e finalizado com Smoked Mayo.",
  "A versão do The Outbacker com PlantPlus burger 100% vegetal, molho vegetal tipo Cheddar, alface, tomate, cebola e picles no pão tipo brioche. *O produto não tem origem animal, mas pode conter ovo, leite e/ou seus derivados devido ao compartilhamento da área de preparo.",
  "Burger com cerca de 200g, no pão tipo brioche, camarões empanados envoltos no molho Firecracker, alface, maionese e cebolinha.",
  "Burger com cerca de 200g de carne, combinado com a nossa suculenta costela desfiada, caprichadas fatias de queijo tipo Emmenthal e finalizado com molho Killer no pão tipo brioche.",
  "Burger com 200g de carne, queijo, picles, tomate, alface, cebola e maionese. Se preferir, peça para acrescentar bacon e troque a maionese por mostarda.",
  "Combinação de alface com queijo parmesão, croutons Outback e Molho Caesar. *O Molho Caesar Outback é tradicionalmente preparado com peixe anchovado.",
  "Combinação de alface, cenoura, repolho roxo, mix de queijos, bacon, tiras de tortillas crocantes e molho Barbecue Ranch. Retire o bacon da sua El Ranchito e torne esse produto vegetariano.",
  "Alface, tomates, pétalas de cebola roxa, mix de queijos, croutons Outback e molho à sua escolha. Retire o queijo, croutons e peça com azeite e vinagre sua Salada da Casa e torne esse produto vegano.",
  "Que tal começar com uma sopa? Pergunte ao waiter qual é a opção do dia: Homemade Onion Soup, de cebolas ou Potato Soup, de batatas. *Esse prato leva caldo de frango em sua composição.",
  "Que tal começar com uma sopa? Pergunte ao waiter qual é a opção do dia: Homemade Onion Soup, de cebolas ou Potato Soup, de batatas. Cerca de 170 ml. *Esse prato leva caldo de frango em sua composição.",
  "Um suculento peito de frango grelhado (cerca de 140g) servido sobre a nossa clássica Caesar Salad, pioneira no Brasil. Molho Caesar Outback é tradicionalmente preparado com peixe anchovado.",
  "Nossa tradicional Caesar Salad acompanha os cortes perfeitos de um filet mignon supermacio (cerca de 140g) e temperado com nossa mistura secreta de temperos. Preparado na chapa no ponto que você preferir. O Molho Caesar Outback é tradicionalmente preparado com peixe anchovado.",
  "Peito de frango grelhado (cerca de 140g), sobre uma combinação de alface, cenoura, repolho roxo, mix de queijos, bacon e tiras de tortillas crocantes, com o exclusivo molho Barbecue Ranch.",
  "Pasta caracolina com creme de queijos e crumble de crouton.",
  "Purê de batatas rústico, estilo Outback, com manteiga e leve toque de alho, salsinha e pimenta.",
  "Batata assada recheada com requeijão, manteiga, mix de queijos, bacon e cebolinha. Retire o bacon da sua Jacket Potato e torne esse produto vegetariano.",
  "Legumes da casa.",
  "Arroz parboilizado preparado com manteiga, pimentão vermelho, cebola, alho e um toque de especiarias. Finalizado com salsinha. *Este prato leva caldo de frango em sua composição.",
  "Batatas fritas com casca e temperadas com nosso exclusivo tempero Bold.",
  "Uma sobremesa com base crocante de biscoito Thunder, doce de leite e calda de caramelo. Finalizada com morangos frescos, sorvete sabor baunilha e um toque de canela. Contém nozes ou derivado de nozes. *Vegetariano – Esse produto contém leite e pode conter ovo em sua composição.",
  "Nosso quentinho e exclusivo brownie com sorvete sabor baunilha e deliciosa calda de chocolate preparada diariamente no Outback. Finalizado com chantilly e raspas de chocolate. Um clássico que merece ser compartilhado! Contém nozes ou derivado de nozes.",
  "Uma verdadeira obra-prima de sabores feita de maçãs com toque de canela, sorvete sabor baunilha coberto com nozes-pecãs caramelizadas e crocantes. Finalizada com croutons de canela, calda de caramelo e morangos. Contém nozes ou derivado de nozes.",
  "O nosso brownie, com nozes, em uma versão de doce de leite Havanna. Servido com sorvete sabor baunilha, chantilly, crumble de biscoito e finalizado com uma calda de doce de leite Havanna. É dividir para saborear!. Contém nozes ou derivado de nozes.",
  "A combinação icônica e exclusiva de Outback pra você finalizar em casa: polpa de morango com suco natural de laranja, em versão de 1 litro. E para deixar seu Laramora ainda mais Outback, sirva primeiro o suco de laranja e depois o suco de morango. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "Toda a refrescância e sabor do chá gelado mais incrível, no sabor tradicional. Disponível para o seu #MomentoOutbackEmCasa. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "Toda a refrescância e sabor do chá gelado mais incrível, no sabor tradicional. Disponível para o seu #MomentoOutbackEmCasa. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "Toda a refrescância e sabor do chá gelado mais incrível, nos sabores pêssego, limão e cranberry. Disponível para o seu #MomentoOutbackEmCasa. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "Toda a refrescância e sabor do chá gelado mais incrível, nos sabores pêssego, limão e cranberry. Disponível para o seu #MomentoOutbackEmCasa. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "Um drink vibrante, que traz a limonada clássica com o twist Outback, grenadine e pimenta-rosa, em uma experiência cheia de cor, aroma e sabor para você celebrar com os Mates. Disponível para o seu #MomentoOutbackEmCasa. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "Um drink vibrante, que traz a limonada clássica com o twist Outback, grenadine e pimenta-rosa, em uma experiência cheia de cor, aroma e sabor para você celebrar com os Mates. Disponível para o seu #MomentoOutbackEmCasa. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante.",
  "O chopp Brahma Outback com o sabor e frescor que todo mundo conhece em uma embalagem exclusiva para viagem. 1Litro – Teor alcoólico de 4.8%. Válido somente em pedidos para viagem ou modalidade Delivery. Não é válido para consumo no restaurante. SE BEBER, NÃO DIRIJA. VENDA E CONSUMO PROIBIDOS PARA MENORES DE 18 ANOS.",
  "Que tal começar com uma sopa? Pergunte ao waiter qual é a opção do dia: Homemade Onion Soup, de cebolas ou Potato Soup, de batatas. Cerca de 170 ml. *Esse prato leva caldo de frango em sua composição.",
  "Fettuccine, cuidadosamente preparado com molho Alfredo. E a melhor parte é que você escolhe a proteína que preferir: tiras de Frango grelhado com bacon e cogumelos ou PlantPlus moído 100% vegetal com toque de barbecue e cogumelos.",
  "Três medalhões de filé mignon (210g no total), temperados com o exclusivo blend Outback e preparados na chapa no ponto de sua preferência. Finalizados com o delicioso Peppercorn Sauce e servido com um acompanhamento à sua escolha.",
  "Fettuccine preparado com molho Alfredo. Escolha a proteína que preferir: filet mignon em cubos, bacon e cogumelos ou ribs desfiada com bacon e cogumelos.",
  "Crocância e sabor marcante em aproximadamente 150g de um suculento peito de frango, empanado e finalizado com molho cremoso de gorgonzola.",
  "Cerca de 240g da nossa tilápia preparada na chapa e servida com molho Ranch.",
  "Cerca de 150 gramas de suculentas fatias de filet mignon e cogumelos salteados, cobertos com molho gorgonzola e finalizado com o nosso Garlic Mashed Potato e mix de queijos gratinados. Servido com um acompanhamento a sua escolha.",
  "Com álcool e sem álcool.",
  "Consulte a disponibilidade de rótulo.",
  "Preparado com Gin, Campari e Vermuth Rosso. Encorpado e aromático, servido com gelo e laranja.",
  "Vodka, licor de laranja, xarope de cranberry, suco de limão e twist de laranja. O clássico leve, cítrico e sofisticado.",
  "Uma opção perfeita pra quem busca frescor. Feito com Aperol, espumante, água com gás e finalizado com laranja.",
  "Nosso blend ultracremoso mistura Amarula, licor de café, morango e sorvete sabor baunilha em um giro tropical irresistível.",
  "Releitura Aussie do tradicional Moscow Mule, preparado com vodka e suco de limão. Finalizado com espuma de xarope de gengibre e, para deixar o clima mais gostoso, servido em nossa caneca congelada.",
  "O seu chopp em uma versão totalmente inédita: combinação de Jack Daniel’s, gengibre, chopp e toque de limão.",
  "Trio de margaritas ideal pra compartilhar com seus mates. Escolha três sabores entre: Tradicional, Strawberry, Cranberry, Rock Melon e Curaçau Blue.",
  "Extremamente refrescante, esta versão da nossa Gold Coast Rita® é batida com morangos.",
  "Nossa refrescante margarita frozen é preparada com tequila nobre do México, licor triple sec e ingredientes exclusivos do Outback.",
  "Saborosa mistura de kiwis e morangos, batidos com essência de cranberry e vodka. Inspirado nas famosas praias brasileiras.",
  "Toda refrescância de um G&T e o toque refrescante do maracujá vermelho.",
  "O clássico G&T com toque de limão.",
  "Vodka Importada: Descubra a qualidade da Vodka Importada no Outback. Ideal para criar coquetéis sofisticados.",
  "Dois steaks de filé-mignon, (70 g cada).",
  "Dois pedaços de frango empanados (70 g cada) servidos com Ketchup.",
  "Filet de peito de frango grelhado, 110 g, servido com molho Barbecue.",
  "Batatas douradas e crocantes em formato de boomerang.",
  "Porção de caracolino preparada no creme de leite e queijos fundidos.",
  "Burger com cerca de 90g de carne, queijo fatiado tipo Emmenthal e ketchup no pão tipo brioche.",
  "Porção de caracolino preparada no creme de leite e queijos fundidos.",
  "O delicioso milkshake no sabor chocolate ou morango (330 mL).",
  "Sorvete sabor baunilha coberto com uma deliciosa calda de chocolate e morango.",
  "Slushie não alcoólico preparado com morango e amoras.",
  "Combinação do exclusivo suco de Morango Outback com suco natural de limão.",
  "Combinação do exclusivo suco de Morango Outback com suco natural de maracujá.",
  "Suco Integral de Uva 300ml: Refresque-se com o Suco Integral de Uva 300ml do Outback. 100% natural e delicioso, ideal para qualquer momento.",
  "A limonada clássica com twist Outback, grenadine e pimenta-rosa.",
  "Laranja, Limão, Maracujá, Maracujá com Gengibre e Maracujá Especial com leite condensado*. * Contém Lactose e Açúcar.",
  "Morango.",
  "Limão, Pêssego e Cranberry.",
  "Crianças, gestantes, nutrizes, idosos e portadores de enfermidades: consultar o médico antes de consumir o produto. Não é recomendado o consumo com bebida alcoólica. Imagem meramente ilustrativa.",
  "Crianças, gestantes, nutrizes, idosos e portadores de enfermidades: consultar o médico antes de consumir o produto. Não é recomendado o consumo com bebida alcoólica. Imagem meramente ilustrativa.",
  "Crianças, gestantes, nutrizes, idosos e portadores de enfermidades: consultar o médico antes de consumir o produto. Não é recomendado o consumo com bebida alcoólica. Imagem meramente ilustrativa.",
  "Guaraná Antarctica, Guaraná Antarctica Zero Açúcar, Coca-Cola®, Coca-Cola Zero® Açúcar, Sprite® e Fanta® Laranja.",
  "Café Nespresso® à sua escolha, acompanhado de uma trufa do nosso brownie do Chocolate Thunder From Down Under.",
  "Água 500ml: Hidrate-se com Água 500ml no Outback. Essencial para acompanhar suas refeições.",
  "Água com Gás 500ml: Refresque-se com Água com Gás 500ml no Outback. Acompanhamento ideal para suas refeições.",
  "Água Tônica: Refresque-se com Água Tônica no Outback. Perfeita para drinks ou para ser apreciada sozinha.",
  "Com álcool e sem álcool.",
  "Chopp Brahma 340ml: Delicie-se com o Chopp Brahma 340ml no Outback. A cerveja perfeita para brindar bons momentos.",
  "Slushie de Aperol Spritz com toque de xarope de cranberry e polpa de tangerina. Sensacional a sensação de refrescância deste drink.",
  "Licores Importados (Dose): Experimente uma variedade de licores importados no Outback. Sabores únicos e sofisticados para seu paladar.",
  "Aroma de frutas brancas, frutas amarelas, notas cítricas e florais (Taça: Não válido para oferta de 50% no Billabong Hour, o happy hour do Outback). Tambem em opção taça 175ml.",
  "Aroma com características florais e frutadas (cítricos, maçã e um toque de abacaxi).",
  "Esse Sauvignon Blanc foi produzido com uvas cultivadas e selecionadas de vinhedos do Vale Central chileno, teve passagem por tanques de aço inox para manter o frescor e as características naturais da uva. (Taça disponível no Billabong Hour, segunda a sexta-feira (exceto feriados e pontos facultativos), das 17h às 20h. Consulte a disponibilidade no Outback de sua preferência, horário sujeito a alterações).",
  "Esse Sauvignon Blanc foi produzido com uvas cultivadas e selecionadas de vinhedos do Vale Central chileno, teve passagem por tanques de aço inox para manter o frescor e as características naturais da uva. (Taça disponível no Billabong Hour, segunda a sexta-feira (exceto feriados e pontos facultativos), das 17h às 20h. Consulte a disponibilidade no Outback de sua preferência, horário sujeito a alterações).",
  "O rótulo divertido e descomplicado expressa exatamente o estilo deste branco. Elaborado no sul da França, esse Chardonnay não tem contato com madeira, para valorizar o perfil frutado natural da uva.",
  "Este Malbec Rosé de Las Perdices é muito agradável, fresco e aromático ao nariz. Na boca apresenta um bom volume equilibrando o sabor da fruta com sua acidez delicada.",
  "Coloração rubi intenso. Aromas de especiarias, alcaçuz e geleia de frutas vermelhas. Na boca uma explosão de frutas pretas seguidas pelo suave sabor da baunilha, com doçura perfeitamente equilibrada com taninos suaves.",
  "Vinho jovem, corpo leve para médio, frutado com nuances de especiarias, taninos macios, acidez média, agradável frescor.",
  "Um rótulo exclusivo com aroma de frutas negras e um leve toque de pimenta e madeira para satisfazer os paladares mais exploradores, porém, com tanino mais adocicado e final mais amplo. Taça disponível no Billabong Hour, de segunda a sexta-feira (exceto feriados e pontos facultativos), das 17h às 20h. Consulte a disponibilidade no Outback de sua preferência. Horário sujeito a alterações.",
  "Um rótulo exclusivo com aroma de frutas negras e um leve toque de pimenta e madeira para satisfazer os paladares mais exploradores, porém, com tanino mais adocicado e final mais amplo. Taça disponível no Billabong Hour, de segunda a sexta-feira (exceto feriados e pontos facultativos), das 17h às 20h. Consulte a disponibilidade no Outback de sua preferência. Horário sujeito a alterações.",
  "Desenvolvemos vinhos para surpreender os seus sentidos. Desafiando o tradicional, utilizamos barricas de carvalho com intensidades diferentes de tosta para acentuar notas únicas em cada uma das variedades. Ser irreverente, atrevido, transformar o comum em extraordinário. Isso é DADÁ! Exemplar equilibrado com taninos macios e bem integrados. (Taça disponível no Billabong Hour, segunda a sexta-feira (exceto feriados e pontos facultativos), das 17h às 20h. Consulte a disponibilidade no Outback de sua preferência, horário sujeito a alterações).",
  "Desenvolvemos vinhos para surpreender os seus sentidos. Desafiando o tradicional, utilizamos barricas de carvalho com intensidades diferentes de tosta para acentuar notas únicas em cada uma das variedades. Ser irreverente, atrevido, transformar o comum em extraordinário. Isso é DADÁ! Exemplar equilibrado com taninos macios e bem integrados. (Taça disponível no Billabong Hour, segunda a sexta-feira (exceto feriados e pontos facultativos), das 17h às 20h. Consulte a disponibilidade no Outback de sua preferência, horário sujeito a alterações).",
  "Clos de los Siete é uma vinícola renomada, e o vinho Clos de Los Siete By Michel Rolland é um sucesso internacional. A paixão pela Argentina e a excelência na produção de vinhos cria um vinho autêntico, expressivo e complexo. O perfeccionismo e a busca inabalável pelo melhor estão por toda parte, desde a colheita manual e cuidadosa das uvas até o envelhecimento em barricas de carvalho francês, o que agrega potência e complexidade. Todas as condições estão estabelecidas para que o Clos de los Siete seja totalmente único! Vale lembrar que a safra 2018 está na lista do top 100 melhores vinhos eleitos pela revista Wine Enthusiast e pela revista Wine Spectator, e foi também classificada como o top 100 melhores vinhos argentinos de 2021 no ranking James Suckling!."
];
menuItems.forEach((item,index)=>{item.description=productDescriptions[index]||"Descrição não disponível."});
const sounds={outback:"áut-bék",aussie:"óssi",beef:"bíif",quesadillas:"que-sa-dí-ias",big:"bíg",five:"fáiv",boomerang:"bú-me-réng",bloomin:"blú-min",onion:"â-nion",cheese:"tchíiz",fries:"fráiz",kookaburra:"cu-ca-bâ-rra",wings:"uíngs",firecracker:"fáier-cré-quer",shrimp:"chrímp",nachos:"ná-tchos",royal:"rói-al",plant:"plént",barbecue:"bár-bi-kiú",junior:"djúnior",ribs:"ríbz",for:"fór",two:"tú",on:"ón",the:"dâ",barbie:"bár-bi",board:"bórd",from:"frâm",down:"dáun",under:"ân-der",steak:"stêik",victoria:"vic-tó-ria",filet:"fi-lêi",special:"spé-chal",new:"niú",york:"iórk",strip:"stríp",porterhouse:"pór-ter-ráus",rockhampton:"rók-rémp-ton",ribeye:"ríb-ái",chicken:"tchí-ken",pasta:"pás-ta",toowoomba:"tu-uúm-ba",steakhouse:"stêik-ráus",fingers:"fín-guers",jumbo:"djâm-bo",alice:"é-liss",springs:"spríngs",south:"sáuth",american:"a-mé-ri-can",salmon:"sé-mon",grilled:"gríld",fish:"fích",burger:"bâr-guer",double:"dâ-bol",decker:"dé-quer",outbacker:"áut-bé-quer",caesar:"cí-zar",salad:"sé-lad",walkabout:"uól-ca-báut",soup:"súp",bowl:"bôul",cup:"câp",herb:"ârb",mac:"mék",garlic:"gár-lic",mashed:"mécht",potato:"po-têi-tou",jacket:"djá-quet",strawberry:"stró-ber-ri",moon:"mún",chocolate:"tchó-co-lat",thunder:"thân-der",cinnamon:"sí-na-mon",oblivion:"o-blí-vi-on",iced:"áist",tea:"tíi",pink:"pínk",lemonade:"lé-mo-nêid",peppercorn:"pé-per-córn",mate:"mêit",fettuccine:"fe-tu-tchí-ne",sauce:"sóss",gratin:"gra-tén",joey:"djôu-i",kids:"quídz",kid:"quíd",milkshake:"míl-que-chêik",choco:"tchó-co",pop:"póp",sundae:"sân-dei",tropical:"tró-pi-cal",summer:"sâ-mer",fresh:"fréch",red:"réd",bull:"búl",energy:"é-ner-dji",drink:"drínk",sugarfree:"chú-gar-frí",corona:"co-rô-na",long:"lóng",neck:"nék",budweiser:"bâd-uái-zer",orange:"ó-rendj",party:"pár-ti",coral:"có-ral",coast:"côust",negroni:"ne-grô-ni",cosmopolitan:"cóz-mo-pó-li-tan",aperol:"á-pe-rol",spritz:"spríts",african:"é-fri-can",spirit:"spí-rit",moscow:"mós-cou",mule:"miúl",beer:"bír",margarita:"mar-ga-rí-ta",trio:"trí-o",rita:"rí-ta",gold:"gôuld",mango:"mén-gou",passion:"pé-chon",tanqueray:"tén-que-rêi",tonic:"tó-nic",undurraga:"un-du-rá-ga",chandon:"chan-dôn",sauvignon:"sô-vi-nhón",blanc:"blán",petit:"pe-tí",chardonnay:"char-do-nêi",yellow:"ié-lou",tail:"têil",shiraz:"chi-ráz",malbec:"mál-béc",clos:"clô",siete:"si-é-te"};
const phraseSounds={
  "Aussie Beef Quesadillas":"ó-ssi bíif quê-sa-dí-âs","Big Five Boomerang":"bíg fáiv bú-me-réng","Bloomin’ Onion®":"blú-min ân-ian","Aussie Cheese Fries ®":"ó-ssi tchíiz fráiz","Kookaburra Wings ®":"cu-ca-bâ-ra uíngz","Super Wings":"sú-per uíngz","Firecracker Shrimp Nachos®":"fái-er-cré-quer chrímp ná-tchôuz","Chook’n Dillas":"tchú-ken dí-lâs","Royal Plant Barbecue":"rói-al plént bár-bi-kiú","Junior Ribs For Two":"djún-ior ríbz fór tú","Ribs On The Barbie":"ríbz ón dâ bár-bi","Junior Ribs":"djún-ior ríbz","Board from Down Under - Ribs & Steak":"bórd frâm dáun ân-der — ríbz én stêik","Victoria’s Filet":"vic-tó-ri-âz fi-lêi","The Outback Special 325g":"dhi áut-bék spé-chal, trezentos e vinte e cinco gramas","The Outback Special 225g":"dhi áut-bék spé-chal, duzentos e vinte e cinco gramas","New York Strip Steak":"niú iórk stríp stêik","The Porterhouse":"dâ pór-ter-ráus","Rockhampton Ribeye":"rók-rémp-tan ríb-ái","Chicken Pasta Primavera":"tchí-ken pás-ta primavera","Toowoomba Pasta":"tu-uúm-ba pás-ta","Steakhouse Pasta":"stêik-ráus pás-ta","Chicken Fingers Jumbo":"tchí-ken fín-guers djâm-bou","Chicken On The Barbie":"tchí-ken ón dâ bár-bi","Alice Springs Chicken ®":"é-liss spríngz tchí-ken","South American Salmon":"sáuth a-mé-ri-can sé-man","Tilapia Filet":"tilápia fi-lêi","Grilled Fish & Shrimp Toowoomba":"gríld fích én chrímp tu-uúm-ba","Picanha Bloomin' Burger":"picanha blú-min bâr-guer","Aussie Plant Burger":"ó-ssi plént bâr-guer","Firecracker Shrimp Burger®":"fái-er-cré-quer chrímp bâr-guer","Ribs Double Decker":"ríbz dâ-bol dé-quer","The Outbacker Burger":"dhi áut-bé-quer bâr-guer","Caesar Salad":"cí-zar sé-lad","Walkabout Soup - Bowl":"uó-ca-báut súp — bôul","Walkabout Soup - Cup":"uó-ca-báut súp — câp","Grilled Chicken Caesar Salad":"gríld tchí-ken cí-zar sé-lad","Herb Filet Caesar Salad":"ârb fi-lêi cí-zar sé-lad","El Rancho Salad":"el rân-tchou sé-lad","Aussie Mac N’ Cheese":"ó-ssi mék én tchíiz","Garlic Mashed Potato":"gár-lic mécht po-têi-tou","Jacket Potato":"djá-quet po-têi-tou","Strawberry Aussie Moon":"stró-ber-ri ó-ssi mún","Chocolate Thunder From Down Under®":"tchó-co-lat thân-der frâm dáun ân-der","Cinnamon Oblivion":"sí-na-man o-blí-vi-an","Havanna® Thunder":"ra-vá-na thân-der","Iced Tea Tradicional (500ml)":"áist tí tradicional, quinhentos mililitros","Iced Tea Tradicional 1L":"áist tí tradicional, um litro","Iced Tea Sabor 1L":"áist tí sabor, um litro","Iced Tea Sabor (500ml)":"áist tí sabor, quinhentos mililitros","Pink Lemonade 1L":"pínk lé-mo-nêid, um litro","Pink Lemonade (500ml)":"pínk lé-mo-nêid, quinhentos mililitros","Chopp Brahma Outback 1L":"chope Brahma áut-bék, um litro","Peppercorn Filet":"pé-per-córn fi-lêi","Steak Mate’s Fettuccine ou na opção Ribs Desfiada":"stêik mêits fe-tu-tchí-ne, ou na opção ríbz desfiada","Chicken Gorgonzola Sauce":"tchí-ken gorgonzola sóss","Steak Au Gratin":"stêik ô gra-tén","Corona Long Neck (330ml)":"Corona lóng nék, trezentos e trinta mililitros","Orange Summer Party (375ml)":"ó-rendj sâ-mer pár-ti, trezentos e setenta e cinco mililitros","Coral Coast Negroni":"có-ral côust ne-grô-ni","African Spirit":"é-fri-can spí-rit","Moscow Mule Outback (340ml)":"mós-cou miúl áut-bék, trezentos e quarenta mililitros","Beer Mule (340ml)":"bír miúl, trezentos e quarenta mililitros","Margarita Trio (200ml cada)":"mar-ga-rí-ta trí-ou, duzentos mililitros cada","Strawberry Rita (340ml)":"stró-ber-ri rí-ta, trezentos e quarenta mililitros","Gold Coast Rita ® (340ml)":"gôuld côust rí-ta, trezentos e quarenta mililitros","Mango G&T (500ml)":"mén-gou djín én tó-nic, quinhentos mililitros","Passion G&T (500ml)":"pé-chan djín én tó-nic, quinhentos mililitros","Tanqueray & Tonic (500ml)":"tén-que-rêi én tó-nic, quinhentos mililitros","Joey Fillet":"djôu-i fi-lêi","Kid’s Chicken Fingers":"quídz tchí-ken fín-guers","Kid’s Grilled Chicken":"quídz gríld tchí-ken","Macaroo’N Cheese":"mé-ca-rún én tchíiz","Kid’s Cheeseburger":"quídz tchíiz-bâr-guer","Milkshake":"míl-que-chêik","Choco Pop Sundae":"tchó-co póp sân-dei","Tropical Summer Fresh":"tró-pi-cal sâ-mer fréch","Red Bull Energy Drink":"réd búl é-ner-dji drínk","Red Bull Sugarfree (250ml)":"réd búl chú-gar-frí, duzentos e cinquenta mililitros","Budweiser Long Neck (330ml)":"bâd-uái-zer lóng nék, trezentos e trinta mililitros","U by Undurraga - Taça 175ml":"iú bai un-du-rá-ga — taça de cento e setenta e cinco mililitros","U by Undurraga - Garrafa":"iú bai un-du-rá-ga — garrafa","Undurraga U Sauvignon Blanc - taça 175ml":"un-du-rá-ga iú sô-vi-nhón blân — taça de cento e setenta e cinco mililitros","Undurraga U Sauvignon Blanc":"un-du-rá-ga iú sô-vi-nhón blân","Le Petit Cochonnet I.G.P. Pays Chardonnay":"lâ pe-tí co-cho-nê, i-jê-pê, pêi char-do-nê","Las Perdices Rosé":"las per-dí-ces ro-zê","Yellow Tail Shiraz":"ié-lou têil chi-ráz","Esteban Martín D.O.P. Cariñena Garnacha Syrah Tinto 2021":"es-te-bán mar-tín, dê-ó-pê, ca-ri-nhê-na gar-ná-tcha si-rá, tinto dois mil e vinte e um","Finca Las Moras Dadá Nº 391 Art Malbec - taça 175ml":"fín-ca las mô-ras da-dá, número trezentos e noventa e um, art mál-béc — taça de cento e setenta e cinco mililitros","Finca Las Moras Dadá Nº 391 Art Malbec":"fín-ca las mô-ras da-dá, número trezentos e noventa e um, art mál-béc","Clos de Los Siete":"clô de los si-é-te"
};
function norm(v){return v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function pronounce(n){if(phraseSounds[n])return phraseSounds[n];return n.replace(/®/g,"").split(/([\s&+—-]+)/).map(p=>{let k=norm(p.replace(/[’']/g,"").replace(/[^a-zA-ZÀ-ÿ]/g,""));return k?(sounds[k]||p.toLowerCase()):p}).join("").replace(/\s+/g," ").trim()}
const state={menu:"all",search:""},el={tabs:document.querySelector("#menuTabs"),grid:document.querySelector("#menuGrid"),tpl:document.querySelector("#menuCardTemplate"),search:document.querySelector("#searchInput"),clear:document.querySelector("#clearSearch"),title:document.querySelector("#resultsTitle"),count:document.querySelector("#resultCount"),empty:document.querySelector("#emptyState"),reset:document.querySelector("#resetFilters")};
function tabs(){el.tabs.replaceChildren(...menuTypes.map(m=>{let b=document.createElement("button");b.type="button";b.className="tab-button";b.classList.toggle("is-active",m.id===state.menu);b.dataset.menu=m.id;b.setAttribute("aria-pressed",m.id===state.menu);b.textContent=m.label;return b}))}
function render(){let q=norm(state.search),items=menuItems.filter(i=>(state.menu==="all"||i.menus.includes(state.menu))&&(!q||norm(i.name+" "+pronounce(i.name)+" "+i.description).includes(q)));el.grid.replaceChildren(...items.map(i=>{let f=el.tpl.content.cloneNode(true),img=f.querySelector("img");img.src=i.image;img.alt=i.name;img.onerror=()=>img.closest(".photo-wrap").classList.add("has-error");f.querySelector(".menu-label").textContent=i.menus.map(id=>menuTypes.find(m=>m.id===id).label).join(" • ");f.querySelector(".product-name").textContent=i.name;f.querySelector(".pronunciation strong").textContent=pronounce(i.name);f.querySelector(".product-description").textContent=i.description;return f}));el.title.textContent=state.menu==="all"?"Todos os produtos":menuTypes.find(m=>m.id===state.menu).label;el.count.textContent=items.length+(items.length===1?" item":" itens");el.grid.hidden=!items.length;el.empty.hidden=!!items.length}
el.tabs.onclick=e=>{let b=e.target.closest("[data-menu]");if(b){state.menu=b.dataset.menu;tabs();render()}};el.search.oninput=e=>{state.search=e.target.value;el.clear.hidden=!state.search;render()};el.clear.onclick=()=>{state.search="";el.search.value="";el.clear.hidden=true;render();el.search.focus()};el.reset.onclick=()=>{state.menu="all";state.search="";el.search.value="";tabs();render()};tabs();render();
