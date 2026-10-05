var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Yadgir_Boundary_2 = new ol.format.GeoJSON();
var features_Yadgir_Boundary_2 = format_Yadgir_Boundary_2.readFeatures(json_Yadgir_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yadgir_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yadgir_Boundary_2.addFeatures(features_Yadgir_Boundary_2);
var lyr_Yadgir_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yadgir_Boundary_2, 
                style: style_Yadgir_Boundary_2,
                popuplayertitle: 'Yadgir_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Yadgir_Boundary_2.png" /> Yadgir_Boundary'
            });
var format_buildings_3 = new ol.format.GeoJSON();
var features_buildings_3 = format_buildings_3.readFeatures(json_buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_3.addFeatures(features_buildings_3);
var lyr_buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_3, 
                style: style_buildings_3,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_3.png" /> buildings'
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
var format_Roads_5 = new ol.format.GeoJSON();
var features_Roads_5 = format_Roads_5.readFeatures(json_Roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_5.addFeatures(features_Roads_5);
var lyr_Roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_5, 
                style: style_Roads_5,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_5.png" /> Roads'
            });
var format_Railway_6 = new ol.format.GeoJSON();
var features_Railway_6 = format_Railway_6.readFeatures(json_Railway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_6.addFeatures(features_Railway_6);
var lyr_Railway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_6, 
                style: style_Railway_6,
                popuplayertitle: 'Railway',
                interactive: true,
                title: '<img src="styles/legend/Railway_6.png" /> Railway'
            });
var format_Watebodies_7 = new ol.format.GeoJSON();
var features_Watebodies_7 = format_Watebodies_7.readFeatures(json_Watebodies_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watebodies_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watebodies_7.addFeatures(features_Watebodies_7);
var lyr_Watebodies_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watebodies_7, 
                style: style_Watebodies_7,
                popuplayertitle: 'Watebodies',
                interactive: true,
                title: '<img src="styles/legend/Watebodies_7.png" /> Watebodies'
            });
var format_Waterbodies_1_8 = new ol.format.GeoJSON();
var features_Waterbodies_1_8 = format_Waterbodies_1_8.readFeatures(json_Waterbodies_1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_1_8.addFeatures(features_Waterbodies_1_8);
var lyr_Waterbodies_1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_1_8, 
                style: style_Waterbodies_1_8,
                popuplayertitle: 'Waterbodies_1',
                interactive: true,
                title: '<img src="styles/legend/Waterbodies_1_8.png" /> Waterbodies_1'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Yadgir_Boundary_2.setVisible(true);lyr_buildings_3.setVisible(true);lyr_Landuse_4.setVisible(true);lyr_Roads_5.setVisible(true);lyr_Railway_6.setVisible(true);lyr_Watebodies_7.setVisible(true);lyr_Waterbodies_1_8.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_Yadgir_Boundary_2,lyr_buildings_3,lyr_Landuse_4,lyr_Roads_5,lyr_Railway_6,lyr_Watebodies_7,lyr_Waterbodies_1_8];
lyr_Yadgir_Boundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATE_UT': 'STATE_UT', 'STATE_LGD': 'STATE_LGD', 'DISTRICT': 'DISTRICT', 'DIST_LGD': 'DIST_LGD', 'REMARKS': 'REMARKS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_buildings_3.set('fieldAliases', {'boundary_i': 'boundary_i', 'bf_source': 'bf_source', 'confidence': 'confidence', 'area_in_me': 'area_in_me', 's2_id': 's2_id', 'country_is': 'country_is', 'geohash': 'geohash', 'country': 'country', });
lyr_Landuse_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roads_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_Railway_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_Watebodies_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', 'Shape_Leng': 'Shape_Leng', });
lyr_Waterbodies_1_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Yadgir_Boundary_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'STATE_UT': 'TextEdit', 'STATE_LGD': 'TextEdit', 'DISTRICT': 'TextEdit', 'DIST_LGD': 'TextEdit', 'REMARKS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_buildings_3.set('fieldImages', {'boundary_i': 'TextEdit', 'bf_source': 'TextEdit', 'confidence': 'TextEdit', 'area_in_me': 'TextEdit', 's2_id': 'TextEdit', 'country_is': 'TextEdit', 'geohash': 'TextEdit', 'country': 'TextEdit', });
lyr_Landuse_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roads_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Railway_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Watebodies_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Waterbodies_1_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Yadgir_Boundary_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATE_UT': 'no label', 'STATE_LGD': 'no label', 'DISTRICT': 'no label', 'DIST_LGD': 'no label', 'REMARKS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_buildings_3.set('fieldLabels', {'boundary_i': 'no label', 'bf_source': 'no label', 'confidence': 'no label', 'area_in_me': 'no label', 's2_id': 'no label', 'country_is': 'no label', 'geohash': 'no label', 'country': 'no label', });
lyr_Landuse_4.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roads_5.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_Railway_6.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_Watebodies_7.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', });
lyr_Waterbodies_1_8.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Waterbodies_1_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});