const allProducts = [
    // Furniture Category
    {
        id: 1,
        name: "Modern Sectional Sofa",
        category: "furniture",
        price: 1299,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
        rating: 4.5,
        description: "Luxurious L-shaped sectional sofa with premium fabric upholstery. Perfect for large living rooms and family gatherings. Features reversible chaise and hidden storage."
    },
    {
        id: 2,
        name: "Scandinavian Coffee Table",
        category: "furniture",
        price: 349,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        rating: 4.7,
        description: "Minimalist wooden coffee table with clean lines and hidden storage compartment. Made from sustainable oak wood with natural finish."
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        category: "office",
        price: 599,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600",
        rating: 4.8,
        description: "High-back ergonomic chair with lumbar support, adjustable armrests, and breathable mesh. Ideal for long work sessions."
    },
    {
        id: 4,
        name: "Floating Wall Shelves Set",
        category: "furniture",
        price: 89,
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600",
        rating: 4.3,
        description: "Set of 3 floating shelves in different sizes. Perfect for displaying books, plants, and decorative items. Easy wall-mount installation."
    },
    
    // Lighting Category
    {
        id: 5,
        name: "Smart LED Floor Lamp",
        category: "lighting",
        price: 159,
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600",
        rating: 4.8,
        description: "Wi-Fi enabled RGB floor lamp with voice control. Compatible with Alexa and Google Home. Adjustable brightness and color temperature."
    },
    {
        id: 6,
        name: "Industrial Pendant Lights",
        category: "lighting",
        price: 129,
        image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600",
        rating: 4.6,
        description: "Set of 3 vintage industrial pendant lights. Perfect for kitchen islands or dining areas. Adjustable cord length."
    },
    {
        id: 7,
        name: "Crystal Table Lamp",
        category: "lighting",
        price: 79,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        rating: 4.4,
        description: "Elegant crystal base table lamp with fabric shade. Adds sophistication to any bedroom or living room. Touch-activated dimmer."
    },
    
    // Kitchen Category
    {
        id: 8,
        name: "Bamboo Kitchen Utensil Set",
        category: "kitchen",
        price: 89,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
        rating: 4.6,
        description: "10-piece eco-friendly bamboo cooking utensil set. Includes spatulas, spoons, tongs, and holder. Heat-resistant and dishwasher safe."
    },
    {
        id: 9,
        name: "Smart Coffee Maker",
        category: "kitchen",
        price: 249,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
        rating: 4.7,
        description: "Programmable coffee maker with smartphone app control. Brew strength customization and scheduled brewing. 12-cup capacity."
    },
    {
        id: 10,
        name: "Ceramic Dinnerware Set",
        category: "kitchen",
        price: 149,
        image: "https://images.unsplash.com/photo-1525974160448-038dacadcc71?w=600",
        rating: 4.5,
        description: "16-piece modern dinnerware set for 4. Microwave and dishwasher safe. Minimalist design in neutral colors."
    },
    {
        id: 11,
        name: "Air Fryer Pro",
        category: "kitchen",
        price: 199,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600",
        rating: 4.8,
        description: "6-quart digital air fryer with 8 preset programs. Oil-free cooking for healthier meals. Easy-clean non-stick basket."
    },
    
    // Bedroom Category
    {
        id: 12,
        name: "Memory Foam Mattress",
        category: "bedroom",
        price: 899,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
        rating: 4.7,
        description: "12-inch gel-infused memory foam mattress. Medium-firm support with cooling technology. 10-year warranty included."
    },
    {
        id: 13,
        name: "Luxury Bedding Set",
        category: "bedroom",
        price: 189,
        image: "https://images.unsplash.com/photo-1616627577385-7c291086a819?w=600",
        rating: 4.6,
        description: "Egyptian cotton 1000-thread count sheet set. Includes fitted sheet, flat sheet, and 4 pillowcases. Hypoallergenic and breathable."
    },
    {
        id: 14,
        name: "Wooden Nightstand",
        category: "bedroom",
        price: 159,
        image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600",
        rating: 4.4,
        description: "Mid-century modern nightstand with 2 drawers. Solid wood construction with tapered legs. Perfect bedside storage solution."
    },
    
    // Home Decor Category
    {
        id: 15,
        name: "Abstract Canvas Art Set",
        category: "decor",
        price: 129,
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600",
        rating: 4.5,
        description: "Set of 3 modern abstract canvas prints. Gallery-wrapped and ready to hang. Adds contemporary style to any room."
    },
    {
        id: 16,
        name: "Indoor Plant Collection",
        category: "decor",
        price: 79,
        image: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?w=600",
        rating: 4.3,
        description: "Set of 5 low-maintenance indoor plants with decorative pots. Includes care instructions. Perfect for beginners."
    },
    {
        id: 17,
        name: "Decorative Mirror",
        category: "decor",
        price: 199,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600",
        rating: 4.7,
        description: "Large sunburst wall mirror in gold finish. 36-inch diameter. Makes rooms appear larger and brighter."
    },
    {
        id: 18,
        name: "Throw Pillow Set",
        category: "decor",
        price: 69,
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600",
        rating: 4.4,
        description: "Set of 4 decorative throw pillows with removable covers. Various patterns and textures. Machine washable."
    },
    
    // Office Category
    {
        id: 19,
        name: "Standing Desk Converter",
        category: "office",
        price: 299,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600",
        rating: 4.6,
        description: "Adjustable sit-stand desk converter. Spacious work surface for dual monitors. Smooth gas-spring lift mechanism."
    },
    {
        id: 20,
        name: "Desk Organizer Set",
        category: "office",
        price: 49,
        image: "https://images.unsplash.com/photo-1524820197278-540916411e20?w=600",
        rating: 4.2,
        description: "Bamboo desk organizer with multiple compartments. Includes pen holder, paper tray, and phone stand. Eco-friendly material."
    }
];