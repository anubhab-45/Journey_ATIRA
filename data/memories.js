/*==================================================
  ATIRA'S JOURNEY
  memories.js
  Part 1/2
==================================================*/

const memories = [
  /*=====================================
  PHOTOS
  ======================================*/
  { id: 1, type: "photo", title: "Memory 001", description: "A beautiful moment together.", date: "2026-07-25", category: "normal", favorite: true, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.50 PM.jpeg" },
  { id: 2, type: "photo", title: "Memory 002", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.51 PM.jpeg" },
  { id: 3, type: "photo", title: "Memory 003", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.52 PM (1).jpeg" },
  { id: 4, type: "photo", title: "Memory 004", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.52 PM.jpeg" },
  { id: 5, type: "photo", title: "Memory 005", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.53 PM.jpeg" },
  { id: 6, type: "photo", title: "Memory 006", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.54 PM (1).jpeg" },
  { id: 7, type: "photo", title: "Memory 007", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.54 PM.jpeg" },
  { id: 8, type: "photo", title: "Memory 008", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.55 PM (1).jpeg" },
  { id: 9, type: "photo", title: "Memory 009", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.55 PM.jpeg" },
  { id: 10, type: "photo", title: "Memory 010", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.56 PM (1).jpeg" },
  { id: 11, type: "photo", title: "Memory 011", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.56 PM.jpeg" },
  { id: 12, type: "photo", title: "Memory 012", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.57 PM.jpeg" },
  { id: 13, type: "photo", title: "Memory 013", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.58 PM.jpeg" },
  { id: 14, type: "photo", title: "Memory 014", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.06 PM (1).jpeg" },
  { id: 15, type: "photo", title: "Memory 015", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.06 PM.jpeg" },
  { id: 16, type: "photo", title: "Memory 016", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.07 PM (1).jpeg" },
  { id: 17, type: "photo", title: "Memory 017", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.07 PM.jpeg" },
  { id: 18, type: "photo", title: "Memory 018", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.08 PM.jpeg" },
  { id: 19, type: "photo", title: "Memory 019", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.15 PM (1).jpeg" },
  { id: 20, type: "photo", title: "Memory 020", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.15 PM.jpeg" },
  { id: 21, type: "photo", title: "Memory 021", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.16 PM.jpeg" },
  { id: 22, type: "photo", title: "Memory 022", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.52 PM.jpeg" },
  { id: 23, type: "photo", title: "Memory 023", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.53 PM.jpeg" },
  { id: 24, type: "photo", title: "Memory 024", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.54 PM (1).jpeg" },
  { id: 25, type: "photo", title: "Memory 025", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.54 PM.jpeg" },
  { id: 26, type: "photo", title: "Memory 026", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.55 PM.jpeg" },
  { id: 27, type: "photo", title: "Memory 027", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.56 PM.jpeg" },
  { id: 28, type: "photo", title: "Memory 028", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.57 PM (1).jpeg" },
  { id: 29, type: "photo", title: "Memory 029", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.57 PM (2).jpeg" },
  { id: 30, type: "photo", title: "Memory 030", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.57 PM.jpeg" },
  { id: 31, type: "photo", title: "Memory 031", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.58 PM (1).jpeg" },
  { id: 32, type: "photo", title: "Memory 032", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.58 PM.jpeg" },
  { id: 33, type: "photo", title: "Memory 033", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.59 PM (1).jpeg" },
  { id: 34, type: "photo", title: "Memory 034", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.59 PM.jpeg" },
  { id: 35, type: "photo", title: "Memory 035", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.00 PM (1).jpeg" },
  { id: 36, type: "photo", title: "Memory 036", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.00 PM.jpeg" },
  { id: 37, type: "photo", title: "Memory 037", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.01 PM (1).jpeg" },
  { id: 38, type: "photo", title: "Memory 038", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.01 PM.jpeg" },
  { id: 39, type: "photo", title: "Memory 039", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.02 PM (1).jpeg" },
  { id: 40, type: "photo", title: "Memory 040", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.02 PM.jpeg" },
  { id: 41, type: "photo", title: "Memory 041", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.03 PM (1).jpeg" },
  { id: 42, type: "photo", title: "Memory 042", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.03 PM.jpeg" },
  { id: 43, type: "photo", title: "Memory 043", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.04 PM (1).jpeg" },
  { id: 44, type: "photo", title: "Memory 044", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.04 PM.jpeg" },
  { id: 45, type: "photo", title: "Memory 045", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.05 PM (1).jpeg" },
  { id: 46, type: "photo", title: "Memory 046", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.05 PM.jpeg" },
  { id: 47, type: "photo", title: "Memory 047", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.06 PM (1).jpeg" },
  { id: 48, type: "photo", title: "Memory 048", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.06 PM.jpeg" },
  { id: 49, type: "photo", title: "Memory 049", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.07 PM (1).jpeg" },
  { id: 50, type: "photo", title: "Memory 050", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.07 PM.jpeg" },
  { id: 51, type: "photo", title: "Memory 051", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.08 PM (1).jpeg" },
  { id: 52, type: "photo", title: "Memory 052", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.08 PM.jpeg" },
  { id: 53, type: "photo", title: "Memory 053", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.09 PM (1).jpeg" },
  { id: 54, type: "photo", title: "Memory 054", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.09 PM.jpeg" },
  { id: 55, type: "photo", title: "Memory 055", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.10 PM (1).jpeg" },
  { id: 56, type: "photo", title: "Memory 056", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.10 PM.jpeg" },
  { id: 57, type: "photo", title: "Memory 057", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.11 PM (1).jpeg" },
  { id: 58, type: "photo", title: "Memory 058", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.11 PM.jpeg" },
  { id: 59, type: "photo", title: "Memory 059", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.12 PM (1).jpeg" },
  { id: 60, type: "photo", title: "Memory 060", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.12 PM.jpeg" },
  { id: 61, type: "photo", title: "Memory 061", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.13 PM (1).jpeg" },
  { id: 62, type: "photo", title: "Memory 062", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.13 PM (2).jpeg" },
  { id: 63, type: "photo", title: "Memory 063", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.13 PM.jpeg" },
  { id: 64, type: "photo", title: "Memory 064", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.14 PM (1).jpeg" },
  { id: 65, type: "photo", title: "Memory 065", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.14 PM.jpeg" },
  { id: 66, type: "photo", title: "Memory 066", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.15 PM (1).jpeg" },
  { id: 67, type: "photo", title: "Memory 067", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.15 PM.jpeg" },
  { id: 68, type: "photo", title: "Memory 068", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.16 PM (1).jpeg" },
  { id: 69, type: "photo", title: "Memory 069", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.16 PM.jpeg" },
  { id: 70, type: "photo", title: "Memory 070", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.17 PM (1).jpeg" },
  { id: 71, type: "photo", title: "Memory 071", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.17 PM (2).jpeg" },
  { id: 72, type: "photo", title: "Memory 072", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.17 PM.jpeg" },
  { id: 73, type: "photo", title: "Memory 073", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.18 PM (1).jpeg" },
  { id: 74, type: "photo", title: "Memory 074", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.18 PM.jpeg" },
  { id: 75, type: "photo", title: "Memory 075", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.19 PM (1).jpeg" },
  { id: 76, type: "photo", title: "Memory 076", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.19 PM.jpeg" },
  { id: 77, type: "photo", title: "Memory 077", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.20 PM (1).jpeg" },
  { id: 78, type: "photo", title: "Memory 078", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.20 PM.jpeg" },
  { id: 79, type: "photo", title: "Memory 079", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.21 PM (1).jpeg" },
  { id: 80, type: "photo", title: "Memory 080", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.21 PM.jpeg" },
  { id: 81, type: "photo", title: "Memory 081", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.22 PM (1).jpeg" },
  { id: 82, type: "photo", title: "Memory 082", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.22 PM.jpeg" },
  { id: 83, type: "photo", title: "Memory 083", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.23 PM (1).jpeg" },
  { id: 84, type: "photo", title: "Memory 084", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.23 PM.jpeg" },
  { id: 85, type: "photo", title: "Memory 085", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.24 PM (1).jpeg" },
  { id: 86, type: "photo", title: "Memory 086", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.24 PM.jpeg" },
  { id: 87, type: "photo", title: "Memory 087", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.25 PM (1).jpeg" },
  { id: 88, type: "photo", title: "Memory 088", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.25 PM.jpeg" },
  { id: 89, type: "photo", title: "Memory 089", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.26 PM (1).jpeg" },
  { id: 90, type: "photo", title: "Memory 090", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.10.26 PM.jpeg" },
  { id: 91, type: "photo", title: "Memory 091", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.01 PM.jpeg" },
  { id: 92, type: "photo", title: "Memory 092", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.02 PM.jpeg" },
  { id: 93, type: "photo", title: "Memory 093", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.03 PM (1).jpeg" },
  { id: 94, type: "photo", title: "Memory 094", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.03 PM.jpeg" },
  { id: 95, type: "photo", title: "Memory 095", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.04 PM.jpeg" },
  { id: 96, type: "photo", title: "Memory 096", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.05 PM (1).jpeg" },
  { id: 97, type: "photo", title: "Memory 097", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.05 PM.jpeg" },
  { id: 98, type: "photo", title: "Memory 098", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.06 PM.jpeg" },
  { id: 99, type: "photo", title: "Memory 099", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.07 PM (1).jpeg" },
  { id: 100, type: "photo", title: "Memory 100", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.07 PM.jpeg" },
  { id: 101, type: "photo", title: "Memory 101", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.12 PM.jpeg" },
  { id: 102, type: "photo", title: "Memory 102", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.13 PM (1).jpeg" },
  { id: 103, type: "photo", title: "Memory 103", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.13 PM.jpeg" },
  { id: 104, type: "photo", title: "Memory 104", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.38 PM.jpeg" },
  { id: 105, type: "photo", title: "Memory 105", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.40 PM.jpeg" },
  { id: 106, type: "photo", title: "Memory 106", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.50 PM.jpeg" },
  { id: 107, type: "photo", title: "Memory 107", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.51 PM.jpeg" },
  { id: 108, type: "photo", title: "Memory 108", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.52 PM (1).jpeg" },
  { id: 109, type: "photo", title: "Memory 109", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.52 PM (2).jpeg" },
  { id: 110, type: "photo", title: "Memory 110", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.52 PM.jpeg" },
  { id: 111, type: "photo", title: "Memory 111", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.53 PM (1).jpeg" },
  { id: 112, type: "photo", title: "Memory 112", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.53 PM.jpeg" },
  { id: 113, type: "photo", title: "Memory 113", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.54 PM (1).jpeg" },
  { id: 114, type: "photo", title: "Memory 114", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.54 PM.jpeg" },
  { id: 115, type: "photo", title: "Memory 115", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.55 PM (1).jpeg" },
  { id: 116, type: "photo", title: "Memory 116", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.55 PM.jpeg" },
  { id: 117, type: "photo", title: "Memory 117", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.56 PM (1).jpeg" },
  { id: 118, type: "photo", title: "Memory 118", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.56 PM.jpeg" },
  { id: 119, type: "photo", title: "Memory 119", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.57 PM (1).jpeg" },
  { id: 120, type: "photo", title: "Memory 120", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.57 PM.jpeg" },
  { id: 121, type: "photo", title: "Memory 121", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.58 PM (1).jpeg" },
  { id: 122, type: "photo", title: "Memory 122", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.58 PM.jpeg" },
  { id: 123, type: "photo", title: "Memory 123", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.59 PM (1).jpeg" },
  { id: 124, type: "photo", title: "Memory 124", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.16.59 PM.jpeg" },
  { id: 125, type: "photo", title: "Memory 125", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.00 PM (1).jpeg" },
  { id: 126, type: "photo", title: "Memory 126", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.00 PM (2).jpeg" },
  { id: 127, type: "photo", title: "Memory 127", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.00 PM.jpeg" },
  { id: 128, type: "photo", title: "Memory 128", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.01 PM (1).jpeg" },
  { id: 129, type: "photo", title: "Memory 129", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.01 PM.jpeg" },
  { id: 130, type: "photo", title: "Memory 130", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.02 PM (1).jpeg" },
  { id: 131, type: "photo", title: "Memory 131", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.02 PM.jpeg" },
  { id: 132, type: "photo", title: "Memory 132", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.03 PM (1).jpeg" },
  { id: 133, type: "photo", title: "Memory 133", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.03 PM (2).jpeg" },
  { id: 134, type: "photo", title: "Memory 134", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.03 PM.jpeg" },
  { id: 135, type: "photo", title: "Memory 135", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.04 PM.jpeg" },
  { id: 136, type: "photo", title: "Memory 136", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.05 PM (1).jpeg" },
  { id: 137, type: "photo", title: "Memory 137", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.05 PM.jpeg" },
  { id: 138, type: "photo", title: "Memory 138", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.06 PM (1).jpeg" },
  { id: 139, type: "photo", title: "Memory 139", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.06 PM.jpeg" },
  { id: 140, type: "photo", title: "Memory 140", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.07 PM (1).jpeg" },
  { id: 141, type: "photo", title: "Memory 141", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.07 PM (2).jpeg" },
  { id: 142, type: "photo", title: "Memory 142", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.07 PM.jpeg" },
  { id: 143, type: "photo", title: "Memory 143", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.08 PM (1).jpeg" },
  { id: 144, type: "photo", title: "Memory 144", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.08 PM.jpeg" },
  { id: 145, type: "photo", title: "Memory 145", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.09 PM (1).jpeg" },
  { id: 146, type: "photo", title: "Memory 146", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.09 PM (2).jpeg" },
  { id: 147, type: "photo", title: "Memory 147", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.09 PM.jpeg" },
  { id: 148, type: "photo", title: "Memory 148", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.10 PM (1).jpeg" },
  { id: 149, type: "photo", title: "Memory 149", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.10 PM.jpeg" },
  { id: 150, type: "photo", title: "Memory 150", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.11 PM (1).jpeg" },
  { id: 151, type: "photo", title: "Memory 151", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.11 PM.jpeg" },
  { id: 152, type: "photo", title: "Memory 152", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.12 PM (1).jpeg" },
  { id: 153, type: "photo", title: "Memory 153", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.12 PM (2).jpeg" },
  { id: 154, type: "photo", title: "Memory 154", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.12 PM.jpeg" },
  { id: 155, type: "photo", title: "Memory 155", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.13 PM (1).jpeg" },
  { id: 156, type: "photo", title: "Memory 156", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.13 PM.jpeg" },
  { id: 157, type: "photo", title: "Memory 157", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.14 PM (1).jpeg" },
  { id: 158, type: "photo", title: "Memory 158", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.14 PM (2).jpeg" },
  { id: 159, type: "photo", title: "Memory 159", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.14 PM.jpeg" },
  { id: 160, type: "photo", title: "Memory 160", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.15 PM (1).jpeg" },
  { id: 161, type: "photo", title: "Memory 161", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.15 PM.jpeg" },
  { id: 162, type: "photo", title: "Memory 162", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.16 PM (1).jpeg" },
  { id: 163, type: "photo", title: "Memory 163", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.16 PM.jpeg" },
  { id: 164, type: "photo", title: "Memory 164", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.17 PM (1).jpeg" },
  { id: 165, type: "photo", title: "Memory 165", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.17 PM (2).jpeg" },
  { id: 166, type: "photo", title: "Memory 166", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.17 PM.jpeg" },
  { id: 167, type: "photo", title: "Memory 167", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.18 PM (1).jpeg" },
  { id: 168, type: "photo", title: "Memory 168", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.18 PM.jpeg" },
  { id: 169, type: "photo", title: "Memory 169", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.19 PM (1).jpeg" },
  { id: 170, type: "photo", title: "Memory 170", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.19 PM (2).jpeg" },
  { id: 171, type: "photo", title: "Memory 171", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.19 PM.jpeg" },
  { id: 172, type: "photo", title: "Memory 172", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.20 PM (1).jpeg" },
  { id: 173, type: "photo", title: "Memory 173", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.20 PM.jpeg" },
  { id: 174, type: "photo", title: "Memory 174", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.21 PM (1).jpeg" },
  { id: 175, type: "photo", title: "Memory 175", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.21 PM.jpeg" },
  { id: 176, type: "photo", title: "Memory 176", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.22 PM (1).jpeg" },
  { id: 177, type: "photo", title: "Memory 177", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.22 PM (2).jpeg" },
  { id: 178, type: "photo", title: "Memory 178", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.22 PM.jpeg" },
  { id: 179, type: "photo", title: "Memory 179", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.23 PM (1).jpeg" },
  { id: 180, type: "photo", title: "Memory 180", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.23 PM.jpeg" },
  { id: 181, type: "photo", title: "Memory 181", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.17.24 PM.jpeg" },
  { id: 182, type: "photo", title: "Memory 182", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.28.59 PM (1).jpeg" },
  { id: 183, type: "photo", title: "Memory 183", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.28.59 PM (2).jpeg" },
  { id: 184, type: "photo", title: "Memory 184", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.28.59 PM.jpeg" },
  { id: 185, type: "photo", title: "Memory 185", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.00 PM (1).jpeg" },
  { id: 186, type: "photo", title: "Memory 186", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.00 PM (2).jpeg" },
  { id: 187, type: "photo", title: "Memory 187", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.00 PM.jpeg" },
  { id: 188, type: "photo", title: "Memory 188", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.01 PM (1).jpeg" },
  { id: 189, type: "photo", title: "Memory 189", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.01 PM.jpeg" },
  { id: 190, type: "photo", title: "Memory 190", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.02 PM (1).jpeg" },
  { id: 191, type: "photo", title: "Memory 191", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.02 PM (2).jpeg" },
  { id: 192, type: "photo", title: "Memory 192", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.02 PM.jpeg" },
  { id: 193, type: "photo", title: "Memory 193", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.03 PM (1).jpeg" },
  { id: 194, type: "photo", title: "Memory 194", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.03 PM (2).jpeg" },
  { id: 195, type: "photo", title: "Memory 195", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.03 PM.jpeg" },
  { id: 196, type: "photo", title: "Memory 196", description: "Captured with love.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.29.04 PM.jpeg" },
  { id: 197, type: "photo", title: "Memory 197", description: "Smiles that last forever.", date: "2026-07-25", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.30.16 PM.jpeg" },
  { id: 198, type: "photo", title: "Memory 198", description: "Captured with love.", date: "2026-07-26", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-26 at 1.55.12 AM.jpeg" },
  { id: 199, type: "photo", title: "Memory 199", description: "Smiles that last forever.", date: "2026-07-26", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-26 at 1.55.17 AM.jpeg" },
  { id: 200, type: "photo", title: "Memory 200", description: "Captured with love.", date: "2026-07-26", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-26 at 1.55.21 AM.jpeg" },
  { id: 201, type: "photo", title: "Memory 201", description: "Smiles that last forever.", date: "2026-07-26", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-26 at 1.55.27 AM.jpeg" },
  { id: 202, type: "photo", title: "Memory 202", description: "Captured with love.", date: "2026-07-26", category: "normal", favorite: false, location: "", src: "assets/photos/Anni_photo/WhatsApp Image 2026-07-26 at 1.55.32 AM.jpeg" },

  /*=====================================
  VIDEOS
  ======================================*/
  { id: 203, type: "video", title: "Video 001", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: true, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.08.53 PM.mp4" },
  { id: 204, type: "video", title: "Video 002", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.05 PM.mp4" },
  { id: 205, type: "video", title: "Video 003", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.14 PM.mp4" },
  { id: 206, type: "video", title: "Video 004", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.51 PM (1).mp4" },
  { id: 207, type: "video", title: "Video 005", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.51 PM.mp4" },
  { id: 208, type: "video", title: "Video 006", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.52 PM.mp4" },
  { id: 209, type: "video", title: "Video 007", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.53 PM.mp4" },
  { id: 210, type: "video", title: "Video 008", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.55 PM.mp4" },
  { id: 211, type: "video", title: "Video 009", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.09.56 PM.mp4" },
  { id: 212, type: "video", title: "Video 010", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.16.04 PM.mp4" },
  { id: 213, type: "video", title: "Video 011", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.16.11 PM.mp4" },
  { id: 214, type: "video", title: "Video 012", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.16.39 PM.mp4" },
  { id: 215, type: "video", title: "Video 013", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.16.50 PM.mp4" },
  { id: 216, type: "video", title: "Video 014", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.16.51 PM.mp4" },
  { id: 217, type: "video", title: "Video 015", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.16.58 PM.mp4" },
  { id: 218, type: "video", title: "Video 016", description: "A special memory caught on tape.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.17.04 PM.mp4" },
  { id: 219, type: "video", title: "Video 017", description: "Our unforgettable moment.", date: "2026-07-25", category: "video", favorite: false, location: "", src: "assets/videos/WhatsApp Video 2026-07-25 at 11.17.05 PM.mp4" }
];


/*=====================================
HELPER FUNCTIONS
======================================*/

function getPhotos() {
  return memories.filter(m => m.type === "photo");
}

function getVideos() {
  return memories.filter(m => m.type === "video");
}

function getFavorites() {
  return memories.filter(m => m.favorite);
}


/*==================================================
  ATIRA'S JOURNEY
  memories.js
  Part 2/2
==================================================*/


/*=====================================
SORT
======================================*/

function sortNewest() {
  return [...memories].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

function sortOldest() {
  return [...memories].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
}


/*=====================================
SEARCH
======================================*/

function searchMemory(keyword) {
  keyword = keyword.toLowerCase();
  return memories.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword) ||
    item.category.toLowerCase().includes(keyword)
  );
}


/*=====================================
GET BY ID
======================================*/

function getMemory(id) {
  return memories.find(item => item.id === id);
}


/*=====================================
RANDOM MEMORY
======================================*/

function getRandomMemory() {
  return memories[Math.floor(Math.random() * memories.length)];
}


/*=====================================
TOTALS
======================================*/

const totalPhotos = getPhotos().length;
const totalVideos = getVideos().length;
const totalFavorites = getFavorites().length;


/*=====================================
CONSOLE
======================================*/

console.log("==============================");
console.log("ATIRA'S JOURNEY DATABASE");
console.log("Total Memories :", memories.length);
console.log("Photos :", totalPhotos);
console.log("Videos :", totalVideos);
console.log("Favorites :", totalFavorites);
console.log("==============================");


/*=====================================
GLOBAL EXPORT
======================================*/

window.memories = memories;
window.getPhotos = getPhotos;
window.getVideos = getVideos;
window.getFavorites = getFavorites;
window.getMemory = getMemory;
window.getRandomMemory = getRandomMemory;
window.searchMemory = searchMemory;
window.sortNewest = sortNewest;
window.sortOldest = sortOldest;


/*=====================================
END
======================================*/
