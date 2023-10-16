                    // Define the map
                    const map = L.map('map', { attributionControl: false }).setView([51.505, -0.13], 13); // Set your initial coordinates and zoom level
                    // Add the image overlay layer with adjusted bounds for increased width
                    const imageUrl = 'https://anyimage.io/storage/uploads/e5de371304e8a183f5c88238e0a6ad25';
                    const imageBounds = [[51.53, -0.20], [51.48, -0.06]]; // Adjust the bounds for increased width
                    L.imageOverlay(imageUrl, imageBounds).addTo(map);

                    const animalParts = [
        {
            name: 'Strings1',
            coordinates: [
                [51.524, -0.11], // mouth

            ],
            videoUrl: '/visions-of-a-bushman-the-community-led-participatory-design-of-an-olkola-cultural-knowledge-centre-as-a-research-through-design-project/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'Strings1',
        },
        {
            name: 'Strings2',
            coordinates: [
                [51.524,  -0.078], // mouth

            ],
            videoUrl: '/aboriginal-housing/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'Strings2',
        },
        {
            name: 'Cashew nuts5',
            coordinates: [
                [51.524, -0.095], // mouth

            ],
            videoUrl: '/acoustics-of-the-yidaki/',
            imageUrl: 'https://gymbeam.com/blog/wp-content/uploads/fly-images/140329/kesu-orechy-clanok_1_-min-437x279.png', // Add the URL of the image for this part
            description: 'Cashew nuts have positive effects on our body across our entire body. Despite the fact that half of their composition is fat, they help us to lose weight. At the same time, they prevent the formation of gallstones and scientific studies have confirmed that they are an effective fighter against digestive tract cancer. Learn why cashews can rightly be called a superfood..',
        },        
{
            name: 'Guwak',
            coordinates: [
                [51.524, -0.159], // mouth

            ],
            videoUrl: '/painting-by-payi-cables-technology-and-engineering-april-2022/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'Guwak',
        },
        ,
        {
            name: 'posan1',
            coordinates: [
                [51.509, -0.08], // mouth

            ],
            videoUrl: '/appropriate-technology/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'posan',
        },
        ,
        {
            name: 'Posan2',
            coordinates: [
               [51.510, -0.18], // mouth

            ],
            videoUrl: '/case-study-in-radio-communication/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'posan',
        },

        {
            name: 'spear1',
            coordinates: [
                [51.498, -0.123], // mouth

            ],
            videoUrl: '/thuwarri-thaa-wilgie-mia-ancient-aboriginal-mining-technology-in-cultural-context/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'spear1',
        },
        ,
        {
            name: 'spear2',
            coordinates: [
              [51.498, -0.14], // mouth

            ],
            videoUrl: '/acoustics-of-the-yidaki/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'spear2',
        },        
{
            name: 'M1',
            coordinates: [
                [51.509, -0.159], // mouth

            ],
            videoUrl: '/blue-wrens-take-flight-in-engineering-education/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'M1',
        },
        ,
        {
            name: 'M2',
            coordinates: [
               [51.509, -0.095], // mouth

            ],
            videoUrl: '/visions-of-a-bushman-the-community-led-participatory-design-of-an-olkola-cultural-knowledge-centre-as-a-research-through-design-project/',
            imageUrl: '', // Add the URL of the image for this part
            description: 'M2',
        },
        {
            name: 'lagoon',
            coordinates: [
               [51.485, -0.135], // mouth

            ],
            videoUrl: 'https://gymbeam.com/blog/cashew-nuts-everything-you-need-to-know/',
            imageUrl: 'https://gymbeam.com/blog/wp-content/uploads/fly-images/140329/kesu-orechy-clanok_1_-min-437x279.png', // Add the URL of the image for this part
            description: 'Cashew nuts have positive effects on our body across our entire body. Despite the fact that half of their composition is fat, they help us to lose weight. At the same time, they prevent the formation of gallstones and scientific studies have confirmed that they are an effective fighter against digestive tract cancer. Learn why cashews can rightly be called a superfood..',
        },


        // Add more parts with multiple coordinates as needed
    ];

                    // Loop through animal parts
                    animalParts.forEach(part => {
                        part.coordinates.forEach(coords => {
                            const marker = L.marker(coords).addTo(map);
                            const popupContent =
                                                '<div id="content">' +
                                    '<div id="siteNotice">' +
                                    "</div>" +
                                    '<h2 style="font-size:150%;" id="firstHeading" class="firstHeading">' + part.name + '</h2>' +
                                    '<div id="bodyContent">' +
                                    '<p style="font-size:130%;">' + part.description + '</p>' +
                                    '<a href="' + part.videoUrl + '">' +
                                     "<img src='" + part.imageUrl + "' width='200' height='150'> </a>" +
                                    '<p>Link: <a href="' + part.videoUrl + '">'+ part.videoUrl +
                                    "</p>" +
                                    "</div>" +
                                    "</div>";
                            marker.bindPopup(popupContent, { minWidth: 650 });
                        });
                    });

