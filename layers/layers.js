var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buildings_1 = new ol.format.GeoJSON();
var features_buildings_1 = format_buildings_1.readFeatures(json_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_1.addFeatures(features_buildings_1);
var lyr_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_1, 
                style: style_buildings_1,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_1.png" /> buildings'
            });
var format_Ygd_2 = new ol.format.GeoJSON();
var features_Ygd_2 = format_Ygd_2.readFeatures(json_Ygd_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ygd_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ygd_2.addFeatures(features_Ygd_2);
var lyr_Ygd_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ygd_2, 
                style: style_Ygd_2,
                popuplayertitle: 'Ygd',
                interactive: true,
                title: '<img src="styles/legend/Ygd_2.png" /> Ygd'
            });
var format_Railway_3 = new ol.format.GeoJSON();
var features_Railway_3 = format_Railway_3.readFeatures(json_Railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_3.addFeatures(features_Railway_3);
var lyr_Railway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_3, 
                style: style_Railway_3,
                popuplayertitle: 'Railway',
                interactive: true,
                title: '<img src="styles/legend/Railway_3.png" /> Railway'
            });
var format_Landuse_4 = new ol.format.GeoJSON();
var features_Landuse_4 = format_Landuse_4.readFeatures(json_Landuse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_4.addFeatures(features_Landuse_4);
var lyr_Landuse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_4, 
                style: style_Landuse_4,
                popuplayertitle: 'Landuse',
                interactive: true,
                title: '<img src="styles/legend/Landuse_4.png" /> Landuse'
            });
var format_Watebodies_5 = new ol.format.GeoJSON();
var features_Watebodies_5 = format_Watebodies_5.readFeatures(json_Watebodies_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watebodies_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watebodies_5.addFeatures(features_Watebodies_5);
var lyr_Watebodies_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watebodies_5, 
                style: style_Watebodies_5,
                popuplayertitle: 'Watebodies',
                interactive: true,
                title: '<img src="styles/legend/Watebodies_5.png" /> Watebodies'
            });
var format_Waterbodies_1_6 = new ol.format.GeoJSON();
var features_Waterbodies_1_6 = format_Waterbodies_1_6.readFeatures(json_Waterbodies_1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_1_6.addFeatures(features_Waterbodies_1_6);
var lyr_Waterbodies_1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_1_6, 
                style: style_Waterbodies_1_6,
                popuplayertitle: 'Waterbodies_1',
                interactive: true,
                title: '<img src="styles/legend/Waterbodies_1_6.png" /> Waterbodies_1'
            });
var format_Roads_7 = new ol.format.GeoJSON();
var features_Roads_7 = format_Roads_7.readFeatures(json_Roads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_7.addFeatures(features_Roads_7);
var lyr_Roads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_7, 
                style: style_Roads_7,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_7.png" /> Roads'
            });

lyr_OSMStandard_0.setVisible(true);lyr_buildings_1.setVisible(true);lyr_Ygd_2.setVisible(true);lyr_Railway_3.setVisible(true);lyr_Landuse_4.setVisible(true);lyr_Watebodies_5.setVisible(true);lyr_Waterbodies_1_6.setVisible(true);lyr_Roads_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_buildings_1,lyr_Ygd_2,lyr_Railway_3,lyr_Landuse_4,lyr_Watebodies_5,lyr_Waterbodies_1_6,lyr_Roads_7];
lyr_buildings_1.set('fieldAliases', {'boundary_i': 'boundary_i', 'bf_source': 'bf_source', 'confidence': 'confidence', 'area_in_me': 'area_in_me', 's2_id': 's2_id', 'country_is': 'country_is', 'geohash': 'geohash', 'country': 'country', });
lyr_Ygd_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATE_UT': 'STATE_UT', 'STATE_LGD': 'STATE_LGD', 'DISTRICT': 'DISTRICT', 'DIST_LGD': 'DIST_LGD', 'REMARKS': 'REMARKS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Railway_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_Landuse_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Watebodies_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', 'Shape_Leng': 'Shape_Leng', });
lyr_Waterbodies_1_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roads_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_buildings_1.set('fieldImages', {'boundary_i': '', 'bf_source': '', 'confidence': '', 'area_in_me': '', 's2_id': '', 'country_is': '', 'geohash': '', 'country': '', });
lyr_Ygd_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'STATE_UT': 'TextEdit', 'STATE_LGD': 'TextEdit', 'DISTRICT': 'TextEdit', 'DIST_LGD': 'TextEdit', 'REMARKS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Railway_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Landuse_4.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Watebodies_5.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', 'Shape_Leng': '', });
lyr_Waterbodies_1_6.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Roads_7.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_buildings_1.set('fieldLabels', {'boundary_i': 'no label', 'bf_source': 'no label', 'confidence': 'no label', 'area_in_me': 'no label', 's2_id': 'no label', 'country_is': 'no label', 'geohash': 'no label', 'country': 'no label', });
lyr_Ygd_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATE_UT': 'no label', 'STATE_LGD': 'no label', 'DISTRICT': 'no label', 'DIST_LGD': 'no label', 'REMARKS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Railway_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_Landuse_4.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Watebodies_5.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', });
lyr_Waterbodies_1_6.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roads_7.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_Roads_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});