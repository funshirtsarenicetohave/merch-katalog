const collections = {
  "Grumpy Animals": {
  banner: "images/banners/grumpy-animals.png",
  thumbnail: "images/banners/grumpy-animals.png",
  description: "Funny grumpy characters with a permanently bad mood."
},

  "Unmotivated Animals": {
    banner: "images/banners/unmotivated-animals.png",
    thumbnail: "images/banners/unmotivated-animals.png",
    description: "Cute animals that would rather do absolutely nothing."
},
  "Psychedelic": {
    banner: "images/banners/psychedelic.png",
    thumbnail: "images/banners/psychedelic.png",
    description: "Colorful, trippy and psychedelic cartoon designs full of vibrant imagination."
},
  "Retro": {
    banner: "images/banners/banner-retro.png",
    thumbnail: "images/banners/banner-retro.png",
    description: "Colorful, vintage and retro designs full of vintage vibes."
},
  "Summer Vibes": {
    banner: "images/banners/vibes-banner.png",
    thumbnail: "images/banners/vibes-banner.png",
    description: "Funny designs with permanent summer vibes and good mood."
},
  "Unicorns": {
    banner: "images/banners/unicorn-banner.png",
    thumbnail: "images/banners/unicorn-banner.png",
    description: "Funny designs with different unicorns in a good mood and good vibes."
}
};

