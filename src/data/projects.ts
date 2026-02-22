import type { Project } from '../types';

export const PROJECT_DATA: Record<string, Project> = {
    '1': {
        id: 1,
        title: 'Eco Packaging Rebrand',
        category: 'Branding',
        client: 'GreenLeaf Organics',
        date: 'January 2026',
        heroImg: 'https://picsum.photos/seed/eco-hero/1600/900',
        description:
            'GreenLeaf Organics approached us to completely reimagine their packaging identity. The goal was to create a cohesive, sustainable brand presence that would stand out on retail shelves while communicating their commitment to environmental responsibility. We developed a comprehensive system spanning product packaging, shipping materials, and retail displays — all using eco-friendly substrates and soy-based inks.',
        gallery: [
            'https://picsum.photos/seed/eco1/800/600',
            'https://picsum.photos/seed/eco2/800/600',
            'https://picsum.photos/seed/eco3/800/600',
            'https://picsum.photos/seed/eco4/800/600',
            'https://picsum.photos/seed/eco5/800/600',
            'https://picsum.photos/seed/eco6/800/600',
        ],
        services: ['Brand Strategy', 'Package Design', 'Print Production', 'Sustainable Material Sourcing', 'Retail Display Design'],
        materials: {
            paper: '100% Recycled Kraft Board (350gsm)',
            size: 'Multiple SKUs — ranging from 4×6" to 12×16"',
            method: 'Offset Lithography with Soy-Based Inks + Spot UV',
        },
        challenges: [
            {
                title: 'Sustainable Without Sacrificing Quality',
                description:
                    'The client needed fully recyclable packaging that still felt premium. We sourced uncoated recycled kraft paired with a subtle spot UV varnish on the logo to create a tactile, high-end finish without lamination.',
            },
            {
                title: 'Consistent Color Across SKUs',
                description:
                    'With 14 product variants each needing distinct color-coded packaging, achieving consistent Pantone matching on recycled stock required extensive press proofing and custom ink formulation.',
            },
        ],
        tags: ['Packaging', 'Eco-Friendly', 'Retail', 'Sustainability', 'Offset Print'],
        rating: 5,
    },
    '2': {
        id: 2,
        title: 'Tech Mag — Issue 24',
        category: 'Editorial',
        client: 'FutureTech Media',
        date: 'November 2025',
        heroImg: 'https://picsum.photos/seed/mag-hero/1600/900',
        description:
            'FutureTech Media entrusted us with the complete design and production of their flagship quarterly magazine. Issue 24 focused on the future of AI in everyday life, requiring a bold editorial design language that balanced dense informational content with breathtaking visual storytelling. We handled everything from typography and layout to pre-press and final binding.',
        gallery: [
            'https://picsum.photos/seed/mag1/800/600',
            'https://picsum.photos/seed/mag2/800/600',
            'https://picsum.photos/seed/mag3/800/600',
            'https://picsum.photos/seed/mag4/800/600',
            'https://picsum.photos/seed/mag5/800/600',
            'https://picsum.photos/seed/mag6/800/600',
        ],
        services: ['Editorial Design', 'Typography', 'Pre-Press Production', 'Perfect Binding', 'Color Management'],
        materials: {
            paper: '170gsm Gloss Art Paper (Interior) + 300gsm Board (Cover)',
            size: '8.5 × 11" — 96 Pages',
            method: 'Heatset Web Offset + Gloss Lamination on Cover',
        },
        challenges: [
            {
                title: 'Tight Turnaround',
                description:
                    'Content finalization ran two weeks behind schedule. We restructured the production timeline, running pre-press on approved sections while final pages were still in design, hitting the newsstand date without compromise.',
            },
            {
                title: 'Rich Photography Reproduction',
                description:
                    'The issue featured 40+ high-resolution photographic spreads. We used stochastic screening to achieve photographic-quality reproduction with smoother gradients and finer detail than conventional halftone.',
            },
        ],
        tags: ['Magazine', 'Editorial', 'Typography', 'Glossy', 'Perfect Binding'],
        rating: 5,
    },
    '3': {
        id: 3,
        title: 'Event Banners — Tech Summit 2026',
        category: 'Large Format',
        client: 'Global Tech Alliance',
        date: 'December 2025',
        heroImg: 'https://picsum.photos/seed/banner-hero/1600/900',
        description:
            'The Global Tech Summit required a comprehensive suite of large-format graphics spanning a 50,000 sq ft convention center. From towering entrance arches to wayfinding signage, stage backdrops, and branded photo walls — every element needed to reinforce the summit\'s "Innovation Without Borders" theme while maintaining navigational clarity for 8,000+ attendees.',
        gallery: [
            'https://picsum.photos/seed/ban1/800/600',
            'https://picsum.photos/seed/ban2/800/600',
            'https://picsum.photos/seed/ban3/800/600',
            'https://picsum.photos/seed/ban4/800/600',
            'https://picsum.photos/seed/ban5/800/600',
            'https://picsum.photos/seed/ban6/800/600',
        ],
        services: ['Large Format Design', 'Vinyl Printing', 'Installation Coordination', 'Wayfinding Systems', 'Stage Backdrop Production'],
        materials: {
            paper: '13oz Vinyl Mesh + Fabric Tension Displays',
            size: 'Ranges from 2×3 ft pull-ups to 40×12 ft stage backdrops',
            method: 'UV-Cured Solvent Printing (1440 dpi)',
        },
        challenges: [
            {
                title: 'Venue Logistics',
                description:
                    'Installation windows were extremely tight — only 18 hours before doors opened. We pre-fabricated modular panels and coordinated a 12-person install team with detailed floor plans to execute flawlessly.',
            },
            {
                title: 'Indoor & Outdoor Durability',
                description:
                    'Entrance graphics were exposed to weather while interior pieces needed fire-retardant certification. We used different substrates for each zone — UV-resistant vinyl outdoors, FR-certified fabric indoors.',
            },
        ],
        tags: ['Banners', 'Event', 'Large Format', 'Vinyl', 'Installation'],
        rating: 5,
    },
    '4': {
        id: 4,
        title: 'Premium Business Cards',
        category: 'Printing',
        client: 'Meridian Capital Partners',
        date: 'October 2025',
        heroImg: 'https://picsum.photos/seed/card-hero/1600/900',
        description:
            'Meridian Capital Partners required business cards that would make a lasting first impression in high-stakes executive meetings. We designed and produced a triple-layered card with edge painting, debossing, and selective foil stamping — crafting a card that feels as substantial as the firm\'s reputation.',
        gallery: [
            'https://picsum.photos/seed/card1/800/600',
            'https://picsum.photos/seed/card2/800/600',
            'https://picsum.photos/seed/card3/800/600',
            'https://picsum.photos/seed/card4/800/600',
            'https://picsum.photos/seed/card5/800/600',
            'https://picsum.photos/seed/card6/800/600',
        ],
        services: ['Card Design', 'Foil Stamping', 'Debossing', 'Edge Painting', 'Premium Finishing'],
        materials: {
            paper: 'Triple-Layer 900gsm Cotton (Crane Lettra)',
            size: '3.5 × 2" (Standard US)',
            method: 'Letterpress + Hot Foil Stamping + Edge Painting',
        },
        challenges: [
            {
                title: 'Multi-Process Registration',
                description:
                    'Combining letterpress debossing, gold foil, and edge painting in a single card required perfect registration across three separate press runs. We built custom jigs and ran test batches to ensure sub-millimeter alignment.',
            },
            {
                title: 'Consistency at Scale',
                description:
                    'With 12 executives each needing personalized cards, maintaining identical foil coverage and impression depth across 6,000 cards demanded meticulous quality control and hand-inspection.',
            },
        ],
        tags: ['Business Cards', 'Letterpress', 'Foil', 'Premium', 'Corporate'],
        rating: 5,
    },
    '5': {
        id: 5,
        title: 'Restaurant Brand Identity',
        category: 'Branding',
        client: 'Sakura Fine Dining',
        date: 'September 2025',
        heroImg: 'https://picsum.photos/seed/rest-hero/1600/900',
        description:
            'Sakura Fine Dining needed a complete brand identity that honored Japanese culinary traditions while feeling contemporary and luxurious. We created a brand system spanning logo, menu design, business collateral, signage, and packaging — all unified by a restrained color palette, custom typography, and meticulous print finishing.',
        gallery: [
            'https://picsum.photos/seed/rest1/800/600',
            'https://picsum.photos/seed/rest2/800/600',
            'https://picsum.photos/seed/rest3/800/600',
            'https://picsum.photos/seed/rest4/800/600',
            'https://picsum.photos/seed/rest5/800/600',
            'https://picsum.photos/seed/rest6/800/600',
        ],
        services: ['Logo Design', 'Menu Design', 'Stationery Suite', 'Interior Signage', 'Packaging Design'],
        materials: {
            paper: 'Uncoated 280gsm Mohawk Superfine + Metallic Accent Stock',
            size: 'Various — Menu 9×14", Cards 3.5×2", Signage Custom',
            method: 'Digital Offset + Blind Debossing + Rose Gold Foil',
        },
        challenges: [
            {
                title: 'Cultural Sensitivity in Design',
                description:
                    'Balancing authentic Japanese aesthetic with western fine-dining expectations required deep research and multiple rounds of stakeholder review with both the owner and a cultural consultant.',
            },
            {
                title: 'Multi-Format Consistency',
                description:
                    'The identity spanned print, signage, fabric (napkins), and digital screens. We built an exhaustive brand guideline document ensuring consistent reproduction across every medium.',
            },
        ],
        tags: ['Restaurant', 'Logo', 'Menu Design', 'Branding', 'Fine Dining'],
        rating: 5,
    },
    '6': {
        id: 6,
        title: 'Annual Report 2025',
        category: 'Editorial',
        client: 'Pinnacle Holdings Inc.',
        date: 'March 2025',
        heroImg: 'https://picsum.photos/seed/report-hero/1600/900',
        description:
            'Pinnacle Holdings required a prestigious annual report that would command attention in boardrooms and regulatory offices alike. We designed a 120-page document featuring data visualization, executive photography, and financial infographics — printed on premium stock with a soft-touch laminated cover and PUR binding for lasting durability.',
        gallery: [
            'https://picsum.photos/seed/rep1/800/600',
            'https://picsum.photos/seed/rep2/800/600',
            'https://picsum.photos/seed/rep3/800/600',
            'https://picsum.photos/seed/rep4/800/600',
            'https://picsum.photos/seed/rep5/800/600',
            'https://picsum.photos/seed/rep6/800/600',
        ],
        services: ['Report Design', 'Data Visualization', 'Infographic Design', 'Pre-Press', 'PUR Binding'],
        materials: {
            paper: '150gsm Silk Interior + 350gsm Soft-Touch Laminated Cover',
            size: 'A4 (210 × 297mm) — 120 Pages',
            method: 'Sheet-Fed Offset + Soft-Touch Lamination + PUR Binding',
        },
        challenges: [
            {
                title: 'Last-Minute Financial Data',
                description:
                    'Audit finalization came just 72 hours before print deadline. We built the report with modular data sections that could be swapped without reflowing the entire document, allowing a rapid turnaround.',
            },
            {
                title: 'Complex Data Visualization',
                description:
                    'The report included 35+ charts and infographics. We worked closely with the finance team to translate complex datasets into clear, visually compelling graphics that maintained accuracy.',
            },
        ],
        tags: ['Annual Report', 'Corporate', 'Data Viz', 'Infographics', 'Binding'],
        rating: 5,
    },
};
