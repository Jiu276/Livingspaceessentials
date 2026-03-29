# -*- coding: utf-8 -*-
"""Generates JS object literals for posts.js  -  run: python scripts/generate-batch-posts.py >> batch.txt"""
import json

# id (newest first), title, category, image, date, author, url, link variants (first is primary), tags
DATA = [
    (29, "ECOVACS DEEBOT: The First Robot Vacuum with PowerBoost Technology", "Cleaning",
     "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
     "March 23, 2026", "Daniel Brooks", "https://www.ecovacs.com/de",
     ["ECOVACS", "ECOVACS DEEBOT", "ecovacs"],
     ["robot vacuum", "DEEBOT", "PowerBoost", "smart home", "cleaning"]),
    (28, "CanvasChamp: Anti-Fade Printing Technology Ensures Your Memories Last", "Decor",
     "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
     "March 20, 2026", "Emma Collins", "https://www.canvaschamp.com/",
     ["CanvasChamp", "CanvasChamp prints"],
     ["canvas prints", "wall art", "photo gifts", "anti-fade"]),
    (27, "Burlap & Barrel: Single Origin Spices Sourced Directly from Smallholder Farms", "Kitchen",
     "https://images.unsplash.com/photo-1596040033229-a9821ebd6d9b?w=600",
     "March 16, 2026", "Nina Patel", "https://www.burlapandbarrel.com",
     ["Burlap & Barrel", "Burlap and Barrel"],
     ["spices", "single origin", "cooking", "ethical sourcing"]),
    (26, "Ideal World Easter Sale: Enjoy Up to 50% Off + Extra 15% Off with Code EASTER", "Shopping Guide",
     "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
     "March 12, 2026", "James Porter", "https://www.idealworld.tv/",
     ["Ideal World", "Ideal World sale"],
     ["Easter sale", "shopping", "discounts", "home deals"]),
    (25, "FUXTEC's Frühlings-Highlights: New Arrivals for the Spring Season", "Outdoor",
     "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600",
     "March 8, 2026", "Lukas Weber", "https://www.fuxtec.de/",
     ["FUXTEC", "FUXTEC's", "Fuxtec"],
     ["spring", "garden", "outdoor tools", "new arrivals"]),
    (24, "Beauty Brands – Your Home for All Things Beauty", "Decor",
     "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
     "March 4, 2026", "Sophie Lane", "https://www.beautybrands.com/",
     ["Beauty Brands"],
     ["beauty", "hair care", "skincare", "shopping"]),
    (23, "GEEKOM A9 Max: AI-Powered Mini PC for Gaming & Productivity", "Office",
     "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
     "February 28, 2026", "Alex Rivera", "https://www.geekom.de/",
     ["GEEKOM", "GEEKOM A9 Max"],
     ["mini PC", "gaming", "productivity", "AI"]),
    (22, "Culprit Underwear: Over 10,000 5-Star Reviews for Unmatched Comfort", "Fashion",
     "https://images.unsplash.com/photo-1620799140408-ed534d1de8e5?w=600",
     "February 24, 2026", "Marcus Hill", "https://culpritunderwear.com",
     ["Culprit Underwear", "Culprit"],
     ["underwear", "comfort", "basics", "reviews"]),
    (21, "Baby Brezza Bottle & Breastmilk Warmer: Perfectly Warmed Bottles in 2 Minutes", "Kitchen",
     "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600",
     "February 19, 2026", "Rachel Moore", "https://www.babybrezza.com",
     ["Baby Brezza", "Baby Brezza warmer"],
     ["baby", "feeding", "bottle warmer", "parents"]),
    (20, "Just Eat: Order Anytime, Anywhere, from Any Device", "Lifestyle",
     "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
     "February 14, 2026", "Tom Fletcher", "https://www.justeat.it/",
     ["Just Eat"],
     ["food delivery", "takeaway", "app", "convenience"]),
    (19, "KastKing Fishing Rods: Baitcasting, Spinning & Combo Rods for Every Angler", "Outdoor",
     "https://images.unsplash.com/photo-1545459720-aac0929f8c74?w=600",
     "February 9, 2026", "Chris Dalton",
     "https://kastking.com/?utm_source=affiliate&utm_medium=awin&utm_campaign=homepage",
     ["KastKing", "KastKing rods"],
     ["fishing", "rods", "baitcasting", "angling"]),
    (18, "Gatineau Golden Glow Gradual Tan Face Serum – Daily Hydrating Glow", "Decor",
     "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600",
     "February 4, 2026", "Olivia Grant", "https://gatineau.com/",
     ["Gatineau", "Gatineau Golden Glow"],
     ["skincare", "tan", "serum", "glow"]),
    (17, "Men's Journal Featured: Blu Atlas Natural Grooming Essentials", "Fashion",
     "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600",
     "January 30, 2026", "Ryan Cooper", "https://bluatlas.com",
     ["Blu Atlas", "Blu Atlas grooming"],
     ["grooming", "natural", "men", "skincare"]),
    (16, "L'Atelier du Sourcil's Best Sellers: Sublimabrow® Eyebrow Pencil & Browline® Microblading Pen", "Decor",
     "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
     "January 25, 2026", "Isabelle Fontaine", "https://www.atelierdusourcil.com/",
     ["L'Atelier du Sourcil", "L'Atelier du Sourcil's"],
     ["eyebrows", "beauty", "makeup", "brows"]),
    (15, "Become a Fiverr Freelancer – Join the World's Largest Freelance Marketplace", "Office",
     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
     "January 20, 2026", "Kevin Zhang", "https://www.fiverr.com/",
     ["Fiverr", "Fiverr Freelancer", "freelance marketplace"],
     ["freelance", "career", "remote work", "gigs"]),
    (14, "Shop Lisa Angel's SS26 Collection – Sun Filled Days Start Here", "Fashion",
     "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600",
     "January 15, 2026", "Hannah Wells", "https://www.lisaangel.co.uk/",
     ["Lisa Angel", "Lisa Angel's"],
     ["jewelry", "SS26", "accessories", "gifts"]),
    (13, "Shop Microplane's Eco-Friendly Ecograte Series – Sustainable Kitchen Tools", "Kitchen",
     "https://images.unsplash.com/photo-1590794056226-2ef6c295d0b7?w=600",
     "January 10, 2026", "Derek Stone", "https://microplane.com",
     ["Microplane", "Microplane's", "Ecograte"],
     ["kitchen tools", "eco-friendly", "grater", "sustainable"]),
    (12, "Create Your Own Photo Card with Moonpig – Add Photos, Stickers & Heartfelt Messages", "Decor",
     "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600",
     "January 5, 2026", "Laura Mitchell", "https://www.moonpig.com/us/",
     ["Moonpig", "Moonpig cards"],
     ["photo cards", "greetings", "personalized", "gifts"]),
]