const designs = [
  {
    title: "Treasure Hunter",
    collection: "Unmotivated Animals",
    image: "images/treasure-hunter.png",
    amazonDE: "https://www.amazon.de/dp/B0H6QC77FM?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=d42281b38ff1ac3f220c367f0d5a2ea5&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },
    {
    title: "Lazy Axelotl",
    collection: "Unmotivated Animals",
    image: "images/lazy-axelotl.png",
    amazonDE: "https://www.amazon.de/dp/B0H6SSWRBK?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=ebc7b236d750c7f17869576919abc630&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },
    {
    title: "Lazy Vat",
    collection: "Unmotivated Animals",
    image: "images/emo-cat.png",
    amazonDE: "https://www.amazon.de/dp/B0H6TXVJFP?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=fd5eb9d167c6f47e1c3647af5e341133&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },
  {
    title: "Grumpy Panda",
    collection: "Grumpy Animals",
    image: "images/grumpy-panda.png",
    amazonDE: "https://www.amazon.de/Grumpypanda-niedlich-grummeliger-Pandabear-T-Shirt/dp/B0DGLQT4V6",
    amazonUS: "#",
    amazonUK: "#"
  },
  {
    title: "Grumpy Corn",
    collection: "Grumpy Animals",
    image: "images/grumpy-corn.png",
    amazonDE: "https://www.amazon.de/Grumpycorn-Einhorn-Grumpy-Spa%C3%9F-T-Shirt/dp/B0CNBF7KNL",
    amazonUS: "#",
    amazonUK: "#"
  },

  {
  title: "Grumpy Hippo",
  collection: "Grumpy Animals",
  image: "images/grumpy-hippo.png",
  amazonDE: "https://www.amazon.de/Grumpyhippo-Nielpferd-niedlich-grummeliges-T-Shirt/dp/B0DGL5GYMV?dib=eyJ2IjoiMSJ9.sLe9upBRy3fNIBMCmyngd4CeCtK8ThzIy_8lJYx0ZdgPZ8AM4ge_p5W2vwOPDqDdnUw8mTz0Pzl-y3W2LSAVDK0OYyYlvAeoreMZ-dCgcxSbPXPhPt_yJaofWmSTagE59VzZIojq12TpiFckBUugqVoY4pLxpPh9oe3EJyvMDsF8E1L-SkGWeMpASbQm99OIjPufoTJQST6WouU3peO0mlWW5iT5f16x14GUWNpyP1NUUDzbHRwt9O069Ex_uhA2tM1u3z_IZdKxbkwOyLZimHSLfhqHP_qJWeMZ27vLv4Y.oXVJfRFbheBNbEKEuSIi9c5A2pPaUnapfySrxsvnqKU&dib_tag=se&qid=1782489407&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&sr=1-27&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=583a7b44655b5f40904c38c352dcfd81&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Grumpy Rhino",
  collection: "Grumpy Animals",
  image: "images/grumpy-rhino.png",
  amazonDE: "https://www.amazon.de/Grumpyrhino-Nashorn-niedlich-grummeliger-Rhinozeros/dp/B0DGHRH7L1?dib=eyJ2IjoiMSJ9.sLe9upBRy3fNIBMCmyngd4CeCtK8ThzIy_8lJYx0ZdgPZ8AM4ge_p5W2vwOPDqDdnUw8mTz0Pzl-y3W2LSAVDK0OYyYlvAeoreMZ-dCgcxSbPXPhPt_yJaofWmSTagE59VzZIojq12TpiFckBUugqVoY4pLxpPh9oe3EJyvMDsF8E1L-SkGWeMpASbQm99OIjPufoTJQST6WouU3peO0mlWW5iT5f16x14GUWNpyP1NUUDzbHRwt9O069Ex_uhA2tM1u3z_IZdKxbkwOyLZimHSLfhqHP_qJWeMZ27vLv4Y.H9h8UYBXWkqIBbcNjPZWFVTQ4NNkfv9YobUp6KZbww0&dib_tag=se&qid=1782489508&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&sr=1-35&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=cf8589ab5eb184a817c69cec8550dbd1&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
 {
    title: "Grumpy Giraffe",
    collection: "Grumpy Animals",
    image: "images/grumpy-raffe.png",
    amazonDE: "https://www.amazon.de/Grumpyraffe-Giraffe-niedlich-grummelige-T-Shirt/dp/B0DGXTSYVF?dib=eyJ2IjoiMSJ9.sLe9upBRy3fNIBMCmyngd4CeCtK8ThzIy_8lJYx0ZdgPZ8AM4ge_p5W2vwOPDqDdnUw8mTz0Pzl-y3W2LSAVDK0OYyYlvAeoreMZ-dCgcxSbPXPhPt_yJaofWmSTagE59VzZIojq12TpiFckBUugqVoY4pLxpPh9oe3EJyvMDsF8E1L-SkGWeMpASbQm99OIjPufoTJQST6WouU3peO0mlWW5iT5f16x14GUWNpyP1NUUDzbHRwt9O069Ex_uhA2tM1u3z_IZdKxbkwOyLZimHSLfhqHP_qJWeMZ27vLv4Y.H9h8UYBXWkqIBbcNjPZWFVTQ4NNkfv9YobUp6KZbww0&dib_tag=se&qid=1782490185&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&sr=1-15&customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=9c243dba5811143802fb0e04fcd933f1&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },

 {
    title: "Grumpy Lama",
    collection: "Grumpy Animals",
    image: "images/grumpy-lama.png",
    amazonDE: "https://www.amazon.de/Grumpy-niedlich-grummeliges-witzig-T-Shirt/dp/B0DGFGHF8D?dib=eyJ2IjoiMSJ9.Lq-Mlcu9lVYAkjCL-9Vnas4_JOz3yHwZK_7x7XrrknHvIGzcR8Qy6q1jW-7ICHitpkrBAIIXGHErr6G-uOIpnFkWGAs41Y_Msk3UkqPlpok.ISmSasijRutvLPh520lZsvyHXYxArjWgK9eoJcCuUg4&dib_tag=se&qid=1782490272&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&xpid=UGMtroIC7ndVt&customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=8160f742b870977b23d1ee1d6e229c80&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },
{
    title: "Grumpy Sloth",
    collection: "Grumpy Animals",
    image: "images/grumpy-sloth.png",
    amazonDE: "https://www.amazon.de/GrumpySloth-Faultier-niedlich-grummeliges-T-Shirt/dp/B0DH3KTKR3?dib=eyJ2IjoiMSJ9.sLe9upBRy3fNIBMCmyngd4CeCtK8ThzIy_8lJYx0ZdgPZ8AM4ge_p5W2vwOPDqDdnUw8mTz0Pzl-y3W2LSAVDK0OYyYlvAeoreMZ-dCgcxSbPXPhPt_yJaofWmSTagE59VzZIojq12TpiFckBUugqVoY4pLxpPh9oe3EJyvMDsF8E1L-SkGWeMpASbQm99OIjPufoTJQST6WouU3peO0mlWW5iT5f16x14GUWNpyP1NUUDzbHRwt9O069Ex_uhA2tM1u3z_IZdKxbkwOyLZimHSLfhqHP_qJWeMZ27vLv4Y.H9h8UYBXWkqIBbcNjPZWFVTQ4NNkfv9YobUp6KZbww0&dib_tag=se&qid=1782490993&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&sr=1-7&customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=1796dd90ae40e516dbc9963ab86b0090&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },

{
    title: "Grumpy Koala",
    collection: "Grumpy Animals",
    image: "images/grumpy-koala.png",
    amazonDE: "https://www.amazon.de/Grumpykoala-Koalab%C3%A4r-niedlich-grummeliger-T-Shirt/dp/B0DGHQMNBP?dib=eyJ2IjoiMSJ9.sLe9upBRy3fNIBMCmyngd4CeCtK8ThzIy_8lJYx0ZdgPZ8AM4ge_p5W2vwOPDqDdnUw8mTz0Pzl-y3W2LSAVDK0OYyYlvAeoreMZ-dCgcxSbPXPhPt_yJaofWmSTagE59VzZIojq12TpiFckBUugqVoY4pLxpPh9oe3EJyvMDsF8E1L-SkGWeMpASbQm99OIjPufoTJQST6WouU3peO0mlWW5iT5f16x14GUWNpyP1NUUDzbHRwt9O069Ex_uhA2tM1u3z_IZdKxbkwOyLZimHSLfhqHP_qJWeMZ27vLv4Y.H9h8UYBXWkqIBbcNjPZWFVTQ4NNkfv9YobUp6KZbww0&dib_tag=se&qid=1782490993&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&sr=1-36&customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=279793a8106dbcfa34b3768096d8a30a&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },
{
  title: "Psychedelic Herz",
  collection: "Psychedelic",
  image: "images/colorful-herz.png",
  amazonDE: "https://www.amazon.de/dp/B0DXZSY75P?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=c6146ca5214c9032781c58940de1a8d9&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Psychedelic Pyramide",
  collection: "Psychedelic",
  image: "images/pyramide-one.png",
  amazonDE: "https://www.amazon.de/dp/B0CK2TC6WF?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=899d97a7a4ff05897a3a502027b742d5&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Colorful Monkey",
  collection: "Psychedelic",
  image: "images/bunter-affe.png",
  amazonDE: "https://www.amazon.de/dp/B0D2G4HX8N?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=a582af60f2bef59a1d227da17a119dd2&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
}, 
{
  title: "Colorful Cat",
  collection: "Psychedelic",
  image: "images/bunte-katze.png",
  amazonDE: "https://www.amazon.de/dp/B0CGVRL4L1?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=441da295ff6a1c63fc5765a158976001&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Weed Pyramid",
  collection: "Psychedelic",
  image: "images/pyramide-two.png",
  amazonDE: "https://www.amazon.de/dp/B0D3HZYTVW?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=229cadcd709cf3e63dd68c4358ad1af8&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Colorful Woman",
  collection: "Psychedelic",
  image: "images/colorful-woman.png",
  amazonDE: "https://www.amazon.de/dp/B0D29VMH51?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=97919bf3d2bc922055b31851cd9e7edc&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Magical Mushrooms",
  collection: "Psychedelic",
  image: "images/bunte-pilze.png",
  amazonDE: "https://www.amazon.de/dp/B0D29V4TGR?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=a0176df0301f3db60da79900de2bbedb&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Brain Tree",
  collection: "Psychedelic",
  image: "images/brain-tree.png",
  amazonDE: "https://www.amazon.de/dp/B0CQKDXJYZ?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=6adc09f56f80a4d81508a2f94f373bc5&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Colorful Ape",
  collection: "Psychedelic",
  image: "images/colorful-ape.png",
  amazonDE: "https://www.amazon.de/dp/B0D2FWYZVW?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=5bccfd8afa82888c85f38a622b38b888&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Vintage Weed",
  collection: "Retro",
  image: "images/can.png",
  amazonDE: "https://www.amazon.de/dp/B0DKY7BM49?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=1ffec7437aba8307225bfaa52e8598d6&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Vintage Pyramide",
  collection: "Retro",
  image: "images/vint-pyr.png",
  amazonDE: "https://www.amazon.de/dp/B0DCTKRM39?_encoding=UTF8&customizationToken=MC_Assembly_1%23B07537SGL9&customId=B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=7c574986d358fb8b80a71c1c1c542ce2&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Vintage Logo",
  collection: "Retro",
  image: "images/vintage-one.png",
  amazonDE: "https://www.amazon.de/dp/B0DCVP4XTL?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=e81598a22739439b74a143b40f97ecb6&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Vintage Palmen",
  collection: "Retro",
  image: "images/retro-sun.png",
  amazonDE: "https://www.amazon.de/dp/B0DF7M88R1?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=9fec115c1a3ebce772e488ba1aea55a8&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Must Go",
  collection: "Retro",
  image: "images/must-go.png",
  amazonDE: "https://www.amazon.de/dp/B0H68BMTNL?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=beef39585fdf380a03aa608d0f9a51dc&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Wander",
  collection: "Retro",
  image: "images/who-wander.png",
  amazonDE: "https://www.amazon.de/dp/B0H63X67SH?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=93905f3079e0532a9cf25b2e17d4e86f&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Retro Car",
  collection: "Retro",
  image: "images/retro-car.png",
  amazonDE: "https://www.amazon.de/dp/B0DFC5S47W?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=8ffea13719ac1e6258d5f18b4b0bf6fb&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Erdbeere",
  collection: "Summer Vibes",
  image: "images/splach-berry.png",
  amazonDE: "https://www.amazon.de/dp/B0DBV7PYR1?_encoding=UTF8&customizationToken=MC_Assembly_1%23B07537SGL9&customId=B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=4916c89f81f432271062021b0fde6cc1&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Ananas",
  collection: "Summer Vibes",
  image: "images/anannas-sun.png",
  amazonDE: "https://www.amazon.de/dp/B0DTKDQWY2?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=d35b417b2df79bd43ffb33dca3c3e4a2&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Orange",
  collection: "Summer Vibes",
  image: "images/orange.png",
  amazonDE: "https://www.amazon.de/dp/B0DCC21G86?_encoding=UTF8&customizationToken=MC_Assembly_1%23B07537SGL9&customId=B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=f7b62fa92292052d63a3115fc31dede4&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Avocado",
  collection: "Summer Vibes",
  image: "images/avocado.png",
  amazonDE: "https://www.amazon.de/dp/B0DC5C4GQV?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=afacf0eedb0404991ecd144376dcee60&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Banane",
  collection: "Summer Vibes",
  image: "images/banane.png",
  amazonDE: "https://www.amazon.de/dp/B0DC5Y52W5?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=9f6551c485070b66e1a369a838af3977&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Melone",
  collection: "Summer Vibes",
  image: "images/melone.png",
  amazonDE: "https://www.amazon.de/dp/B0DCBMYBHH?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=465a4aa064bf3b96f1e18c4609a39bda&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
{
  title: "Brokkoli",
  collection: "Summer Vibes",
  image: "images/brokkoli.png",
  amazonDE: "https://www.amazon.de/dp/B0DBYZZFG8?customId=B07537SGL9&customizationToken=MC_Assembly_1%23B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=17d7d9ff8e63569988aa3e74dbcd2e6b&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
  {
  title: "Unicorn Ein **** muss ich",
  collection: "Unicorns",
  image: "images/unicorn-sad.png",
  amazonDE: "https://www.amazon.de/dp/B0DH2Q3L9C?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=602e1fa9e04961d70effcbb7698a92dc&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
  {
  title: "Unicorn ich hasse Menschen",
  collection: "Unicorns",
  image: "images/unicorn-ihm.png",
  amazonDE: "https://www.amazon.de/dp/B0DFX8431J?_encoding=UTF8&customizationToken=MC_Assembly_1%23B07537SGL9&customId=B07537SGL9&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=a63c9a721137844ade5b99e771042460&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
  {
  title: "Chubbie Unicorn",
  collection: "Unicorns",
  image: "images/chubbie-corn.png",
  amazonDE: "https://www.amazon.de/dp/B0D6RRVLSH?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=679628b9611df482b1ba71011f8becaf&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
},
  {
  title: "Rockercorn",
  collection: "Unicorns",
  image: "images/rocker-corn.png",
  amazonDE: "https://www.amazon.de/dp/B0D8PR5C3V?customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=65ab10772407a3b9ff30da8e0e9eb0c0&ref_=as_li_ss_tl",
  amazonUS: "#",
  amazonUK: "#"
}
];

const grid = document.getElementById("designGrid");
const collectionNav = document.getElementById("collectionNav");

const groupedCollections = {};

designs.forEach(function(design) {
  if (!groupedCollections[design.collection]) {
  groupedCollections[design.collection] = [];
}

groupedCollections[design.collection].push(design);
});

if (collectionNav) {
  Object.keys(collections).forEach(function(collectionName) {

    const link = document.createElement("a");
    link.href = collectionName.toLowerCase().replaceAll(" ", "-") + ".html";

    const img = document.createElement("img");
    img.src = collections[collectionName].thumbnail;
    img.alt = collectionName;
    img.className = "collection-nav-banner";

    link.appendChild(img);
    collectionNav.appendChild(link);
  });
}

Object.keys(groupedCollections).forEach(function(collectionName) {
  if (typeof currentCollection !== "undefined" && collectionName !== currentCollection) {
  return;
}
  const section = document.createElement("section");
  section.className = "collection-section";
  section.id = collectionName.toLowerCase().replaceAll(" ", "-");
  const heading = document.createElement("h2");
  heading.className = "collection-heading";
  heading.textContent = collectionName;
  
  const description = document.createElement("p");
  description.className = "collection-description";
  description.textContent =
  collections[collectionName]?.description || "";

  const collectionGrid = document.createElement("div");
  collectionGrid.className = "collection-grid";

let maxDesigns = 4;

if (window.innerWidth <= 480) {
  maxDesigns = 2;
} else if (window.innerWidth <= 900) {
  maxDesigns = 3;
}

const visibleDesigns =
  (typeof currentCollection === "undefined")
    ? groupedCollections[collectionName].slice(0, maxDesigns)
    : groupedCollections[collectionName];

  visibleDesigns.forEach(function(design) {
    const card = document.createElement("div");
    card.className = "card";

  card.innerHTML =
    '<div class="image-box"><img src="' + design.image + '" alt="' + design.title + '"></div>' +
    '<h2>' + design.title + '</h2>' +
    '<p>' + design.collection + '</p>' +
    '<a class="button" href="' + design.amazonDE + '" target="_blank">🇩🇪 Auf Amazon.de ansehen</a>';
  
    collectionGrid.appendChild(card);
  });

  section.appendChild(heading);

if (collections[collectionName]?.banner) {
  const bannerLink = document.createElement("a");
  bannerLink.href = collectionName.toLowerCase().replaceAll(" ", "-") + ".html";

  const banner = document.createElement("img");
  banner.className = "collection-banner";
  banner.src = collections[collectionName].banner;
  banner.alt = collectionName + " banner";

  bannerLink.appendChild(banner);
  section.appendChild(bannerLink);
}

section.appendChild(description);
section.appendChild(collectionGrid);

if (typeof currentCollection === "undefined") {
  const exploreButton = document.createElement("a");
  exploreButton.className = "explore-button";
  exploreButton.href =
    collectionName.toLowerCase().replaceAll(" ", "-") + ".html";
  exploreButton.textContent =
  "Explore " + groupedCollections[collectionName].length + " Designs →";

  section.appendChild(exploreButton);
}

grid.appendChild(section);
});
