                    // Define the map
                    const map = L.map('map', { attributionControl: false }).setView([51.505, -0.13], 13); // Set your initial coordinates and zoom level
                    // Add the image overlay layer with adjusted bounds for increased width
	 const imageUrl = 'https://anyimage.io/storage/uploads/e5de371304e8a183f5c88238e0a6ad25';
                    const imageBounds = [[51.53, -0.20], [51.48, -0.06]]; // Adjust the bounds for increased width
                    L.imageOverlay(imageUrl, imageBounds).addTo(map);
                    const animalParts = [
        {
            name: 'Strings',
            coordinates: [
                [51.524, -0.11], // mouth

            ],
            videoUrl: '/strings',
            description: 'The Possums made strings which formed the high sandhils separateing the lake from the sea',
        },
        {
            name: 'Strings',
            coordinates: [
                [51.524,  -0.078], // mouth

            ],
            videoUrl: '/strings',
            description: 'The lines extending from the base of the the elongated figure represents the gullies in sandhills that were formed by lengths of possum fur laid out by the Guwak for gathering the clans in the area',
        },
        {
            name: 'Cashew nuts',
            coordinates: [
                [51.524, -0.095], // mouth

            ],
            videoUrl: '/cashew-nuts/',
            description: 'Cashew nuts have positive effects on our body across our entire body. Despite the fact that half of their composition is fat, they help us to lose weight. At the same time, they prevent the formation of gallstones and scientific studies have confirmed that they are an effective fighter against digestive tract cancer. Learn why cashews can rightly be called a superfood.',
        },        
{
            name: 'Guwak',
            coordinates: [
                [51.524, -0.159], //cashews 

            ],
            videoUrl: 'https://livingarchive.teachingforchange.edu.au/guwak-bird',
            description: 'The Guwak flew into the casuarina trees, signified by the nuts in the top half of the painting',
        },
        ,
        {
            name: 'Possum',
            coordinates: [
                [51.509, -0.08], // mouth

            ],
            videoUrl: '/possum/',
            description: 'The Guwak instructed their workers to climb up the tree, spinning their fur into lengths of string',
        },
        ,
        {
            name: 'Possums Strings',
            coordinates: [
               [51.510, -0.18], // mouth

            ],
            videoUrl: '/possum-strings',
            description: 'Possums gave their string to the Aboriginal people living in the area where they camped. There can be used tomanufature sacred objects to commemorate their visit',
        },

        {
            name: 'spear1',
            coordinates: [
                [51.498, -0.123], // mouth

            ],
            videoUrl: '',
            description: 'spear1',
        },
        ,
        {
            name: 'spear2',
            coordinates: [
              [51.498, -0.14], // mouth

            ],
            videoUrl: '/acoustics-of-the-yidaki/',
            description: 'spear2',
        },        
{
            name: 'Location',
            coordinates: [
                [51.509, -0.159], // mouth

            ],
            videoUrl: '/',
            description: 'Locating on map',
        },
        ,
        {
            name: 'Relation',
            coordinates: [
               [51.509, -0.095], // mouth

            ],
            videoUrl: '',
            description: 'Relation to county',
        },
        {
            name: 'lagoon',
            coordinates: [
               [51.485, -0.135], // mouth

            ],
            videoUrl: 'https://gymbeam.com/blog/cashew-nuts-everything-you-need-to-know/',
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
                                    '<p>Link: <a href="' + part.videoUrl + '">'+ part.videoUrl +
                                    "</p>" +
                                    "</div>" +
                                    "</div>";
                            marker.bindPopup(popupContent, { minWidth: 650 });
                        });
                    });