def a(url, text):
    return f'<a href="{url}">{text}</a>'


def body(pid, title, url, links, tags):
    p, l2, l3 = links[0], links[1] if len(links) > 1 else links[0], links[-1]
    # Unique intro per id
    intros = {
        29: f"<p>Robot vacuums have moved from novelty to necessity for busy households. The headline feature here is PowerBoost technology - extra suction when your floors need it most - delivered through the {a(url, 'ECOVACS DEEBOT')} line. On {a(url, 'ecovacs')}, you can compare models, see which floor types each unit handles best, and choose accessories that match your layout.</p>",
        28: f"<p>Printed memories belong on the wall - not in a drawer. {a(url, 'CanvasChamp')} has built its reputation around vibrant canvas and photo products designed to stay beautiful for years. Their anti-fade printing approach helps colors hold up in real homes with real lighting, which is why {a(url, 'CanvasChamp prints')} remain a favorite for gifts and gallery walls.</p>",
        27: f"<p>Great cooking starts with great ingredients - and spices are no exception. {a(url, 'Burlap & Barrel')} partners with smallholder farms to bring single-origin spices straight to your pantry. Shopping {a(url, 'Burlap and Barrel')} means traceable sourcing, bold flavor, and support for growers who care as much about quality as you do.</p>",
        26: f"<p>Seasonal sales are the smart time to refresh essentials and treat yourself to upgrades. The Easter promotion at {a(url, 'Ideal World')} combines strong discounts with an extra code-based saving - look for the details on {a(url, 'Ideal World sale')} pages so you do not miss stackable offers.</p>",
        25: f"<p>Spring is the reset button for yards, patios, and garages. {a(url, 'FUXTEC\'s')} seasonal highlights showcase new arrivals built for outdoor work - whether you are trimming, clearing, or prepping for planting. The official {a(url, 'FUXTEC')} site is the right place to confirm specs, bundles, and compatibility before you buy.</p>",
        24: f"<p>Beauty routines are easier when everything lives in one trusted destination. {a(url, 'Beauty Brands')} brings together hair, skin, and styling essentials so you can build a regimen without hopping between random retailers. Browse bestsellers, discover pro-backed picks, and restock staples in fewer clicks.</p>",
        23: f"<p>Compact PCs no longer mean compromise. The {a(url, 'GEEKOM A9 Max')} targets people who split time between immersive games and heavy productivity - think editing, streaming, and multitasking - without a full tower under the desk. {a(url, 'GEEKOM')} outlines thermals, ports, and configuration options so you can match hardware to your monitor setup.</p>",
        22: f"<p>Comfort is the whole point of basics - and {a(url, 'Culprit Underwear')} has earned attention for exactly that. With tens of thousands of five-star reviews, {a(url, 'Culprit')} focuses on fabrics and fits that feel easy from the first wear, whether you are dressing for workdays or weekends.</p>",
        21: f"<p>Feeding schedules do not wait. The {a(url, 'Baby Brezza')} bottle and breastmilk warmer is designed to deliver reliably warmed bottles fast - think roughly two minutes - so parents can keep calm during nighttime wakeups. Always follow the latest guidance on {a(url, 'Baby Brezza warmer')} product pages for milk storage and safety.</p>",
        20: f"<p>Craving something delicious should not require a complicated plan. {a(url, 'Just Eat')} makes it simple to browse local restaurants, compare ratings, and order from the device you already have in your hand. Whether you are at home or on the move, {a(url, 'Just Eat')} keeps the flow quick from search to checkout.</p>",
        19: f"<p>Choosing a rod should match your technique and target species. {a(url, 'KastKing')} offers baitcasting, spinning, and combo setups so you can align action and power with how you fish. The official {a(url, 'KastKing rods')} lineup is the best place to compare lengths, guides, and reel seats for your next trip.</p>",
        18: f"<p>A gradual tan can look more natural than an instant full-color shift - especially on the face. {a(url, 'Gatineau Golden Glow')} serum aims for a daily, hydrating glow while building color gently over time. Explore usage tips and pairing products on {a(url, 'Gatineau')} to keep skin happy while you brighten your look.</p>",
        17: f"<p>Men's grooming has moved beyond one generic soap bar. {a(url, 'Blu Atlas')} emphasizes natural-forward formulas across essentials you actually use - cleansers, deodorant, hair care, and more - so your routine feels cohesive. See the full {a(url, 'Blu Atlas grooming')} range for bundles that simplify mornings.</p>",
        16: f"<p>Brows frame the face, and precision tools make the difference between \"almost\" and \"exactly.\" {a(url, 'L\'Atelier du Sourcil\'s')} best sellers include the Sublimabrow (R) pencil and Browline (R) microblading pen - each built for control and believable definition. Shop authentic products through {a(url, 'L\'Atelier du Sourcil')} to match shades and tips to your brow goals.</p>",
        15: f"<p>Freelancing is a skill business - and a career path. Becoming a {a(url, 'Fiverr Freelancer')} means packaging what you already do well into clear offers, setting fair timelines, and growing reviews over time. The {a(url, 'freelance marketplace')} at {a(url, 'Fiverr')} connects independent talent with buyers worldwide, with tools for messaging, delivery, and payments.</p>",
        14: f"<p>Seasonal collections are where color, texture, and mood come together. {a(url, 'Lisa Angel\'s')} SS26 line leans into sun-filled energy - think easy layers, playful accessories, and gifts that feel personal. Browse new arrivals on {a(url, 'Lisa Angel')} to plan outfits and presents in one pass.</p>",
        13: f"<p>Sustainable kitchen habits start with tools you keep for years. {a(url, 'Microplane\'s')} Ecograte series focuses on eco-minded materials and the sharp, consistent grating the brand is known for. Compare sizes and uses on {a(url, 'Microplane')} to pick the right {a(url, 'Ecograte')} for citrus, hard cheese, chocolate, and more.</p>",
        12: f"<p>Some messages mean more when they are personal. With {a(url, 'Moonpig')}, you can build photo cards that include your pictures, stickers, and heartfelt copy - perfect for birthdays, thank-yous, and milestones. Start a design on {a(url, 'Moonpig cards')} (US site) to preview layouts before you print.</p>",
    }
    mid = f"""<p><strong>What to look for before you buy</strong></p>
<p>Check compatibility with your routine: space, time, and how often you will use the purchase. Read the latest product descriptions on the official site, note warranty or satisfaction policies, and confirm shipping regions. If a promotion is mentioned, verify the terms on the retailer page so your cart reflects the correct total.</p>

<p><strong>Getting the best experience</strong></p>
<p>Bookmark the official destination, sign up for updates if you want early access to drops, and keep your account details current for faster checkout. For tech and appliances, save serial numbers and register products when the brand offers it - support is simpler when your information is on file.</p>

<p><strong>Bottom line</strong></p>
<p>Whether you are upgrading a single corner of your home or changing a daily habit, buying from the brand official channel helps you avoid surprises. Start with the links above, compare your top options, and choose what fits your budget and timeline.</p>"""
    return intros[pid] + mid


def excerpt(title, p):
    return f"Why {p} matters now: benefits, what to compare, and how to shop confidently on the official site."


def emit():
    chunks = []
    for row in DATA:
        pid, title, cat, image, date, author, url, links, tags = row
        c = body(pid, title, url, links, tags)
        exc = excerpt(links[0], links[0])
        # escape backticks in content for JS template literal
        c_esc = c.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        obj = f"""    {{
        id: {pid},
        title: {json.dumps(title)},
        category: {json.dumps(cat)},
        image: {json.dumps(image)},
        excerpt: {json.dumps(exc)},
        content: `{c_esc}`,
        author: {json.dumps(author)},
        date: {json.dumps(date)},
        readTime: "6 min read",
        tags: {json.dumps(tags)}
    }}"""
        chunks.append(obj)
    return ",\n".join(chunks)


if __name__ == "__main__":
    from pathlib import Path
    out = Path(__file__).with_name("generated-posts-chunk.txt")
    out.write_text(emit(), encoding="utf-8")
    print(f"Wrote {out}")
