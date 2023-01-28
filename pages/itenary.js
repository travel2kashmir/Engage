
import React, { useEffect, useState } from 'react';
import LoaderDarkTable from '../components/loaders/darktableloader';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import colorFile from "../components/color";
import axios from "axios";
import Link from "next/link";
import Table from '../components/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import english from "../components/Languages/en"
import french from "../components/Languages/fr"
import arabic from "../components/Languages/ar";
import LoaderTable from "../components/loadertable";
import Headloader from "../components/loaders/headloader";
var language;
var currentProperty;
var currentLogged;
let colorToggle;
import Router from "next/router";




function itenary() {
    const itenary = {
        "tour_id": "tour001",
        "tour_name": "Kashmir Winters",
        "tour_type": "private",
        "duration_days": 3,
        "duration_nights": 2,
        "min_participants": 2,
        "max_participants": 5,
        "tour_summary": "This tour package explores the Kashmir in  winters to explores the real beauty of paradise on earth.Where guests will explore the steep hills suitable for skiing in gulmarg, the snow clad mountains of pehalgam and the beautiful city of srinagar.",
        "price_type": "Per Person",
        "price_amount": 7999,
        "tax_included": "False",
        "tax_type": "Percentage",
        "tax_amount": '18%',
        "other_charges": 0,
        "currency": "Rupees",
        "plan": [
            {
                "day": 1,
                "activities": [
                    {
                        "activity_name": "Transfer From Srinagar airport to Gulmarg",
                        "time_of_ride": "3 Hrs",
                        "distance": "60km",
                        "place": "Gulmarg",
                        "milestones": [
                            {
                                "Tangmarg": true,
                                "description": "Tangmarg is gateway of gulmarg which is just 13kms away, also drung waterfall is 3kms away which makes tangmarg most crowded place in the evening due to clean & fresh environment. "
                            },
                            {
                                "Drang waterfall": true,
                                "description": "The Drung Waterfall is an extremely popular tourist attraction located in the Tangmarg tehsil of Gulmarg, Baramulla. A cascading waterfall set amidst majestic mountains, it freezes completely during winter due to the extremely low temperature. This frozen waterfall is a must-visit in the area."
                            },
                            {
                                "Baba Reshi Shrine ": true,
                                "description": "The Ziarat of Baba Reshi is a popular shrine of Baramula, situated near the Alpather Lake at 13 km from Gulmarg and belongs to saint Baba payam-Din."
                            }
                        ],
                        "boarding_point": "srinagr",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            },
                            {
                                "addon_id": "addon002"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Gondolla ride",
                        "time_of_ride": "30 min",
                        "distance": "10km",
                        "place": "Gulmarg",
                        "milestones": [
                            {
                                "kongdori-phase I": true,
                                "description": "It starts at a height of 2,990 m following which there is a vertical rise of 400m."
                            },
                            {
                                "Apharwat - Phase II": true,
                                "description": "it makes a further ascent of 1,330 vertical meters and takes you to a total height of almost 4,000 m"
                            },
                            {
                                "Phase III": true,
                                "description": "Once here, you can trek a further 30 minutes and reach the top of the mountain to catch a glimpse of the Line of Control (LOC) which is visible from here. "
                            }
                        ],
                        "boarding_point": "Gandola point",
                        "Guided_tour": false,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Skiing on Apharwat Peaks",
                        "time_of_ride": "1 Hr",
                        "distance": "6km",
                        "place": "Gulmarg",
                        "milestones": [
                            {
                                "Apharwat-peak": true,
                                "description": "Best slopes in Asia for best skiing experience."
                            }
                        ],
                        "boarding_point": "Apharwat Peak",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 0
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Night Stay In Gulmarg",
                        "time_of_ride": "",
                        "distance": "",
                        "place": "Gulmarg",
                        "milestones": [

                        ],
                        "boarding_point": "Gulmarg",
                        "Guided_tour": false,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 2
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    }
                ],
                "addons": [
                    {
                        "addon_id": "addon001",
                        "addon_name": "First Aid kit",
                        "provider": "Service provider",
                        "serves": "4",
                        "quantity": "1"
                    },
                    {
                        "addon_id": "addon002",
                        "addon_name": "Refreshment",
                        "provider": "NH-1 Restaurant Shalteng",
                        "serves": "1",
                        "quantity": "7"
                    }

                ],
                "providers": [
                    {
                        "provider_id": "provider001",
                        "provider_category": "Food",
                        "Name": "M/s NH 1 Restautant",
                        "Company": "NH 1 Restautant pvt ltd",
                        "languageOptions": [
                            "English",
                            "Hindi",
                            "kannad"
                        ],
                        "guideExperience": {
                            "years": 10,
                            "certifications": [
                                "Certified Asian Chef",
                                "Certified Muglai Chef"
                            ],
                            "specializations": [
                                "Muglai food",
                                "South Indian Food"
                            ]
                        },
                        "groupSize": {
                            "min": 2,
                            "max": 20
                        },
                        "servicesOffered": {
                            "Veg Food": true,
                            "Non-Veg Food": true,
                        },
                        "contactInformation": {
                            "email": "NH1@t2k.com",
                            "phone": "101102911",
                            "website": "www.NH1.t2k.com"
                        },
                        "reviews": [
                            {
                                "name": "Raman Iyer",
                                "rating": 5,
                                "review": "They serve authentic South indian food."
                            }
                        ]
                    }
                ]
            },
            {
                "day": 2,
                "activities": [
                    {
                        "activity_name": "Transfer From Gulmarg to pehalgam",
                        "time_of_ride": "5 Hrs",
                        "distance": "160km",
                        "place": "Pehalgam",
                        "milestones": [
                            {
                                "Avantipora temple": true,
                                "description": "The ancient temple in avantipur of district pulwama which is on the way to pehalgam. "
                            },
                            {
                                "Chinar bagh": true,
                                "description": "Chinar bagh is located in the Bijbhara of district Anantnag which host oldest chinars of kashmir"
                            },
                            {
                                "Mattan Temple": true,
                                "description": "Mattan temple is one of the oldest temple of kashmir."
                            }
                        ],
                        "boarding_point": "Gulmarg",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Horse ride to baisaran",
                        "time_of_ride": "30 min",
                        "distance": "5 km",
                        "place": "Pehalgam",
                        "milestones": [
                            {
                                "Baisaran Valley": true,
                                "description": "Baisaram valley is located 5km from the pehalgam it is also known as the mini switzerland ."
                            }
                        ],
                        "boarding_point": "Pehalgam horse stand",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Visit to betab valley",
                        "time_of_ride": "1 Hr",
                        "distance": "16km",
                        "place": "pehalgam",
                        "milestones": [
                            {
                                "Betab valley": true,
                                "description": "Mesmerising valley in the foot hills of chandanwari."
                            }
                        ],
                        "boarding_point": "Pehalgam taxi stand",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 0
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Stay in Pehalgam",
                        "time_of_ride": "",
                        "distance": "",
                        "place": "pehalgam",
                        "milestones": [

                        ],
                        "boarding_point": "Pehalgam",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 2
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    }
                ],
                "addons": [],
                "providers": []
            },
            {
                "day": 3,
                "activities": [
                    {
                        "activity_name": "Transfer From pehalgam to srinagar",
                        "time_of_ride": "2 Hrs",
                        "distance": "110km",
                        "place": "srinagar",
                        "milestones": [
                            {
                                "Pampore Saffron fields": true,
                                "description": "Witness the freshness of worlds best saffron fields"
                            }
                        ],
                        "boarding_point": "Pehalgam",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Shikara Ride",
                        "time_of_ride": "30 min",
                        "distance": "7 km",
                        "place": "Srinagar",
                        "milestones": [
                            {
                                "Nehru Park": true,
                                "description": "Nehru Park, Dal Lake, Srinagar, Kashmir, a small island park with swimming pool, boating facilities and small park for picnic. Can be reached by shikaras, popular destination in evenings."
                            },
                            {
                                "Char Chinar": true,
                                "description": "Char Chinar, also sometimes called Char Chinari, Ropa Lank, or Rupa Lank, is an island in Dal Lake, Srinagar, Jammu and Kashmir. Dal Lake includes 3 islands, 2 of which are marked with beautiful Chinar trees. The island located on the Lakut Dal (small Dal) is known as Roph Lank (Silver Island), is marked with the presence of majestic Chinar trees at the four corners, thus known as Char-Chinari (Four Chinars). The second Chinar Island, known as Sone Lank (Gold Island), is located on the Bod Dal (Big Dal) and overlooks the holy shrine of Hazratbal ."
                            }
                        ],
                        "boarding_point": "Ghat no 2",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Visit to Mughal Gardens",
                        "time_of_ride": "1 Hr",
                        "distance": "16km",
                        "place": "Srinagar",
                        "milestones": [
                            {
                                "Nishat": true,
                                "description": "Nishat is famous for the Nishat Gardens (Nishat Bagh). And is a very popular tourist destination. The Nishat Bagh is a 12 terraced garden located near Srinagar's famous Dal Lake. It is the second-largest Mughal garden in Kashmir after Shalimar Bagh. Nishat Bagh was designed and built in 1633 by Asif Khan, the elder brother of Nur Jehan."
                            },
                            {
                                "Shalimar": true,
                                "description": "Shalimar Bagh is a Mughal garden in Srinagar, Jammu and Kashmir, India, linked through a channel to the northeast of Dal Lake. It is also known as Shalimar Gardens, Farah Baksh, and Faiz Baksh. The other famous shoreline garden in the vicinity is Nishat Bagh, 'The Garden of Delight'. The Bagh was built by Mughal Emperor Jahangir, for his wife Nur Jahan, in 1619. ."
                            },
                            {
                                "Chashma shahie": true,
                                "description": "Chashme Shahi or Chashma i Shahi Or Cheshma Shahi (translation: the royal spring), also called Chashma Shahi or Cheshma Shahi, is one of the Mughal gardens built in 1632 AD around a spring by Ali Mardan Khan, a governor of Mughal emperor Shah Jahan as per the orders of the Emperor, as a gift for his eldest son Prince Dara Shikoh.[1][2] The garden is located in the Zabarwan Range, near Raj Bhawan (Governor's house) overlooking Dal Lake in Srinagar, Kashmir, India."
                            },
                            ,
                            {
                                "Pari mehal": true,
                                "description": "Pari Mahal or Peer Mahal, also known as The Palace of Fairies, is a seven-terraced garden located at the top of Zabarwan mountain range, overlooking the city of Srinagar and the south-west of Dal Lake in the Indian union territory of Jammu and Kashmir. It is an example of Islamic architecture and patronage of art during the reign of the then Mughal Emperor Shah Jahan. ."
                            }
                        ],
                        "boarding_point": "Pehalgam taxi stand",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 0
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    },
                    {
                        "activity_name": "Stay in Srinagar",
                        "time_of_ride": "",
                        "distance": "",
                        "place": "pehalgam",
                        "milestones": [

                        ],
                        "boarding_point": "Pehalgam",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 2
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    }
                ],
                "addons": [],
                "providers": []
            },
            {
                "day": 4,
                "activities": [
                    {
                        "activity_name": "Transfer From Srinagar Airport",
                        "time_of_ride": "1 Hrs",
                        "distance": "16km",
                        "place": "Srinagar",
                        "milestones": [

                        ],
                        "boarding_point": "Srinagar hotel",
                        "Guided_tour": true,
                        "add_on": [
                            {
                                "addon_id": "addon001"
                            }
                        ],
                        "capacity": [
                            {
                                "adult": 4
                            },
                            {
                                "children": 3
                            }
                        ],
                        "providers": [
                            {
                                "provider_id": "provider004"
                            }
                        ]
                    }

                ],
                "addons": [],
                "providers": []
            },
        ]

    }
    const addons = [{

    }]
    return (
        <div>
            <>

                <Header />
                <Sidebar />
                <div id="main-content"
                    className={` min-h-screen pt-24 relative overflow-y-auto lg:ml-64`}>

                    {/* Navbar */}
                    <nav className="flex mb-5 ml-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2">
                            <li className="inline-flex items-center">
                                <div className={` text-base font-medium  inline-flex items-center`}>
                                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    <Link href={currentLogged?.id.match(/admin.[0-9]*/) ? "../admin/AdminLanding" : "./landing"}
                                        className={`text-base font-medium  inline-flex items-center`}><a>{language?.home}</a>
                                    </Link></div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className={` text-base font-medium capitalize  inline-flex items-center`}>
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        {/* <div className={visible === 0 ? 'block w-16' : 'hidden'}><Headloader /></div> */}
                                        {/* <div className={visible === 1 ? 'block' : 'hidden'}> */}
                                        <Link href="./propertysummary" className="text-gray-700 text-sm   font-medium hover:{`${color?.text} ml-1 md:ml-2">
                                            <a>{currentProperty?.property_name}</a>
                                        </Link>
                                    </div></div>

                                {/* </div> */}
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <div className={` text-base font-medium  inline-flex items-center`}>
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <span className="text-gray-400 ml-1 md:ml-2 font-medium text-sm  " aria-current="page">{language?.rooms}</span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    {/*nav end */}

                    {/*content start*/}
                    <div className='mx-4'>

                        <div className='flex'>
                            <span className='text-3xl'>{itenary.tour_name}</span>
                            <h2 className='indent-4 pt-3'>{itenary.duration_days} Days and {itenary.duration_nights} Nights - {itenary.tour_type} tour</h2>
                        </div>
                        <p className='text-lg'>Tour Description: {itenary.tour_summary} </p>

                        {/*Day wise activity */}
                        <div >
                            <div className='mt-4 mx-4 p-2 '>
                                <span className='text-3xl'>Itenary <br /></span>
                                {itenary.plan.map((item, i) => (
                                    <div key={i} >
                                        <table className='my-16 border-collapse border border-black bg-zinc-300 w-full'>
                                            <tbody className=''>

                                                <tr className='border border-black'>
                                                    <th className='border border-black'>Day:</th>
                                                    <td className='border border-black'>{item.day}</td>
                                                </tr>
                                                {item.activities.map((act, i) => {
                                                    return (
                                                        <>
                                                            {/* {JSON.stringify(act)} */}
                                                            <tr className='mt-8 pt-4 border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Activity name :</th>
                                                                <td className='border border-black'>{act?.activity_name}</td>
                                                            </tr>
                                                            <tr className='mt-8 pt-4 border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Time of ride :</th>
                                                                <td className='border border-black'>{act?.time_of_ride}</td>
                                                            </tr>
                                                            <tr className='mt-8 pt-4 border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Distance :</th>
                                                                <td className='border border-black'>{act?.distance}</td>
                                                            </tr>
                                                            <tr className='mt-8 pt-4 border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Place:</th>
                                                                <td className='border border-black'>{act?.place}</td>
                                                            </tr>
                                                            <tr className='mt-8 pt-4 border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Mile stones :</th>
                                                                <td className='border border-black'>
                                                                    {act.milestones.map((ms, id) => {
                                                                        return (<><tr className='border border-black' key={id}>
                                                                            <th className='border border-black' width='auto'>Place:</th>
                                                                            <td className='border border-black'> {Object.keys(ms)[0]}</td>
                                                                        </tr>
                                                                            <tr className='border border-black' key={id}>
                                                                                <th className='border border-black' width='auto'>Description:</th>
                                                                                <td className='border border-black'>{ms.description}</td>
                                                                            </tr></>)
                                                                    })}
                                                                </td>
                                                            </tr>
                                                            <tr className='border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Boarding point:</th>
                                                                <td className='border border-black'>{act?.boarding_point}</td>
                                                            </tr>
                                                            <tr className='border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Guided Tour:</th>
                                                                <td className='border border-black'>{act?.Guided_tour ? 'Yes' : 'No'}</td>
                                                            </tr>
                                                            <tr className='border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Capacity:</th>
                                                                <td className='border border-black'>
                                                                    <tr className='border border-black' key={i}>
                                                                        <th className='border border-black' width='auto'>Adult :</th>
                                                                        <td className='border border-black'>{act?.capacity.[0].adult}</td>
                                                                    </tr>
                                                                    <tr className='border border-black' key={i}>
                                                                        <th className='border border-black' width='auto'>Children :</th>
                                                                        <td className='border border-black'>{act?.capacity.[1].children}</td>
                                                                    </tr>
                                                                </td>
                                                            </tr>

                                                            <tr className='border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Addons:</th>
                                                                <td className='border border-black'>
                                                                    {act?.add_on.map((Add, idx) => {
                                                                        return (
                                                                            <tr className='border border-black' key={idx}>
                                                                                <th className='border border-black' width='auto'>Addon_id:</th>
                                                                                <td className='border border-black'>{Add.addon_id}</td>
                                                                            </tr>)
                                                                    })}

                                                                </td>
                                                            </tr>

                                                            <tr className='border border-black' key={i}>
                                                                <th className='border border-black' width='auto'>Provider:</th>
                                                                <td className='border border-black'>
                                                                    <tr className='border border-black' key={i}>
                                                                        {act?.providers.map((pro, idx) => {
                                                                            return (<tr className='border border-black' key={idx}><th className='border border-black' width='auto'>Provider_id:</th>
                                                                                <td className='border border-black'>{pro.provider_id}</td>
                                                                            </tr>)
                                                                        })}
                                                                    </tr>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                ))
                                }

                            </div>


                            {/*Pricing box */}
                            <div className='mt-4 mx-4 border-2 border-black p-2 h-80'>
                                <p className='text-2xl'>Participants and Pricing</p>
                                <p className='text-xl'>Min Participants: {itenary.min_participants} , Max Participants {itenary.max_participants}</p>
                                <span className='text-xl'>Pricing</span>
                                <ul className='text-lg'>
                                    <li>Currency : {itenary.currency}</li>
                                    <li>Charges Type : {itenary.price_type}</li>
                                    <li>Base Price : {itenary.price_amount}</li>
                                    <li>Tax Included : {itenary.tax_included}</li>
                                    <li>Tax Type : {itenary.tax_type}</li>
                                    <li>Tax Amount : {itenary.tax_amount}</li>
                                    <li>Other Charges : {itenary.other_charges}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* Toast Container */}
                    <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />

                </div>

            </>
        </div>
    )
}

export default itenary