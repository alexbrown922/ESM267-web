var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MajorRoadways_1 = new ol.format.GeoJSON();
var features_MajorRoadways_1 = format_MajorRoadways_1.readFeatures(json_MajorRoadways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoadways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoadways_1.addFeatures(features_MajorRoadways_1);
var lyr_MajorRoadways_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MajorRoadways_1, 
                style: style_MajorRoadways_1,
                interactive: true,
                title: '<img src="styles/legend/MajorRoadways_1.png" /> Major Roadways'
            });
var format_Landfills_2 = new ol.format.GeoJSON();
var features_Landfills_2 = format_Landfills_2.readFeatures(json_Landfills_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landfills_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landfills_2.addFeatures(features_Landfills_2);
var lyr_Landfills_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landfills_2, 
                style: style_Landfills_2,
                interactive: true,
                title: '<img src="styles/legend/Landfills_2.png" /> Landfills'
            });
var format_FloodPlain_3 = new ol.format.GeoJSON();
var features_FloodPlain_3 = format_FloodPlain_3.readFeatures(json_FloodPlain_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloodPlain_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodPlain_3.addFeatures(features_FloodPlain_3);
var lyr_FloodPlain_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloodPlain_3, 
                style: style_FloodPlain_3,
                interactive: true,
                title: '<img src="styles/legend/FloodPlain_3.png" /> Flood Plain'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MajorRoadways_1.setVisible(true);lyr_Landfills_2.setVisible(true);lyr_FloodPlain_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MajorRoadways_1,lyr_Landfills_2,lyr_FloodPlain_3];
lyr_MajorRoadways_1.set('fieldAliases', {'corridor_t': 'corridor_t', 'gis_id': 'gis_id', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'street_nam': 'street_nam', });
lyr_Landfills_2.set('fieldAliases', {'acreage_de': 'acreage_de', 'active_yea': 'active_yea', 'buffer_dis': 'buffer_dis', 'comments': 'comments', 'created_by': 'created_by', 'created_da': 'created_da', 'internal_c': 'internal_c', 'label': 'label', 'landfills_': 'landfills_', 'latitude_d': 'latitude_d', 'latitude_d_1': 'latitude_d_1', 'location': 'location', 'longitude_': 'longitude_', 'longitude__1': 'longitude__1', 'modified_b': 'modified_b', 'modified_d': 'modified_d', 'name_of_la': 'name_of_la', 'objectid': 'objectid', 'operating_': 'operating_', 'owner_name': 'owner_name', 'permitted': 'permitted', 'secondary_': 'secondary_', 'secondary__1': 'secondary__1', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'source_dat': 'source_dat', 'type_of_la': 'type_of_la', });
lyr_FloodPlain_3.set('fieldAliases', {'county': 'county', 'created_by': 'created_by', 'date_creat': 'date_creat', 'time_creat': 'time_creat', 'drainage_i': 'drainage_i', 'flood_zone': 'flood_zone', 'floodway': 'floodway', 'date_fme_d': 'date_fme_d', 'time_fme_d': 'time_fme_d', 'modified_b': 'modified_b', 'date_modif': 'date_modif', 'time_modif': 'time_modif', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'source_cit': 'source_cit', });
lyr_MajorRoadways_1.set('fieldImages', {'corridor_t': 'TextEdit', 'gis_id': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'street_nam': 'TextEdit', });
lyr_Landfills_2.set('fieldImages', {'acreage_de': 'TextEdit', 'active_yea': 'TextEdit', 'buffer_dis': 'TextEdit', 'comments': 'TextEdit', 'created_by': 'TextEdit', 'created_da': 'TextEdit', 'internal_c': 'TextEdit', 'label': 'TextEdit', 'landfills_': 'TextEdit', 'latitude_d': 'TextEdit', 'latitude_d_1': 'TextEdit', 'location': 'TextEdit', 'longitude_': 'TextEdit', 'longitude__1': 'TextEdit', 'modified_b': 'TextEdit', 'modified_d': 'TextEdit', 'name_of_la': 'TextEdit', 'objectid': 'TextEdit', 'operating_': 'TextEdit', 'owner_name': 'TextEdit', 'permitted': 'TextEdit', 'secondary_': 'TextEdit', 'secondary__1': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'source_dat': 'TextEdit', 'type_of_la': 'TextEdit', });
lyr_FloodPlain_3.set('fieldImages', {'county': 'TextEdit', 'created_by': 'TextEdit', 'date_creat': 'DateTime', 'time_creat': 'TextEdit', 'drainage_i': 'TextEdit', 'flood_zone': 'TextEdit', 'floodway': 'TextEdit', 'date_fme_d': 'DateTime', 'time_fme_d': 'TextEdit', 'modified_b': 'TextEdit', 'date_modif': 'DateTime', 'time_modif': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'source_cit': 'TextEdit', });
lyr_MajorRoadways_1.set('fieldLabels', {'corridor_t': 'no label', 'gis_id': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'street_nam': 'no label', });
lyr_Landfills_2.set('fieldLabels', {'acreage_de': 'no label', 'active_yea': 'no label', 'buffer_dis': 'no label', 'comments': 'no label', 'created_by': 'no label', 'created_da': 'no label', 'internal_c': 'no label', 'label': 'no label', 'landfills_': 'no label', 'latitude_d': 'no label', 'latitude_d_1': 'no label', 'location': 'no label', 'longitude_': 'no label', 'longitude__1': 'no label', 'modified_b': 'no label', 'modified_d': 'no label', 'name_of_la': 'no label', 'objectid': 'no label', 'operating_': 'no label', 'owner_name': 'no label', 'permitted': 'no label', 'secondary_': 'no label', 'secondary__1': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'source_dat': 'no label', 'type_of_la': 'no label', });
lyr_FloodPlain_3.set('fieldLabels', {'county': 'no label', 'created_by': 'no label', 'date_creat': 'no label', 'time_creat': 'no label', 'drainage_i': 'no label', 'flood_zone': 'no label', 'floodway': 'no label', 'date_fme_d': 'no label', 'time_fme_d': 'no label', 'modified_b': 'no label', 'date_modif': 'no label', 'time_modif': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'source_cit': 'no label', });
lyr_FloodPlain_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});