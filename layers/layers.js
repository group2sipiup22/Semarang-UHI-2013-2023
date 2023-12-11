var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_UHI2023_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "UHI 2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/UHI2023_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12275190.000032, -794103.685020, 12301380.000042, -773488.993938]
                            })
                        });
var lyr_UHI2018_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "UHI 2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/UHI2018_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12275190.000032, -794103.685020, 12301380.000042, -773488.993938]
                            })
                        });
var lyr_UHI2013_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "UHI 2013",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/UHI2013_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12275190.000032, -794103.685020, 12301380.000042, -773488.993938]
                            })
                        });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_UHI2023_1.setVisible(true);lyr_UHI2018_2.setVisible(true);lyr_UHI2013_3.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_UHI2023_1,lyr_UHI2018_2,lyr_UHI2013_3];
