function getDatasets() {
    var datasets = {
        "1": {
        "id": "1",
        "type": "time-series",
        "name": "smartcitizen",
        "description": "SmartCitizen Noise Levels",
        "provider": "smartcitizen",
        "start": "2017-01-01T00:00:00Z",
        "end": null,
        "language": "English",
        "labels": "Noise [dbA]",
        "targetvalue": "value",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#004304', '#116416', '#51A759', '#86C98A', '#FFF592', '#FFE256', '#FFDB2B', '#FF6A0E', '#F55E00', '#FF1300', '#801515'],
        "cuts": [-1, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84],
        "parameters": "",
        "filter_field": "",
        "details": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "2": {
        "id": "2",
        "type": "record",
        "name": "asia",
        "description": "ASIA Events",
        "provider": "asia",
        "start": "2017-11-01T00:00:00Z",
        "end": "2018-02-01T00:00:00Z",
        "language": "Spanish",
        "labels": null,
        "targetvalue": 1,
        "aggregator": "count",
        "radius": 20,
        "colors": ['#01579B'],
        "cuts": [-1],
        "parameters": "name@payload.name,enddate@payload.enddate,startdate@payload.startdate,categories@payload.categories,",
        "details": 'name@payload.name,enddate@payload.enddate,startdate@payload.startdate,categories@payload.categories,',
        "filter_field": "payload.name",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": ["eventtype"]
        },
        "3": {
        "id": "3",
        "type": "record",
        "name": "iris",
        "description": "IRIS Claims",
        "provider": "iris",
        "start": "2014-01-01T00:00:00Z",
        "end": "2018-01-01T00:00:00Z",
        "language": "Catalan",
        "labels": null,
        "aggregator": "count",
        "targetvalue": 1,
        "radius": 10,
        "colors": ['#E91E63'],
        "cuts": [-1],
        "parameters": "element@payload.element,detail@payload.detail,area@payload.area,support@payload.support,channel@payload.channel,type@type,enddate@payload.enddate,startdate@payload.startdate,",
        "details": 'element@payload.element,detail@payload.detail,area@payload.area,support@payload.support,channel@payload.channel,type@type,enddate@payload.enddate,startdate@payload.startdate,',
        "filter_field": "payload.element",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "4": {
        "id": "4",
        "type": "time-series",
        "name": "bicing",
        "description": "ODI Bicing Stations",
        "provider": "odi",
        "start": "2017-11-01T00:00:00Z",
        "end": null,
        "language": "English",
        "labels": "Available bikes [unit]",
        "targetvalue": "bikes",
        "aggregator": "sum",
        "radius": 13,
        "colors": ['#004304', '#116416', '#51A759', '#86C98A', '#FFF592', '#FFE256', '#FFDB2B', '#FF6A0E', '#F55E00', '#801515', '#FF1300'],
        "cuts": [-1, 3, 6, 9, 12, 15, 18, 21, 24, 27],
        "parameters": "",
        "filter_field": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "5": {
        "id": "5",
        "type": "record",
        "name": "insideairbnb",
        "description": "Airbnb Listings",
        "provider": "insideairbnb",
        "start": "2017-04-08T00:00:00Z",
        "end": "2017-04-08T00:00:00Z",
        "language": "English",
        "labels": null,
        "targetvalue": 1,
        "aggregator": "count",
        "radius": 3,
        "colors": ['#004304'],
        "cuts": [-1],
        "parameters": "",
        "filter_field": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "6": {
        "id": "6",
        "type": "record",
        "name": "cityos-ptt_carril_bici",
        "description": "CityOS Bike Lanes",
        "provider": "cityos-ptt_carril_bici",
        "start": "2018-04-01T00:00:00Z",
        "end": "2018-05-01T00:00:00Z",
        "language": "Catalan",
        "labels": null,
        "targetvalue": 1,
        "aggregator": "count",
        "radius": 20,
        "colors": ['#003366'],
        "cuts": [-1],
        "parameters": "line@payload.line,",
        "filter_field": "",
        "allowed_visual_models": ["points-map", "map-lines"],
        "allowed_bar_chart_dimensions": []
        },
        "7": {
        "id": "7",
        "type": "record",
        "name": "cityos-potencial_fotovoltaic",
        "description": "CityOS Photovoltaic Potencial",
        "provider": "cityos-potencial_fotovoltaic",
        "start": "2018-06-13T00:00:00Z",
        "end": "2018-06-14T00:00:00Z",
        "language": "English",
        "labels": "Potential [unit]",
        "targetvalue": "powth",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#004304', '#86C98A', '#FFF592', '#FFDB2B', '#F55E00', '#FF1300', '#801515'],
        "cuts": [-1, 500, 550, 600, 650, 700, 750],
        "parameters": "polygon@payload.polygon,",
        "filter_field": "",
        "allowed_visual_models": ["points-map", "map-polygons"],
        "allowed_bar_chart_dimensions": []
        },
        "8": {
        "id": "8",
        "type": "time-series",
        "name": "ohb",
        "description": "Touristic House Offer",
        "provider": "ohb",
        "start": "2017-01-01T00:00:00Z",
        "end": "2017-03-01T00:00:00Z",
        "language": "English",
        "labels": "# per 1000 inhabitants",
        "targetvalue": "value",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#b0c4de','#99b3d4','#85a1ca','#738ec0','#647bb6','#5569ad','#4856a4','#3b439b','#2d3092','#1d1b89','#000080'],
        "cuts": [-1, 1.5, 3.0, 4.5, 6.0, 7.5, 9.0, 10.5, 12.0, 13.5, 15.0],
        "parameters": "",
        "filter_field": "",
        "details": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "9": {
        "id": "9",
        "type": "time-series",
        "name": "ohb2",
        "description": "Monthly Rent Price",
        "provider": "ohb2",
        "start": "2005-01-01T00:00:00Z",
        "end": "2016-01-01T00:00:00Z",
        "language": "English",
        "labels": "€ m2/month",
        "targetvalue": "value",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#ffffe0','#ffe6b2','#ffcb91','#ffae79','#fe906a','#f47461','#e75758','#d53c4c','#c0223b','#a70b24','#8b0000'],
        "cuts": [-1, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5],
        "parameters": "",
        "filter_field": "",
        "details": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "10": {
        "id": "10",
        "type": "time-series",
        "name": "ohb3",
        "description": "Hotels",
        "provider": "ohb3",
        "start": "2017-01-01T00:00:00Z",
        "end": "2017-03-01T00:00:00Z",
        "language": "English",
        "labels": "# per 1000 inhabitants",
        "targetvalue": "value",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#faebd7','#f3dbbf','#eccca7','#e4bc90','#ddac7c','#d59d68','#cc8d57','#c27d48','#b76f3c','#ac6033','#a0522d'],
        "cuts": [-1, 10.0, 20.0, 30.0, 40.0, 50.0, 75.0, 100.0, 150.0, 200.0, 250.0],
        "parameters": "",
        "filter_field": "",
        "details": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "11": {
        "id": "11",
        "type": "time-series",
        "name": "pam_proposal",
        "description": "Decidim PAM Proposals",
        "provider": "pam_proposal",
        "start": "2018-01-01T00:00:00Z",
        "end": null,
        "language": "English",
        "labels": "Votes",
        "targetvalue": "voteCount",
        "aggregator": "sum",
        "radius": 20,
        "colors": ['#ffffe0','#ffe6b2','#ffcb91','#ffae79','#fe906a','#f47461','#e75758','#d53c4c','#c0223b','#a70b24','#8b0000'],
        "cuts": [-1, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        "parameters": "",
        "filter_field": "",
        "details": "",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
        },
        "12": {
        "id": "12",
        "type": "time-series",
        "name": "pam_meeting",
        "description": "Decidim PAM Meetings",
        "provider": "pam_meeting",
        "start": "2018-01-01T00:00:00Z",
        "end": null,
        "language": "English",
        "labels": "Attendees",
        "targetvalue": "attendeeCount",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#004304', '#116416', '#51A759', '#86C98A', '#FFF592', '#FFE256', '#FFDB2B', '#FF6A0E', '#F55E00', '#FF1300', '#801515'],
        "cuts": [-1, 5.0, 10.0, 15.0, 20.0, 25.0, 30.0, 35.0, 40.0, 45.0, 50.0],
        "filter_field": "",
        "parameters": "title@payload.title,title@payload.title,startTime@payload.startTime,endTime@payload.endTime,address@payload.address,attachments@payload.attachments,attendeeCount@payload.attendeeCount,",
        "details": "title@payload.title,title@payload.title,startTime@payload.startTime,endTime@payload.endTime,address@payload.address,attachments@payload.attachments,attendeeCount@payload.attendeeCount,",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": ["attendeeCount"]
         },
        "13": {
        "id": "13",
        "type": "time-series",
        "name": "dddc_meeting",
        "description": "DDCC Meetings",
        "provider": "dddc_meeting",
        "start": "2018-01-01T00:00:00Z",
        "end": null,
        "language": "English",
        "labels": "Attendees",
        "targetvalue": "attendeeCount",
        "aggregator": "avg",
        "radius": 20,
        "colors": ['#004304', '#51A759', '#FFF592', '#FFDB2B', '#F55E00', '#801515'],
        "cuts": [-1, 5.0, 10.0, 15.0, 20.0, 25.0],
        "filter_field": "",
        "parameters": "title@payload.title,title@payload.title,startTime@payload.startTime,endTime@payload.endTime,address@payload.address,attachments@payload.attachments,attendeeCount@payload.attendeeCount,",
        "details": "title@payload.title,title@payload.title,startTime@payload.startTime,endTime@payload.endTime,address@payload.address,attachments@payload.attachments,attendeeCount@payload.attendeeCount,",
        "allowed_visual_models": ["points-map", "heat-map"],
        "allowed_bar_chart_dimensions": []
         },
        "14": {
        "id": "14",
        "type": "time-series",
        "name": "dddc_survey",
        "description": "DDCC Surveys",
        "provider": "dddc_survey",
        "start": "2019-01-01T00:00:00Z",
        "end": null,
        "language": "English",
        "labels": "",
        "targetvalue": "",
        "aggregator": "",
        "radius": 20,
        "colors": ['#004304', '#51A759', '#FFF592', '#FFDB2B', '#F55E00', '#801515'],
        "cuts": [-1, 5.0, 10.0, 15.0, 20.0, 25.0],
        "filter_field": "",
        "parameters": "",
        "details": "",
        "allowed_visual_models": [],
        "allowed_bar_chart_dimensions": ["gender", "age", "country", "continent", "education", "workSituation", "organization", "city", "district", "device", "scale", "interest"]
         }
    };


    return jQuery.extend(true, {}, datasets);
}